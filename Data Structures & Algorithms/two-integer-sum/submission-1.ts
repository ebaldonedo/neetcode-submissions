class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const dict = new Map<number,number>

        for(let i =0;i<nums.length;i++){
            const num = nums[i]
            const ideal=target-num
            if(dict.has(ideal)){
                const idealIndex=dict.get(ideal)
                return[idealIndex,i]

            }
            dict.set(num,i)

        }
       

        
        return []
    }
}
