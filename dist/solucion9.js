"use strict";
const numeroPrimazo = document.getElementById("numPrimo");
const botonPrimo = document.getElementById("btnPrimo");
const divPrimo = document.getElementById("divResultado");
function IndentificarPrimo() {
    let numeroPrimo = parseFloat(numeroPrimazo.value);
    let esPrimo = true;
    for (let index = 2; index < numeroPrimo; index++) {
        if (numeroPrimo % index === 0) {
            esPrimo = false;
        }
    }
    if (esPrimo === true) {
        divPrimo.innerHTML = "El numero: " + numeroPrimo + " Es primo";
    }
    else {
        divPrimo.innerHTML = "El numero: " + numeroPrimo + " NO Es primo";
    }
}
botonPrimo.addEventListener("click", IndentificarPrimo);
