# PAX Festival - Entwicklung

## Lokale Entwicklung

### Voraussetzungen
- Python 3.x installiert ([Download](https://www.python.org/downloads/))

### Server starten

**PowerShell:**
```powershell
.\start-dev-server.ps1
```

**Oder manuell:**
```powershell
python -m http.server 8000
```

Dann öffne im Browser: **http://localhost:8000/index.html**

### Programm-Daten pflegen

Alle Programm-Inhalte sind in separaten JSON-Dateien im `data/` Ordner:

- `data/musiker.json` - Musiker & Bands
- `data/workshops.json` - Workshop-Angebote
- `data/vortraege.json` - Vorträge & Speaker
- `data/aussteller.json` - Aussteller & Stände

**Anleitung:** Siehe [data/README.md](data/README.md)

### Wichtig
- **Lokal:** Immer über Python-Server öffnen (wegen CORS)
- **Auf Server/GitHub Pages:** Funktioniert direkt ohne Server
- **JSON-Dateien bearbeiten:** Niemals direkt im HTML-Code!

## Deployment

Die Website läuft auf jedem Webserver ohne zusätzliche Konfiguration:
- GitHub Pages
- Netlify
- Vercel
- Normales Webhosting

Einfach alle Dateien hochladen - fertig! ✅
