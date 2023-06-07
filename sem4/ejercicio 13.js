/* 
Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.
*/
function pars(numero) {
    if (numero % 2 === 0) {
        return "Par";
      } else {
        return "Impar";
      }
}

console.log(pars(29));
console.log(pars(50));
console.log(pars(70));