function getRandomPrice(min, max) {
  return Math.random() * (max - min) + min;
}

export const getGoldPrices = () => {
  const content = getRandomPrice(3000, 3250).toFixed(2);
  return content;
};
