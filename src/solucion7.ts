const numeroFactorial = document.getElementById("numFactorial") as HTMLInputElement;
const botonFactorial = document.getElementById("btnFactorial") as HTMLButtonElement;
const resultadDiv = document.getElementById("divResultado") as HTMLDivElement;

function CalcularFactorizacion(e:Event){
    e.preventDefault();
    let numeroFactorizado:number = Number(numeroFactorial.value);
    let factorial:number = 1;
    for (let index = 1; index <= numeroFactorizado; index++) {
            factorial = factorial * index;
        
    }
        resultadDiv.innerHTML = "El resultado es: " + factorial;


}


botonFactorial.addEventListener("click", CalcularFactorizacion);