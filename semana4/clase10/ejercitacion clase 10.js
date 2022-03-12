/* 1)A partir de un array de correos, recorrerlo para corroborar si son válidos. Para ello, por el momento, debemos buscar el carácter “@” en cada elemento y agregar aquellos que lo tengan al array de correos admitidos. En caso de no encontrar el carácter, se deberá agregar al array de correos descartados.
Desarrollar una función que realice la verificación de cada elemento del array de correos pendientes. En caso de validar, agregar al arrayCorreoAdmitidos. Caso contrario, agregar al arrayCorreoDescartados (vaciar el array de correos pendientes).
Mostrar por pantalla la cantidad y los elementos de cada array.
*/




let arrayCorreosPendientes = ['iroman@digitalhouse.com','loki%digitalhouse.com','loki@digitalhouse.com',    'thanosdigitalhouse.com','thanos@digitalhouse.com'];
/* array de correos admitidos */
let arrayCorreosAdmitidos = ['thor@digitalhouse.com','tucuMan@digitalhouse.com','wanda@digitalhouse.com' ];
let arrayCorreosDescartados = [];

function verificarCorreo(correo){
//tu código  
    return (correo.indexOf("@")!= -1);
}

console.log(arrayCorreosPendientes.length);
for(let cual=0; cual < arrayCorreosPendientes.length; cual++){
    if(verificarCorreo(arrayCorreosPendientes[cual])){
        arrayCorreosAdmitidos.push(arrayCorreosPendientes[cual]);
    }
    else {
        arrayCorreosDescartados.push(arrayCorreosPendientes[cual]);
    }
}


console.log("--- Array de correos admitidos: " + "longitud de array" + " ---");
console.log(arrayCorreosAdmitidos);
console.log();
console.log("---Array de correos Descartados:"+  "longitud de array" + " ---");
console.log(arrayCorreosDescartados);


/* 2) Queremos que un usuario pueda ingresar su correo y el sistema lo valide directamente, para luego agregarlo al array de correos admitidos o bien que devuelva un mensaje diciendo que no es correcto, con la posibilidad de que lo ingrese nuevamente.*/
