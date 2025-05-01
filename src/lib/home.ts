import { DateTime } from 'luxon'

function bootstrap() {
    console.log("Bootstrap Home!")
    const date = DateTime.now().setZone('Europe/Madrid').minus({ weeks: 1 }).endOf('day').toISO();
    console.log('Date', date);
}

bootstrap()