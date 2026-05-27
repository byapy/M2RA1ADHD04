const resultadoDiv = document.getElementById("divResultado") as HTMLDivElement;
const numerito = document.getElementById("numParImpar") as HTMLInputElement;
const botoncito = document.getElementById("btnParImpar") as HTMLButtonElement;

function NumeroParOimpar(){

    let resultado:number = parseFloat(numerito.value);
    if(resultado % 2 === 0) {
        resultadoDiv.innerHTML = "El numero es par";
    }
    else{
        resultadoDiv.innerHTML = "El numero es impar";
    }
}

botoncito.addEventListener("click", NumeroParOimpar);