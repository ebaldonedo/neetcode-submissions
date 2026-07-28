class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        if(s.length===0)return 0
        const dict=new Map<string,number>()
        
        let max=1
        for(let i=0;i<s.length;i++){
            const letter=s[i]
            let cont=1
            dict.set(letter,1)
            for(let n=i+1;n<s.length;n++){
               if(dict.has(s[n])){
                console.log(dict)
                cont=1
                dict.clear()
                break
               }else{
                cont++
                dict.set(s[n],1)
               }
                max=Math.max(max,cont)

            }
            
            
        }
        return max
    }
}
