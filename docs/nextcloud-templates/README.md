# Nextcloud Tables - Import-Templates

Diese CSV-Dateien können direkt in Nextcloud Tables importiert werden, um die Tabellenstruktur schnell einzurichten.

## 📋 Enthaltene Templates

- `musiker-template.csv` - Struktur für Musiker & Bands
- `workshops-template.csv` - Struktur für Workshops
- `vortraege-template.csv` - Struktur für Vorträge
- `aussteller-template.csv` - Struktur für Aussteller

## 🚀 Import in Nextcloud

### Variante 1: Neue Tabelle mit CSV erstellen

1. **Nextcloud Tables App öffnen**
2. **"+ Neue Tabelle"** klicken
3. **"Import from file"** wählen
4. **CSV-Datei auswählen** (z.B. `musiker-template.csv`)
5. **Spalten-Mapping prüfen** (sollte automatisch passen)
6. **Importieren** ✅

### Variante 2: In bestehende Tabelle importieren

1. **Tabelle öffnen**
2. **Menü (⋮)** → **"Import"**
3. **CSV-Datei hochladen**
4. **Spalten zuordnen**
5. **Importieren** ✅

## ⚙️ Spalten-Typen anpassen

Nach dem Import solltest du die Spaltentypen in Nextcloud anpassen:

### Musiker
- `name` → Text (einzeilig)
- `genre` → Text (einzeilig)
- `land` → Text (einzeilig)
- `beschreibung` → Text (mehrzeilig)
- `image` → Text (URL) oder Link
- `auftrittszeitpunkt` → Text oder Datum/Zeit
- `website`, `instagram`, etc. → Link

### Workshops
- `titel` → Text (einzeilig)
- `leiter` → Text (einzeilig)
- `kategorie` → Auswahl (Dropdown)
- `beschreibung` → Text (mehrzeilig)
- `dauer` → Zahl oder Text
- `max_teilnehmer` → Zahl
- `zeitpunkt` → Text oder Datum/Zeit
- `ort` → Auswahl (Dropdown)
- `voraussetzungen` → Text (einzeilig)
- `mitzubringen` → Text (mehrzeilig)
- `image` → Text (URL) oder Link

### Vorträge
- `titel` → Text (einzeilig)
- `redner` → Text (einzeilig)
- `organisation` → Text (einzeilig)
- `beschreibung` → Text (mehrzeilig)
- `dauer` → Zahl oder Text
- `zeitpunkt` → Text oder Datum/Zeit
- `ort` → Auswahl (Dropdown)
- `themen` → Text (mehrzeilig) oder Tags
- `image` → Text (URL) oder Link

### Aussteller
- `name` → Text (einzeilig)
- `kategorie` → Auswahl (Dropdown)
- `beschreibung` → Text (mehrzeilig)
- `angebot` → Text (mehrzeilig)
- `oeffnungszeiten` → Text (einzeilig)
- `standort` → Auswahl (Dropdown)
- `website`, `instagram`, etc. → Link
- `image` → Text (URL) oder Link

## 📝 Beispieldaten

Die Templates enthalten bereits 3 Zeilen mit Beispieldaten.

**Du kannst:**
- Die Beispieldaten behalten (zum Testen)
- Eigene Daten hinzufügen
- Beispiele löschen und komplett neu befüllen

## 🔗 Table-IDs notieren

Nach dem Import:

1. **Tabelle öffnen**
2. **Browser-URL anschauen:**  
   `https://nextcloud.de/apps/tables/table/123`
3. **Die Zahl am Ende (`123`) ist die Table-ID!**
4. **In `src/config.js` eintragen**

## ⚠️ Wichtig

- **Spalten-Namen** müssen exakt wie in den CSV-Dateien heißen
- **Groß-/Kleinschreibung** beachten!
- **Keine Leerzeichen** in Spalten-Namen (nutze `_` statt Leerzeichen)

## 📚 Nächste Schritte

Nach dem Import:

1. ✅ Table-IDs notieren
2. ✅ `src/config.js` konfigurieren
3. ✅ App-Passwort in Nextcloud erstellen
4. ✅ Website testen

**Vollständige Anleitung:**  
→ [../NEXTCLOUD-INTEGRATION.md](../NEXTCLOUD-INTEGRATION.md)

---

**Erstellt:** 09.02.2026  
**PAX Festival 2026**
