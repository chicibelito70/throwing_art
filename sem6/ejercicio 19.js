/* 
Programa una función que 
valide que un texto sea un nombre válido, pe. 
miFuncion("Jonathan MirCha") devolverá verdadero.
*/

function NombreValido(texto) {

    const patron = /^[A-Za-zÁ-ÿ\s']+$/;
    return patron.test(texto);
  }
  
  console.log(NombreValido("Jonathan MirCha"));
  console.log(NombreValido("123")); 
  console.log(NombreValido("John Doe")); 
  