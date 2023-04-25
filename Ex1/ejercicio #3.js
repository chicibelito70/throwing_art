//3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter,
// pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].


let ingresarString = prompt('Ingresa tu mensaje');

    if (ingresarString === null ) {

    alert(`El proceso ha sido cancelado`);

    } else {

        let ingresarDelimitador = prompt(`Ingrese el carácter delimitador`);

        function delimitadorString(ingresarString, ingresarDelimitador) {

            let expRegDelimitador = /[a-zñáéíóú,.\s]/i
            let expRegString = /^[a-zñáéíóú,.\s]+$/i
            
            if(!expRegDelimitador.test(ingresarDelimitador) && expRegDelimitador !== null) {

                alert(`El delimitador no es válido`);

            } else if (ingresarDelimitador === null) {

                alert(`El proceso ha sido cancelado`);

            } else if (ingresarString.includes(ingresarDelimitador)){

                if (ingresarString.trim() === '') {

                    alert(`No has ingresado un mensaje`);

                } else if (expRegString.test(ingresarString) && ingresarString !== null) {

                    alert(`El arreglo es el siguiente ${ingresarString.split(ingresarDelimitador)}`);

                    console.log(ingresarString.split(ingresarDelimitador));

                } else {

                    alert(`El mensaje no es una cadena de texto válida`);

                } 

            } else {

                alert('El delimitador no se encuentra dentro del mensaje');

            }
     
        }

        delimitadorString(ingresarString, ingresarDelimitador);

    }