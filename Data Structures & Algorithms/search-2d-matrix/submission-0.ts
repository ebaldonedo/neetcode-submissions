class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix: number[][], target: number): boolean {
    let left =0
    let r=matrix.length-1

    while(left<=r){
        const mid=Math.floor((left+r)/2)
        for(let i=0;i<matrix[mid].length;i++){
            const num=matrix[mid][i]
            
            if (num===target) {
                console.log('Se encontro',[mid,i,num])
                return true}
        }
        const lastN=matrix[mid][matrix[mid].length-1]
        if(lastN>target){
            r=mid-1
        }else{
            left = mid+1
        }

    }
    return false
    

}
}
