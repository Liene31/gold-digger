import { getGoldPrices } from "../utils/getGoldPrice.js";
import { parseJSONBody } from "../utils/parseJSONBody.js";
import { sendResponse } from "../utils/sendResponse.js";

export function handleGet(res) {
  const data = getGoldPrices();
  return sendResponse(res, 200, "application/json", JSON.stringify(data));
}

export async function handlePost(req, res) {
  const parsedData = await parseJSONBody(req);
  console.log(parsedData);
  return sendResponse(res, 201, "application/json", JSON.stringify(parsedData));
}
