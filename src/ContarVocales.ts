export class ContarVocales{

    private texto:string = ""; //Texto que ingresa la persona
    private contar:number = 0;
    private vocales:string = "aeiouAEIOUáéíóúÁÉÍÓÚ" //Caracteres a verificar

    
    public getTexto():string{
        return this.texto;
    }
    public setTexto(texto:string):void{
        this.texto=texto;
    }

    public contarVocales():number{
        this.contar=0;
        for (let letra of this.texto) {
            if(this.vocales.includes(letra)){
                this.contar+=1;
            }
            
        }
        return this.contar;
    }
}