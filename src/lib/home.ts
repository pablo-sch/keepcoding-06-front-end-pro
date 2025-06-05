import { DateTime } from 'luxon';

// TODO:
// Definir la fecha proxima
// Definir la fecha actual
// Calcular la diferencia en: Dias, horas, minutos y segundos
// Actualizar los valores del html con cada cambio


function bootstrap() {
    const now = DateTime.now().setZone('Europe/Madrid');
    const yyyy = now.year;
    let nextEdition = DateTime.fromFormat('11/11/' + yyyy, 'dd/MM/yyyy').endOf('day');
    console.log("Home ts, ", nextEdition);
    // Check year
    if (nextEdition <= now) {
        nextEdition = nextEdition.plus({ year: 1 });
    }

    setInterval(() => {
        // Pasen cosas
        const distance = nextEdition.diff(
            DateTime.now().setZone('Europe/Madrid'),
            ['days', 'hours', 'minutes', 'seconds']
        );

        // const days = Math.floor(distance.as('days'));
        // const hours = Math.floor(distance.as('hours') % 24);
        // const minutes = Math.floor(distance.as('minutes') % 60);
        // const seconds = Math.floor(distance.as('seconds') % 60);

        const days      = distance.days;
        const hours     = distance.hours;
        const minutes   = distance.minutes;
        const seconds   = distance.seconds.toFixed();

        // Pintamos estos valores en el DOM
        printInElement('days', days.toString());
        printInElement('hours', hours.toString());
        printInElement('minutes', minutes.toString());
        printInElement('seconds', seconds.toString());

    }, 1);

}

function printInElement(elementId: string, data: string): void {
    const element = document.getElementById(elementId);
    if (!element) return;
    element.innerText = data;
}

bootstrap();