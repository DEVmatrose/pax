# Workpaper: Migration zu Vite + Vue 3 SPA
**Date:** 2026-04-06  
**Agent:** GitHub Copilot (Claude Sonnet 4.6)  
**Topic:** Vite-Migration, Projektstruktur-Cleanup, Build-Prozess  
**Status:** CLOSED ✅

---

## session_goal

Die aktuelle One-Pager-Website (Vue.js 3 CDN, Tailwind CDN, 834-Zeilen-Monolith-HTML)
in ein sauberes **Vite + Vue 3 SPA** migrieren:

1. Verzeichnisstruktur aufräumen (Docs/Legacy aus Root entfernen)
2. Vite-Projekt mit Vue 3 + Tailwind CSS aufsetzen
3. `index.html` aufsplitten: Komponenten, App-Logik, Styles
4. `src/config.js` und `src/nextcloud-api.js` in ES-Module umwandeln
5. JSON-Daten als statische Assets einbinden
6. Build-Prozess konfigurieren (Dev-Server, Production Build, Deploy)

---

## ist-zustand

### Dateistruktur (Root, bereinigt)
```
PAX Festival/           ← alles auf Root-Ebene, unstrukturiert
├── index.html          ← 834 Zeilen Monolith
├── datenschutz.html
├── impressum.html
├── presse.html
├── rueckgabe.html
├── start-dev-server.ps1  ← Python HTTP-Server, Port 8080
├── src/
│   ├── config.js         ← window.PAX_CONFIG = {...} (global scope)
│   ├── nextcloud-api.js  ← class NextcloudAPI (global scope)
│   └── assets/images/
├── data/
│   ├── musiker.json
│   ├── workshops.json
│   ├── vortraege.json
│   └── aussteller.json
├── nextcloud-templates/   ← CSV-Import-Vorlagen für Nextcloud
├── bewerbung/             ← Formular-Anforderungen (PDF, nicht erstellt)
└── [viele .md Docs]       ← liegen lose im Root
```

### Technologie (aktuell)
- Vue.js 3 via `<script src="https://unpkg.com/vue@3/...">`
- Tailwind CSS via `<script src="https://cdn.tailwindcss.com">`
- Google Fonts via `@import url(...)` in `<style>`
- `src/config.js` und `nextcloud-api.js` via `<script src="...">` (global scope)
- Vue-App komplett inline in `<script>` (ca. 250 Zeilen JS)
- CSS komplett inline in `<style>` (ca. 350 Zeilen)
- Dev-Server: Python `http.server`, kein Hot Reload

### Probleme
- Kein Hot-Module-Replacement → schlechte DX
- Tailwind CDN = Development-only, kein Tree-Shaking → große Payload im Prod
- Alles in einer Datei → schlecht wartbar
- Keine Komponenten-Kapselung
- Globale `window.*`-Variablen statt ES-Module-Imports
- Kein Build-Output für Deployment
- Root-Verzeichnis mit Docs, Legacy-Dateien, Templates vermischt
- `start-dev-server.ps1` muss durch `vite` ersetzt werden

---

## soll-zustand

### Neue Verzeichnisstruktur
```
PAX Festival/
├── index.html              ← Vite-Einstiegspunkt (minimal, nur <div id="app">)
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── .env.example
├── .gitignore
├── README.md
├── AGENTS.md
├── READ-AGENT.md
│
├── src/
│   ├── main.js             ← App-Einstiegspunkt
│   ├── App.vue             ← Root-Komponente
│   ├── config.js           ← ES-Module export (kein window.*)
│   ├── nextcloud-api.js    ← ES-Module export
│   ├── style.css           ← Tailwind-Direktiven + globale Styles
│   │
│   ├── components/
│   │   ├── HeroSection.vue
│   │   ├── ProgrammeTabs.vue
│   │   ├── MusikerList.vue
│   │   ├── WorkshopList.vue
│   │   ├── VortraegeList.vue
│   │   ├── AusstellerList.vue
│   │   ├── BewerbungSection.vue
│   │   └── CookieBanner.vue
│   │
│   └── assets/
│       └── images/
│           ├── hero-girl.png
│           ├── pax-social-preview.png
│           └── cookie-banner.png
│
├── data/                   ← JSON-Dateien (unverändert, als public assets)
│   ├── musiker.json
│   ├── workshops.json
│   ├── vortraege.json
│   └── aussteller.json
│
├── public/                 ← Statische Assets (1:1 in dist/ kopiert)
│   └── favicon.ico (optional)
│
├── pages/                  ← Weitere HTML-Seiten (statisch, kein Vue)
│   ├── datenschutz.html
│   ├── impressum.html
│   ├── presse.html
│   └── rueckgabe.html
│
├── WORKING/                ← AAMS Workspace
│   └── ...
│
└── docs/                   ← Alle losen .md-Docs hierher
    ├── NEXTCLOUD-INTEGRATION.md
    ├── NEXTCLOUD-QUICKSTART.md
    ├── NEXTCLOUD-TECHNICAL.md
    ├── PAX_Nextcloud_FuD_Strategie_Architekturpapier.md
    ├── BEWERBUNG-FORMULAR-ANFORDERUNGEN.md
    ├── Fragen.md
    └── nextcloud-templates/
        └── *.csv
```

