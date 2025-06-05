interface IPerson {
    dni: string;
    name: string;
    setDni: (dni: string) => void;
    getDni: () => string;
}

interface IStudent extends IPerson {
    surnames: string;
    age: number;
    grade: string;
}

interface ITeacher extends IPerson {
    career: string;
}

const dumbeldore: ITeacher = {
    career: 'Wizzard',
    dni: '123',
    name: 'Dumbeldore',
    getDni: () => '',
    setDni: (dni: string) => {}
};

const harry: IStudent = {
    age: 11,
    dni: '123',
    getDni: () => '',
    grade: 'magic',
    name: 'Harry',
    setDni: (dni: string) => {},
    surnames: 'Potter'
};

// Si yo te digo que el tipo es IStudent, me devuelvas el valor de una de sus propiedades
// Sin permitir que sea una propieadad invalida.
// getData(harry, 'age') -> 11
// getData(harry, 'edad') -> ERROR
function getData<T>(item: T, key: keyof T): T[keyof T] {
    return item[key];
}
const age1 = getData(harry, 'age'); // TODO: podemos tipar el resultado? (Nauel)
const dni = getData(harry, 'dni');
const career = getData(dumbeldore, 'dni')
console.table({ age1, dni })



// -------------------
// Ejemplo de keyof:
const es = {
    home: {
        header: {
            buttonProfile: 'Acceder al perfil',
            buttonLogout: 'Cerrar sesión'
        }
    }
};
// function t('home.header.buttonProfile');
// 
// TODO: Seriamos capaces de implementar esta función t()?
//