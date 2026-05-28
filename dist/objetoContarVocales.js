import { ContarVocales } from "./ContarVocales.js";
const textoIn = document.getElementById("txtVocales");
const botonVocales = document.getElementById("btnVocales");
const divGenerar = document.getElementById("divResultado");
botonVocales.addEventListener("click", () => {
    const objeto = new ContarVocales();
    objeto.setTexto(String(textoIn.value));
    divGenerar.innerHTML = "La cantidad de vocales es: " + objeto.contarVocales();
});
