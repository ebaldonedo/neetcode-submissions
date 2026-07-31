class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
 evalRPN(tokens: string[]): number {
    const stack: number[] = [];
    
    for (let i = 0; i < tokens.length; i++) {
        const char = tokens[i];
        
        if (char === '+' || char === '-' || char === '*' || char === '/') {
            const s1 = stack.pop()!;
            const s2 = stack.pop()!;
            if (char === '+') stack.push(s2 + s1);
            else if (char === '-') stack.push(s2 - s1);
            else if (char === '*') stack.push(s2 * s1);
            else if (char === '/') stack.push(Math.trunc(s2 / s1)); 
            
        } else {
            stack.push(parseInt(char));
        }
    }
    
    return stack[0];
}


}
