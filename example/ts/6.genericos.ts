interface Book {
    title: string;
    author: string;
    year: number;
    isbn: string;
};

interface Magazine {
    name: string;
    topic: string;
    date: Date;
    ean: number;
};


// Cada libreria puede contener solo un tipo de elemento en el array
class Library<T> {
    // items: unknown[];
    // items: Book[];
    readonly items: T[];
    public createdAt: Date;
    private counter = 0;

    constructor() {
        this.createdAt = new Date();
        this.items = []; // ----> x7g123
    }

    public add(item: T): void {
        this.items.push(item);
        this.counter ++;
    }

    public list(): T[] {
        return this.items;
    }

    // No podemos asignar un valor nuevo de una propiedad readonly
    // public reset() {
    //     this.items = []; // ----> x5g103
    // }

}

const quijote: Book = {
    author: 'Nauel',
    isbn: '123',
    title: 'Quijote',
    year: 1920
};

const sport: Magazine = {
    date: new Date(),
    ean: 1234,
    name: 'Sport',
    topic: 'Sports'
};

const booksLibrary = new Library<Book>();
booksLibrary.add(quijote);
// Scope de propiedades y métodos
// booksLibrary.counter = 0;

// Una vez utilizado el genérico, no podemos "Saltarnos" la restricción
// booksLibrary.add(sport);

const magazinLibrary = new Library<Magazine>();
magazinLibrary.add(sport);


// TODO: 
// Implementa una función que nos permita realizar peticiones http y 
// definir el tipo en el momento de utilizar esa función.
function get<T>(path: string): Promise<T> {
    return fetch(path)
        .then(res => res.json())
        .then(json => json as T);
};

// const books = await get<Book[]>('/books');
// books.map(i => i.isbn);