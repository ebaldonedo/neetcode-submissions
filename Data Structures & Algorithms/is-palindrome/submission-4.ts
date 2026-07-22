class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(st: string): boolean {
        
      let s:string=st.toLowerCase().replace(/[^a-zA-Z0-9]/g, '').trim()
      
       // if(s.length===0) return false
        let left=0;
        let right=s.length-1;
        while(left<right){
            if(s[left]!=s[right])return false

            left++
            right--
        }

        return true
    }
}
