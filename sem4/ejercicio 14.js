/* 
Programa una función 
para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.
*/

function convert(gCelsius) {
    const gFahrenheit = (gCelsius * 9/5) + 32;
  return gFahrenheit;
}

console.log(convert(20));
console.log(convert(120));
console.log(convert(30));
console.log(convert(35));
