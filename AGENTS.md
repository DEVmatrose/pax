# AGENTS.md — PAX Festival 2026

_AAMS-MINI/1.0 — bridges AAMS to Copilot, Cursor, Claude Code, Codex, Windsurf and all AGENTS.md-compatible tools._

---

## Project Context

**PAX Festival 2026** — Christian music & culture festival, 23.–26. Juli, Friesack  
Static website (Vue.js 3 CDN, no build step). Nextcloud Tables as CMS backend.  
See [READ-AGENT.md](READ-AGENT.md) for the full project snapshot.

---

## Mandatory Agent Behaviour

### On Every Session Start
1. Read `READ-AGENT.md`
2. Read `WORKING/MEMORY/ltm-index.md`
3. Check `WORKING/WORKPAPER/` for open workpapers — open existing or create new
4. Name new workpapers: `{YYYY-MM-DD}-{agent}-{topic}.md`

### On Every Session End
1. Finalize workpaper (file protocol, decisions, next steps)
2. Ingest key findings into `WORKING/MEMORY/ltm-index.md`
3. Move workpaper to `WORKING/WORKPAPER/closed/`
4. Update `READ-AGENT.md` if architecture changed

---

## Documentation Model

| Layer | Location | Purpose |
|-------|----------|---------|
| Workpaper | `WORKING/WORKPAPER/` | Session-scoped, closed at end |
| Whitepaper | `WORKING/WHITEPAPER/` | Stable architecture truth |
| Diary | `WORKING/DIARY/` | Chronological decision log (monthly, max 10 lines/entry) |
| Memory | `WORKING/MEMORY/ltm-index.md` | Long-term cross-session context |

---

## Secrets Policy

- **Never** write secrets in workpapers, whitepapers, memory, or any WORKING file
- Credentials live in `.env` only (gitignored)
- See `.env.example` for required variables

---

## Tech Stack Quick Reference

- **Frontend:** Vue.js 3 (CDN), single `index.html`, no bundler
- **Data:** `data/*.json` (static) + `src/nextcloud-api.js` (live)
- **Config:** `src/config.js`
- **Dev:** `start-dev-server.ps1` → Python HTTP server, port 8080
