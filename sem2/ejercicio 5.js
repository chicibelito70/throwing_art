/*
5) Programa una función 
que invierta las palabras de una cadena de texto, pe.
 miFuncion("Hola Mundo") devolverá "odnuM aloH".

*/
function invertirPalabras(cad) {
    
    var Scadena = cad.slipt();
    var invertirA = Scadena.reverse();
    var unirA = invertirA.join();
    return unirA;

}

invertirPalabras("Hola Mundo")