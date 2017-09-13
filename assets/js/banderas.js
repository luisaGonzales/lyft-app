"use strict";

$('.dropdown-menu a').click(function () {
    let imagen = $(this).find($("img")).attr('src');
    $('.dropdown-toggle').html(`<img src='${imagen}'>` + '<span class="caret"></span>');
    $("#postal").val($(this).attr('id'));
    $("#celular").focus();
});