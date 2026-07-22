class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
     groupAnagrams(strs:string[]):string[][] {
        const res:any = {};
        for (let s of strs) {
            const count = new Array(26).fill(0);//tomar como constante ASCII para evaluar que representa en cada combinacion
            for (let c of s) {
                count[c.charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
            }
            const key = count.join(',');
           // console.log(key)
            if (!res[key]) {
                res[key] = [];
            }
            res[key].push(s);
        }
        return Object.values(res);
    }


}
