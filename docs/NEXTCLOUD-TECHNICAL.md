# 📊 Nextcloud Integration - Technischer Überblick

## Zusammenfassung

Die PAX Festival Website ist jetzt vollständig für Nextcloud Tables vorbereitet. Das System funktioniert sowohl im Entwicklungsmodus (lokale JSON) als auch im Production-Modus (Nextcloud).

## 🎯 Was wurde implementiert?

### 1. Konfigurations-System
- `src/config.js` - Zentrale Konfiguration
- `.env.example` - Vorlage für Umgebungsvariablen
- Entwicklungs- vs. Production-Modus

### 2. Nextcloud API Integration
- `src/nextcloud-api.js` - Vollständige API-Anbindung
- Automatisches Caching (15 Minuten)
- Fehlerbehandlung mit Fallback
- Transformation von Nextcloud-Format → JSON-Format

### 3. Angepasste Website
- `index.html` - Vue.js App mit Nextcloud-Support
- Automatisches Laden aus Nextcloud oder lokalen Dateien
- Live-Reload-Funktion (`window.paxReloadData()`)
- Debug-Modus für Entwicklung

### 4. Import-Templates
- 4 CSV-Dateien für schnellen Nextcloud-Import
- Beispieldaten enthalten
- Korrekte Spaltenstruktur

### 5. Dokumentation
- `NEXTCLOUD-INTEGRATION.md` - Vollständige Anleitung (300+ Zeilen)
- `NEXTCLOUD-QUICKSTART.md` - Schnelleinstieg
- `nextcloud-templates/README.md` - Import-Anleitung
- Aktualisiertes `README.md`

## 🔄 Datenfluss

```
┌─────────────────────────────────────────────────────────┐
│                    PAX Festival Website                  │
└─────────────────────────────────────────────────────────┘
                            │
                    ┌───────┴────────┐
                    │   src/config.js │
                    │  useDevelopmentMode?
                    └───────┬────────┘
                            │
            ┌───────────────┴───────────────┐
            │                               │
    ┌───────▼───────┐            ┌────────▼────────┐
    │  DEVELOPMENT  │            │   PRODUCTION    │
    │   Mode: true  │            │   Mode: false   │
    └───────┬───────┘            └────────┬────────┘
            │                             │
            │                             │
    ┌───────▼────────┐          ┌────────▼─────────┐
    │ data/*.json    │          │ Nextcloud Tables │
    │ (lokal)        │          │ (API)            │
    └────────────────┘          └──────────────────┘
                                         │
                                  ┌──────▼──────┐
                                  │   Cache     │
                                  │  (15 Min)   │
                                  └─────────────┘
```

## 🛠️ API-Endpunkte

Die Nextcloud Tables API wird wie folgt genutzt:

```
GET /ocs/v2.php/apps/tables/api/2/tables/{tableId}/rows
```

**Header:**
- `Authorization: Basic {base64(username:password)}`
- `OCS-APIRequest: true`
- `Content-Type: application/json`

**Response Format:**
```json
{
  "ocs": {
    "data": [
      {
        "id": 123,
        "data": {
          "name": "Die Testband",
          "genre": "Weltmusik",
          ...
        }
      }
    ]
  }
}
```

## 📦 Datentransformation

Die API transformiert Nextcloud-Daten automatisch:

### Beispiel: Musiker

**Nextcloud Tables (Input):**
```json
{
  "id": 123,
  "data": {
    "name": "Die Testband",
    "genre": "Weltmusik",
    "land": "Deutschland"
  }
}
```

**Website JSON (Output):**
```json
{
  "id": 123,
  "name": "Die Testband",
  "genre": "Weltmusik",
  "land": "Deutschland",
  "links": {
    "website": "",
    "instagram": ""
  }
}
```

## ⚡ Performance

### Caching-Strategie
- **Cache-Dauer:** 15 Minuten (konfigurierbar)
- **Cache-Speicher:** In-Memory (Browser)
- **Invalidierung:** Manuell via `window.paxReloadData()`

### Optimierungen
- Paralleles Laden aller 4 Kategorien
- Lazy Loading (nur aktiver Tab wird geladen)
- Fallback auf lokale Daten bei Fehlern

