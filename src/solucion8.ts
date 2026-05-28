const numeroPerfectito = document.getElementById("numPerfecto") as HTMLInputElement;
const botoncitoPerfecto = document.getElementById("btnPerfecto") as HTMLButtonElement;
const divPerfecto = document.getElementById("divResultado") as HTMLDivElement;


function buscarNumeroPerfecto(){
    let numeroBuscar:number = parseFloat(numeroPerfectito.value);
    let suma = 0;
    for (let index = 1; index < numeroBuscar; index++) {
        if (numeroBuscar % index === 0) {
            suma = suma + index;
        }
    }
    if (suma === numeroBuscar)
    {
        divPerfecto.innerHTML = "El resultado es: " + suma + " por lo tanto es un numero perfecto";
    } else{
        divPerfecto.innerHTML = "El resultado es: " + suma + " por lo tanto NO es un numero perfecto";
    }
}
botoncitoPerfecto.addEventListener("click", buscarNumeroPerfecto);