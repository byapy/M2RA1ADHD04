const numero1 = document.getElementById("numMayorMenor1") as HTMLInputElement;
const numero2 = document.getElementById("numMayorMenor2") as HTMLInputElement;
const numero3 = document.getElementById("numMayorMenor3") as HTMLInputElement;
const div = document.getElementById("divResultado") as HTMLDivElement;
const boton = document.getElementById("btnMayorMenor") as HTMLButtonElement;
const formulario = boton.closest("form") as HTMLFormElement;



function mostrarMenorOmayor(){
    let numerito1:number = parseFloat(numero1.value);
    let numerito2:number = parseFloat(numero2.value);
    let numerito3:number = parseFloat(numero3.value); 

    let numeros = [numerito1, numerito2, numerito3];
    numeros.sort(function(a, b){
        return a - b;
    });
    div.innerHTML = "Menor: " + numeros[0] + " Medio: " + numeros[1] + " Mayor: " + numeros[2];

}

boton.addEventListener("click", mostrarMenorOmayor);
formulario.addEventListener("submit", (event: SubmitEvent) => {
    event.preventDefault();
    mostrarMenorOmayor();
});
