import { book } from "./book";

export class bookStore {

    private books:book[];

    constructor() {
        this.books = [];
    }

    addBook(book:book):void {
        this.books.push(book);
        console.log(`Libro '${book.titulo}' agregada a la biblioteca. `)
    }

    removeBook(isbn:string): void {
        const index = this.books.findIndex(book => book.isbn === isbn);
        if (index !== -1) {
            this.books.splice(index, 1);
            console.log(`Libro '${isbn}' eliminada de la biblioteca`)
        } else {
            console.log(`Libro '${isbn}' no encontrado en la biblioteca`)
        }

    }

    listBooks(): void {
        if(this.books.length === 0) {
            console.log('la biblioteca esta vacia.');
        } else {
            console.log('Libros en la biblioteca')
            this.books.forEach(book => {
                console.log(`- Titulo: ${book.titulo}, Autor: ${book.autor}, Precio: ${book.precio}, Editorial: ${book.editorial}, Género: ${book.genero}`)
            })
        }
    }
}