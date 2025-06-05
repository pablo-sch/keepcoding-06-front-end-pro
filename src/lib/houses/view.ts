import { Character } from './character.interface';

export function renderCharacter(character: Character): void {
    const house = character.house.toLowerCase();
    const houseElement = document.getElementById(house);
    if (!houseElement) return;
    const charactersList = houseElement.lastElementChild;
    const img = document.createElement('img');
    img.src = character.image;
    img.alt = character.name;
    img.classList.add('house-character');
    charactersList?.appendChild(img);
} 