### Tech Stack (neu)
| Was | Alt | Neu |
|-----|-----|-----|
| Framework | Vue 3 CDN | Vue 3 + Vite |
| CSS | Tailwind CDN | Tailwind CSS 3 (PostCSS) |
| Fonts | Google Fonts `@import` | Vite-Plugin oder direkte CSS |
| JS-Struktur | Global scope, inline | ES-Module, `.vue` SFCs |
| Dev-Server | Python `http.server` | `vite` (HMR) |
| Build | — | `vite build` → `dist/` |
| Config | `window.PAX_CONFIG` | `import { config } from './config.js'` |

---

## aufgaben-plan

### Phase 1 — Setup (Vite + Dependencies)
- [ ] `package.json` initialisieren
- [ ] Vite + `@vitejs/plugin-vue` installieren
- [ ] Tailwind CSS + PostCSS + Autoprefixer installieren
- [ ] `vite.config.js` erstellen
- [ ] `tailwind.config.js` + `postcss.config.js` erstellen
- [ ] `.gitignore` um `node_modules/`, `dist/` erweitern

### Phase 2 — Verzeichnis-Cleanup
- [ ] Loose `.md`-Docs nach `docs/` verschieben (außer README, AGENTS, READ-AGENT)
- [ ] `nextcloud-templates/` nach `docs/nextcloud-templates/` verschieben
- [ ] `bewerbung/` bewerten — ggf. nach `docs/bewerbung/`
- [ ] `start-dev-server.ps1` deprecaten (Hinweis: `npm run dev` nutzen)
- [ ] `White-Workpaper.md` + Legacy-Workpaper nach `WORKING/WORKPAPER/closed/` verschieben
- [ ] HTML-Seiten nach `pages/` verschieben

### Phase 3 — Code-Migration
- [ ] `src/config.js` zu ES-Module umbauen (kein `window.*`)
- [ ] `src/nextcloud-api.js` zu ES-Module umbauen
- [ ] Vue-App aus `index.html` extrahieren → `src/main.js` + `src/App.vue`
- [ ] CSS aus `index.html` extrahieren → `src/style.css`
- [ ] Komponenten aufteilen (ca. 6–8 SFCs)
- [ ] JSON-Daten als `fetch('/data/musiker.json')` einbinden (public-Ordner)

### Phase 4 — Build & Deploy
- [ ] `npm run dev` testen (HMR)
- [ ] `npm run build` → `dist/` prüfen
- [ ] `vite.config.js` für `base` konfigurieren (je nach Hosting)
- [ ] `.github/copilot-instructions.md` mit neuen Befehlen aktualisieren
- [ ] `READ-AGENT.md` mit neuem Stack aktualisieren

---

## entscheidungen (2026-04-06)

| Thema | Entscheidung |
|-------|-------------|
| Nextcloud | **Raus** — kein CMS-Backend mehr. Daten manuell als JSON pflegen. |
| Hosting | **Eigener Server** — `base: '/'` in vite.config.js |
| Multi-Page | **Ja** — Vite MPA, alle HTML-Dateien als Rollup-Einstiegspunkte |
| CSS | **Tailwind CSS 3 + DaisyUI 4** |
| Node.js | v22.14.0 / npm 10.9.2 ✅ |
| Daten | `public/data/*.json` — fetch() im Browser, keine API |

## offene_fragen

1. **DaisyUI Theme** — Welches Standard-Theme soll genutzt werden? (light, dark, custom?)
2. **`bewerbung/`-Ordner** — Bleibt als Docs-Referenz oder kommt ein Online-Formular ins Vue-Projekt?

---

## file_protocol

| Aktion | Datei | Ergebnis |
|--------|-------|---------|
| Erstellt | `package.json` | ✅ |
| Erstellt | `vite.config.js` (MPA: 5 Einstiegspunkte) | ✅ |
| Erstellt | `tailwind.config.js` (custom PAX-Theme, DaisyUI 4) | ✅ |
| Erstellt | `postcss.config.js` | ✅ |
| Erstellt | `src/style.css` | ✅ |
| Erstellt | `src/main.js` | ✅ |
| Erstellt | `src/App.vue` | ✅ |
| Erstellt | `src/components/` (9 SFCs) | ✅ |
| Erstellt | `src/components/tabs/` (4 Tab-SFCs mit fetch) | ✅ |
| Aktualisiert | `index.html` → CDN raus, Vite-Module rein | ✅ |
| Verschoben | `data/*.json` → `public/data/` | ✅ |
| Archiviert | `src/config.js`, `src/nextcloud-api.js` → `docs/` | ✅ |
| Verschoben | 7 loose .md-Docs → `docs/` | ✅ |
| Verschoben | `nextcloud-templates/` → `docs/nextcloud-templates/` | ✅ |
| Verschoben | `bewerbung/` → `docs/bewerbung/` | ✅ |
| Archiviert | Legacy-Workpaper → `WORKING/WORKPAPER/closed/` | ✅ |
| Aktualisiert | `.gitignore` (dist/, .vite/ hinzugefügt) | ✅ |
| Ausgeführt | `npm install` — 113 packages, 0 vulnerabilities | ✅ |
| Getestet | `npm run build` — 34 modules, dist/ erzeugt | ✅ |

---

## next_steps

1. **Inhalte migrieren** — Texte + HTML aus altem `index.html` (liegt in WORKING als Backup) in Komponenten übertragen
2. **Neue JSON-Daten** — Künstler, Workshops, Vorträge, Aussteller aus Listen → `public/data/*.json`  
3. **Legal-Pages** — `datenschutz.html`, `impressum.html` etc. auf Vite-Layout umstellen (ggf. eigene Vue-App)  
4. **DaisyUI-Theme** — Farben und Theme-Name final abstimmen  
5. **Deploy** — `npm run build` → `dist/` auf eigenen Server deployen
