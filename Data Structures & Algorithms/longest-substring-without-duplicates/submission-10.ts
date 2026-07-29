class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        let cont=0
        let max=0
        let l =0
        const set=new Set()
        for(let r =0;r<s.length;r++){
            const letter=s[r]

            while(set.has(letter)){
                set.delete(s[l])
                l++
            }

            set.add(letter)
            max=Math.max(max,(r-l)+1)
            


        }
        return max
    }
}
