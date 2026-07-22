class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
      topKFrequent(nums: number[], k: number): number[] {
        const rank = new Map<number,number>
        for(let i=0;i<nums.length;i++){
            const q =rank.get(nums[i])||0
            rank.set(nums[i],q+1)
            
        }
       const sortedByValue = new Map([...rank].sort((a, b) =>  b[1]-a[1]));
       const topK=[...sortedByValue.keys()].slice(0,k)
      
        return topK
    }
}
