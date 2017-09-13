"use strict";

const app = {

    checkbox: undefined,
    btnSiguiente: undefined,

    inicio : function(){
        app.checkbox = $("#checkbox")[0];
        app.btnSiguiente = $("#btnSiguiente");
        app.checkbox.onclick = function () {
            if (checkbox.checked) {
                btnSiguiente.classList.remove("disabled");
            }
        }
    }
}

$(document).ready(app.inicio);