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
        intervals=intervals.sort((a,b) => a.start-b.start)
        
        for(let i = 1; i <= intervals.length-1; i++){
           // console.log(intervals[i].start,intervals[i-1].end)
            if(intervals[i].start < intervals[i - 1].end){
                return false
            }


        }
        return true
        
    }
}
