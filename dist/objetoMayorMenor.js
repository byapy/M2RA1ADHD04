import { MayorMenor, } from "./MayorMenor.js";
const mayorMenor = new MayorMenor();
const boton = document.getElementById("btn_verificar");
const resultado = document.getElementById("resultado2");
boton.addEventListener("click", () => {
    const valor1 = Number(document.getElementById("numNumero1").value);
    const valor2 = Number(document.getElementById("numNumero2").value);
    const valor3 = Number(document.getElementById("numNumero3").value);
    mayorMenor.setValor1(valor1);
    mayorMenor.setValor2(valor2);
    mayorMenor.setValor3(valor3);
    resultado.innerHTML = `Mayor: ${mayorMenor.mayor()}, Menor: ${mayorMenor.menor()}`;
});
