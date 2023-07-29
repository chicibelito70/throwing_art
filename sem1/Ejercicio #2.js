
//2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados,
//pe. miFuncion("Hola Mundo", 4) devolverá "Hola".



let ingresarString = prompt('Ingresa tu mensaje: ');

if(ingresarString == null){
    
    alert("El proceso ha sido cancelado. ");
}else{
    let ingresarNumber  = prompt('Ingrese el numero de caracteres que desea mostrar en el mensaje: ');
    function cortarString(ingresarString, ingresarString){
        let exRegularNum = /^[0-9]+$/
        let exRegularString = /^[a-zñáéíóú,.\s]+$/i
    
        if(!expRegNumber.test(ingresarNumber) && !ingresarNumber === null) {

            alert(`El campo del número de caracteres no es válido`);

        } else if (ingresarNumber === null) {

            alert(`El proceso ha sido cancelado`);

        } else if (ingresarString.trim() === '' && ingresarNumber.trim() === '') {
        
            alert(`No has ingresado el número de caracteres ni has ingresado un mensaje`);

        } else if (ingresarNumber.trim() === '') {

            alert(`No has ingresado el número de caracteres`);

        } else { if (ingresarString.trim() === '') {

                alert(`No has ingresado un mensaje`);

            } else if (expRegString.test(ingresarString) && ingresarString !== null) {

                alert(`El mensaje quedó así ${ingresarString.substring(0,ingresarNumber)}`);

            } else { alert(`El mensaje no es una cadena de texto válida`);

            } 
        }
    }
    cortarString(ingresarString, ingresarNumber);
}
    