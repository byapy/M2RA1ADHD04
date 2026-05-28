import { ContarVocales } from "./ContarVocales.js";


const textoIn = document.getElementById("txtVocales") as HTMLTextAreaElement;
const botonVocales = document.getElementById("btnVocales") as HTMLButtonElement;
const divGenerar = document.getElementById("divResultado") as HTMLDivElement;


botonVocales.addEventListener("click",()=>{
    const objeto = new ContarVocales();
    objeto.setTexto(String(textoIn.value));
    divGenerar.innerHTML = "La cantidad de vocales es: " + objeto.contarVocales();




})