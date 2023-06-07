/*

9) Programa una función que obtenga un numero aleatorio entre 501 y 600.
.
*/

function aleatorio(min, max){
    return Math.random() * (max - min) + min;
}

aleatorio(501 , 600)