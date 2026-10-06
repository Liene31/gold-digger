import fs from "node:fs/promises";
import path from "node:path";

export const addTransactionLog = async (parsedData) => {
  parsedData.date = new Date();
  parsedData.goldSold = (parsedData.amountPaid / parsedData.pricePerOz).toFixed(
    2,
  );
  const pathTxt = path.join("data", "data.txt");

  try {
    await fs.appendFile(pathTxt, JSON.stringify(parsedData, null, 2), "utf8");
  } catch (err) {
    console.log(err);
  }
};
