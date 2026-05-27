"use strict";
const textito = document.getElementById("txtTexto");
const botonInvertir = document.getElementById("btnInvertirTexto");
const divTexto = document.getElementById("divResultado");
function TextoInvertido() {
    let texto = (textito.value);
    const TextoInvertido = texto.split("").reverse().join("");
    divTexto.innerHTML = TextoInvertido;
}
botonInvertir.addEventListener("click", TextoInvertido);
