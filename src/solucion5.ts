const numeroBase = document.getElementById("numBasePotencia") as HTMLInputElement;
const numeroExponente = document.getElementById("numExponente") as HTMLInputElement;
const botoncitoPotencia = document.getElementById("btnPotencia") as HTMLInputElement;
const resultadoPotencia = document.getElementById("divResultado") as HTMLDivElement;

botoncitoPotencia.addEventListener("click", ()=>{
    let base:number = parseFloat(numeroBase.value);
    let exponente:number = parseFloat(numeroExponente.value);
    const resultadito:number = Math.pow(base, exponente);

    resultadoPotencia.innerHTML = "El resultado es: " + resultadito;

})