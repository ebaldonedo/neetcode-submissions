/**
 * Definition of Interval:
 * class Interval  {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {boolean}
     */
    canAttendMeetings(intervals: Interval[]): boolean {
        let l=0
        let r  = 1
        while(l<intervals.length-1){
            //console.log(l,r)
            //console.log(intervals[r].end,intervals[l].end, intervals[r].start,intervals[l].end)
            if(isValid(intervals[l].start,intervals[l].end,intervals[r].start,intervals[r].end)===false){
                return false
            }
            r++
            if(r===intervals.length){
                l++  
                r=l+1
            }
         
           

        }
        function isValid(s:number,e:number,val:number,val2):boolean{
            console.log(s,e,val,val2,((val<=s &&val>=e)&&(val2>=e)))
            return (val>=e||val2<=s)
        }
        return true
    }
}
