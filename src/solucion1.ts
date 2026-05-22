const num1 = document.querySelector("#numNumero1") as HTMLInputElement;
const num2 = document.querySelector("#numNumero2") as HTMLInputElement;
const num3 = document.querySelector("#numNumero3") as HTMLInputElement;

const btn = document.querySelector("#btnPromedio") as HTMLButtonElement;

const respuesta = document.querySelector("#divRespuesta") as HTMLElement;

function calcularPromedio(){
    let promedio:number = (parseFloat(num1.value) + parseFloat (num2.value) + parseFloat(num3.value)) / 3;
    respuesta.innerHTML="El promedio es: " + promedio;
}

btn.addEventListener("click", calcularPromedio);