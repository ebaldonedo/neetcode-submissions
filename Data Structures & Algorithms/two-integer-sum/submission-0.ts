class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const dict = new Map<number,number>
       

        for(let i=0;i<nums.length;i++){
            const idealNumber= target-nums[i]
            if(dict.has(idealNumber)){
                return [dict.get(idealNumber),i]
            }
            dict.set(nums[i],i)

        }
        return []
    }
}
