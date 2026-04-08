# Workpaper: Content Migration von pax.family
**Session:** 2026-04-07 | Agent: Copilot | Thema: Content Migration

## Ziel
Alle Seiteninhalte von pax.family in die Vite+Vue3 Views übernehmen.
Seiten stück für stück abarbeiten.

## Seiten-Checkliste

| Seite | Quelle | Status | Ziel-Datei |
|-------|--------|--------|-----------|
| /info | pax.family/info | ✅ gefetcht, ✅ umgesetzt | InfoView.vue |
| /kontakt | pax.family/kontakt | ✅ gefetcht, ✅ umgesetzt | KontaktView.vue |
| /mitmachen | pax.family/mitmachen | ✅ gefetcht, ✅ umgesetzt | MitmachenView.vue |
| /musiker | pax.family/musiker | ✅ gefetcht, ✅ umgesetzt | musiker.json + MusikView.vue |
| /vortraege | pax.family/vortraege | ✅ gefetcht, ✅ umgesetzt | vortraege.json + VortraegeView.vue |
| /aussteller | pax.family/aussteller | ✅ gefetcht, ✅ umgesetzt | aussteller.json + AusstellerView.vue |
| /workshops | pax.family/workshops | ✅ gefetcht — leer (noch keine Zusagen) | WorkshopsView.vue |
| /kinder-und-jugend | pax.family/kinder-und-jugend | ✅ gefetcht, ✅ umgesetzt | KinderView.vue |
| /healing-area | pax.family/healing-area | ✅ gefetcht — leer (noch kein Programm) | HealingoaseView.vue |

## File Protocol

### Sitzung 1 (2026-04-07)
- Alle 9 Seiten gefetcht
- musiker.json: 10 Künstler (Arne Schmitt, ÄON, Jens Fischer-Rodrian, Katja von Bauske, Konstantin, Laura Maria Schneider, Menzel, Rairda, Tino Eisbrenner & Band, Yann Song King)
- vortraege.json: 6 Redner (Ulrike Guérot, Stefan Lanka, Ricardo Leppe, Peter Müller, Florian Pfaff, Flavio von Witzleben)
- aussteller.json: 6 Aussteller (Der Herzenmacher, Human Design mit Marja, MuNic, Kraeuterey, Seidenzauber aus Indien, Belli et Pacis)
- Workshops-Seite: noch keine Zusagen veröffentlicht
- Healing-Area: noch kein detailliertes Programm veröffentlicht
- InfoView: Tickets + Festival-ABC implementiert
- KontaktView: Kontaktformular mit DSGVO
- MitmachenView: Mitmachen-Formular mit Bereich + PDF-Upload
- KinderView: Kinder(T)Raum + Info-Text
- HealingoaseView: Beschreibung der Healing-Area

## Entscheidungen
- workshops.json leer lassen / Placeholder-Text anzeigen ("Wird noch bekanntgegeben")
- healing-area.json nicht nötig — statische Beschreibung reicht
- Kontaktformular: kein Backend → mailto: oder Netlify Forms als Platzhalter
- Formular-Action: `action="#"` — Backend noch nicht festgelegt

## Session 2 — Landingpage / HomeView (2026-04-07)

### Architektur-Entscheidungen
- **Neue Komponente:** `src/components/SectionPhotoHero.vue`
  - Props: `imgSrc`, `headline`, `subline`, `btnText`, `btnTo` (router), `btnHref` (extern), `overlay` (optionale CSS-Klasse)
  - Wird auf der Startseite für **Sektion 2** ("Warum PAX?") und **Sektion 4** ("Feier mit uns") verwendet
  - Wiederverwendbar auf weiteren Seiten
- **HomeView Redesign** — 4 Hauptbereiche:
  1. Hero + Gradient-Background `linear-gradient(180deg, #2E4392 17.31%, #F6C2D5 53.37%, #F99C25 100%)` mit Photo overlay, Countdown, "Es geht von Neuem los"
  2. `SectionPhotoHero` — "Warum PAX Weltfriedensfestival?" → /info
  3. Mission-Text + "Entdecke unser Festival-Programm" (6 Kacheln)
  4. `SectionPhotoHero` — "Feier mit uns den Frieden" CTA → Ticket

### Status
- SectionPhotoHero.vue: ✅ erstellt
- HomeView.vue: ✅ redesigned

