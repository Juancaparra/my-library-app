import { client } from "./client";

export class clientMethods {

    private clients:client[];

    constructor() {
        this.clients = [];
    }

    addClient(client:client):void {
        this.clients.push(client);
        console.log(`Cliente '${client.nombre}' agregado a la base de datos. `)
    }

    removeClient(idCliente:string): void {
        const index = this.clients.findIndex(client => client.idCliente === idCliente);
        if (index !== -1) {
            this.clients.splice(index, 1);
            console.log(`Cliente '${idCliente}' eliminado de la base de datos`)
        } else {
            console.log(`Cliente '${idCliente}' no encontrado en la base de datos`)
        }

    }

    listClient(): void {
        if(this.clients.length === 0) {
            console.log('la Base de datos esta vacia.');
        } else {
            console.log('Clientes en la Base de')
            this.clients.forEach(client => {
                console.log(`- Id cliente: ${client.idCliente}, Nombre: ${client.nombre}, Apellido: ${client.apellido}, Direccion: ${client.direccion}, Telefono: ${client.telefono}, Correo: ${client.correo}`)
            })
        }
    }
}