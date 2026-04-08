# 🔗 PAX Festival - Nextcloud Integration

## Übersicht

Die PAX Festival Website ist jetzt mit Nextcloud Tables integriert! Das Orga-Team kann alle Programminhalte (Musiker, Workshops, Vorträge, Aussteller) direkt in Nextcloud pflegen, und die Website lädt die Daten automatisch.

## 🎯 Features

✅ **Direkte Nextcloud-Anbindung** - Daten aus Nextcloud Tables  
✅ **Entwicklungsmodus** - Fallback auf lokale JSON-Dateien  
✅ **Automatisches Caching** - Reduziert API-Aufrufe  
✅ **Fehler-Fallback** - Bei Nextcloud-Problemen → lokale Daten  
✅ **Live-Reload** - `window.paxReloadData()` für sofortiges Update  

---

## 📋 Schritt 1: Nextcloud Tables App installieren

1. In Nextcloud einloggen
2. Zum **App Store** navigieren (oben rechts, Würfel-Icon)
3. Nach "**Tables**" suchen
4. "Tables" App installieren und aktivieren

---

## 📊 Schritt 2: Tabellen in Nextcloud erstellen

Erstelle **4 Tabellen** in der Nextcloud Tables App:

### 🎵 Tabelle: **Musiker**

| Spaltenname | Typ | Beschreibung |
|-------------|-----|--------------|
| `name` | Text | Name des Künstlers/Band |
| `genre` | Text | Musikgenre |
| `land` | Text | Herkunftsland |
| `beschreibung` | Text (lang) | Beschreibung |
| `image` | Text | URL zum Foto |
| `auftrittszeitpunkt` | Text | z.B. "Freitag, 24. Juli, 20:00 Uhr" |
| `website` | Text | Website-URL |
| `instagram` | Text | Instagram-Link |
| `facebook` | Text | Facebook-Link |
| `youtube` | Text | YouTube-Kanal |
| `spotify` | Text | Spotify-Link |

### 🎨 Tabelle: **Workshops**

| Spaltenname | Typ | Beschreibung |
|-------------|-----|--------------|
| `titel` | Text | Workshop-Titel |
| `leiter` | Text | Name des Leiters |
| `kategorie` | Text | z.B. "Bewegung & Körper" |
| `beschreibung` | Text (lang) | Beschreibung |
| `dauer` | Text | z.B. "90 Minuten" |
| `max_teilnehmer` | Zahl | Maximale Teilnehmerzahl |
| `zeitpunkt` | Text | Zeitpunkt |
| `ort` | Text | Raum/Ort |
| `voraussetzungen` | Text | z.B. "Keine" |
| `mitzubringen` | Text | Mitzubringende Materialien |
| `image` | Text | URL zum Foto |

### 🎤 Tabelle: **Vortraege**

| Spaltenname | Typ | Beschreibung |
|-------------|-----|--------------|
| `titel` | Text | Vortragstitel |
| `redner` | Text | Name des Redners |
| `organisation` | Text | Organisation/Institut |
| `beschreibung` | Text (lang) | Beschreibung |
| `dauer` | Text | z.B. "60 Minuten" |
| `zeitpunkt` | Text | Zeitpunkt |
| `ort` | Text | Raum/Ort |
| `themen` | Text | Themen (kommagetrennt) |
| `image` | Text | URL zum Foto |

### 🛍️ Tabelle: **Aussteller**

| Spaltenname | Typ | Beschreibung |
|-------------|-----|--------------|
| `name` | Text | Name des Standes |
| `kategorie` | Text | z.B. "Food & Drinks" |
| `beschreibung` | Text (lang) | Beschreibung |
| `angebot` | Text | Angebotsliste (kommagetrennt) |
| `oeffnungszeiten` | Text | z.B. "10:00 - 22:00 Uhr" |
| `standort` | Text | Standlage |
| `website` | Text | Website-URL |
| `instagram` | Text | Instagram-Link |
| `facebook` | Text | Facebook-Link |
| `image` | Text | URL zum Logo/Foto |

---

## 🔑 Schritt 3: API-Zugang einrichten

### 3.1 App-Passwort erstellen

1. In Nextcloud oben rechts auf **Profilbild** klicken
2. **Einstellungen** → **Sicherheit**
3. Unter "**Geräte & Sitzungen**" scrollen
4. Bei "**App-Passwort erstellen**": Namen eingeben (z.B. "PAX Website")
5. **Erstellen** klicken
6. **🔐 Passwort kopieren und sicher aufbewahren!**

### 3.2 Tabellen-IDs ermitteln

1. Öffne eine Tabelle in Nextcloud Tables
2. Schaue in die **Browser-URL**: `https://nextcloud.de/apps/tables/table/123`
3. Die Zahl am Ende (`123`) ist die **Table-ID**
4. Wiederhole für alle 4 Tabellen und notiere die IDs

---

## ⚙️ Schritt 4: Website konfigurieren

### 4.1 Konfigurationsdatei anpassen

Öffne die Datei `src/config.js` und ändere die Werte:

