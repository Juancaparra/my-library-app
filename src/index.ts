import { bookStore } from "./models/bookStore";
import { book } from "./models/book";
import * as readline from 'readline';

let Library=new bookStore();

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function agregar():void {
    rl.question('Ingrese el isbn:', (isbn) =>{
        rl.question('Ingrese el titulo:', (titulo) =>{
            rl.question('Ingrese el autor:', (autor) =>{
                rl.question('Ingrese el precio:', (precio) =>{
                    rl.question('Ingrese el editorial:', (editorial) =>{
                        rl.question('Ingrese la genero:', (genero) =>{
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

function opcionMenu():void {
    console.log("------Menu de biblioteca------")
    console.log("1. Agregar Libro")
    console.log("2. Mostrar Libro")
    console.log("3. Eliminar Libro")
    console.log("4. Salir")
}

function menu (option:string) {
    switch (option) {
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
    }

function continuar() {
    rl.question("¿Quiere volver al menu?: ",(answer) => {
        if (answer === "si") {
            opcionMenu()
            rl.question("Escoja una opcion: ", (option) =>{
                menu(option)
            })
        } else {
            process.exit(0)
        }
    })
}

function init() {
    opcionMenu()
    rl.question("Escoja una opcion: ", (option) =>{
            menu(option)
       })
}

init()