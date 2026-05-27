const textito = document.getElementById("txtTexto") as HTMLTextAreaElement;
const botonInvertir = document.getElementById("btnInvertirTexto") as HTMLButtonElement;
const divTexto = document.getElementById("divResultado") as HTMLDivElement;

function TextoInvertido(){

    let texto:string = (textito.value);
    const TextoInvertido:string = texto.split("").reverse().join("");

    divTexto.innerHTML = TextoInvertido;

}

botonInvertir.addEventListener("click", TextoInvertido);