class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number {
        if(nums[0]===target)return 0
   
        let left = 0
        let right=nums.length-1
        while (left <= right) {
    // ⚠️ EL TRUCO SENIOR: Calcular el medio de forma segura
    const mid = left + Math.floor((right - left) / 2);

    if (nums[mid] === target) {
      return mid; // ¡Lo encontramos! Retornamos su índice
    } 
    else if (nums[mid] < target) {
      // El número del medio es muy pequeño. Descartamos la mitad izquierda.
      left = mid + 1;
    } 
    else {
      // El número del medio es muy grande. Descartamos la mitad derecha.
      right = mid - 1;
    }
  }
       

        return -1
    }
}
