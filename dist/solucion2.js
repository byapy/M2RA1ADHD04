"use strict";
const base = document.getElementById("numBase");
const altura = document.getElementById("numAltura");
const btnTriangulo = document.getElementById("btnBoton");
const resultado = document.getElementById("divResultado");
function calcularAreaTriangulo() {
    const valorBase = parseFloat(base.value);
    const valorAltura = parseFloat(altura.value);
    const area = (valorBase * valorAltura) / 2;
    resultado.innerHTML = "El area del triangulo es: " + area;
}
btnTriangulo.addEventListener("click", calcularAreaTriangulo);
