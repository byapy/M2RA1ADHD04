import { MayorMenor, } from "./MayorMenor.js"; /*IMPORTAR LA CLASE QUE CREAMOS */

const mayorMenor = new MayorMenor(); 


const boton = document.getElementById("btn_verificar") as HTMLButtonElement;
const resultado = document.getElementById("resultado2") as HTMLParagraphElement;

boton.addEventListener("click", ()=>{ /*ESTA ES UNA FUNCION FLECHA*/
    const valor1 = Number((document.getElementById("numNumero1") as HTMLInputElement).value);
    const valor2 = Number((document.getElementById("numNumero2") as HTMLInputElement).value);
    const valor3 = Number((document.getElementById("numNumero3") as HTMLInputElement).value);
    /*Asginar valores */
    mayorMenor.setValor1(valor1);
    mayorMenor.setValor2(valor2);
    mayorMenor.setValor3(valor3);
    /*Ejecutar los metodos para obtener resultado */
    resultado.innerHTML = `Mayor: ${mayorMenor.mayor()}, Menor: ${mayorMenor.menor()}`;
})