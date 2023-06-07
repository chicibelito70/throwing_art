/* 
Programa una función que devuelva el monto 
final después de aplicar un descuento a una cantidad dada, pe.
miFuncion(1000, 20) devolverá 800
*/

function descuento(cantidad, descuento) {
    const montoFinal = cantidad - (cantidad * (descuento / 100));
  return montoFinal;

}

console.log(descuento(1000, 20));