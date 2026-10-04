const priceDisplaySpan = document.getElementById("price-display");
const investNowBtn = document.getElementById("invest-btn");
const connectionStatusPara = document.getElementById("connection-status");

function displayRandomPrice(price) {
  priceDisplaySpan.textContent = price;
}

async function fetchPrices() {
  try {
    const price = await fetch("/api");
    const response = await price.json();
    displayRandomPrice(response);
  } catch (err) {
    priceDisplaySpan.textContent = "----.--";
    connectionStatusPara.textContent = "Disconnected 🔴";
  }
}

investNowBtn.addEventListener("click", () => {
  console.log("clicked");
});

function setIntervalAndExecute(fn, time) {
  fn();
  return setInterval(fn, time);
}

setIntervalAndExecute(fetchPrices, 3000);

// 1. Clear the interval when the app is stopped
