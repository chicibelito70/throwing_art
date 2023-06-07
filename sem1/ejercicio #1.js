/*
1) Programa una función que cuente el número de caracteres de una cadena de texto, pe.
 miFuncion("Hola Mundo")
 devolverá 10.
*/ 

const cand = (Text) => {
    if(typeof Text == "string"){
        return Text.length;
    }else{
        return -1;
    }
}

const a  = [1,2,3];

try{
    console.log(cand(a));
}catch(ex){
    console.log(ex);
}