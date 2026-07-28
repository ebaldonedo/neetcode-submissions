class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let max=0
        let bestBuy=Infinity
        for(let i =0;i<prices.length;i++){
            bestBuy=Math.min(bestBuy,prices[i])
            max=Math.max(max,(prices[i]-bestBuy))
        }
        return max
    }
}
