# PAX Festival 2026 - Programm-Daten Verwaltung

## 📋 Übersicht

Dieses Verzeichnis enthält alle JSON-Dateien für das Festival-Programm. Die Daten werden automatisch auf der Website angezeigt.

## 📁 Dateien

- **musiker.json** - Alle auftretenden Musiker und Bands
- **workshops.json** - Alle Workshop-Angebote
- **vortraege.json** - Alle Vorträge und Redner
- **aussteller.json** - Alle Aussteller und Stände

## 🎯 JSON-Format Anleitungen

### Musiker hinzufügen

```json
{
  "id": 1,                              // Eindeutige Nummer (fortlaufend)
  "name": "Bandname",                   // Name der Band/des Musikers
  "genre": "Weltmusik / Folk",          // Musikrichtung
  "land": "Deutschland",                // Herkunftsland
  "beschreibung": "Kurze Beschreibung", // 2-3 Sätze über die Band
  "bild": "src/assets/images/musiker/bandname.jpg", // Pfad zum Bild
  "website": "https://beispiel.de",     // Website (optional)
  "social": {                           // Social Media (optional)
    "instagram": "https://...",
    "facebook": "https://...",
    "youtube": "https://..."
  },
  "auftritte": [                        // Alle Auftritte
    {
      "tag": "Freitag, 24. Juli",
      "uhrzeit": "20:00 Uhr",
      "buehne": "Hauptbühne"
    }
  ]
}
```

### Workshop hinzufügen

```json
{
  "id": 1,
  "titel": "Workshop-Titel",
  "leiter": "Name des Leiters",
  "kategorie": "Bewegung & Körper",    // oder: Kommunikation, Kunst, Handwerk, etc.
  "beschreibung": "Was wird gemacht",
  "dauer": "90 Minuten",
  "teilnehmer_max": 25,                // Maximale Teilnehmerzahl
  "bild": "src/assets/images/workshops/titel.jpg",
  "termine": [                         // Kann mehrere Termine haben
    {
      "tag": "Donnerstag, 23. Juli",
      "uhrzeit": "10:00 - 11:30 Uhr",
      "ort": "Yoga-Zelt"
    }
  ],
  "voraussetzungen": "Keine",          // Was muss man mitbringen/können
  "mitzubringen": "Yogamatte, etc."    // Was soll mitgebracht werden
}
```

### Vortrag hinzufügen

```json
{
  "id": 1,
  "titel": "Vortragstitel",
  "redner": "Prof. Dr. Name",
  "organisation": "Organisation/Institut",
  "beschreibung": "Worum geht es",
  "dauer": "60 Minuten",
  "bild": "src/assets/images/vortraege/titel.jpg",
  "termin": {                          // Nur ein Termin pro Vortrag
    "tag": "Freitag, 24. Juli",
    "uhrzeit": "16:00 - 17:00 Uhr",
    "ort": "Vortragszelt"
  },
  "themen": [                          // Schlagworte/Tags
    "Gemeinschaft",
    "Frieden",
    "Transformation"
  ]
}
```

### Aussteller hinzufügen

```json
{
  "id": 1,
  "name": "Stand-Name",
  "kategorie": "Food & Drinks",        // oder: Kunsthandwerk, Kosmetik, Kleidung, etc.
  "beschreibung": "Was bietet der Stand",
  "angebot": [                         // Liste der Produkte/Angebote
    "Produkt 1",
    "Produkt 2"
  ],
  "bild": "src/assets/images/aussteller/name.jpg",
  "standnummer": "F-12",               // Position auf dem Gelände
  "website": "https://beispiel.de",    // Website (optional)
  "oeffnungszeiten": "10:00 - 22:00 Uhr"
}
```

## ✏️ Daten bearbeiten

### Neuen Eintrag hinzufügen

1. Öffne die entsprechende JSON-Datei
2. Kopiere einen bestehenden Eintrag
3. Ändere die `id` auf die nächste freie Nummer
4. Fülle alle Felder aus
5. Speichere die Datei
6. **Wichtig:** Achte auf korrektes JSON-Format (Kommas, Anführungszeichen!)

### Eintrag löschen

1. Öffne die entsprechende JSON-Datei
2. Lösche den kompletten Block des Eintrags
3. Achte darauf, dass die Kommas zwischen den Einträgen stimmen
4. Speichere die Datei

### Eintrag bearbeiten

1. Öffne die entsprechende JSON-Datei
2. Finde den Eintrag anhand der `id` oder des Namens
3. Ändere die gewünschten Felder
4. Speichere die Datei

## 🖼️ Bilder

Alle Bilder sollten in die entsprechenden Unterordner:
- `src/assets/images/musiker/`
- `src/assets/images/workshops/`
- `src/assets/images/vortraege/`
- `src/assets/images/aussteller/`

**Empfohlene Bildgrößen:**
- Musiker: 800 × 800 px (quadratisch)
- Workshops: 1200 × 800 px (Querformat)
- Vorträge: 1200 × 800 px (Querformat)
- Aussteller: 800 × 600 px (Querformat)

**Format:** JPG oder PNG, maximal 500 KB pro Bild

## ⚠️ Häufige Fehler

### ❌ Fehlende Kommas
```json
{
  "id": 1
  "name": "Fehler"  // FEHLT Komma nach "id": 1
}
```

### ✅ Richtig
```json
{
  "id": 1,
  "name": "Korrekt"
}
```

### ❌ Letztes Komma im Array
```json
[
  {"id": 1},
  {"id": 2},  // LETZTES Komma entfernen!
]
```

### ✅ Richtig
```json
[
  {"id": 1},
  {"id": 2}
]
```

## 🛠️ JSON-Validierung

Vor dem Speichern immer prüfen:
- Online-Tool: https://jsonlint.com/
- Einfach JSON-Code einfügen und auf "Validate JSON" klicken
- Fehler werden angezeigt und können korrigiert werden

## 📞 Support

Bei Fragen zur JSON-Pflege:
- E-Mail: [TECH-SUPPORT@EMAIL.DE]
- Telefon: [TELEFONNUMMER]

## 🔄 Änderungen live sehen

Nach dem Speichern der JSON-Datei:
1. Website im Browser neu laden (F5)
2. Die Änderungen sollten sofort sichtbar sein
3. Falls nicht: Browser-Cache leeren (Strg + Shift + R)
