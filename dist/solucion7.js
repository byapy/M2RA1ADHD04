"use strict";
const numeroFactorial = document.getElementById("numFactorial");
const botonFactorial = document.getElementById("btnFactorial");
const resultadDiv = document.getElementById("divResultado");
function CalcularFactorizacion(e) {
    e.preventDefault();
    let numeroFactorizado = Number(numeroFactorial.value);
    let factorial = 1;
    for (let index = 1; index <= numeroFactorizado; index++) {
        factorial = factorial * index;
    }
    resultadDiv.innerHTML = "El resultado es: " + factorial;
}
botonFactorial.addEventListener("click", CalcularFactorizacion);
