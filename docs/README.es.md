# Entrega Proyecto Frontend PRO

**Proyectos KeepCoding - Web 18**  
Consulta la lista completa de repositorios y descripciones en 📁 [repos-kc-web-18.md](https://github.com/pablo-sch/pablo-sch/blob/main/docs/repos-kc-web-18.md)

## Selecciona tu Idioma

- 🇺🇸 [Inglés](README.md)
- 🇩🇪 [Alemán](README.de.md)

<!-- ------------------------------------------------------------------------------------------- -->

## Objetivo del Proyecto

El objetivo del proyecto es integrar y configurar dependencias de JavaScript y CSS utilizando tecnologías modernas (Tailwind, Parcel y TypeScript) para mejorar la estética, optimizar el proceso de producción y la calidad del código, generando una solución versátil y profesional que se adapte a un entorno real de desarrollo.

<!-- ------------------------------------------------------------------------------------------- -->

## Conocimientos Aprendidos y Trabajados

- Entender el ecosistema de herramientas en el que me puedo apoyar en mi día a día.
- Cómo trabajar en frontend de una manera más profesional.
- Entender arquitecturas frontend.
- Saber lo que es un bundle, build o una versión empaquetada.
- Trabajar con preprocesadores de CSS (SASS).
- Trabajar con TypeScript:
  - Tipado de variables.
  - Tipado de funciones.
  - Tipado de objetos.
  - Uso de interfaces.
- Uso de bundlers (Gulp, Webpack, Vite/Parcel) para empaquetar y optimizar recursos.
- Configuración y uso de Parcel como herramienta de desarrollo “zero-config”.
- Entender y aplicar ESModules (import/export) y scripts de NPM.

<!-- ------------------------------------------------------------------------------------------- -->

## Detalles del Proyecto

### Estado Inicial

- Partimos de una landing page estática sin ningún tipo de funcionalidad ni lógica.
- Únicamente implementa el logo y el nombre en el HTML y una hoja de estilos en CSS.

### Requisitos Funcionales

- Crear tres páginas funcionales: **Home**, **Equipos** y **Contacto**.
- Todo el contenido debe ser **responsive** y seguir un enfoque **mobile first**.
- **Home**:
  - Mostrar un **countdown** de los días hasta los próximos juegos.
- **Equipos**:
  - Mostrar los escudos de las cuatro casas (Hufflepuff, Gryffindor, Ravenclaw, Slytherin).
  - A través de una **API**, obtener y mostrar los avatares de los personajes de cada casa.
- **Contacto**:
  - Incluir un formulario de contacto con validación de campos obligatorios y formato de email correcto.
  - Mostrar un mapa con la localización de los juegos utilizando **Leaflet**.

<!-- ------------------------------------------------------------------------------------------- -->

## Tecnologías Utilizadas

### Lenguajes

- **HTML**: Para la estructuración del contenido y la creación de la estructura de la página web.
- **CSS**: Para el diseño y estilo visual de la página, asegurando una experiencia de usuario atractiva y coherente.
- **TypeScript:** Lenguaje de programación con tipado estático que se compila a JavaScript, mejorando la calidad y mantenibilidad del código.

### Dependencias principales

- **Tailwind CSS / PostCSS:** Framework CSS basado en utilidades para un diseño rápido y personalizado con PostCSS que procesa el CSS generado por Tailwind.
- **Prettier:** Formateador de código automático que ayuda a mantener un estilo consistente en el proyecto.
- **rimraf:**

<!-- ------------------------------------------------------------------------------------------- -->

## Instrucciones de Instalación y Uso

### Requisitos de Software

- **[Git](https://git-scm.com/downloads)** (testeado en la versión **2.47.1.windows.1**)
- **[Visual Studio Code](https://code.visualstudio.com/)** (testeado en la versión **1.99.0**)

### Clonación del Repositorio

Proyecto

```bash
   git clone https://github.com/pablo-sch/keepcoding-07-web-components.git
```

Demo

![Demo](https://github.com/pablo-sch/pablo-sch/blob/main/etc/clone-tutorial.gif)

### Instrucciones de Uso

Arranca Parcel en modo desarrollo, iniciando un servidor local con recarga automática.

```sh
npm run start
```

Arranca Parcel en modo desarrollo y abre automáticamente la aplicación en el navegador.

```sh
npm run start:open
```

Limpia la carpeta de salida y genera una versión optimizada para producción sin mapas de origen.

```sh
npm run build
```

Elimina recursivamente la carpeta dist para borrar los artefactos de compilaciones anteriores.

```sh
npm run clear
```

<!-- ------------------------------------------------------------------------------------------- -->

## Vista Previa del Proyecto

### Home

![Home](../etc/preview_images/main_page.png.png)

### Teams

![Teams](../etc/preview_images/teams_page.png.png)

### Contact

![Contact](../etc/preview_images/contact_page.png.png)

<!-- ------------------------------------------------------------------------------------------- -->

## Contribuciones y Licencias

Este proyecto no cuenta con contribuciones externas ni licencias.
