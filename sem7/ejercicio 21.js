/* 
Programa una función que dado un array numérico devuelve otro 
array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].
*/


function elevadocuadrado(array) {
    var resultado = [];
  
    for (var i = 0; i < array.length; i++) {
      resultado.push(array[i] * array[i]);
    }
    return resultado;
}


var numeros = [1, 4, 5];
var numerosElevados = elevadocuadrado(numeros);
console.log(numerosElelevadocuadradoevados);
