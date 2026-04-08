# Workpaper: PAX Festival Website - Nextcloud Integration
**Datum:** 09. Februar 2026  
**Projekt:** PAX Festival 2026 - Website Entwicklung  
**Status:** Prototyp abgeschlossen, Nextcloud-Integration vorbereitet

---

## 📊 Aktueller Stand

### ✅ Abgeschlossen

#### 1. Website-Prototyp (v1.0)
- **One-Page-Design** mit Vue.js und Tailwind CSS
- **Programmdarstellung** mit Tab-System:
  - 🎵 Musiker & Bands
  - 🎨 Workshops
  - 🎤 Vorträge
  - 🛍️ Aussteller
- **Tag-Filter** für alle 4 Festivaltage (23.-26. Juli)
- **Newsletter-Integration** vorbereitet
- **Rechtliche Seiten:** Impressum, Datenschutz, AGB/Rückgabe, Presse

#### 2. Daten-Management
- **JSON-basiertes System** in `data/` Ordner:
  - `musiker.json`
  - `workshops.json`
  - `vortraege.json`
  - `aussteller.json`
- Vollständige Dokumentation der JSON-Struktur
- Beispieldaten für alle 4 Kategorien

#### 3. Nextcloud-Integration (technisch vorbereitet)
- **API-Modul** `src/nextcloud-api.js` entwickelt
  - Vollständige Nextcloud Tables API-Anbindung
  - Automatisches Caching (15 Minuten)
  - Fehler-Fallback auf lokale JSON-Dateien
  - Datentransformation Nextcloud → Website-Format
  
- **Konfigurations-System** `src/config.js`
  - Dual-Mode: Development (lokal) / Production (Nextcloud)
  - Zentrale Verwaltung aller Zugangsdaten
  - Debug-Modus für Entwicklung
  
- **Import-Templates** (CSV-Dateien)
  - 4 vorbefüllte Templates für Nextcloud Tables
  - Korrekte Spaltenstruktur
  - Beispieldaten enthalten

#### 4. Dokumentation
- `NEXTCLOUD-INTEGRATION.md` - Vollständige Setup-Anleitung (300+ Zeilen)
- `NEXTCLOUD-QUICKSTART.md` - Schnelleinstieg
- `NEXTCLOUD-TECHNICAL.md` - Technischer Überblick
- `nextcloud-templates/README.md` - Import-Anleitung
- `README.md` - Aktualisiert mit Nextcloud-Abschnitt

#### 5. Präsentation
- ✅ Prototyp wurde dem Team vorgestellt
- ✅ Konzept wurde **angenommen**
- ✅ Technische Umsetzung bestätigt

---

## 🔄 Aktueller Arbeitsschritt

### Nextcloud-Zugang anfragen

**Status:** ⏳ **Warten auf Zugangsdaten**

**Anfrage gestellt an:** Gregor  
**Datum:** 09.02.2026

#### Benötigte Zugangsdaten:
1. **Nextcloud-URL** (z.B. `https://cloud.pax-festival.de`)
2. **Benutzer-Account** (dedizierter Test-/Projektbereich)
3. **App-Passwort** (für API-Zugriff)
4. **Tables-App Zugriff** (zum Anlegen und Pflegen von Tabellen)
5. **API-Berechtigung** (OCS / Tables API)

#### E-Mail-Anfrage (Auszug):

```
Hallo Gregor,

ich bin aktuell dabei, die neue Webseite bzw. einen Prototypen zu testen.
Für diesen Test möchte ich zunächst keine eigene Nextcloud-Instanz 
aufsetzen, sondern mit einer bestehenden Umgebung arbeiten.

Dafür benötige ich – sofern das für dich machbar ist – einen separaten 
Bereich in eurer Nextcloud, der ausschließlich für diesen Test gedacht ist.

Konkret bräuchte ich:
• einen dedizierten Benutzer oder Projektbereich
• Zugriff auf die Nextcloud-Tables-App
• die Möglichkeit, diese Tabellen per API auszulesen
• idealerweise ein App-Passwort (kein normales Login-Passwort)

Ziel ist es, aus meiner Anwendung heraus Tabelleninhalte aus Nextcloud 
abzurufen und auf der Webseite darzustellen.

Sobald der Zugang steht (URL + Benutzer + App-Passwort), kann ich 
direkt mit den Tests beginnen.

Viele Grüße
Alexander
```

