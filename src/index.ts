import { bookStore } from "./models/bookStore";
import { book } from "./models/book";
import { client } from "./models/client";
import { clientMethods } from "./models/clientMethods";
import * as readline from 'readline';

let Library=new bookStore();

let dataClient=new clientMethods();

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function agregar():void {
    rl.question('Ingrese el isbn: ', (isbn) =>{
        rl.question('Ingrese el titulo: ', (titulo) =>{
            rl.question('Ingrese el autor: ', (autor) =>{
                rl.question('Ingrese el precio: ', (precio) =>{
                    rl.question('Ingrese el editorial: ', (editorial) =>{
                        rl.question('Ingrese la genero: ', (genero) =>{
                            let bookAdd=new book(isbn,titulo,autor,parseInt(precio),editorial,genero)
                            Library.addBook(bookAdd)
                            continuar()
                        })
                    })
                })
            })
        })
    } )
    
}

function agregarClient():void {
    rl.question('Ingrese el Id del cliente: ', (idCliente) =>{
        rl.question('Ingrese el nombre: ', (nombre) =>{
            rl.question('Ingrese el apellido: ', (apellido) =>{
                rl.question('Ingrese la direccion: ', (direccion) =>{
                    rl.question('Ingrese el telefono: ', (telefono) =>{
                        rl.question('Ingrese el correo: ', (correo) =>{
                            let clientAdd=new client(idCliente,nombre,apellido,direccion,telefono,correo)
                            dataClient.addClient(clientAdd)
                            continuar()
                        })
                    })
                })
            })
        })
    } )
    
}

function mainMenu():void {
    console.log("------Menu de biblioteca------")
    console.log("1. Menu de libros")
    console.log("2. Menu de Cliente")
    console.log("4. Salir")
}


function opcionMenu():void {
    console.log("------Menu de Libros------")
    console.log("1. Agregar Libro")
    console.log("2. Mostrar Libro")
    console.log("3. Eliminar Libro")
    console.log("4. Salir")
    rl.question("Elija una opcion: ",(option2) => {
    switch (option2) {
        case "1":
            agregar()
            break;
        case "2":
            Library.listBooks()
            continuar()
            break;
        case "3":
            rl.question("Ingrese el isbn del libro que desea eliminar: ", (isbn_remove) =>{
                Library.removeBook(isbn_remove)
            continuar()
            })
            break;
        case "4":
            process.exit(0)
            break;
            default:
                console.log("opcion invalida")
                break;
    }
})
}

function opcionClient():void {
    console.log("------Menu de Clientes------")
    console.log("1. Agregar Cliente")
    console.log("2. Mostrar Cliente")
    console.log("3. Eliminar Cliente")
    console.log("4. Salir")
    rl.question("Elija una opcion: ",(option2) => {
    switch (option2) {
        case "1":
            agregarClient()
            break;
        case "2":
            dataClient.listClient()
            continuar()
            break;
        case "3":
            rl.question("Ingrese el Id del cliente que desea eliminar: ", (idClient_remove) =>{
                dataClient.removeClient(idClient_remove)
            continuar()
            })
            break;
        case "4":
            process.exit(0)
            break;
            default:
                console.log("opcion invalida")
                break;
            }
    })
}

function menu (option:string) {
    switch (option) {
        case "1":
            opcionMenu()
            break;
            case "2":
            opcionClient()
            break;
        default:
            console.log("opcion invalida")
            break;
    }}
    

function continuar() {
    rl.question("¿Quiere volver al menu?: ",(answer) => {
        if (answer === "si") {
            mainMenu()
            rl.question("Elija una opcion: ",(option2) => {
            switch (option2) {
                case "1":
                    opcionMenu()
                    rl.question("Elija una opcion: ",(option) => {
                        menu(option)
                    })
                    break;
                case "2":
                    opcionClient()
                    rl.question("Elija una opcion: ",(option) => {
                        menu(option)
                    })
                    break;
                default:
                    console.log("opcion invalida")
                    break;
            }
            rl.question("Escoja una opcion: ", (option)=>{
                menu(option)
            })})
        } else {
            process.exit(0)
        }
    })
}

function init() {
    mainMenu()
    rl.question("Escoja una opcion: ", (option) =>{
            menu(option)
       })
}

init()