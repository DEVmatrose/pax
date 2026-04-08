# Workpaper: AAMS Bootstrap Session
**Date:** 2026-04-06  
**Agent:** GitHub Copilot (Claude Sonnet 4.6)  
**Topic:** First-entry bootstrap — repository inventory & AAMS workspace setup  
**Status:** OPEN

---

## session_goal

Bootstrap the AAMS workspace structure for the PAX Festival project.  
- Create all required `WORKING/` subdirectories  
- Produce this first workpaper as mandated by `agent_contract.on_first_entry`  
- Create `READ-AGENT.md`, `AGENTS.md`, and `.github/copilot-instructions.md`  
- Seed the LTM memory index

---

## repository_inventory

```
PAX Festival/
├── .env.example                         # Environment variable template (Nextcloud credentials)
├── .gitignore
├── index.html                           # Main website (Vue.js 3, single-page, no build step)
├── datenschutz.html                     # Legal: Datenschutz
├── impressum.html                       # Legal: Impressum
├── presse.html                          # Press page
├── rueckgabe.html                       # Returns page
├── README.md                            # Main project docs
├── White-Workpaper.md                   # Implementation status (legacy, pre-AAMS)
├── BEWERBUNG-FORMULAR-ANFORDERUNGEN.md # Application form field specs
├── NEXTCLOUD-INTEGRATION.md            # Full Nextcloud integration guide
├── NEXTCLOUD-QUICKSTART.md             # Nextcloud quick start
├── NEXTCLOUD-TECHNICAL.md              # Technical deep-dive
├── PAX_Nextcloud_FuD_Strategie_Architekturpapier.md  # Architecture decision doc
├── Fragen.md                            # Open questions log
├── start-dev-server.ps1                 # PowerShell dev server (Python HTTP, port 8080)
├── Workpaper-2026-02-09-Nextcloud-Integration-Status.md  # Legacy workpaper
│
├── data/                                # JSON programme data (static fallback)
│   ├── musiker.json                     # Musicians: genre, country, slots, social media
│   ├── workshops.json                   # Workshops: leader, category, dates, capacity
│   ├── vortraege.json                   # Talks: speaker, org, topics
│   ├── aussteller.json                  # Exhibitors: category, offer, booth number
│   └── README.md                        # Data maintenance guide (DE)
│
├── bewerbung/                           # Application forms
│   └── README.md                        # PDF creation workflow
│
├── nextcloud-templates/                 # CSV import templates for Nextcloud Tables
│   ├── musiker-template.csv
│   ├── workshops-template.csv
│   ├── vortraege-template.csv
│   ├── aussteller-template.csv
│   └── README.md
│
├── src/
│   ├── config.js                        # Nextcloud API config (URL, credentials)
│   ├── nextcloud-api.js                 # API integration layer
│   └── assets/images/
│       ├── pax-social-preview.png       # Social preview 1200×630
│       ├── hero-girl.png
│       ├── cookie-banner.png
│       └── Screenshot 2026-01-06 *.png (multiple)
│
└── WORKING/                             # ← Created this session (AAMS workspace)
    ├── WHITEPAPER/
    ├── WORKPAPER/
    │   └── closed/
    ├── MEMORY/
    │   └── ltm-index.md
    ├── AGENT-MEMORY/
    ├── DIARY/
    ├── LOGS/
    ├── GUIDELINES/
    └── TOOLS/
```

**File count:** ~40 files  
**Status legend:** All source files present, no build artifacts, no node_modules.

---

## key_findings

### Project
- **PAX Festival 2026** — Christian music & culture festival, 23.–26. Juli, Friesack
- Static website (no build step), Vue.js 3 via CDN in `index.html`
- Four content categories: Musicians, Workshops, Talks, Exhibitors

### Technology Stack
- Frontend: Vue.js 3 (CDN), vanilla HTML/CSS/JS, no bundler
- Data storage: local JSON files (`data/*.json`) as static fallback
- Integration layer: `src/nextcloud-api.js` → Nextcloud Tables REST API
- Dev server: Python HTTP server via `start-dev-server.ps1` (port 8080)
- Config: `src/config.js` reads from `.env` (Nextcloud base URL + credentials)

### Architecture Decisions
- Nextcloud Tables chosen as CMS replacement (no technical skills needed for editors)
- JSON files remain as offline fallback when Nextcloud is unreachable
- No secrets in repo — `.env.example` present, `.env` gitignored

### Documentation State
- Good: README comprehensive, Nextcloud guides thorough, data maintenance documented
- Legacy: `White-Workpaper.md` and `Workpaper-2026-02-09-*` predate AAMS — content valid
- Missing before this session: AAMS workspace, AGENTS.md, copilot-instructions.md

### Open Todos (from White-Workpaper.md, status 07.01.2026)
- [ ] PDF application forms (Musiker, Workshop, Vortrag, Aussteller) not yet created
- [ ] Nextcloud Tables integration status unclear (see Workpaper-2026-02-09)

---

## open_questions

1. **Nextcloud integration live?** — `Workpaper-2026-02-09-Nextcloud-Integration-Status.md` exists but was excluded from search results (gitignore pattern?). Current connection status unknown.
2. **PDF Bewerbungsformulare** — `bewerbung/README.md` lists all four as `[ ]` unchecked. Are these still outstanding?
3. **Domain / hosting** — No deployment config found. Is the site served from Nextcloud, a CDN, or a separate host?
4. **`Fragen.md`** — Not read yet. May contain active open questions.
5. **LTM mode** — Currently set to `markdown` (zero dependencies). Switch to `vector` (ChromaDB) required?

---

## file_protocol

| Action | File | Result |
|--------|------|--------|
| Created | `WORKING/WHITEPAPER/.gitkeep` | ✅ |
| Created | `WORKING/WORKPAPER/closed/.gitkeep` | ✅ |
| Created | `WORKING/MEMORY/.gitkeep` | ✅ |
| Created | `WORKING/AGENT-MEMORY/.gitkeep` | ✅ |
| Created | `WORKING/DIARY/.gitkeep` | ✅ |
| Created | `WORKING/LOGS/.gitkeep` | ✅ |
| Created | `WORKING/GUIDELINES/.gitkeep` | ✅ |
| Created | `WORKING/TOOLS/.gitkeep` | ✅ |
| Created | `WORKING/WORKPAPER/2026-04-06-Copilot-bootstrap.md` | ✅ (this file) |
| Created | `READ-AGENT.md` | → step 4 |
| Created | `AGENTS.md` | → step 5 |
| Created | `.github/copilot-instructions.md` | → step 5 |
| Created | `WORKING/MEMORY/ltm-index.md` | → step 6 |

---

## next_steps

1. **Read `Fragen.md`** at session start to get current open questions
2. **Verify Nextcloud status** — run a quick API test or inspect `Workpaper-2026-02-09`
3. **PDF forms** — confirm whether Bewerbungsformulare are still outstanding
4. **Diary entry** — create `WORKING/DIARY/2026-04.md` with initial context
5. **On session end** — ingest this workpaper into `ltm-index.md`, move to `closed/`
