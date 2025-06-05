import { Character } from './character.interface';

const ENDPOINT = 'https://hp-api.onrender.com/api/characters/house/';

export function getCharacters(houseName: string): Promise<Character[]> {
    // TODO:
    // Llamar a la api para una casa
    // Generar los tipos
    // Devolver un array de personajes
    return fetch(ENDPOINT + houseName)
        .then((res) => res.json())
        .then(res => res as Character[])
}
