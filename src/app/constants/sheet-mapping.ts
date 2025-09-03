export const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbw9iag_io8GayrVpodBGOBAeVc45c3G3unM-vomGzWfF1mTzcrPk5v9BJNW12dzRumh1A/exec";

export const SHEET_MAPPING: Record<string, string> = {
  sportec: "SPORTEC",
  sportecthailand: "SPORTEC THAILAND",
  caferesjapan: "CAFERES JAPAN",
  wellnesstokyo: "Wellness Tokyo",
  leisurejapan: "Leisure & Outdoor Japan",
  japanfoods: "Japan food week",
  foodexpo2026: "Food Expo 2026",

  // Contact Form
  contact: "Contacts",
};

// Valid action IDs for validation
export const VALID_ACTION_IDS = Object.keys(SHEET_MAPPING).filter(
  (id) => id !== "contact"
);

// Helper function to validate actionId
export function isValidActionId(actionId: string): boolean {
  return VALID_ACTION_IDS.includes(actionId);
}

// Helper function to get sheet name
export function getSheetName(actionId: string): string {
  return SHEET_MAPPING[actionId] || SHEET_MAPPING["sportec"];
}
