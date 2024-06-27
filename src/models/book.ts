export class book {
    isbn: string;
    titulo: string;
    autor: string;
    precio: number;
    editorial: string;
    genero: string;


    constructor(
        isbn: string,
        titulo: string,
        autor: string,
        precio: number,
        editorial: string,
        genero: string,){

        this.isbn=isbn;
        this.titulo=titulo;
        this.autor=autor;
        this.precio=precio;
        this.editorial=editorial;
        this.genero=genero;

        }
}