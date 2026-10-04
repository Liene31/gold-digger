import { getGoldPrices } from "../utils/getGoldPrice.js";
import { sendResponse } from "../utils/sendResponse.js";

export function handleGet(res) {
  const data = getGoldPrices();
  return sendResponse(res, 200, "application/json", JSON.stringify(data));
}
