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
