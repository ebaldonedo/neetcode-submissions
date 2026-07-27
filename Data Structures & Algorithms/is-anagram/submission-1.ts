class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if(s.length!=t.length) return false
        const dict=new Map<string,number>
    //1.-Counting letters
        for(let i =0;i<s.length;i++){
            if(dict.has(s[i])){
                const q= dict.get(s[i])
                dict.set(s[i],q+1)
                continue
            }
            dict.set(s[i],1)  
        }
    //2.-Evaluating if are anagrams
    for(let i=0;i<t.length;i++){
        const q = dict.get(t[i])
        if(!q||(q-1<0)) return false
        dict.set(t[i],q-1)
         
        

    }   

        

        return true
    }
}
