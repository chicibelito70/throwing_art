/* Programa una función para convertir números de base binaria a decimal y viceversa, pe. 
miFuncion(100,2) devolverá 4 base 10. 
*/

function convertDecimal(numero, base) {
    if (base === 2) {
        const decimal = parseInt(numero, 2);
        return decimal;
      } else if (base === 10) {
        const binario = numero.toString(2);
        return binario;
      } else {
        return "Base no soportada";
      }
    }
    

console.log(convertDecimal(100, 2));
console.log(convertDecimal(15, 10));


