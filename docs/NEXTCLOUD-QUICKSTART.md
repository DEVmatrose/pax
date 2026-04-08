# ⚡ Nextcloud Integration - Quick Start

## Für Entwickler (Lokal testen)

### 1. Server starten
```powershell
.\start-dev-server.ps1
```

### 2. Im Browser öffnen
```
http://localhost:8000
```

### 3. Entwicklungsmodus (Standard)
Die Website nutzt automatisch die **lokalen JSON-Dateien** aus `data/`.

**Nichts weiter zu tun!** ✅

---

## Für Production (Nextcloud aktivieren)

### 1. Nextcloud Tables einrichten
- 4 Tabellen erstellen (siehe [NEXTCLOUD-INTEGRATION.md](NEXTCLOUD-INTEGRATION.md))
- Spalten wie in der Doku anlegen

### 2. API-Zugang konfigurieren
1. **App-Passwort** in Nextcloud erstellen
2. **Table-IDs** notieren (aus Browser-URL)

### 3. `src/config.js` anpassen

```javascript
const PAX_CONFIG = {
    useDevelopmentMode: false,  // ← AUF FALSE SETZEN!
    
    nextcloud: {
        url: 'https://deine-nextcloud.de',
        username: 'user',
        password: 'app-passwort',
        tables: {
            musiker: '123',
            workshops: '124',
            vortraege: '125',
            aussteller: '126'
        }
    }
};
```

### 4. Testen
- Website öffnen
- **F12** drücken → Console-Tab
- Sollte zeigen: `📊 Datenquelle: nextcloud`

---

## Mini-Troubleshooting

| Problem | Lösung |
|---------|--------|
| CORS-Fehler | Nextcloud CORS-Einstellung prüfen |
| 401 Unauthorized | App-Passwort neu erstellen |
| 404 Not Found | Table-IDs überprüfen |
| Keine Daten | Browser-Konsole öffnen (F12) |

---

## Daten aktualisieren

### Im Browser (Developer Tools):
```javascript
window.paxReloadData()
```

### Cache-Dauer ändern:
In `src/config.js`:
```javascript
cacheDuration: 15  // Minuten
```

---

## 🔄 Workflow

```
Nextcloud Tables
      ↓
   (Daten eingeben)
      ↓
   PAX Website
      ↓
  (Auto-Reload alle 15 Min)
```

---

**Vollständige Dokumentation:**  
→ [NEXTCLOUD-INTEGRATION.md](NEXTCLOUD-INTEGRATION.md)
