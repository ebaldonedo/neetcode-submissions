class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        nums=nums.sort((a,b)=>a-b)
        let result = []

        for(let i=0; i<nums.length-2; i++){
            // Evitamos usar el mismo número inicial para no tener tripletes repetidos
        if (i > 0 && nums[i] === nums[i - 1]) continue;

            let l = i+1
            let r = nums.length-1
            if (nums[i] > 0) break;
            while(l<r){
                const sum = nums[i]+nums[l]+nums[r]
                if (sum === 0) {
                // ¡Triplete encontrado!
                result.push([nums[i], nums[l], nums[r]]);
                
                // Saltamos los duplicados para el puntero izquierdo
                while (l < r && nums[l] === nums[l + 1]) l++;
                
                // Saltamos los duplicados para el puntero derecho
                while (l < r && nums[r] === nums[r - 1]) r--;
                
                // Movemos ambos punteros para seguir buscando
                l++;
                r--;
            } 
            else if (sum < 0) {
                // Suma muy pequeña, necesitamos un número mayor (mover izquierda)
                l++;
            } 
            else {
                // Suma muy grande, necesitamos un número menor (mover derecha)
                r--;
            }

            }



        }
      return result
    }
}
