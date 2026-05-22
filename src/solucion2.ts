const base = document.getElementById("numBase") as HTMLInputElement;
const altura = document.getElementById("numAltura") as HTMLInputElement;
const btnTriangulo = document.getElementById("btnBoton") as HTMLButtonElement;
const resultado = document.getElementById("divResultado") as HTMLDivElement;

function calcularAreaTriangulo() {
    const valorBase: number = parseFloat(base.value);
    const valorAltura: number = parseFloat(altura.value);
    const area: number = (valorBase * valorAltura) / 2;

    resultado.innerHTML = "El area del triangulo es: " + area;
}

btnTriangulo.addEventListener("click", calcularAreaTriangulo);

