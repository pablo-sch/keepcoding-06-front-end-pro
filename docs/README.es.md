# Entrega Proyecto Frontend PRO

`>` **Proyectos KeepCoding - Web 18:** 📁 [repos-kc-web-18.md](https://github.com/pablo-sch/pablo-sch/blob/main/docs/repos-kc-web-18.md)

`>` **Selecciona tu Idioma:** [Inglés](README.md) 🔄 [Alemán](README.de.md)

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

- **Lenguajes:** HTML, CSS, JavaScript, TypeScript.
- **Dependencias a destacar (Node.js):** Tailwindcss, Prettier y rimraf.

<!-- ------------------------------------------------------------------------------------------- -->

## Instrucciones de Instalación y Uso

### 1. Requisitos de Software

- **[Node.js](https://nodejs.org/en/download/)** (testeado en la versión **v22.15.1**)
- **[Git](https://git-scm.com/downloads)** (testeado en la versión **2.47.1.windows.1**)
- **[Visual Studio Code](https://code.visualstudio.com/)** (testeado en la versión **1.99.0**)

### 2. Clonación del Repositorio

```bash
   git clone https://github.com/pablo-sch/keepcoding-07-web-components.git
```

`>` **Ver Demo de Clonanción en VSCode:** 🎥 [Gif Demo](https://github.com/pablo-sch/pablo-sch/blob/main/etc/clone-tutorial.gif)

### 3. Comandos

```sh
# Instala las dependencias del proyecto.
npm install

# Inicia el servidor de desarrollo con Parcel.
npm start

# Inicia el servidor y abre el navegador automáticamente.
npm start:open

# Limpia la carpeta dist y crea la versión lista para producción
npm build

# Elimina la carpeta dist.
npm clear
```

<!-- ------------------------------------------------------------------------------------------- -->

## Recursos del Proyecto

`>` **Vista Previa del Proyecto:** 👀 [Vista Previa](preview.md)

<!-- ------------------------------------------------------------------------------------------- -->

## Contribuciones y Licencias

Proyecto bajo licencia MIT. Uso y distribución libres con atribución. No se aceptan contribuciones externas, pero las sugerencias son bienvenidas.
