const priceDisplaySpan = document.getElementById("price-display");
const investmentAmountInput = document.getElementById("investment-amount");
const investNowBtn = document.getElementById("invest-btn");
const connectionStatusPara = document.getElementById("connection-status");
const dialog = document.getElementById("dialog");
let investmentSummaryPara = document.getElementById("investment-summary");

let price = 0;

function displayRandomPrice(price) {
  priceDisplaySpan.textContent = price;
}

async function fetchPrices() {
  try {
    const response = await fetch("/api");
    price = await response.json();
    displayRandomPrice(price);
  } catch (err) {
    priceDisplaySpan.textContent = "----.--";
    connectionStatusPara.textContent = "Disconnected 🔴";
  }
}

investNowBtn.addEventListener("click", async (e) => {
  e.preventDefault();
  const inputValue = investmentAmountInput.value;

  const payload = {
    amountPaid: inputValue,
    pricePerOz: price,
  };

  try {
    const response = await fetch("/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    const data = await response.json();
    console.log(data);
  } catch (err) {}

  // displayDialog(inputValue);
});

function setIntervalAndExecute(fn, time) {
  fn();
  return setInterval(fn, time);
}

function displayDialog(value) {
  dialog.style.display = "block";
  investmentSummaryPara.textContent = `You just bought 1.3 ounces (ozt) for £${value}. \n You will receive documentation shortly.`;
}

setIntervalAndExecute(fetchPrices, 3000);
