"use strict";

const clave = {
    pin: undefined,
    cantidad: undefined,
    tope: undefined,

    init: function () {
        clave.pin = [],
        clave.cantidad = 5,
        clave.tope = 10,
        clave.setup()
    },

    setup: function () {
        $("#mostrarPin").click(clave.crearPin);
    },

    generarPin: function (array) {
        let valores = Math.floor(Math.random() * clave.tope);
        if (!array.some(function (e) {
                return e == valores
            })) {
            array.push(valores);
        }
    },
    crearPin: function () {
        while (clave.pin.length < clave.cantidad && clave.cantidad < clave.tope) {
            clave.generarPin(clave.pin);
        }
        clave.mostrarPin();
    },

    mostrarPin: function () {
        $('#pin').append(`<div><span>LAB - ${clave.pin[0]} </span>\
                                    <span> ${clave.pin[1]} </span>\
                                    <span> ${clave.pin[2]} </span>\</div>`);

        clave.pin = [];
    },

};

$(document).ready(clave.init);