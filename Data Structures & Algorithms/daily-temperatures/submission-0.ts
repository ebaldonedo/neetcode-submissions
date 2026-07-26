class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures: number[]): number[] {
        let max:number[]=[]
        //[30,38,30,36,35,40,28]
        for(let i=0;i<temperatures.length;i++){
            let days=0
            const temp=temperatures[i]
            for(let n=i;n<temperatures.length;n++){
                const nextTemp=temperatures[n]
                if(nextTemp>temp){
                    days=n-i
                    break
                }  
            }
            max.push(days)
        }
        return max
    }
}