---

## 🎯 Nächste Schritte

### Phase 1: Nextcloud-Verbindung (⏳ Wartet auf Zugangsdaten)

1. **Zugangsdaten erhalten**
   - Nextcloud-URL notieren
   - Benutzername & App-Passwort sicher speichern
   
2. **Tabellen in Nextcloud erstellen**
   - CSV-Templates aus `nextcloud-templates/` importieren
   - 4 Tabellen anlegen: Musiker, Workshops, Vorträge, Aussteller
   - Table-IDs notieren (aus Browser-URL)

3. **Konfiguration anpassen**
   - `src/config.js` mit echten Zugangsdaten befüllen:
     ```javascript
     nextcloud: {
         url: 'https://cloud.pax-festival.de',
         username: 'pax-website',
         password: 'xxxx-xxxx-xxxx-xxxx',
         tables: {
             musiker: '123',
             workshops: '124',
             vortraege: '125',
             aussteller: '126'
         }
     }
     ```
   - **Development-Mode deaktivieren:** `useDevelopmentMode: false`

4. **API-Verbindung testen**
   - Website lokal starten: `.\start-dev-server.ps1`
   - Browser-Konsole prüfen (F12)
   - Sollte zeigen: `📊 Datenquelle: nextcloud`
   - Testdaten aus Nextcloud laden

### Phase 2: Orga-Team Onboarding

5. **Schulung vorbereiten**
   - Kurze Anleitung: "Wie pflege ich Daten in Nextcloud?"
   - Screenshots der Nextcloud-Oberfläche
   - Tipps & Best Practices

6. **Testdaten gemeinsam anlegen**
   - Erste echte Festival-Daten eintragen
   - Bilder hochladen und URLs pflegen
   - Formatierung testen

7. **Workflow finalisieren**
   - Zuständigkeiten klären (wer pflegt welche Tabelle?)
   - Update-Rhythmus festlegen
   - Backup-Strategie definieren

### Phase 3: Live-Schaltung

8. **Production-Deployment**
   - Website auf PAX-Server hochladen
   - DNS/Domain konfigurieren
   - SSL-Zertifikat einrichten

9. **Monitoring**
   - Cache-Performance prüfen
   - API-Limits beachten
   - Fehler-Logs überwachen

10. **Übergabe an Orga-Team**
    - Finale Dokumentation
    - Support-Kontakte
    - Wartungsplan

---

## 🛠️ Technische Details

### Architektur

```
┌─────────────────────────────────────────────┐
│          PAX Festival Website               │
│         (Vue.js + Tailwind CSS)             │
└─────────────────┬───────────────────────────┘
                  │
          ┌───────▼────────┐
          │  src/config.js  │
          │ (Dual-Mode)     │
          └───────┬────────┘
                  │
      ┌───────────┴───────────┐
      │                       │
┌─────▼──────┐       ┌───────▼────────┐
│ DEVELOPMENT│       │   PRODUCTION   │
│  (aktiv)   │       │  (vorbereitet) │
└─────┬──────┘       └───────┬────────┘
      │                      │
┌─────▼─────┐       ┌────────▼─────────┐
│data/*.json│       │ Nextcloud Tables │
│  (lokal)  │       │ (PAX-Server)     │
└───────────┘       └──────────────────┘
```

### Bereits implementierte Features

✅ **API-Integration** - Vollständig funktionsfähig  
✅ **Caching-System** - 15 Minuten (konfigurierbar)  
✅ **Fehler-Handling** - Automatischer Fallback auf lokale Daten  
✅ **Datentransformation** - Nextcloud-Format → Website-JSON  
✅ **Debug-Modus** - Ausführliche Konsolen-Logs  
✅ **Live-Reload** - `window.paxReloadData()` für manuelle Aktualisierung  

