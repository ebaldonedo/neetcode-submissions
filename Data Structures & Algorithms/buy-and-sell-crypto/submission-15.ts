class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let max=0
        let bestBuy=Infinity
        for(let i =0;i<prices.length;i++){
            const val=prices[i]
            bestBuy=Math.min(bestBuy,val)
            max=Math.max(max,(val-bestBuy))
        }
        return max
    }
}
