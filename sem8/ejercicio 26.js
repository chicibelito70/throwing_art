/* 
Programa una función 
que dado un arreglo de números obtenga el promedio, pe. 
promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.
*/
function promedio(array) {
    if (array.length === 0) {
      return 0;
    }
    var suma = 0;
    for (var i = 0; i < array.length; i++) {
      suma += array[i];
    }  
    return suma / array.length;
  }
  
  var numeros = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
  var resultado = promedio(numeros);
  console.log(resultado);  // Output: 4.5
  