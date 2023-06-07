/* 
Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, 
el primero tendrá los numeros ordenados en forma ascendente y el segundo 
de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.
*/
function ordenarAscDesc(array) {
    var ascendente = array.slice().sort(function(a, b) {
      return a - b;
    });
    
    var descendente = array.slice().sort(function(a, b) {
      return b - a;
    });
    
    return { asc: ascendente, desc: descendente };
  }
  
  var numeros = [7, 5, 7, 8, 6];
  var resultado = ordenarAscDesc(numeros);
  console.log(resultado);  // Output: { asc: [5, 6, 7, 7, 8], desc: [8, 7, 7, 6, 5] }
  