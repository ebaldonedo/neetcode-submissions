class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers: number[], target: number): number[] {
        // Tu solución aquí
  const mapaDeIndices = new Map<number,number>()

 for (let i = 0; i < numbers.length; i++) {
    const numeroActual = numbers[i];
    const parejaIdeal = target - numeroActual;
    console.log('soy un: '+numeroActual+' Se busca un: ',parejaIdeal)
    // 1. ¿La pareja que busco ya la vi en el pasado?
    if (mapaDeIndices.has(parejaIdeal)) {
      // LÍNEA FALTANTE 1:
      // Traemos el índice donde vimos a la pareja en el pasado (.get) 
      // y lo devolvemos junto con nuestro índice actual (i)
      const indicePasado = mapaDeIndices.get(parejaIdeal)!;
      return [indicePasado+1, i+1];
    }

    // LÍNEA FALTANTE 2:
    // Si no encontramos la pareja, nos anotamos a nosotros mismos en la libreta.
    // Guardamos: llave = el número actual, valor = su índice 'i'
    mapaDeIndices.set(numeroActual, i);
    
  }
        return []
    }
}
