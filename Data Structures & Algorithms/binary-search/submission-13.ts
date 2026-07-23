class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number {
        let l = 0
        let r=nums.length-1

        while(l<=r){
            const mid= Math.floor((r+l)/2)
            if(target===nums[mid]) return mid
            if(target>nums[mid]){
                l=mid+1
            }else{
                r=mid-1
            }      
        }

        return -1
    }
}
