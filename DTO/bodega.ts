import {Expose, Type, Transform} from "class-transformer";

class Bodega{
    @Expose({name:"nombre"})
    @Transform(({value})=>{
    if(/^[a-z A-Z]+$/.test(value)) return value; else throw {status: 400, message: `El nombre no cumple con el parametro establecido`};},{
    toClassOnly: true})
    NOMBRE:string;

    @Expose({name:"id_responsable"})
    @Transform(({value})=>{
        if(Math.floor(value) && typeof value == "number")
        return Math.floor(value);
        else throw {status: 400, message:`EL id no cumple con los parametros establecidos`};},
        {toClassOnly: true})
    ID_RESPONSABLE:number;
    
    @Expose({name:"estado"})
    @Transform(({value})=>{
        if(Math.floor(value) && typeof value == "number")
        return Math.floor(value);
        else throw {status: 400, message:`EL estado no cumple con los parametros establecidos`};},
        {toClassOnly: true})
    ESTADO:number;

    @Expose({name:"created_by"})
    @Transform(({value})=>{
        if(Math.floor(value) && typeof value == "number")
        return Math.floor(value);
        else throw {status: 400, message:`EL id del creador no cumple con los parametros establecidos`};},
        {toClassOnly: true})
    CREATED_BY:number;

    constructor(nombre: string, id_responsable: number, estado: number, created_by: number){
        this.NOMBRE = nombre;
        this.ID_RESPONSABLE = id_responsable;
        this.ESTADO = estado;
        this.CREATED_BY = created_by;
    }

    get datos(): string{
        return `Nombre: ${this.NOMBRE}`;
    }
}

export default Bodega;