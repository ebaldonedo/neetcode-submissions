class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const dict = new Map<number,number>

        for(let i =0;i<nums.length;i++){
            const ideal=target-nums[i]
            if(dict.has(ideal)){
                return[dict.get(ideal),i]
            }
            dict.set(nums[i],i)
        }
        
        return []
    }
}