## Nächste Schritte
- [ ] Backend für Kontaktformulare klären (Email-Provider?)
- [ ] Mehr Aussteller/Workshops/Healing-Anbieter ergänzen wenn verfügbar
- [ ] Fotos der Künstler einbinden (noch WP-Thumbs als Externe URL)
- [ ] SEO Meta-Tags pro Route
## Session 3 — Karte, Leaflet, Kartenmarker (2026-04-08)

### Technische Entscheidungen
- **Leaflet.js** (`npm install leaflet`) ersetzt OpenStreetMap-`<iframe>` in Bereich 7
  - Vite-Fix: `delete L.Icon.Default.prototype._getIconUrl` + `L.Icon.Default.mergeOptions(...)` wegen Vite Asset-Pfaden
  - `onMounted` / `onBeforeUnmount` Lifecycle für Map-Init und Cleanup
- **Karten-Objekte:**
  - Marker **Freilichtbühne Friesack** — `[52.73681422705592, 12.590406436963276]`
    - Icon: `logo-pax-26.png` (38×40 px), permanentes Tooltip-Label "🎪 Festivalgelände"
    - Popup: Name + Adresse
  - Polygon **Zeltplatz PAX** — 4 Koordinaten, `#662D91` Fill, permanentes Label "⛺ Zeltplatz"
  - Marker **Bahnhof Friesack (Mark)** — `[52.76055737215376, 12.587761778138088]`
    - Standard-Leaflet-Icon, permanentes Label "🚆 Bahnhof Friesack", Popup mit Verbindungsinfo
- **Tooltip-Stil:** `.pax-map-label` — `background: #342268`, weiß, `border-radius: 6px`, `font-weight: 700`
- **Map-Bounds:** `fitBounds` über alle 3 Features mit `pad(0.2)`

### Bereich 6 — Figma-Redesign
- `bg-[#F6E6D6]`, 2-Spalten-Layout (Text `max-w-[557px]` + Bild `491×491px` `rounded-[50px]`)
- Überschrift `48px` `#342268`, Unterüberschriften `36px` `#F99C25`, Fließtext `18px`
- Button `bg-[#F99C25]` `rounded-full` `24px`, zentriert (`self-center`)
- Bild-Placeholder: `heroImg` — **TODO: echtes Festivalfoto einbinden**

### Koordinaten (final)
| Ort | Lat | Lon |
|---|---|---|
| Freilichtbühne | 52.73681422705592 | 12.590406436963276 |
| Zeltplatz P1 | 52.7377756341102 | 12.590771217367816 |
| Zeltplatz P2 | 52.740818867246105 | 12.592375178365293 |
| Zeltplatz P3 | 52.73995496140789 | 12.595803041531942 |
| Zeltplatz P4 | 52.737346901186726 | 12.594907183709047 |
| Bahnhof Friesack | 52.76055737215376 | 12.587761778138088 |

## Session 4 — Statische HTML-Seiten, InfoView-Redesign (2026-04-08)

### Erledigte Aufgaben
- **datenschutz.html, impressum.html, presse.html, rueckgabe.html** → gelöscht
- **vite.config.js** — Multi-HTML-Inputs entfernt, nur noch `index.html` als Entry Point
- **DatenschutzView.vue** — neu erstellt (8 Abschnitte von pax.family/datenschutz)
- **ImpressumView.vue** — neu erstellt (§5 TMG, Haftung, Urheberrecht, Streitbeilegung)
- **PresseView.vue** — neu erstellt (Pressekontakt, Festivaldaten, Social, Akkreditierung)
- **Router** → `/datenschutz`, `/impressum`, `/presse` registriert
- Footer-Links funktionieren korrekt via `RouterLink`

### InfoView.vue — Redesign (In Arbeit)
- Hero: `info-hero.png`, Headline-Overlay "Eine Festival-Woche in Fülle und Frieden"
- Box 1: Bild links (`info-box-1.png`) + Text rechts — Campwoche-Infos
- Box 2: Text links — "Was ist das PAX?" + Bild rechts (`info-box-2.png`)
- Bilder: `rounded-2xl` (leicht abgerundete Ecken)
- Hintergrund: `#f5ede0` (Beige)
- Rest (Festival-ABC, Orte, Tickets) folgt danach

