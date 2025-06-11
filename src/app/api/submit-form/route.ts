// app/api/submit-form/route.ts

import { google } from "googleapis";
import { NextRequest, NextResponse } from "next/server";

const SHEET_MAPPING: Record<string, string> = {
  sportec: "SPORTEC",
  caferefjapan: "CAFERES JAPAN",
  wellnesstokyo: "Wellness Tokyo",
  leisurejapan: "Leisure & Outdoor Japan",
  japanfoods: "Japan food week",
};

export async function POST(request: NextRequest) {
  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    const body = await request.json();
    const {
      actionId,
      companyName,
      department,
      position,
      fullname,
      country,
      phone,
      email,
      url,
      companyProduct,
      inqueryContents,
      address,
    } = body;

    // Get sheet name from actionId mapping
    const sheetName = SHEET_MAPPING[actionId];
    const range = `${sheetName}!A:K`;

    //@ts-ignore
    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: range,
      valueInputOption: "USER_ENTERED",
      resource: {
        values: [
          [
            companyName || "",
            department || "",
            position || "",
            fullname || "",
            country || "",
            phone || "",
            email || "",
            url || "",
            companyProduct || "",
            inqueryContents || "",
            address || "",
          ],
        ],
      },
    });

    return NextResponse.json({
      success: true,
      message: "ส่งข้อมูลสำเร็จ",
      sheetName: sheetName,
      actionId: actionId,
    });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "เกิดข้อผิดพลาดในการส่งข้อมูล",
      },
      { status: 500 }
    );
  }
}
