# PAX Festival 2026 - Website Entwicklung

## 🚀 Schnellstart

### Voraussetzungen
- **Python 3.x** installiert ([Download](https://www.python.org/downloads/))
- PowerShell (auf Windows vorinstalliert)

### Lokalen Dev-Server starten

**Option 1: PowerShell-Script (empfohlen)**
```powershell
.\start-dev-server.ps1
```
⚠️ **Wichtig:** NICHT mit `python start-dev-server.ps1` ausführen!

**Option 2: Manuell**
```powershell
python -m http.server 8000
```

**Website öffnen:**
- Browser: `http://localhost:8000/index.html`
- Oder direkt: `http://localhost:8000`

**Server beenden:** `STRG + C` im Terminal

---

## 📂 Projekt-Struktur

```
PAX Festival/
├── index.html                          # Hauptseite (One-Pager)
├── impressum.html                      # Impressum (Platzhalter)
├── datenschutz.html                    # Datenschutzerklärung (Platzhalter)
├── rueckgabe.html                      # Ticket-Rückgabe & AGB (Platzhalter)
├── presse.html                         # Pressebereich (Platzhalter)
├── data/                               # JSON-Programmdaten
│   ├── musiker.json                    # Musiker & Bands
│   ├── workshops.json                  # Workshop-Angebote
│   ├── vortraege.json                  # Vorträge & Speaker
│   ├── aussteller.json                 # Aussteller & Stände
│   └── README.md                       # JSON-Wartungsanleitung
├── bewerbung/                          # Bewerbungssystem
│   ├── README.md                       # Workflow & Anleitung
│   └── *.pdf                          # PDF-Formulare (noch zu erstellen)
├── src/assets/images/                  # Bilder & Medien
│   ├── pax-social-preview.png         # Social Media Vorschaubild
│   ├── musiker/                        # Künstlerfotos
│   ├── workshops/                      # Workshop-Bilder
│   ├── vortraege/                      # Redner-Fotos
│   └── aussteller/                     # Aussteller-Fotos
├── start-dev-server.ps1               # Dev-Server Script
├── README.md                          # Diese Datei
├── White-Workpaper.md                 # Projekt-Dokumentation
├── BEWERBUNG-FORMULAR-ANFORDERUNGEN.md # Bewerbungs-Spezifikationen
└── Fragen.md                          # Offene Fragen
```

---

## 🎨 Programm-Daten pflegen

Alle Festival-Inhalte werden über JSON-Dateien verwaltet (kein CMS nötig!):

### JSON-Dateien
- **`data/musiker.json`** - Musiker & Bands
- **`data/workshops.json`** - Workshop-Angebote  
- **`data/vortraege.json`** - Vorträge & Speaker
- **`data/aussteller.json`** - Aussteller & Stände

### Anleitung
Siehe [data/README.md](data/README.md) für:
- Detaillierte Feld-Erklärungen
- Beispiele für jeden Typ
- Häufige Fehler & Lösungen
- JSON-Validierung

### Workflow
1. JSON-Datei im `data/` Ordner bearbeiten
2. Dev-Server starten (falls nicht läuft)
3. Im Browser testen: `http://localhost:8000`
4. Bei Erfolg: Auf Server hochladen

⚠️ **Wichtig:** 
- Niemals JSON-Daten direkt im HTML-Code ändern!
- Immer JSON-Syntax prüfen (z.B. auf [jsonlint.com](https://jsonlint.com))
- Bilder im richtigen Ordner ablegen (`src/assets/images/[kategorie]/`)

---

## 📧 Bewerbungssystem

### Für Programm-Teilnehmer
Auf der Website gibt es in jedem Programm-Tab Bewerbungs-Banner mit:
- PDF-Download-Button (Formular)
- E-Mail-Link zu `bewerbung@pax-festival.de`

### Für das PAX-Team
**Workflow:** Siehe [bewerbung/README.md](bewerbung/README.md)

**Feld-Spezifikationen:** [BEWERBUNG-FORMULAR-ANFORDERUNGEN.md](BEWERBUNG-FORMULAR-ANFORDERUNGEN.md)

**TODO:** 
- [ ] PDF-Formulare erstellen (4 Stück)
- [ ] In `bewerbung/` Ordner ablegen

---

## 🌐 Deployment

### Lokale Entwicklung
- **CORS-Problem:** Dateien müssen über HTTP-Server laufen
- **Lösung:** `.\start-dev-server.ps1` oder `python -m http.server 8000`

### Production (Server/GitHub Pages)
Die Website funktioniert auf jedem Standard-Webhosting **ohne zusätzliche Konfiguration**:

✅ **Kompatibel mit:**
- GitHub Pages
- Netlify
- Vercel  
- Webhosting (z.B. All-Inkl, Hetzner, etc.)

**Deployment-Schritte:**
1. Alle Dateien hochladen (FTP, Git, etc.)
2. `index.html` als Startseite festlegen
3. Fertig! ✅

**Kein Server-Setup nötig:**
- Keine Node.js Installation
- Keine Build-Prozesse
- Keine Datenbank
- Pure HTML/CSS/JavaScript

---

## 🛠️ Technologie-Stack

- **Frontend:** Vue.js 3 (CDN)
- **Styling:** Tailwind CSS (CDN)
- **Daten:** JSON-Dateien (statisch)
- **Icons:** Emoji + SVG
- **Bilder:** JPG/PNG (WebP-Optimierung empfohlen)

**Keine Build-Tools nötig!** Alles läuft direkt im Browser.

---

## 📋 Wichtige Hinweise

### Lokal vs. Server
| Aspekt | Lokal | Server/GitHub Pages |
|--------|-------|---------------------|
| **Start** | Python-Server nötig | Direkt verfügbar |
| **CORS** | Problem ohne Server | Kein Problem |
| **JSON-Loading** | Fetch via HTTP | Fetch via HTTP |
| **Änderungen** | Sofort sichtbar | Nach Upload |

### Bilder
- **Musiker:** 800×800px (Quadrat oder Hochformat)
- **Workshops:** 1200×800px (Querformat)
- **Vorträge:** 1200×800px (Querformat)
- **Aussteller:** 800×600px (Querformat)
- **Max. Dateigröße:** 2 MB (besser: unter 500 KB)

### JSON-Syntax
```json
{
  "id": 1,
  "name": "Beispiel",
  "beschreibung": "Text hier"
}
```
- Doppelte Anführungszeichen `"` (nie einfache `'`)
- Komma nach jedem Feld (außer dem letzten)
- Keine Kommentare möglich

---

## 🆘 Troubleshooting

### Server startet nicht
```
python --version
```
Falls "command not found": Python ist nicht installiert oder nicht im PATH.

### CORS-Fehler im Browser
❌ **Falsch:** Datei direkt öffnen (`file://...`)  
✅ **Richtig:** Über HTTP-Server (`http://localhost:8000`)

### JSON wird nicht geladen
1. JSON-Syntax prüfen auf [jsonlint.com](https://jsonlint.com)
2. Browser-Console öffnen (F12) → Fehler prüfen
3. Dateiname korrekt? (z.B. `musiker.json` nicht `Musiker.json`)

### Bilder werden nicht angezeigt
1. Pfad in JSON korrekt? (z.B. `src/assets/images/musiker/name.jpg`)
2. Datei existiert im richtigen Ordner?
3. Groß-/Kleinschreibung beachten!

---

## 📚 Weitere Dokumentation

- **Projekt-Status:** [White-Workpaper.md](White-Workpaper.md)
- **JSON-Pflege:** [data/README.md](data/README.md)
- **Bewerbungen:** [bewerbung/README.md](bewerbung/README.md) 
- **Formular-Specs:** [BEWERBUNG-FORMULAR-ANFORDERUNGEN.md](BEWERBUNG-FORMULAR-ANFORDERUNGEN.md)

---

**Viel Erfolg mit PAX Festival 2026! 🕊️**
