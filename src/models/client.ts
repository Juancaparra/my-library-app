export class client {
    idCliente: string;
    nombre: string;
    apellido: string;
    direccion: string;
    telefono: string;
    correo: string;



    constructor(
        idCliente: string,
        nombre: string,
        apellido: string,
        direccion: string,
        telefono: string,
        correo: string,){

        this.idCliente=idCliente;
        this.nombre=nombre;
        this.apellido=apellido;
        this.direccion=direccion;
        this.telefono=telefono;
        this.correo=correo;

        }
}