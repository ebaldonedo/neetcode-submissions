class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
longestConsecutive(nums: number[]): number {
    if(nums.length===0) return 0
   
    let set=new Set(nums)
    let sec=0
    for(let i =0;i<nums.length;i++){
        const num =nums[i]
        //check if start secuence
        let length=0
        if(!set.has(num-1)){
            while(set.has(nums[i]+length)){
                length++
                if(length>sec){
                    sec=length
                }
                
            }
            
        }
        
        

    }
    return sec
}


}
