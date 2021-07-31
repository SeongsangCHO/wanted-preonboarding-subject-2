
const recentOrderFilter = (data) => {
  const sortedData = data.sort((a, b) => b.time - a.time);
  return sortedData;
};
const lowPriceOrderFilter = (data) => {
  const sortedData = data.sort((a, b) => a.price - b.price);
  return sortedData;
};

export { recentOrderFilter, lowPriceOrderFilter };