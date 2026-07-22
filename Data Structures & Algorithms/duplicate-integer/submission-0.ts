class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const dict= new Map<number,number>
        for(let i=0;i<nums.length;i++){
            const number = nums[i]
            const quantity= dict.get(number)
            dict.set(number,(quantity || 0) + 1)
            if(quantity+1>1){
                return true
            }


        }
        return false
    }
}
