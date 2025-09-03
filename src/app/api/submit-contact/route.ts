// app/api/submit-contact/route.ts

import { NextRequest, NextResponse } from "next/server";
import { GOOGLE_SCRIPT_URL } from "@/app/constants/sheet-mapping";

// Type definition for contact data
interface ContactData {
  firstName?: string;
  lastName?: string;
  email?: string;
  message?: string;
}

export async function POST(request: NextRequest) {
  try {
    // Parse JSON body
    const body: ContactData = await request.json();
    const { firstName, lastName, email, message } = body;

    console.log("Contact form submission:", {
      firstName,
      lastName,
      email,
      hasMessage: !!message,
    });

    // Validate required fields
    if (!email) {
      return NextResponse.json(
        {
          success: false,
          message: "Email is required",
        },
        { status: 400 }
      );
    }

    // Create form-encoded data for Google Apps Script
    const formData = new URLSearchParams();

    // Add request type (important for routing in Apps Script)
    formData.append("requestType", "contact");

    // Add contact form fields
    formData.append("firstName", firstName || "");
    formData.append("lastName", lastName || "");
    formData.append("email", email);
    formData.append("message", message || "");

    // Add metadata
    formData.append("timestamp", new Date().toISOString());
    formData.append("source", "contact_form");

    console.log("Sending contact to Google Apps Script...");

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
          sheetName: "Contacts",
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
        sheetName: "Contacts",
        timestamp: new Date().toISOString(),
      });
    } else {
      throw new Error(
        result.message || "Failed to submit contact to Google Sheets"
      );
    }
  } catch (error: any) {
    console.error("Error in submit-contact:", error);

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
