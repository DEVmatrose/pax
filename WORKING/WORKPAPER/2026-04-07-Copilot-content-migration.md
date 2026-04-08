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

### Build-Status
- ✅ `npm run build` — Exit 0 nach allen Änderungen dieser Session

---

## Offene Punkte — Meeting mit Designer
- [ ] **"Was gefällt dir am PAX?" (Bereich 5)** — 6–8 handgeschriebene Testimonial-Bilder
  Aktuell: Einzelbild `was-gefaellt-dir-am-pax.png`. Sobald neue Bilder da: Karussell reaktivieren.
- [ ] **Bereich 6 Bild** — `heroImg` ist Platzhalter. Echtes Ticket/Festivalfoto einbinden (Figma referenziert `A7300364.png`)