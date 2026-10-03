//£3,000–£3,250

const priceDisplaySpan = document.getElementById("price-display");
const investNowBtn = document.getElementById("invest-btn");

function getRandomPrice(min, max) {
  return Math.random() * (max - min) + min;
}

// console.log();

setInterval(() => {
  priceDisplaySpan.textContent = getRandomPrice(3000, 3250).toFixed(2);
}, 5000);

investNowBtn.addEventListener("click", () => {
  console.log("clicked");
});

// 1. Clear the interval when the app is stopped
// 2. Currently on the start it waits 5s and therefore no rate, need to fix that
// 3. Generate the price in backend, and frontend request it
// so there is continuous communication with front - back
