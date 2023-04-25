//4) Programa una función que repita un texto X veces, pe.
// miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.


const repetirTexto = (texto, n) => {
    if (typeof texto === 'string' && typeof n === 'number') {
      let result = "";
      for (let i = 0; i < n; ++i) {
        if (i > 0) {
          result += " ";
        }
        result += texto;
      }
      console.log(result);
    } else {
      console.log("Error");
    }
  }
  
  repetirTexto("Joan", 4);