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
