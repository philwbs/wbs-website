# WBS Website

Website von Wesner Business Solutions, umgesetzt mit Next.js 16, React 19 und TypeScript.

## Voraussetzungen

- Node.js `>=22.13.0`
- npm

## Lokale Entwicklung

```bash
npm install
npm run dev
```

Die Website ist anschließend unter `http://localhost:3000` erreichbar.

## Produktions-Build

```bash
npm run build
npm run start
```

## Weitere Prüfungen

```bash
npm run lint
```

## Deployment auf Vercel

Das Repository ist als natives Next.js-Projekt ohne zusätzliche Build-Konfiguration für Vercel vorbereitet. Vercel erkennt Next.js automatisch und verwendet `npm run build`.
