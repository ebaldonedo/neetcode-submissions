class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if(s.length!=t.length) return false
        const sHash=new Map<string,number>
       

        for(let i =0;i<s.length;i++){
            const letter=s[i]
            const quantity= sHash.get(letter)||0
            sHash.set(letter,quantity+1)
        }

        for(let i =0;i<t.length;i++){
            const letter = t[i]
            const quantity= sHash.get(letter)||0
            if(quantity===0) return false
            sHash.set(letter,quantity-1)
          
            if((  (quantity-1))<0){
                return false
            }


        }

        

        return true
    }
}
