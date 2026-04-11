# LTM Index — PAX Festival 2026

_Long-term agent memory. AAMS-MINI/1.0. LTM mode: markdown._  
_Max 100 entries. Current: 2. Warning at 90._

---

## Entry 001 — 2026-04-06 | Bootstrap

**Session:** AAMS first-entry bootstrap (GitHub Copilot / Claude Sonnet 4.6)  
**Workpaper:** `WORKING/WORKPAPER/2026-04-06-Copilot-bootstrap.md`

**Key facts:**
- PAX Festival 2026 — 23.–26. Juli, Friesack. Christian music & culture festival.
- Stack: Vue.js 3 CDN / no bundler / `index.html` / Python dev server port 8080
- Data: `data/*.json` (4 categories) + Nextcloud Tables REST API via `src/nextcloud-api.js`
- Config in `src/config.js` → reads `.env` (gitignored). `.env.example` present.
- AAMS workspace bootstrapped: all `WORKING/` subdirectories created.
- `READ-AGENT.md`, `AGENTS.md`, `.github/copilot-instructions.md` created.
- Legacy workpapers: `White-Workpaper.md` (status 07.01.2026), `Workpaper-2026-02-09-Nextcloud-Integration-Status.md`

**Open items at session start:**
- Nextcloud integration live status unknown — needs verification
- PDF Bewerbungsformulare (4×) not yet created
- `Fragen.md` not yet read — may contain active questions
- Domain/hosting setup not documented

**Decisions:**
- LTM mode: `markdown` (zero dependencies)
- No vector store configured yet

---

## Entry 002 — 2026-04-06 | Vite-Migration

**Session:** Vite + Vue 3 Setup & Cleanup (GitHub Copilot / Claude Sonnet 4.6)  
**Workpaper:** `WORKING/WORKPAPER/closed/2026-04-06-Copilot-vite-migration.md`

**Entscheidungen:**
- Nextcloud gestrichen — Daten manuell als JSON pflegen
- Stack: Vite 6 + Vue 3 + Tailwind CSS 3 + DaisyUI 4 (custom PAX-Theme)
- Multi-Page: 5 Vite-Einstiegspunkte (index, datenschutz, impressum, presse, rueckgabe)
- Hosting: eigener Server — `base: '/'`
- Data: `public/data/*.json` → `fetch('/data/*.json')` im Browser
- Dev: `npm run dev` (localhost:5173 HMR), Build: `npm run build` → `dist/`

**Was erledigt:**
- Vite-Projektstruktur komplett aufgebaut, `npm run build` ✅ (34 modules, 0 vulnerabilities)
- 9 Komponenten + 4 Tab-SFCs (MusikerTab, WorkshopsTab, VortraegeTab, AusstellerTab)
- Root aufgeräumt: Docs → `docs/`, Legacy → archiviert, Nextcloud-Code → `docs/`

**Noch offen:**
- Texte/HTML aus altem index.html in Komponenten füllen
- Neue JSON-Daten (Künstler etc.) befüllen
- Legal-Pages auf Vite-Layout

---

## Session 4+5 — Content Migration & Page-Redesigns (2026-04-08)
**Agent:** GitHub Copilot (Claude Sonnet 4.6)
**Workpaper:** `WORKING/WORKPAPER/2026-04-07-Copilot-content-migration.md`

**Entscheidungen:**
- Multi-HTML entfernt → nur `index.html` als Vite-Einstiegspunkt (Single SPA)
- Legal-Pages als Vue-Routen (nicht eigene HTML-Dateien): /datenschutz, /impressum, /presse
- Hero-Images per Vite-Import (nicht public/), alle Bilder in `src/assets/images/`
- Leaflet-Icons in Vite: `delete L.Icon.Default.prototype._getIconUrl` + `mergeOptions`

