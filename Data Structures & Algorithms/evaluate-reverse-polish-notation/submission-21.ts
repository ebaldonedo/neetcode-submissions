class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
 evalRPN(tokens: string[]): number {
    const stack: number[] = [];
    
 for(let i =0;i<tokens.length;i++){
     
        const char=tokens[i]
        if(char==='+'){
            const s1=stack.pop()
            const s2 =stack.pop()
            stack.push(s1!+s2!)
            continue
        }
        if(char==='-'){
            const s1=stack.pop()
            const s2 =stack.pop()
            stack.push(s2-s1)
            continue
        }
        if(char==='*'){
            const s1=stack.pop()
            const s2 =stack.pop()
            stack.push(s1*s2)
            continue
        }
        if(char==='/'){
            const s1=stack.pop()
            const s2 =stack.pop()
            stack.push(Math.trunc(s2/s1))
            continue
        }
        
        stack.push(parseInt(char))
    }
    
    return stack[0];
}


}
