class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
    let prefix = 1;
        let suffix = 1;

        const prefix_result = [];
        const suffix_result = [];
        const result = [];

        for (let i = 0; i < nums.length; i++) {
            prefix_result[i] = prefix;
            prefix *= nums[i];
            
        }

        for (let i = nums.length - 1; i >= 0; i--) {
            suffix_result[i] = suffix;
            suffix *= nums[i];
        }
        
        for (let i = 0; i < nums.length; i++) {
            result[i] = prefix_result[i] * suffix_result[i];
        }
        console.log(prefix_result)
        console.log(suffix_result)

        return result;
}
}
