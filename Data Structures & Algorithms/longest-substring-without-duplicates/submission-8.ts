class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        if(s.length === 0)return 0
        let set=new Set<string>()
        let max = 0
        let l=0;
        for(let r=0;r<s.length;r++){
            const letter=s[r]
            while(set.has(letter)){
                console.log('duplicate',letter,l,r)
                set.delete(s[l])//remove letter in case read a duplicate initial letter subArray
                l++//move the left border (
            }
            //in case its a new letter
            set.add(letter)
            max=Math.max(max,r-l+1)//1,2,3

        }
        
        return max
    }
}
