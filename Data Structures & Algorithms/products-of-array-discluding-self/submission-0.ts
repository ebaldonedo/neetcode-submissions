class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
    let sol:number[]=[]
    for(let i =0;i<nums.length;i++){
        let product:number=1
        for(let n=0;n<nums.length;n++){
            if(i!=n){
                product=product*nums[n]
            }
        }
        sol.push(product)

    }
return sol
}
}
