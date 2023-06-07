/*
10) Programa una función que reciba un número y evalúe si es capicúa o no 
(que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.
*/
function capicua(numero){
    const numeroString = numero.toString();
    const numeroInvertido  = numeroString.split('').reverse().join('');
  
  return numeroString === numeroInvertido;


}


console.log(capicua(2020))
console.log(capicua(8200))
console.log(capicua(9080))
console.log(capicua(2002))