## 🔒 Sicherheit

### API-Zugang
- **App-Passwort** statt echtem Passwort
- **Basic Auth** über HTTPS
- Keine Credentials im Git (.gitignore)

### Best Practices
- ✅ `.env` wird ignoriert
- ✅ Beispiel-Konfiguration in `.env.example`
- ✅ Production-Config nie committen
- ✅ HTTPS für Nextcloud erforderlich

## 🧪 Testing

### Entwicklung testen
```powershell
# Server starten
.\start-dev-server.ps1

# Browser öffnen
http://localhost:8000

# Konsole öffnen (F12)
# Sollte zeigen: "📊 Datenquelle: lokal"
```

### Nextcloud testen
```javascript
// In src/config.js:
useDevelopmentMode: false

// Browser-Konsole:
window.paxReloadData()  // Daten neu laden
```

## 📁 Neue Dateien

```
PAX Festival/
├── src/
│   ├── config.js                    # ✨ NEU: Konfiguration
│   └── nextcloud-api.js             # ✨ NEU: API-Integration
├── nextcloud-templates/             # ✨ NEU: Import-Templates
│   ├── musiker-template.csv
│   ├── workshops-template.csv
│   ├── vortraege-template.csv
│   ├── aussteller-template.csv
│   └── README.md
├── .env.example                     # ✨ NEU: Umgebungsvariablen
├── .gitignore                       # 🔄 ERWEITERT
├── NEXTCLOUD-INTEGRATION.md         # ✨ NEU: Dokumentation
├── NEXTCLOUD-QUICKSTART.md          # ✨ NEU: Quick-Start
└── README.md                        # 🔄 AKTUALISIERT
```

## 🎓 Für das Orga-Team

### 1. Sofort nutzbar (Entwicklung)
- Website funktioniert **ohne Änderungen**
- Nutzt weiterhin lokale JSON-Dateien
- **Kein Setup erforderlich**

### 2. Migration zu Nextcloud (später)
1. Nextcloud Tables einrichten (1-2 Stunden)
2. CSV-Templates importieren (5 Minuten)
3. `src/config.js` anpassen (5 Minuten)
4. Testen und live schalten (30 Minuten)

**Geschätzte Gesamtzeit:** 2-3 Stunden

## 🚀 Deployment-Strategie

### Phase 1: Entwicklung (Jetzt)
- ✅ Lokale JSON-Dateien
- ✅ Website funktioniert
- ✅ Prototyp zeigbar

### Phase 2: Nextcloud-Setup (Nach Feedback)
- Tabellen in Nextcloud anlegen
- Struktur mit Orga-Team finalisieren
- API-Zugang einrichten

### Phase 3: Production (Live-Schaltung)
- `useDevelopmentMode: false`
- Cache-Dauer anpassen
- Monitoring aufsetzen

## 🆘 Support-Kontakte

**Bei technischen Problemen:**
1. ✅ [NEXTCLOUD-INTEGRATION.md](NEXTCLOUD-INTEGRATION.md) Troubleshooting lesen
2. ✅ Browser-Konsole prüfen (F12)
3. ✅ Debug-Modus aktivieren (`debug: true`)

**Bei Nextcloud-Fragen:**
- Nextcloud-Dokumentation: https://docs.nextcloud.com/
- Nextcloud Tables: https://github.com/nextcloud/tables

## ✅ Checkliste für Production

- [ ] Nextcloud Tables App installiert
- [ ] 4 Tabellen erstellt
- [ ] CSV-Templates importiert
- [ ] App-Passwort erstellt
- [ ] Table-IDs notiert
- [ ] `src/config.js` konfiguriert
- [ ] `useDevelopmentMode: false` gesetzt
- [ ] Website getestet
- [ ] CORS in Nextcloud konfiguriert (falls nötig)
- [ ] HTTPS für Nextcloud aktiv
- [ ] Backup der JSON-Dateien erstellt

---

**Status:** ✅ Bereit für Deployment  
**Version:** 1.0.0  
**Datum:** 09.02.2026  
**Erstellt für:** PAX Festival 2026