### Build-Status
- ✅ `npm run build` — Exit 0

---

## Session 5 — InfoView Abschluss + KontaktView + MitmachenView (2026-04-08)

### InfoView.vue — Abschluss
- Box 4: **Orte des Festivals** — 9 Orte als 3×3-Grid (`#f5ede0` Hintergrund), Titel in PAX-Purple, "Zum Programm" Button zentriert unten
- Box 5: **Festival-Tickets** — 2-spaltig: links Kinder (frei, `info-box-3.png`), rechts Erwachsene Pay-what-you-want (`info-box-4.png`), jeweils Titel in Gold
- Box 6: **CTA-Banner** — gleicher `SectionPhotoHero` wie HomeView (`image1.png`), "Feier mit uns den Frieden"
- Alle 5 Bilder (`info-box-1` bis `info-box-4` + `info-hero`) importiert
- `SectionPhotoHero` + `crowdImg` importiert

### KontaktView.vue — Fixes
- `heroImg` → `kontakt-hero.png` (vorher `image1.png`)
- Fehlende `</div></template>` Closing-Tags ergänzt (strukturelles Bug-Fix)

### MitmachenView.vue — Redesign
Vorher: Hero + Intro-Text + Formular (3 Sektionen)
Jetzt: 4 Sektionen:
1. **Hero** — `mitmach-hero.png`, Headline "Was wäre das PAX ohne dich?"
2. **Section Ticket** — "Sei beim PAX dabei…" — Text links (fett/`#342268`) + `info-box-3.png` rechts (rounded) + "Ticket kaufen" Button zentriert → Krasser Guru
3. **Section Spende** — "Unterstütze das PAX mit Deiner Spende!" — Text links (#PAX-Dorf, Ehrenamt, info@pax.family) + `info-box-1.png` rechts + "Jetzt spenden" Button
4. **Section Formular** — "Möchtest du unser Festival aktiv mitgestalten?" — Intro (3 Absätze) + Formular (Vorname, Nachname, E-Mail, Betreff, Bereich-Dropdown, Nachricht, PDF-Anhang, DSGVO, Abschicken)

### Build-Status
- ✅ `npm run build` — Exit 0 nach allen Änderungen dieser Session

---

## Programm-Tabs — Bestandsaufnahme (Stand: 2026-04-08)

### Architektur
- `ProgrammView.vue` — Übersichts-Grid mit 6 RouterLinks zu Sub-Routen
- Sub-Routen: `/programm/musik`, `/programm/vortraege`, `/programm/workshops`, `/programm/healingoase`, `/programm/aussteller`, `/programm/kinder`
- 4 Tab-Komponenten in `src/components/tabs/`:

| Tab | Datei | Datenquelle | Besonderheit |
|-----|-------|-------------|--------------|
| Musik | `MusikerTab.vue` | `/data/musiker.json` | Filtert nach `activeDay` Prop |
| Vorträge | `VortraegeTab.vue` | `/data/vortraege.json` | Filtert nach `activeDay` Prop |
| Workshops | `WorkshopsTab.vue` | `/data/workshops.json` | Filtert nach `activeDay` Prop |
| Aussteller | `AusstellerTab.vue` | `/data/aussteller.json` | Kein Tag-Filter |

### Datenstatus
- `public/data/musiker.json` — ✅ Echte Daten vorhanden (z. B. "Arne Schmitt")
- `public/data/aussteller.json` — ✅ Echte Daten (z. B. "Der Herzenmacher — Bodo")
- `public/data/vortraege.json` — ✅ Echte Daten (z. B. "Prof. Dr. Ulrike Guérot")
- `public/data/workshops.json` — ✅ Echte Daten (z. B. "Yoga für Anfänger")

### Offene Punkte Programm-Tabs
- [ ] Bewerbungs-Email in allen Tabs: `bewerbung@pax-festival.de` → prüfen ob korrekte Adresse
- [ ] Healingoase-Tab fehlt noch komplett (keine Komponente, keine Daten)
- [ ] Kinder-Tab fehlt noch komplett
- [ ] Design der Karten an PAX-Stil anpassen (aktuell DaisyUI Defaults)
- [ ] Tagesfilter-Leiste im Programm-View prüfen (wird `activeDay` korrekt weitergereicht?)