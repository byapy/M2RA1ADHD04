const numeroPrimazo = document.getElementById("numPrimo") as HTMLInputElement;
const botonPrimo = document.getElementById("btnPrimo") as HTMLButtonElement;
const divPrimo = document.getElementById("divResultado") as HTMLDivElement;

function IndentificarPrimo(){
    let numeroPrimo = parseFloat(numeroPrimazo.value);
    let esPrimo = true;
    for (let index = 2; index < numeroPrimo; index++) {
        if(numeroPrimo % index === 0){
            esPrimo = false;
        }
    }
    if(esPrimo === true){
        divPrimo.innerHTML = "El numero: " + numeroPrimo + " Es primo";
    } else{
        divPrimo.innerHTML = "El numero: " + numeroPrimo + " NO Es primo";
    }
}

botonPrimo.addEventListener("click", IndentificarPrimo);