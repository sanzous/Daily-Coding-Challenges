// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

/**
 * @param {number[]} prices
 * @return {number}
 */
//P - an array of integers
//R - the maximum difference between two elements where the index of the smaller element is less than the greater element
//E - Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
//P - we first set a check to see if prices is null or the array length is only 1 and return 0
// We then set a minBuy to the first element and the current profit to 0
// We then iterate through the array with a for loop
// On each loop we set min buy to be the minimum of the current array and the curren minbuy
// We then set profit to be the max of the current profit and current prices minus minbuy
// After we iterate through the array we return profit
var maxProfit = function (prices) {
    if (prices == null || prices.length <= 1) return 0;
    let minBuy = prices[0];
    let profit = 0;
    for (let i = 1; i < prices.length; i++) {
        minBuy = Math.min(minBuy, prices[i]);
        profit = Math.max(profit, prices[i] - minBuy);
    }
    return profit;
};