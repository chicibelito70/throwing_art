/* 
Programa una función que dada una cadena de texto 
cuente el número de vocales y consonantes, pe. 
miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.
*/
function contarVocalesConsonantes(cadena) {
    
    cadena = cadena.toLowerCase();

    let vocales = 0;
    let consonantes = 0;
  
    for (let i = 0; i < cadena.length; i++) {
      const caracter = cadena[i];
  // Verificar si el carácter es una vocal (incluyendo acentuadas y diéresis)
      if (/[aeiouáéíóúü]/.test(caracter)) {
        vocales++;
      }
      // Verificar si el carácter es una consonante
      else if (/[bcdfghjklmnpqrstvwxyzñ]/.test(caracter)) {
        consonantes++;
      }
    
    }
  
    return { Vocales: vocales, Consonantes: consonantes };
  }
  
  const resultado = contarVocalesConsonantes("Hola Mundo");
  console.log(resultado); 
  