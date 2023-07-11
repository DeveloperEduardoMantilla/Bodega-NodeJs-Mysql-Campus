var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Expose, Transform } from "class-transformer";
export class user {
    constructor(nombre, id_responsable, estado, created_by) {
        this.NOMBRE = nombre;
        this.ID_RESPONSABLE = id_responsable;
        this.ESTADO = estado;
        this.CREATED_BY = created_by;
    }
    get datos() {
        return `Nombre: ${this.NOMBRE}`;
    }
}
__decorate([
    Expose({ name: "nombre" }),
    Transform(({ value }) => {
        if (/^[a-z A-Z]+$/.test(value))
            return value;
        else
            throw { status: 400, message: `El nombre no cumple con el parametro establecido` };
    }, {
        toClassOnly: true
    }),
    __metadata("design:type", String)
], user.prototype, "NOMBRE", void 0);
__decorate([
    Expose({ name: "id_responsable" }),
    Transform(({ value }) => {
        if (Math.floor(value) && typeof value == "number")
            return Math.floor(value);
        else
            throw { status: 400, message: `EL id no cumple con los parametros establecidos` };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], user.prototype, "ID_RESPONSABLE", void 0);
__decorate([
    Expose({ name: "estado" }),
    Transform(({ value }) => {
        if (Math.floor(value) && typeof value == "number")
            return Math.floor(value);
        else
            throw { status: 400, message: `EL estado no cumple con los parametros establecidos` };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], user.prototype, "ESTADO", void 0);
__decorate([
    Expose({ name: "created_by" }),
    Transform(({ value }) => {
        if (Math.floor(value) && typeof value == "number")
            return Math.floor(value);
        else
            throw { status: 400, message: `EL id del creador no cumple con los parametros establecidos` };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], user.prototype, "CREATED_BY", void 0);
