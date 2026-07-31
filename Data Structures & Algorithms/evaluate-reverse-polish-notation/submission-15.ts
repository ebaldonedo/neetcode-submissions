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
            // Usamos '!' al final para decirle a TypeScript que estamos seguros 
            // de que la pila no estará vacía (asumiendo RPN válido)
            const s1 = stack.pop()!;
            const s2 = stack.pop()!;
            
            if (char === '+') stack.push(s2 + s1);
            else if (char === '-') stack.push(s2 - s1);
            else if (char === '*') stack.push(s2 * s1);
            else if (char === '/') stack.push(Math.trunc(s2 / s1)); // Solo división necesita trunc
            
        } else {
            stack.push(parseInt(char));
        }
    }
    
    return stack[0];
}


}
