type Brand = 'Audi' | 'Skoda' | 'Mercedes';

enum Brands {
    AUDI = 'Audi',
    SKODA = 'Skoda',
    MERCEDES = 'Mercedes'
};


interface Car {
    // brand: string;
    // brand: 'Audi' | 'Skoda' | 'Mercedes';
    // brand: Brand;
    brand: Brands;
    model: string;
    year?: number;
    // start(): void;
    start?: () => void;
    addFuel?: (l: number) => void;
}

const audiA3: Car = {
    // brand: 'Audi',
    brand: Brands.AUDI,
    model: 'A3',
    year: 2024,
    start: () => {
        console.log(`Car started`);
    },
    addFuel: (l: number) => {
        console.log('Fuel added');
    }
};

const mercedesA: Car = {
    // brand: 'Mercedes',
    brand: Brands.MERCEDES,
    model: 'A180',
    year: 2025
};

console.log(audiA3.brand);

function getCarBrand(item: Car): string {
    return item.brand;
}

console.log(getCarBrand(mercedesA));

console.log(
    getCarBrand(
        {
            brand: Brands.SKODA,
            model: 'Fabia'
        }
    )
);

