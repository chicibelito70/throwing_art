/* 
Programa una función que determine si un número 
es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.
*/

function primo(numero){
    if (numero <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
          return false;
        }
      } 
      return true;
}

console.log(primo(7)); // Devuelve true
console.log(primo(12)); // Devuelve false
console.log(primo(29)); // Devuelve true