```javascript
const PAX_CONFIG = {
    // AUF FALSE SETZEN für Nextcloud-Integration!
    useDevelopmentMode: false,
    
    nextcloud: {
        // Deine Nextcloud-URL (OHNE / am Ende!)
        url: 'https://deine-nextcloud-instanz.de',
        
        // Dein Nextcloud-Benutzername
        username: 'dein-benutzername',
        
        // Das App-Passwort von Schritt 3.1
        password: 'xxxx-xxxx-xxxx-xxxx-xxxx',
        
        // Die Table-IDs von Schritt 3.2
        tables: {
            musiker: '123',
            workshops: '124',
            vortraege: '125',
            aussteller: '126'
        },
        
        // Cache-Dauer in Minuten
        cacheDuration: 15
    },
    
    // Fallback auf lokale JSON bei Fehlern
    useFallback: true,
    
    // Debug-Logs in der Konsole
    debug: true
};
```

### 4.2 Testdaten in Nextcloud eintragen

Trage ein paar Testdaten in die Nextcloud-Tabellen ein:

**Beispiel Musiker:**
- Name: "Die Testband"
- Genre: "Weltmusik"
- Land: "Deutschland"
- Beschreibung: "Eine tolle Band aus Berlin..."
- Image: `https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4`

---

## 🚀 Schritt 5: Testen

### 5.1 Website öffnen

```powershell
.\start-dev-server.ps1
```

Öffne: `http://localhost:8000`

### 5.2 Browser-Konsole prüfen

Drücke **F12** → Tab "**Console**"

Du solltest sehen:
```
🎪 PAX Festival Website gestartet
🔗 Initialisiere Nextcloud-Integration...
✓ Nextcloud-API bereit
📡 Lade musiker aus Nextcloud...
✓ musiker geladen: 3 Einträge
📊 Datenquelle: nextcloud
```

### 5.3 Manuelle Aktualisierung testen

In der Browser-Konsole eingeben:
```javascript
window.paxReloadData()
```

Die Daten werden neu geladen (Cache wird geleert).

---

## 🔧 Entwicklungsmodus

Für lokale Entwicklung **OHNE** Nextcloud:

In `src/config.js`:
```javascript
useDevelopmentMode: true  // Nutzt lokale JSON-Dateien
```

Die Website lädt dann die Daten aus `data/*.json` statt aus Nextcloud.

---

## 🐛 Troubleshooting

### Problem: "CORS-Fehler" in der Konsole

**Lösung:** Nextcloud muss CORS erlauben. In `config/config.php`:
```php
'cors.allowed-domains' => ['https://pax-festival.de'],
```

### Problem: "401 Unauthorized"

- **Prüfe Benutzername** in `src/config.js`
- **Prüfe App-Passwort** (nicht das normale Passwort!)
- **Erstelle neues App-Passwort** in Nextcloud

### Problem: "404 Not Found"

- **Prüfe Nextcloud-URL** (ohne `/` am Ende!)
- **Prüfe Table-IDs** (Browser-URL beim Öffnen der Tabelle)

### Problem: Keine Daten angezeigt

1. **Browser-Konsole öffnen** (F12)
2. **Fehlermeldungen lesen**
3. **Fallback aktiviert?** → Prüfe `data/musiker.json`

---

## 📱 Workflow im Live-Betrieb

### Für das Orga-Team:

1. **In Nextcloud einloggen**
2. **Tables App öffnen**
3. **Daten bearbeiten** (Musiker hinzufügen, Workshops ändern, etc.)
4. **Speichern** → **Fertig!** ✅

### Automatische Aktualisierung:

- Website **cached Daten 15 Minuten**
- Danach werden sie **automatisch neu geladen**
- **Sofort aktualisieren:** Browser-Konsole → `window.paxReloadData()`

---

## 🔒 Sicherheitshinweise

⚠️ **WICHTIG:**

1. **`.env` Datei NIEMALS in Git committen!**
2. **App-Passwort geheim halten**
3. **Für Produktion:** Verwende **Umgebungsvariablen** statt `config.js`
4. **Nextcloud über HTTPS** (SSL-Zertifikat)

---

## 📚 Datei-Struktur

```
PAX Festival/
│
├── src/
│   ├── config.js              # Konfiguration (Nextcloud-Zugangsdaten)
│   ├── nextcloud-api.js       # API-Integration
│   └── assets/
│
├── data/
│   ├── musiker.json           # Fallback-Daten
│   ├── workshops.json
│   ├── vortraege.json
│   └── aussteller.json
│
├── index.html                 # Hauptseite (mit Nextcloud-Integration)
├── .env.example               # Beispiel für Umgebungsvariablen
├── .gitignore                 # Ignoriert .env
└── NEXTCLOUD-INTEGRATION.md   # Diese Anleitung
```

---

## 🎉 Fertig!

Die Nextcloud-Integration ist einsatzbereit!

Das Orga-Team kann jetzt direkt in Nextcloud arbeiten, und die Website zeigt die Daten automatisch an.

---

**Fragen oder Probleme?**  
→ Dokumentation prüfen  
→ Browser-Konsole checken (F12)  
→ `debug: true` in `config.js` aktivieren

**Erstellt:** 09.02.2026  
**Version:** 1.0.0
