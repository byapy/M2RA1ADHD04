"use strict";
const num1 = document.querySelector("#numNumero1");
const num2 = document.querySelector("#numNumero2");
const num3 = document.querySelector("#numNumero3");
const btn = document.querySelector("#btnPromedio");
const respuesta = document.querySelector("#divRespuesta");
function calcularPromedio() {
    let promedio = (parseFloat(num1.value) + parseFloat(num2.value) + parseFloat(num3.value)) / 3;
    respuesta.innerHTML = "El promedio es: " + promedio;
}
btn.addEventListener("click", calcularPromedio);
