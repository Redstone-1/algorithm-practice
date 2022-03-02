/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let min = prices[0]; //最低价格
  let profitsMax = 0; //最大利润
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] <= min) {
      min = prices[i]; 
    } else if (prices[i] - min > profitsMax) {
      profitsMax = prices[i] - min;
    }
  }
  return profitsMax;
};