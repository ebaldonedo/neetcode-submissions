class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens: string[]): number {
          let stack:number[]=[]
      for (let token of tokens) {
        if (token === "+" || token === "-" || token === "*" || token === "/") {
            let b = stack.pop();
            let a = stack.pop();
            if (token === "+") stack.push(a + b);
            else if (token === "-") stack.push(a - b);
            else if (token === "*") stack.push(a * b);
            else if (token === "/") stack.push(Math.trunc(a / b));
        } else {
            stack.push(parseInt(token, 10));
        }
    }
    return stack[0]
    }
}
