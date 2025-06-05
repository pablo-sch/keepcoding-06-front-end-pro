import { getErrorMessages } from './validations';

const FORM_ID = 'contactForm';

const FORM_FIELDS = [
    'name',
    'email',
    'message'
];

function bootstrap() {
    // Capturar los eventos de submit
    // Controlar validaciones
        // Si el campo es requerido
        // Si se cumple un pattern
    // Renderizar un error
    // Bonus -> mostrarlo como notificacion (toast)
    const contactForm: HTMLFormElement = document.getElementById(FORM_ID) as HTMLFormElement;
    if (!contactForm) return;
    contactForm.addEventListener('submit', (e) => {
        const form = e.target;
        if (!form) return;
        e.preventDefault();
        FORM_FIELDS.forEach(i => {
            const validationStatus = form[i].validity;
            console.log(validationStatus);
            const validationMessage = getErrorMessages(validationStatus);
            if (validationMessage) {
                // Si no es correcto muestro un mensaje
                // De error debajo del input

            }
        })
    })
}

bootstrap();
