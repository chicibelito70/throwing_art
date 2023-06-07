/*  
Programa una función que dada una fecha válida determine cuantos años
han pasado hasta el día de hoy, pe. 
miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).
*/

function calcularEdad(fecha) {
    const fechaActual = new Date();
    const diferenciaMilisegundos = fechaActual - fecha;
    const milisegundosPorAnio = 1000 * 60 * 60 * 24 * 365.25; // considerando los años bisiestos.
    
    const edad = Math.floor(diferenciaMilisegundos / milisegundosPorAnio);
    return edad;
  }
  

  console.log(calcularEdad(new Date(1984, 4, 23)));
  