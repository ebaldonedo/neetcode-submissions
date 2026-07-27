class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const dict= new Map<number,number>
        for(let i=0;i<nums.length;i++){
            if(dict.has(nums[i])){
                return true
            }
            dict.set(nums[i],1)

        }
       
        return false
    }
}
