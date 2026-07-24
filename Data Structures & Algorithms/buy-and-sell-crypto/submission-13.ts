class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let profit = 0;
        let minPrice = Infinity;
        for (let i = 0; i< prices.length; i++) {
            minPrice = Math.min(prices[i], minPrice);
            profit = Math.max(prices[i] - minPrice, profit);
        }
        return profit;
    }

}
