"use strict";
const resultadoDiv = document.getElementById("divResultado");
const numerito = document.getElementById("numParImpar");
const botoncito = document.getElementById("btnParImpar");
function NumeroParOimpar() {
    let resultado = parseFloat(numerito.value);
    if (resultado % 2 === 0) {
        resultadoDiv.innerHTML = "El numero es par";
    }
    else {
        resultadoDiv.innerHTML = "El numero es impar";
    }
}
botoncito.addEventListener("click", NumeroParOimpar);
