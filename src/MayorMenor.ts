export class MayorMenor{ /*Servira para exportar y utilizar en otro archivo */

    private valor1:number = 0;
    private valor2:number =  0;
    private valor3:number =  0;

    setValor1(valor1:number):void{ /*Void es metodo sin retorno */ 
        this.valor1 = valor1;
    }
    setValor2(valor2:number):void{
        this.valor2 = valor2;
    }
    setValor3(valor3:number):void{
        this.valor3 = valor3;
    }


    getValor1():number{
        return this.valor1;
    }
    getValor2():number{
        return this.valor2;
    }
    getValor3():number{
        return this.valor3;
    }


    /*Metodo para Mayor*/
    mayor():number{
        let mayor = this.valor1;
        if(this.valor2>mayor){
            mayor=this.valor2;
        }
        if(this.valor3>mayor){
            mayor=this.valor3;
        }
        return mayor;
    }
    /*Metodo para menor*/
    menor():number{
        let menor = this.valor1;
        if(this.valor2<menor){
            menor=this.valor2;
        }
        if(this.valor3<menor){
            menor=this.valor3;
        }
        return menor;
    }
}