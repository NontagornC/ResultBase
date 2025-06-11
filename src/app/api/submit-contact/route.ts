// app/api/submit-contact/route.ts
import { config } from "@/asset/config";
import { google } from "googleapis";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: config.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: config?.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });
    const body = await request.json();
    const { firstName, lastName, email, message } = body;

    if (!email) {
      return NextResponse.json(
        { success: false, message: "Email is required" },
        { status: 400 }
      );
    }

    console.log("Appending to Contacts sheet, Range: Contacts!A:D");

    // @ts-ignore
    await sheets.spreadsheets.values.append({
      spreadsheetId: config.GOOGLE_SHEET_ID,
      range: "Contacts!A:D",
      valueInputOption: "USER_ENTERED",
      resource: {
        values: [[firstName || "", lastName || "", email || "", message || ""]],
      },
    });

    return NextResponse.json({
      success: true,
      message: "ส่งข้อมูลสำเร็จ",
      sheetName: "Contacts",
    });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "เกิดข้อผิดพลาดในการส่งข้อมูル",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