**Views jetzt vollständig:**
- HomeView: 9 Bereiche inkl. Leaflet-Karte, Bereich 6 Figma-Design
- InfoView: Hero + Campwoche + Was ist PAX? + ABC + Orte (3x3) + Tickets + CTA
- KontaktView: Hero (kontakt-hero.png) + Intro-Banner (purple) + Kontaktformular
- MitmachenView: Hero (mitmach-hero.png) + Ticket-Section + Spenden-Section + Bewerbungsformular
- DatenschutzView, ImpressumView, PresseView: Fertig aus alten HTML-Seiten migriert

**Programm-Tabs (unverändert, noch ausstehend):**
- 4 Tabs fertig: MusikerTab, VortraegeTab, WorkshopsTab, AusstellerTab
- JSON-Daten: alle 4 Dateien haben Echtdaten
- Fehlend: HealingoaseTab, KinderTab
- Design-Anpassung an PAX-Stil ausstehend

---

## Entry 007 — 2026-04-11 — Design-Sprint: Corporate Design & Mobile-Nav

**Agent:** GitHub Copilot (Claude Sonnet 4.6)
**Workpaper:** `WORKING/WORKPAPER/closed/2026-04-11-copilot-navbar-mobile.md`

**Entscheidungen:**
- Primärfarbe Dunkelviolett `#342268` — in Figma festgelegt, ab jetzt Markenwert
- `pax-blue` in Tailwind und DaisyUI `primary` = `#342268` (war `#2E3192`)
- `pax-deep` als Alias ebenfalls = `#342268`
- Schriftart gewechselt: `Inter` → `Gantari` (Google Fonts, alle Gewichte)
- Oranger Akzent-Streifen oben in Navbar entfernt (war `bg-pax-gold h-1`)
- Hamburger-Menü implementiert (breakpoint md), Desktop unverändert
- Logo in Navbar verdoppelt (h-10 → h-20)
- Menüpunkte `font-semibold` → `font-normal`
- CTA-Block „Feier mit uns den Frieden" in `AppFooter.vue` oben verankert (globaler Block, kein Duplikat nötig)
- `SectionPhotoHero.vue`: neues Prop `title-align="bottom-left"` + `bottom-color` für nahtlosen Übergang
- Emoji-Icons aus ProgrammView und ProgrammeTabs entfernt
- Leaflet Ukraine-Flagge per CSS ausgeblendet (Attribution bleibt erhalten)
- Home-Map-Icons: Emoji → SVG in `pax-gold`

**Status alle Programm-Hero-Bereiche:**
- Musik, Vorträge, Workshops, Healingoase, Aussteller, Kinder: Titel unten-links, `bottom-color` passend zur Info-Box

**Noch offen:**
- Eigenes Bild für KinderView Hero (aktuell: `prog-hero-aussteller.png` als Platzhalter)
- Bewerbungslink in AusstellerTab.vue (User hat Änderung zurückgenommen — absichtlich?)

**Workpaper:** `WORKING/WORKPAPER/2026-04-10-Copilot-programm-refactor.md`

**Entscheidungen:**
- `public/data/*.json` ist die Live-Datenquelle (per fetch geladen), nicht `src/assets/program_json/`
- JSON-Fetches nutzen `import.meta.env.BASE_URL` wegen `base: '/pax/'` in vite.config.js
- Bilder liegen lokal in `public/images/<bereich>/` mit Slug-Namen (z.B. `arne-schmitt.jpg`)
- Bildformat: JPG bevorzugt; PNG nur wenn nötig und dann mit sharp zu JPG konvertieren

**Erledigt:**
- ProgrammView: unified Schedule mit Tagesfilter, Bereichsfilter, List/Grid-Toggle
- `public/data/musiker.json`: 11 Künstler komplett, MEA LIEBE & Renessance nachgetragen
- Bilder aller 11 Musiker heruntergeladen → `public/images/musiker/`
- JSON-Syntax-Bugs (unescaped Quotes) in musiker.json und vortraege.json gefixt

**Offen:**
- Views an tatsächliche Feldnamen anpassen (MusikView, VortraegeView, AusstellerView)
- 12. Musiker von pax.family identifizieren
- Bilder für Aussteller/Vorträge noch ausstehend
- HealingoaseTab, KinderTab noch ohne JSON-Daten
