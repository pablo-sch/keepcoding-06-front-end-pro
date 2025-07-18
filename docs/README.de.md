# PRO Frontend-Projekt Abgabe

`>` **KeepCoding Projekte - Web 18:** 📁 [repos-kc-web-18.md](https://github.com/pablo-sch/pablo-sch/blob/main/docs/repos-kc-web-18.md)

`>` **Wähle deine Sprache:** [Englisch](README.md) 🔄 [Spanish](README.es.md)

<!-- ------------------------------------------------------------------------------------------- -->

## Projektziel

Das Ziel des Projekts ist es, JavaScript- und CSS-Abhängigkeiten mithilfe moderner Technologien (Tailwind, Parcel und TypeScript) zu integrieren und zu konfigurieren, um die Ästhetik zu verbessern, den Produktionsprozess und die Codequalität zu optimieren und eine vielseitige, professionelle Lösung zu erstellen, die sich an eine reale Entwicklungsumgebung anpasst.

<!-- ------------------------------------------------------------------------------------------- -->

## Erlernte und Bearbeitete Kenntnisse

- Verstehen des Tool-Ökosystems, auf das ich mich im Alltag stützen kann.
- Erlernen einer professionelleren Arbeitsweise im Frontend.
- Verstehen von Frontend-Architekturen.
- Wissen, was ein Bundle, ein Build oder eine gepackte Version ist.
- Arbeiten mit CSS-Präprozessoren (SASS).
- Arbeiten mit TypeScript:
  - Typisierung von Variablen.
  - Typisierung von Funktionen.
  - Typisierung von Objekten.
  - Verwendung von Interfaces.
- Einsatz von Bundlern (Gulp, Webpack, Vite/Parcel) zum Bündeln und Optimieren von Ressourcen.
- Konfiguration und Einsatz von Parcel als „Zero-Config“-Entwicklungstool.
- Verstehen und Anwenden von ESModules (import/export) und NPM-Skripten.

<!-- ------------------------------------------------------------------------------------------- -->

## Projektdetails

### Ausgangszustand

- Ausgehend von einer statischen Landingpage ohne jegliche Funktionalität oder Logik.
- Es ist nur das Logo und der Name im HTML implementiert sowie ein CSS-Stylesheet.

### Funktionale Anforderungen

- Erstellen von drei funktionalen Seiten: **Home**, **Teams** und **Kontakt**.
- Alle Inhalte müssen **responsive** sein und einen **mobile-first**-Ansatz verfolgen.
- **Home**:
  - Anzeige eines **Countdowns** der Tage bis zu den nächsten Spielen.
- **Teams**:
  - Anzeige der Wappen der vier Häuser (Hufflepuff, Gryffindor, Ravenclaw, Slytherin).
  - Über eine **API** die Avatare der Charaktere jedes Hauses abrufen und anzeigen.
- **Kontakt**:
  - Ein Kontaktformular mit Validierung für Pflichtfelder und korrektes E-Mail-Format einfügen.
  - Eine Karte anzeigen, die den Standort der Spiele mit **Leaflet** zeigt.

<!-- ------------------------------------------------------------------------------------------- -->

## Verwendete Technologien

- **Sprachen:** HTML, CSS, JavaScript, TypeScript.
- **Bemerkenswerte Abhängigkeiten (Node.js):** Tailwindcss, Prettier und rimraf.

<!-- ------------------------------------------------------------------------------------------- -->

## Installations- und Nutzungshinweise

### 1. Softwareanforderungen

- **[Node.js](https://nodejs.org/en/download/)** (getestet mit Version **v22.15.1**)
- **[Git](https://git-scm.com/downloads)** (getestet mit Version **2.47.1.windows.1**)
- **[Visual Studio Code](https://code.visualstudio.com/)** (getestet mit Version **1.99.0**)

### 2. Repository-Klonen

```bash
   git clone https://github.com/pablo-sch/keepcoding-07-web-components.git
```

`>` **Klon-Demo in VSCode ansehen:** 🎥 [Gif Demo](https://github.com/pablo-sch/pablo-sch/blob/main/etc/clone-tutorial.gif)

### 3. Befehle

```sh
# Installiere die Projektabhängigkeiten.
npm install

# Starte den Entwicklungsserver mit Parcel.
npm start

# Starte den Server und öffne den Browser automatisch.
npm start:open

# Bereinige den dist-Ordner und erstelle die produktionsbereite Version.
npm build

# Lösche den dist-Ordner.
npm clear
```

<!-- ------------------------------------------------------------------------------------------- -->

## Projektressourcen

`>` **Projektvorschau:** 👀 [Vorschau](preview.md)

<!-- ------------------------------------------------------------------------------------------- -->

## Beiträge und Lizenzierung

Projekt unter MIT-Lizenz. Frei zur Nutzung und Verbreitung mit Namensnennung. Externe Beiträge werden nicht akzeptiert, aber Vorschläge sind willkommen.
