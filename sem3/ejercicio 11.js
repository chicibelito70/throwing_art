/*
Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, 
se define como el 
producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120
*/

function factorial(numero) {
    if (numero === 0 || numero === 1) {
      return 1;
    } else {
      let resultado = 1;
      for (let i = 2; i <= numero; i++) {
        resultado *= i;
      }
      return resultado;
    }
  }
  
  console.log(factorial(5)); // Devuelve 120
  console.log(factorial(0)); // Devuelve 1
  console.log(factorial(10)); // Devuelve 3628800
 
  
  