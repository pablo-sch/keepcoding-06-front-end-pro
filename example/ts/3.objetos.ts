// Podemos definir el tipo de las propiedades
// Y limitar el nº de propiedades

// const req = fetch('');
// const req2: typeof req

const car: {
    brand: string,
    model: string,
    year?: number
} = {
    brand: 'Audi',
    model: 'A3',
    year: 2024
};

function getCarBrand(item: typeof car): string {
    return item.brand;
}

console.log(getCarBrand({
    brand: 'Toyota',
    model: 'Corolla'
}));

let cars: Array<typeof car> = [];
// cars.push('Tesla');

// [{name: 'Nauel'}, {name: 'Miguel'}] -> {0: {name: 'Nauel'}, 1: {name: 'Miguel'}};

function getBrands(items: Array<typeof car>): string[] {
    // Dado un array de objetos de tipo CAR
    // Devuelve un array que contenga los valores unicos de las brands
    const brands: string[] = [];
    // En javascript deveriamos:
    // 1. Verificar si items es un array
    // 2. Verificar si cada elemento es un objeto
    // 3. Verificar si cada elemento tiene la propiedad brand
    for (let item of items) {
        if (!brands.includes(item.brand)) {
            brands.push(item.brand);
        }
    }
    return brands;

    // Es lo mismo que:
    // const brands = new Set(items.map(i => i.brand));
}

