/* 
Programa una función que dado un arreglo de elementos, elimine 
los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) 
devolverá ["x", 10, 2, "10", true].
*/

function eliminarDuplicados(array) {
    var sinDuplicados = [];
    
    for (var i = 0; i < array.length; i++) {
      if (sinDuplicados.indexOf(array[i]) === -1) {
        sinDuplicados.push(array[i]);
      }
    }
    
    return sinDuplicados;
  }
  
  var elementos = ["x", 10, "x", 2, "10", 10, true, true];
  var resultado = eliminarDuplicados(elementos);
  console.log(resultado);  // Output: ["x", 10, 2, "10", true]
  