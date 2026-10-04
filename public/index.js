const priceDisplaySpan = document.getElementById("price-display");
const investNowBtn = document.getElementById("invest-btn");

function getRandomPrice(min, max) {
  return Math.random() * (max - min) + min;
}

function displayRandomPrice() {
  priceDisplaySpan.textContent = getRandomPrice(3000, 3250).toFixed(2);
}

async function fetchPrices() {
  try {
    const price = await fetch("/api");
    const response = await price.json();
    console.log(response);
  } catch (err) {
    console.log(err);
  }
}

investNowBtn.addEventListener("click", () => {
  console.log("clicked");
});

function setIntervalAndExecute(fn, time) {
  fn();
  return setInterval(fn, time);
}

setIntervalAndExecute(displayRandomPrice, 3000);

fetchPrices();

// 1. Clear the interval when the app is stopped
// 2. Generate the price in backend, and frontend request it
// so there is continuous communication with front - back
