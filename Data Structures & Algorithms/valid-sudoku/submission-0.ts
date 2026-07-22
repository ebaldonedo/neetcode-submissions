class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
    const row=new Set()
    const cols=new Set()

    //rows
    for(let row=0;row<9;row++){
        let seen= new Set()
        for(let i=0;i<9;i++){
            const actualValue=board[row][i]

            if(actualValue==='.'){
                continue
            }
            if(seen.has(actualValue)) return false
            seen.add(actualValue) 
        }
    }

    //cols
     for(let col=0;col<9;col++){
        let seen= new Set()
        for(let i=0;i<9;i++){
            const actualValue=board[i][col]
            if(actualValue==='.'){
                continue
            }
            if(seen.has(actualValue)) return false
            seen.add(actualValue) 
        }
    }

    //squares
    for (let square = 0; square < 9; square++) {
            let seen = new Set();
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    let row = Math.floor(square / 3) * 3 + i;
                    console.log(row)
                    let col = (square % 3) * 3 + j;
                    if (board[row][col] === '.') continue;
                    if (seen.has(board[row][col])) return false;
                    seen.add(board[row][col]);
                }
            }
        }

    return true
}

}
