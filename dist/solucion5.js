"use strict";
const numeroBase = document.getElementById("numBasePotencia");
const numeroExponente = document.getElementById("numExponente");
const botoncitoPotencia = document.getElementById("btnPotencia");
const resultadoPotencia = document.getElementById("divResultado");
botoncitoPotencia.addEventListener("click", () => {
    let base = parseFloat(numeroBase.value);
    let exponente = parseFloat(numeroExponente.value);
    const resultadito = Math.pow(base, exponente);
    resultadoPotencia.innerHTML = "El resultado es: " + resultadito;
});
