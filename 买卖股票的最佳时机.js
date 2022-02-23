/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
  if (!prices) return 0
  let total = 0;
  for (let i = 0; i < prices.length - 1; i++) {
    total += Math.max(prices[i + 1] - prices[i], 0)
  }
  return total
};