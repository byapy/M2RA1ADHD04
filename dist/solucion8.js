"use strict";
const numeroPerfectito = document.getElementById("numPerfecto");
const botoncitoPerfecto = document.getElementById("btnPerfecto");
const divPerfecto = document.getElementById("divResultado");
function buscarNumeroPerfecto() {
    let numeroBuscar = parseFloat(numeroPerfectito.value);
    let suma = 0;
    for (let index = 1; index < numeroBuscar; index++) {
        if (numeroBuscar % index === 0) {
            suma = suma + index;
        }
    }
    if (suma === numeroBuscar) {
        divPerfecto.innerHTML = "El resultado es: " + suma + " por lo tanto es un numero perfecto";
    }
    else {
        divPerfecto.innerHTML = "El resultado es: " + suma + " por lo tanto NO es un numero perfecto";
    }
}
botoncitoPerfecto.addEventListener("click", buscarNumeroPerfecto);
