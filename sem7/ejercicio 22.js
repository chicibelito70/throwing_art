/* 
Programa una función que dado un array devuelva el 
número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].
*/


function devolver(array) {
    if (array.length === 0) {
        return [];
      }
      
      var maximo = array[0];
      var minimo = array[0];
      
      for (var i = 1; i < array.length; i++) {
        if (array[i] > maximo) {
          maximo = array[i];
        }
        if (array[i] < minimo) {
          minimo = array[i];
        }
      }
      return [maximo, minimo];
    }

var numeros = [1, 4, 5, 99, -60];
var resultado = encontrarMaximoMinimo(numeros);
console.log(resultado);