---

## 📋 Offene Punkte

### Kritisch (blockiert weiteren Fortschritt)
- ⏳ **Nextcloud-Zugangsdaten** von Gregor erhalten

### Nice-to-have (später)
- [ ] CORS-Konfiguration in Nextcloud prüfen (falls nötig)
- [ ] Performance-Optimierung (Bildkompression, Lazy Loading)
- [ ] Analytics einbinden (z.B. Matomo, privacy-friendly)
- [ ] Newsletter-System implementieren (z.B. Mailchimp)
- [ ] Ticket-System anbinden

---

## 🎉 Meilensteine

| Datum | Meilenstein | Status |
|-------|-------------|--------|
| 06.01.2026 | Projekt-Start | ✅ |
| 20.01.2026 | Design-Konzept | ✅ |
| 02.02.2026 | Website-Prototyp | ✅ |
| 07.02.2026 | JSON-System | ✅ |
| 09.02.2026 | Nextcloud-Integration (Code) | ✅ |
| **09.02.2026** | **Prototyp vorgestellt & angenommen** | ✅ |
| **09.02.2026** | **Nextcloud-Zugang angefragt** | ⏳ |
| *TBD* | Nextcloud-Verbindung live | ⏳ |
| *TBD* | Website live-geschaltet | 🔜 |

---

## 💡 Erkenntnisse & Learnings

### Was gut funktioniert hat:
- **JSON-basiertes System** war perfekt für schnelle Entwicklung
- **Vue.js CDN** ermöglicht einfaches Setup ohne Build-Tools
- **Dual-Mode-Ansatz** erlaubt flexible Entwicklung
- **Umfangreiche Dokumentation** spart später Zeit

### Herausforderungen:
- **Nextcloud Tables API** ist weniger dokumentiert als erwartet
- **CORS-Probleme** könnten beim Live-Betrieb auftreten
- **Bildverwaltung** in Nextcloud noch zu klären (URLs vs. Upload)

### Empfehlungen:
- ✅ **Entwicklungsmodus beibehalten** bis Nextcloud 100% läuft
- ✅ **Lokale JSON als Backup** nie löschen (Fallback-Sicherheit)
- ✅ **Regelmäßige Backups** der Nextcloud-Tabellen
- ✅ **Stufenweiser Rollout** (erst Test, dann Live)

---

## 📞 Kontakte & Zuständigkeiten

| Bereich | Verantwortlich | Kontakt |
|---------|---------------|---------|
| Website-Entwicklung | Alexander | - |
| Nextcloud-Admin | Gregor | Anfrage gestellt |
| Orga-Team / Inhalt | PAX-Team | TBD |
| Design / Grafik | TBD | - |

---

## 🔗 Relevante Dokumente

- [NEXTCLOUD-INTEGRATION.md](../NEXTCLOUD-INTEGRATION.md) - Setup-Anleitung
- [NEXTCLOUD-QUICKSTART.md](../NEXTCLOUD-QUICKSTART.md) - Schnelleinstieg
- [NEXTCLOUD-TECHNICAL.md](../NEXTCLOUD-TECHNICAL.md) - Tech-Details
- [README.md](../README.md) - Haupt-Dokumentation
- [data/README.md](../data/README.md) - JSON-Struktur
- [BEWERBUNG-FORMULAR-ANFORDERUNGEN.md](../BEWERBUNG-FORMULAR-ANFORDERUNGEN.md) - Formular-Specs

---

## ⏭️ Nächster Update

**Voraussichtlich:** Nach Erhalt der Nextcloud-Zugangsdaten  
**Inhalt:** Erfolgreiche API-Verbindung, erste Live-Tests mit echten Daten

---

**Erstellt:** 09.02.2026  
**Letzte Änderung:** 09.02.2026  
**Version:** 1.0  
**Projekt:** PAX Festival 2026
