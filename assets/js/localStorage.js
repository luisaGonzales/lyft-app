// /*aquí va tu código*/
"use strict";

const registro = {
    datos : {
        celular : undefined,
        nombre: undefined,
        apellido: undefined,
        email: undefined,
        pin: undefined,
    },
    inicio : function(){
        registro.datos.celular = $("#celular");
        // registro.datos.pin = $("#pin");
        // registro.datos.nombre = $("#nombre");
        // registro.datos.apellido = $("#apellido");
        // registro.datos.apellido = $("#email");
        registro.agregar();
    },
    agregar : function(){
        localStorage.setItem(registro.datos.celular.val(), registro.datos.pin.val());
    }


}


$(document).ready(registro.inicio);