# Finalisiertes Workpaper: PAX 2026 One-Pager

## 📊 Implementierungs-Status (Stand: 07.01.2026)

### ✅ Fertiggestellt

- [x] **Hero-Bereich** - Gradient, Logo, Datum, Slogan komplett umgesetzt
- [x] **Newsletter-Formular** - "Bist du dabei?" mit Name & E-Mail-Eingabe
- [x] **Storytelling-Sektionen** - Alle 3 Sektionen mit Bildern und Texten implementiert
  - Sektion 1: Ein Ort für die PAX Familie
  - Sektion 2: Acht Tage Miteinander Sein
  - Sektion 3: Für eine mitfühlendere Welt
- [x] **Community & Social Media Sektion** - Mit Telegram & Instagram Buttons
- [x] **Footer** - Mit Navigation (Home, Impressum, Datenschutz, Ticket-Rückgabe, Presse)
- [x] **Sticky Ticket Button** - Floating Button rechts unten mit Pulse-Animation
- [x] **Social Media Meta-Tags** - Vollständig für alle Plattformen (FB, IG, Twitter, Telegram, etc.)
- [x] **Social Preview Bild** - pax-social-preview.png (1200 × 630 px)
- [x] **Rechtliche Seiten** - Impressum, Datenschutz, Ticket-Rückgabe/AGB, Presse
- [x] **Responsive Design** - Mobile-first mit Tailwind CSS
- [x] **Farbschema** - Corporate Identity umgesetzt (#2E3192, #7B2B85, #FDB813)

### 🔨 In Arbeit / Noch zu erledigen

- [ ] **Tab-System Programm** - Musiker | Workshops | Vorträge | Aussteller (noch nicht implementiert)
- [ ] **FAQ-Bereich** - Ausklappbare FAQs zu Festivalregeln (fehlt)
- [ ] **Krasser Guru Booking** - Ticketshop-Integration (noch nicht verlinkt)
- [ ] **Anfahrt-Sektion** - Detaillierte Anfahrtsbeschreibung mit Karte (fehlt)
- [ ] **Newsletter-Backend** - Anbindung an Newsletter-System (aktuell nur Frontend)
- [ ] **Social Media Links** - Echte URLs für Telegram & Instagram (aktuell Platzhalter)
- [ ] **Rechtliche Daten** - Alle gelb markierten Platzhalter mit echten Daten füllen
  - Firmenname, Geschäftsführer
  - Adresse, Handelsregister
  - Telefonnummer, E-Mail
  - Pressekontakt-Daten

### 🌐 Website-Optimierung & SEO (aus Website-Check)

#### Meta-Elemente & HTML-Struktur
- [ ] **HTML lang-Attribut** - `<html lang="de">` korrekt setzen
- [ ] **Meta Description** - Optimierte Beschreibung für Suchmaschinen (155-160 Zeichen)
- [ ] **Meta Keywords** - Relevante Keywords hinzufügen
- [ ] **Canonical URL** - Canonical Tags zur Vermeidung von Duplicate Content
- [ ] **Viewport Meta-Tag** - ✅ Bereits vorhanden
- [ ] **Charset UTF-8** - ✅ Bereits vorhanden
- [ ] **Favicon** - Icon für Browser-Tab und Bookmarks (favicon.ico, verschiedene Größen)
- [ ] **Apple Touch Icons** - Icons für iOS-Geräte

#### Strukturierte Daten & Schema.org
- [ ] **Schema.org Markup** - Event-Markup für Festival (JSON-LD)
  - Event-Name, Datum, Location
  - Ticket-URL, Preise
  - Performer/Künstler
- [ ] **Breadcrumb Navigation** - Strukturierte Breadcrumbs
- [ ] **Organization Schema** - Informationen über Veranstalter

#### Überschriften & Content-Struktur
- [ ] **H1-Überschrift** - Nur eine H1 pro Seite, sinnvoll strukturiert
- [ ] **H2-H6 Hierarchie** - Logische Überschriftenstruktur ohne Sprünge
- [ ] **Alt-Texte für Bilder** - Alle Bilder mit beschreibenden Alt-Attributen
- [ ] **Interne Verlinkung** - Sinnvolle interne Links zwischen Seiten

#### Technische Optimierung
- [ ] **SSL/HTTPS** - Vollständige HTTPS-Verschlüsselung aktivieren
- [ ] **robots.txt** - Datei für Suchmaschinen-Crawler erstellen
- [ ] **sitemap.xml** - XML-Sitemap für bessere Indexierung
- [ ] **Google Search Console** - Einrichtung und Verifizierung
- [ ] **Google Analytics / Matomo** - Tracking-System integrieren (DSGVO-konform)
- [ ] **Cookie-Banner** - Cookie-Consent-Tool implementieren (DSGVO)
- [ ] **Page Speed Optimierung** - Bilder komprimieren, Lazy Loading
- [ ] **Caching** - Browser-Caching aktivieren
- [ ] **Minifizierung** - CSS/JS minifizieren für schnellere Ladezeiten

#### Performance & Loading
- [ ] **Bildoptimierung** - WebP-Format, responsive Images, Lazy Loading
- [ ] **Font-Optimierung** - Google Fonts lokal hosten oder optimiert laden
- [ ] **CDN-Nutzung** - Content Delivery Network für Assets (aktuell: Tailwind/Vue CDN)
- [ ] **Critical CSS** - Above-the-fold CSS inline laden

#### Accessibility (Barrierefreiheit)
- [ ] **ARIA-Labels** - Für Screen Reader optimieren
- [ ] **Kontrast-Verhältnisse** - WCAG 2.1 AA Standard einhalten
- [ ] **Keyboard-Navigation** - Vollständige Tastatursteuerung
- [ ] **Focus-Indikatoren** - Sichtbare Focus-States für Interaktive Elemente

#### Social Media Integration
- [ ] **Open Graph Tags** - ✅ Bereits implementiert
- [ ] **Twitter Cards** - ✅ Bereits implementiert
- [ ] **Social Share Buttons** - Optional: Share-Buttons für Inhalte

#### Rechtliches & Compliance
- [ ] **Impressum** - ✅ Seite erstellt, Daten einfügen
- [ ] **Datenschutzerklärung** - ✅ Seite erstellt, Daten einfügen
- [ ] **Cookie-Richtlinie** - Detaillierte Cookie-Policy
- [ ] **AGB** - ✅ In Ticket-Rückgabe enthalten, Daten einfügen
- [ ] **Barrierefreiheitserklärung** - Optional nach BITV 2.0

### 📋 Offene Fragen (siehe Fragen.md)

- Newsletter-System & E-Mail-Speicherung
- Social Media Kanäle (vollständige Liste)
- Ticketing (Preise, Kategorien, Vorverkaufsstart)
- Programm-Inhalte (Musiker, Workshops, etc.)
- Sponsoring & Werbeplätze

---

## 1. Visuelles Leitthema

- **Farbwelt:** Warme Gradienten von Tiefblau über Violett zu einem strahlenden Goldgelb.
- **Stilmittel:** Große, emotionale Bildflächen mit abgerundeten Ecken, die das Gemeinschaftsgefühl betonen.
- **Typografie:** Serifenlose, fette Headlines für eine moderne, klare Ansprache.

## 2. Sektions-Struktur (Scroll-Reihenfolge)

1. **Header & Hero:** ✅ *Implementiert*
   - Logo, Datum (23. – 26. Juli 2026) und Ort (Freilichtbühne Friesack).
   - Slogan: "Die Friedenstaube landet wieder".

2. **Newsletter-Hook:** ✅ *Implementiert*
   - "Bist du dabei?" – Direktes Formular für Vorverkauf-Infos.
   - ⚠️ Backend-Anbindung fehlt noch

3. **Vision & Mission:** ✅ *Implementiert*
   - "Ein Ort für die PAX Familie" und "Für eine mitfühlendere Welt".

4. **Das Programm-Modul (Neu):** ⏳ *Ausstehend*
   - Hier wird das von dir gewünschte Tab-System integriert (Musiker, Workshops, Vorträge, Aussteller).
   - Grafisch im hellen Beigeton der mittleren Sektion gehalten.

5. **Community & Mitmachen:** ✅ *Implementiert*
   - Bereich für Volunteers und Helfer.
   - Social Media Call-to-Action (Telegram & Instagram) mit dem Natur-Hintergrundbild.

6. **Krasser Guru Booking:** ⏳ *Ausstehend*
   - Ein auffälliger, farblich abgesetzter Block (z.B. im Violett des Footers) zur Ticketbuchung.
   - Sticky Button vorhanden, Integration fehlt noch

7. **FAQ & Rechtliches:** 🔨 *Teilweise*
   - Ausklappbare FAQs zu Festivalregeln. ❌ *Fehlt*
   - Footer in Dunkelblau mit Impressum, Datenschutz und Kontakt. ✅ *Vorhanden*
   - Rechtliche Seiten erstellt, Platzhalter müssen gefüllt werden

7. **FAQ & Rechtliches:**
   - Ausklappbare FAQs zu Festivalregeln.
   - Footer in Dunkelblau mit Impressum, Datenschutz und Kontakt.

## 3. Technische Features

- **Tab-Navigation:** ⏳ *Ausstehend* - Ein sauberes JavaScript- oder CSS-Tab-Modul, das auf Mobilgeräten zu einem Accordion (untereinander klappbar) wird, um die Lesbarkeit zu garantieren.
- **Sticky Booking Button:** ✅ *Implementiert* - Ein kleiner, mitschwebender Button "Tickets", der direkt zur Krasser Guru Seite führt.
- **Anfahrt-Integration:** ⏳ *Ausstehend* - Kurzer Textblock zur Vietnitzer Straße 14 in 14662 Friesack.

## 4. Social Media Vorschau-Strategie

### Status: ✅ Vollständig implementiert

### 4.1 Meta-Tags für optimale Vorschau

Die Website verwendet umfassende Meta-Tags für alle gängigen Social Media Plattformen:

- **Open Graph (Facebook, WhatsApp, LinkedIn, Instagram)**
- **Twitter Cards (Twitter/X)**
- **Telegram Meta-Tags**

### 4.2 Vorschaubild-Spezifikationen

**Primäres Vorschaubild (Universell):**
- **Dateiname:** `pax-social-preview.jpg`
- **Optimale Größe:** 1200 × 630 Pixel (Seitenverhältnis 1.91:1)
- **Format:** JPG oder PNG
- **Maximale Dateigröße:** < 8 MB (idealerweise < 300KB - max. 1 MB für schnelles Laden)

**Plattform-spezifische Empfehlungen:**

| Plattform | Optimale Größe | Seitenverhältnis | Notizen |
|-----------|----------------|------------------|---------|
| **Facebook** | 1200 × 630 px | 1.91:1 | Standard für Link-Posts |
| **Instagram** | 1200 × 630 px | 1.91:1 | Via Facebook Graph |
| **WhatsApp** | 1200 × 630 px | 1.91:1 | Nutzt Open Graph |
| **Twitter/X** | 1200 × 675 px | 16:9 | Summary Card Large Image |
| **LinkedIn** | 1200 × 627 px | 1.91:1 | Link-Vorschau |
| **Telegram** | 1200 × 630 px | 1.91:1 | Open Graph Standard |
| **Discord** | 1200 × 630 px | 1.91:1 | Embed-Vorschau |

**Universelle Lösung:** 1200 × 630 px deckt alle Plattformen optimal ab.

### 4.3 Gestaltungsrichtlinien für das Vorschaubild

Das Vorschaubild sollte folgende Elemente enthalten:

1. **PAX Logo** - prominent platziert (Orange-Gradient-Version)
2. **Datum** - groß und gut lesbar: "23. – 26. Juli 2026"
3. **Headline** - "Die Friedenstaube landet wieder" oder "Das Weltfriedensfestival"
4. **Hintergrund** - Gradient (Tiefblau → Violett → Goldgelb) oder Festival-Atmosphäre
5. **Location** - "Friesack bei Berlin" (optional, falls Platz)

**Design-Anforderungen:**
- Text muss auch in Thumbnail-Größe (150px) lesbar sein
- Hoher Kontrast zwischen Text und Hintergrund
- Safe Zone: Wichtige Elemente mind. 40px vom Rand entfernt
- Kein Text unter 30pt Schriftgröße
- Farben aus der PAX CI (#2E3192, #7B2B85, #FDB813)

### 4.4 Vorschau-Texte

**Titel (max. 60-70 Zeichen):**
"PAX 2026 - Das Weltfriedensfestival | 23. – 26. Juli 2026"

**Beschreibung (max. 155-160 Zeichen):**
"Wir laden dich von Herzen zum PAX ein: 8 Tage Gemeinschaft, Musik, Workshops und Vorträge aus aller Welt. Die Friedenstaube landet wieder in Friesack bei Berlin!"

**Keywords:**
PAX26, Weltfriedensfestival, Festival, Friesack, Berlin, Musik, Workshops, Peace, Gemeinschaft, 2026

### 4.5 Testing & Validierung

**Vorschau-Test-Tools:**
- Facebook Sharing Debugger: https://developers.facebook.com/tools/debug/
- Twitter Card Validator: https://cards-dev.twitter.com/validator
- LinkedIn Post Inspector: https://www.linkedin.com/post-inspector/
- WhatsApp Link Preview: Direkter Test per Messenger
- Open Graph Check: https://opengraphcheck.com/

**Checkliste:**
- [x] Vorschaubild erstellt (1200 × 630 px)
- [x] Bild optimiert und komprimiert
- [x] Meta-Tags implementiert
- [ ] URL zu Produktions-Domain angepasst (aktuell Platzhalter)
- [ ] Vorschau auf allen Plattformen getestet
- [ ] Cache geleert (bei Updates)

---

# Technisches Workpaper: PAX 2026 One-Pager Relaunch

## Status: 🔨 In aktiver Entwicklung

### Bereits implementierte Dateien:
- ✅ **index.html** - Hauptseite mit Hero, Newsletter, Sektionen, Footer
- ✅ **impressum.html** - Vollständiges Impressum (Platzhalter zu füllen)
- ✅ **datenschutz.html** - DSGVO-konforme Datenschutzerklärung (Platzhalter zu füllen)
- ✅ **rueckgabe.html** - AGB & Ticket-Rückgabe Regelungen (Platzhalter zu füllen)
- ✅ **presse.html** - Pressebereich mit Akkreditierung & Materialien (Platzhalter zu füllen)
- ✅ **src/assets/images/pax-social-preview.png** - Social Media Vorschaubild

---

## 1. Hero-Bereich (Emotionale Einleitung)

### Status: ✅ Vollständig implementiert

- **Hintergrund:** Vertikaler Farbverlauf von Tiefblau (#2E3192) über Violett zu einem warmen Sonnengelb (#FDB813).
- **Inhalt:**
  - PAX Logo (weiß/orange) links oben.
  - Datum: 23. – 26. Juli 2026.
  - Ort: Freilichtbühne Friesack bei Berlin.
  - Headline: "Die Friedenstaube landet wieder".
  - Newsletter-Modul: "Bist du dabei?" mit Eingabefeldern für Name und E-Mail sowie dem Button "Ich bin dabei!".

## 2. Storytelling-Sektionen (Weißer/Beiger Hintergrund)

### Status: ✅ Vollständig implementiert

Dieser Bereich nutzt abwechselnd Text links/Bild rechts und umgekehrt.

### Sektion 1: Ein Ort für die PAX Familie ✅

- **Bild:** Frau mit Seifenblasen.
- **Text:** Fokus auf die Location (Vietnitzer Straße 14, 14662 Friesack) und den toleranten Raum für alle.

### Sektion 2: Acht Tage Miteinander Sein ✅

- **Bild:** Drei Personen in warmem, rotem Licht.
- **Text:** Hinweis auf die Campwoche (21. – 28. Juli) und das Programm (Tanzen, Vorträge, Workshops, Lagerfeuer).

### Sektion 3: Eine mitfühlendere Welt ✅

- **Bild:** Festivalbesucher mit erhobenen Händen.
- **Text:** Die Vision eines menschlichen Miteinanders.

## 3. Das Tab-System (Programmvorschau)

### Status: ⏳ Noch nicht implementiert - Hohe Priorität

Neu einzufügen unterhalb der Story-Sektionen:

- **Design:** Horizontale Tab-Leiste (Musiker | Workshops | Vorträge | Aussteller).
- **Funktion:** Klick auf einen Tab tauscht den Content-Bereich darunter aus, ohne die Seite neu zu laden.
- **Mobil:** Umwandlung der Tabs in ein vertikales Accordion für bessere Bedienbarkeit.

## 4. Community & Social Media (Footer-Vorbereitung)

### Status: ✅ Implementiert (Social Media Links noch Platzhalter)

- **Hintergrund:** Foto einer Menschengruppe auf einer Wiese mit violettem Overlay.
- **Headline:** "Werde jetzt Teil der Pax Familie und verpasse keine Neuigkeiten mehr:".
- **Buttons:** "Telegram Kanal abonnieren" und "Instagram Kanal abonnieren" (Dunkelviolett mit Icons).
- ⚠️ **TODO:** Echte Social Media URLs einfügen

## 5. Rechtlicher Bereich (Dunkelvioletter Footer)

### Status: ✅ Implementiert (Platzhalter-Daten zu füllen)

- **Inhalt:** PAX Logo (weiß), Navigationslinks (Home, Impressum, Datenschutz, Ticket-Rückgabe, Presse), sowie Text "PAX – Das Weltfriedensfestival".
- **Ergänzung für 2026:** Links für Datenschutz und die neuen Festivalregeln sind vorhanden.
- ⚠️ **TODO:** Alle gelb markierten Platzhalter in den rechtlichen Seiten mit echten Daten füllen

---

## Nächste Schritte (Priorisiert)

### 🔴 Kritisch (vor Go-Live)
1. **SSL/HTTPS aktivieren** - Sicherheit und SEO
2. **Platzhalter füllen** - Alle rechtlichen Seiten mit echten Daten
3. **Cookie-Banner** - DSGVO-Compliance
4. **robots.txt & sitemap.xml** - SEO-Grundlagen
5. **Favicon** - Professioneller Auftritt

### 🟠 Hoch (zeitnah)
1. **Tab-System für Programm** - Hauptfeature für Programm-Darstellung
2. **Schema.org Event-Markup** - SEO für Festival-Events
3. **Google Search Console** - Indexierung und Monitoring
4. **Bildoptimierung** - WebP, Lazy Loading für Performance
5. **Alt-Texte für alle Bilder** - Accessibility & SEO

### 🟡 Mittel (nach Launch möglich)
1. **FAQ-Bereich** - Ausklappbare FAQs
2. **Krasser Guru Integration** - Ticketshop-Anbindung
3. **Newsletter-Backend** - E-Mail-System anbinden
4. **Google Analytics/Matomo** - Tracking implementieren
5. **H1-H6 Struktur optimieren** - Content-Hierarchie

### 🟢 Niedrig (Nice-to-have)
1. **Anfahrt-Sektion mit Karte** - Google Maps Integration
2. **Social Share Buttons** - Content-Sharing
3. **CDN für Assets** - Performance-Optimierung
4. **Critical CSS** - Above-the-fold Optimierung
5. **PWA-Features** - Progressive Web App Funktionen