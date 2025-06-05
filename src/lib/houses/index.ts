import { getCharacters } from './hpApi';
import { Houses } from './character.interface';
import { renderCharacter } from './view';

// Consultar los personajes de cada una de las casas
// Crear los elementos en el dom de las imagenes
// Renderizar el contenido

async function bootstrap() {
    // TODO: obtener los personajes para cada una de las casas
    for (const house in Houses) {
        const characters = await getCharacters(house.toLowerCase());
        // TODO: 2: renderizar contenido
        characters
            .filter(i => i.image)
            .slice(0, 4)
            .forEach(i => renderCharacter(i));
        // Renderizar los 8 primeros elementos del array
        // En el div de dentro de cada una de las casas
    }

}

bootstrap();