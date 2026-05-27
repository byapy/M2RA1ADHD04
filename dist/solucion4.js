"use strict";
const numero1 = document.getElementById("numMayorMenor1");
const numero2 = document.getElementById("numMayorMenor2");
const numero3 = document.getElementById("numMayorMenor3");
const div = document.getElementById("divResultado");
const boton = document.getElementById("btnMayorMenor");
function mostrarMenorOmayor() {
    let numerito1 = parseFloat(numero1.value);
    let numerito2 = parseFloat(numero2.value);
    let numerito3 = parseFloat(numero3.value);
    let numeros = [numerito1, numerito2, numerito3];
    numeros.sort(function (a, b) {
        return a - b;
    });
    div.innerHTML = "Menor: " + numeros[0] + " Medio: " + numeros[1] + " Mayor: " + numeros[2];
}
boton.addEventListener("click", mostrarMenorOmayor);
