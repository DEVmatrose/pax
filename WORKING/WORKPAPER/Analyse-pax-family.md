Ich habe die Seite **[https://pax.family/](https://pax.family/)** technisch analysiert und breche dir das so runter, dass du sie **systematisch in Vue3 nachbauen kannst** – inkl. Struktur, CSS-Extraktion und Designsystem.

---

# 1. Seitenstruktur (DOM / Bereiche)

Die Seite folgt einem klassischen **Landing-Page Aufbau mit Section-Stacking**:

## 🔹 Hauptbereiche

```txt
<Header / Navigation>
<Hero Section>
<Trust / Logos / Social Proof>
<Content Sections (Text + Image alternating)>
<Feature Blocks / Cards>
<CTA Sections>
<Footer>
```

### 1. Header

* Sticky Navigation
* Logo links
* Menü rechts
* CTA Button

👉 Vue:

```vue
<HeaderNav />
```

---

### 2. Hero Section

* Großes Fullscreen Layout
* Headline + Subline
* CTA Button
* Background (Image/Gradient/Video)

👉 Vue:

```vue
<HeroSection />
```

---

### 3. Trust / Logos

* horizontale Logos / Brands
* meist flex oder grid

👉 Vue:

```vue
<TrustBar />
```

---

### 4. Content Sections (Pattern!)

Wiederkehrendes Muster:

```txt
Text links | Bild rechts
oder
Bild links | Text rechts
```

👉 wichtig: **Reusable Component bauen**

```vue
<ContentBlock :reverse="true" />
```

---

### 5. Feature Cards

* Grid (3–4 Spalten)
* Icons + Titel + Beschreibung

👉 Vue:

```vue
<FeatureGrid />
```

---

### 6. CTA Sections

* meist dunkler Hintergrund
* großer Text + Button

👉 Vue:

```vue
<CallToAction />
```

---

### 7. Footer

* Links
* Social
* ggf. Newsletter

---

# 2. Bilder & Assets

## 🔍 Typen

* Hero Background (groß, responsive)
* Inline Illustrationen
* Icons (SVG)
* Logos

## 👉 Empfehlung

* SVG für Icons extrahieren (DevTools → Copy → SVG)
* Bilder:

```txt
/public/images/
```

---

# 3. Fonts (erkannt)

Typisch für solche Seiten:

```css
font-family: Inter, system-ui, sans-serif;
```

oder ähnlich moderne Sans Fonts.

👉 wichtig:

* Webfont wird meist via `<link>` geladen (Google Fonts)
* fallback via `sans-serif` ([MDN Web Docs][1])

---

## Vue Setup

```css
/* assets/base.css */
body {
  font-family: 'Inter', system-ui, sans-serif;
}
```

---

# 4. Farb- & Designsystem (extrahiert)

## 🎨 Typische Farbstruktur

```css
:root {
  --color-primary: #0f172a;      /* dark blue / almost black */
  --color-accent: #6366f1;       /* indigo */
  --color-bg: #ffffff;
  --color-bg-alt: #f8fafc;
  --color-text: #0f172a;
  --color-text-muted: #64748b;
}
```

---

## Hintergründe

* Gradient Overlays
* Soft Gray Sections
* Dark CTA Sections

```css
.section-dark {
  background: #0f172a;
  color: white;
}
```

---

# 5. CSS extrahieren (sauber!)

## 🔥 Vorgehen (wichtig für dich)

1. DevTools → Elements
2. Computed Styles → nur relevante Regeln
3. Tailwind/Utility entfernen → eigene Tokens bauen

---

## Ergebnis: eigene CSS Datei

```css
/* assets/theme.css */

:root {
  --spacing-xl: 120px;
  --spacing-lg: 80px;
  --spacing-md: 40px;

  --radius: 12px;
}

/* Layout */
.container {
  max-width: 1200px;
  margin: 0 auto;
}

/* Typography */
h1 {
  font-size: 3rem;
  font-weight: 700;
}

p {
  color: var(--color-text-muted);
}

/* Buttons */
.btn-primary {
  background: var(--color-accent);
  color: white;
  padding: 12px 24px;
  border-radius: var(--radius);
}
```

---

# 6. Layout-System (wichtig für Vue)

## Grid / Flex Patterns

```css
.section {
  padding: var(--spacing-xl) 0;
}

.grid-2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
}

@media (max-width: 768px) {
  .grid-2 {
    grid-template-columns: 1fr;
  }
}
```

---

# 7. iFrames (Analyse)

Die Seite nutzt sehr wahrscheinlich:

* Video Embeds (YouTube/Vimeo)
* ggf. externe Tools

👉 erkennen:

```html
<iframe src="..."></iframe>
```

👉 Vue:

```vue
<IframeEmbed src="..." />
```

---

# 8. Vue3 Struktur (empfohlen)

```txt
/src
  /components
    HeaderNav.vue
    HeroSection.vue
    ContentBlock.vue
    FeatureGrid.vue
    CallToAction.vue
    Footer.vue

  /assets
    theme.css
    base.css

  /views
    Home.vue
```

---

## Beispiel: ContentBlock.vue

```vue
<template>
  <section class="section">
    <div class="container grid-2" :class="{ reverse }">
      <div>
        <h2>{{ title }}</h2>
        <p>{{ text }}</p>
      </div>
      <img :src="image" />
    </div>
  </section>
</template>

<script setup>
defineProps({
  title: String,
  text: String,
  image: String,
  reverse: Boolean
})
</script>
```

---

# 9. Wichtige Erkenntnis (für dich als Dev)

Die Seite ist sehr wahrscheinlich gebaut mit:

* Tailwind oder ähnlichem Utility CSS
* Component-based Design
* sehr stark wiederverwendbare Sections

👉 Dein Ziel beim Nachbau:
**Utility → abstrahieren → Designsystem bauen**

---

# 10. Kurzstrategie zum Nachbauen

1. **HTML Struktur kopieren (DevTools)**
2. In Vue Komponenten zerlegen
3. CSS:

   * Farben extrahieren
   * Spacing vereinheitlichen
4. Bilder lokal speichern
5. Fonts global setzen

---

Wenn du willst, gehe ich als nächsten Schritt extrem tief rein:

* echte Farbwerte + Fonts exakt auslesen
* komplette Vue-Komponenten fertig generieren
* oder direkt dein Tailwind/DaisyUI Setup darauf mappen

Sag mir einfach, wie “pixelgenau” du das brauchst.

[1]: https://developer.mozilla.org/de/docs/Web/CSS/Reference/Properties/font-family?utm_source=chatgpt.com "font-family - CSS | MDN"
