class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        if(s.length===0) return false
        let stack:string[]=[]
        for(let i =0;i<s.length;i++){
             const letter=s[i]
            const lastLetter=stack[stack.length-1]
            if(letter ===')'&&lastLetter==='(') {
                stack.pop()
                continue
            }
            if(letter ===']'&&lastLetter==='[') {
                stack.pop()
                continue
            }
            if(letter ==='}'&&lastLetter==='{') {
                stack.pop()
                continue
            }
            stack.push(letter)
        }
        console.log(stack,stack.length)

        if(stack.length>0){
            return false

        }
           
            
          

        return true
    }
}
