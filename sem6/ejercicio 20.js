/* 
Programa una función que valide que un 
texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.
*/

function emailValido(texto) {
    const email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return email.test(texto);
  }
  
  console.log(emailValido("jonmircha@gmail.com"));
  console.log(emailValido("Chicibelito07@gmail.com")); 
  console.log(emailValido("John Doe")); 
  