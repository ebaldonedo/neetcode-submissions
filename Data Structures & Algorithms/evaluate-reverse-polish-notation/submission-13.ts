class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens: string[]): number {
          let stack:number[]=[]
    for(let i =0;i<tokens.length;i++){
        const char=tokens[i]
        if(char==='+'||char==='-'||char==='*'||char==='/'){
            const s1=stack.pop()
            const s2 =stack.pop()
            stack.push(Math.trunc(eval([s2,char,s1].join(' '))))
            continue
        }
        stack.push(parseInt(char))

    }
    return stack[0]
    }
}
