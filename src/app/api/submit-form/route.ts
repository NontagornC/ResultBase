// app/api/submit-form/route.ts

import { NextRequest, NextResponse } from "next/server";
import {
  GOOGLE_SCRIPT_URL,
  isValidActionId,
  getSheetName,
} from "@/app/constants/sheet-mapping";

// Type definition for form data
interface FormData {
  actionId?: string;
  companyName?: string;
  department?: string;
  position?: string;
  fullname?: string;
  country?: string;
  phone?: string;
  email?: string;
  url?: string;
  companyProduct?: string;
  inqueryContents?: string;
  address?: string;
}

export async function POST(request: NextRequest) {
  try {
    // Parse JSON body
    const body: FormData = await request.json();

    // Validate actionId
    const actionId = body.actionId || "sportec";
    if (!isValidActionId(actionId)) {
      console.warn(
        `Invalid actionId received: ${actionId}, defaulting to 'sportec'`
      );
    }

    // Get the corresponding sheet name
    const sheetName = getSheetName(actionId);

    console.log("Processing submission:", {
      actionId,
      sheetName,
      companyName: body.companyName,
      email: body.email,
    });

    // Validate required fields
    const requiredFields = [
      "companyName",
      "fullname",
      "email",
      "phone",
      "inqueryContents",
    ];
    const missingFields = requiredFields.filter(
      (field) => !body[field as keyof FormData]
    );

    if (missingFields.length > 0) {
      console.warn("Missing required fields:", missingFields);
      // Continue anyway as per production behavior
    }

    // Create form-encoded data for Google Apps Script
    const formData = new URLSearchParams();

    // Add request type
    formData.append("requestType", "form");

    // Add all form fields
    formData.append("actionId", actionId);
    formData.append("companyName", body.companyName || "");
    formData.append("department", body.department || "");
    formData.append("position", body.position || "");
    formData.append("fullname", body.fullname || "");
    formData.append("country", body.country || "");
    formData.append("phone", body.phone || "");
    formData.append("email", body.email || "");
    formData.append("url", body.url || "");
    formData.append("companyProduct", body.companyProduct || "");
    formData.append("inqueryContents", body.inqueryContents || "");
    formData.append("address", body.address || "");

    // Add metadata
    formData.append("timestamp", new Date().toISOString());
    formData.append("source", "web_form");

    console.log("Sending to Google Apps Script...");

    // Send to Google Apps Script
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formData.toString(),
      redirect: "follow", // Important for Google Apps Script
    });

    console.log("Response status:", response.status);

    // Parse response
    let result;
    try {
      const responseText = await response.text();
      console.log("Raw response:", responseText.substring(0, 200));
      result = JSON.parse(responseText);
    } catch (parseError) {
      console.error("Failed to parse response:", parseError);

      // If response is OK but can't parse, assume success
      if (response.ok) {
        return NextResponse.json({
          success: true,
          message: "ส่งข้อมูลสำเร็จ",
          actionId,
          sheetName,
        });
      }

      throw new Error("Invalid response from Google Apps Script");
    }

    console.log("Parsed response:", result);

    // Check success
    if (result.success) {
      return NextResponse.json({
        success: true,
        message: "ส่งข้อมูลสำเร็จ",
        actionId,
        sheetName,
        timestamp: new Date().toISOString(),
      });
    } else {
      throw new Error(
        result.message || "Failed to submit data to Google Sheets"
      );
    }
  } catch (error: any) {
    console.error("Error in submit-form API:", error);

    return NextResponse.json(
      {
        success: false,
        message: "เกิดข้อผิดพลาดในการส่งข้อมูล",
        error: error.message || "Unknown error",
        timestamp: new Date().toISOString(),
      },
      { status: 500 }
    );
  }
}
