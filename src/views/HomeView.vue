<script setup>
import { onMounted, onBeforeUnmount } from 'vue'
import CountdownTimer from '@/components/CountdownTimer.vue'
import SectionPhotoHero from '@/components/SectionPhotoHero.vue'
import heroImg from '@/assets/images/lp-image1.png'
import logoPaxImg from '@/assets/images/logo-pax-26.png'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png'
import markerIcon from 'leaflet/dist/images/marker-icon.png'
import markerShadow from 'leaflet/dist/images/marker-shadow.png'
import lpImage2 from '@/assets/images/lp-image2.png'

// Fix Leaflet default icon paths in Vite
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
})

let map = null

onMounted(() => {
  map = L.map('pax-map')

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> contributors'
  }).addTo(map)

  // Custom icon: PAX Logo
  const paxIcon = L.icon({
    iconUrl: logoPaxImg,
    iconSize: [38, 40],
    iconAnchor: [19, 40],
    popupAnchor: [0, -44],
    tooltipAnchor: [0, -44],
  })

  // Marker: Freilichtbühne Friesack
  const buehne = L.marker([52.73681422705592, 12.590406436963276], { icon: paxIcon })
    .addTo(map)
    .bindPopup('<strong>Freilichtbühne Friesack</strong><br>Vierrutiner Str. 14<br>14662 Friesack', { maxWidth: 220 })
    .bindTooltip('🎪 Festivalgelände', { permanent: true, direction: 'top', className: 'pax-map-label' })

  // Polygon: Zeltplatz
  const zeltplatzCoords = [
    [52.7377756341102,  12.590771217367816],
    [52.740818867246105, 12.592375178365293],
    [52.73995496140789, 12.595803041531942],
    [52.737346901186726, 12.594907183709047],
  ]
  const zeltplatz = L.polygon(zeltplatzCoords, {
    color: '#2E3192',
    fillColor: '#662D91',
    fillOpacity: 0.3,
    weight: 2,
  }).addTo(map)
    .bindPopup('<strong>Zeltplatz PAX</strong><br>Camping-Bereich des Festivals')
    .bindTooltip('⛺ Zeltplatz', { permanent: true, direction: 'center', className: 'pax-map-label' })

  // Marker: Bahnhof Friesack
  const bahnhof = L.marker([52.76055737215376, 12.587761778138088])
    .addTo(map)
    .bindPopup('<strong>Bahnhof Friesack (Mark)</strong><br>45 Min. ab Berlin Hbf<br>Richtung Wittenberge')
    .bindTooltip('🚆 Bahnhof Friesack', { permanent: true, direction: 'top', className: 'pax-map-label' })

  // Fit map to show all markers + polygon
  const allBounds = L.featureGroup([buehne, zeltplatz, bahnhof]).getBounds()
  map.fitBounds(allBounds.pad(0.2))
})

onBeforeUnmount(() => {
  if (map) { map.remove(); map = null }
})
import crowdImg from '@/assets/images/image1.png'
import progMusikImg from '@/assets/images/lp-prog-musik.png'
import progVortraegeImg from '@/assets/images/lp-prog-vortraege.png'
import progWorkshopImg from '@/assets/images/lp-prog-workshop.png'
import progHealingImg from '@/assets/images/lp-prog-healing.png'
import progAusstellerImg from '@/assets/images/lp-prog-aussteller.png'
import progKinderImg from '@/assets/images/lp-prog-kinder-jugendliche.png'
import wasGefaelltImg from '@/assets/images/was-gefaellt-dir-am-pax.png'

const programm = [
  {
    slug: 'musik',
    to: '/programm/musik',
    titel: 'Musik',
    beschreibung: '2026 wird es eine Überraschung geben! Wir bringen nicht nur grandiose Musiker auf DIE Bühne, sondern dieses Jahr auf mehrere Bühnen.',
    gradient: 'linear-gradient(160deg, #2E3192 0%, #662D91 100%)',
    overlay: 'linear-gradient(to top, rgba(46,49,146,0.75) 0%, rgba(46,49,146,0.3) 60%, transparent 100%)',
    img: progMusikImg
  },
  {
    slug: 'vortraege',
    to: '/programm/vortraege',
    titel: 'Vorträge',
    beschreibung: 'Was wäre das PAX ohne seine ausgewählten Vortragsredner, die uns auch zum Nachdenken und zum Verändern einladen?',
    gradient: 'linear-gradient(160deg, #0f766e 0%, #0ea5e9 100%)',
    overlay: 'linear-gradient(to top, rgba(15,118,110,0.75) 0%, rgba(15,118,110,0.3) 60%, transparent 100%)',
    img: progVortraegeImg
  },
  {
    slug: 'workshops',
    to: '/programm/workshops',
    titel: 'Workshops',
    beschreibung: 'Ob heilsames Malen, Yoga oder Chanten, ob Meditationen, Friedensaufstellung oder Mitmachkonzerte.',
    gradient: 'linear-gradient(160deg, #F7941D 0%, #f59e0b 100%)',
    overlay: 'linear-gradient(to top, rgba(247,148,29,0.75) 0%, rgba(247,148,29,0.3) 60%, transparent 100%)',
    img: progWorkshopImg
  },
  {
    slug: 'healingoase',
    to: '/programm/healingoase',
    titel: 'Healingoase',
    beschreibung: 'Wer Ruhe sucht und an sich selbst arbeiten möchte, der ist bei uns richtig aufgehoben.',
    gradient: 'linear-gradient(160deg, #ca8a04 0%, #fbbf24 100%)',
    overlay: 'linear-gradient(to top, rgba(202,138,4,0.75) 0%, rgba(202,138,4,0.3) 60%, transparent 100%)',
    img: progHealingImg
  },
  {
    slug: 'aussteller',
    to: '/programm/aussteller',
    titel: 'Aussteller',
    beschreibung: 'Auch dieses Jahr haben wir wieder fantastische Aussteller auf unserem Markt der Möglichkeiten.',
    gradient: 'linear-gradient(160deg, #1d4ed8 0%, #3b82f6 100%)',
    overlay: 'linear-gradient(to top, rgba(29,78,216,0.75) 0%, rgba(29,78,216,0.3) 60%, transparent 100%)',
    img: progAusstellerImg
  },
  {
    slug: 'kinder',
    to: '/programm/kinder',
    titel: 'Kinder & Jugendliche',
    beschreibung: 'Herzlich willkommen an alle Kinder und Erwachsene, die im Herzen Kinder geblieben sind!',
    gradient: 'linear-gradient(160deg, #7e22ce 0%, #a855f7 100%)',
    overlay: 'linear-gradient(to top, rgba(126,34,206,0.75) 0%, rgba(126,34,206,0.3) 60%, transparent 100%)',
    img: progKinderImg
  }
]
</script>

<template>

  <!-- ═══════════════════════════════════════════════════════════
       BEREICH 1 — Hero + Gradient + Countdown + Intro
       bg: linear-gradient(180deg, #2E4392 17.31%, #F6C2D5 53.37%, #F99C25 100%)
       ═══════════════════════════════════════════════════════════ -->
  <section
    class="relative overflow-hidden"
    style="background: linear-gradient(180deg, #2E4392 17.31%, #F6C2D5 53.37%, #F99C25 100%)"
  >
    <!-- Top Banner -->
    <div class="relative z-20 bg-pax-gold text-white text-center py-3 px-4 text-sm font-semibold">
      Der Vorverkauf hat begonnen –&nbsp;
      <a
        href="https://krasser.guru/veranstaltungen/pax-das-weltfriedensfestival-2026/"
        target="_blank"
        rel="noopener noreferrer"
        class="underline underline-offset-2 font-bold hover:opacity-80"
      >
        Sichere dir dein Ticket
      </a>
      &nbsp;und sei beim PAX dabei!
    </div>

    <!-- 1a · Foto-Layer (fades unten in den blauen Gradient) -->
    <div class="relative h-[55vw] max-h-[700px] overflow-hidden">
      <img
        :src="heroImg"
        alt="PAX Festival Stimmung"
        class="absolute inset-0 w-full h-full object-cover object-center"
      />
      <!-- Overlay: links dunkel für Lesbarkeit, unten in Sektionsfarbe -->
      <div class="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#2E4392]" />

      <!-- Headline oben links (wie Vorlage) -->
      <div class="absolute inset-0 flex flex-col justify-start px-8 pt-10 max-w-2xl">
        <h1 class="text-white text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight drop-shadow-lg">
          Willkommen beim PAX –<br />Das Weltfriedensfestival
        </h1>
        <p class="text-white/90 text-xl mt-3 font-medium drop-shadow">
          Die Friedenstaube landet wieder
        </p>
      </div>
    </div>

    <!-- 1b · PAX-Badge + Datum + Countdown -->
    <div class="max-w-[1200px] mx-auto px-6 py-12 flex flex-col md:flex-row items-center gap-10">

      <!-- PAX-Emblem logo -->
      <img
        src="@/assets/images/pax-logo-orage-circle.png"
        alt="PAX Weltfriedensfestival"
        class="shrink-0 w-[303px] h-[322px] object-contain drop-shadow-2xl"
      />

      <!-- Datum + Countdown -->
      <div class="text-white">
        <h2 class="text-3xl md:text-4xl font-extrabold mb-0.5">23. – 26. Juli 2026</h2>
        <p class="text-white/90 ">Freilichtbühne Friesack bei Berlin</p>
        <p class="text-white/90  mb-5">Campwoche 21. – 28. Juli</p>
        <CountdownTimer />
      </div>
    </div>

    <!-- 1c · "Es geht von Neuem los…" Intro -->
    <div class="max-w-[1200px] mx-auto px-6 pb-20 grid md:grid-cols-2 gap-12 items-center">

      <div class="text-white">
        <h2 class="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
          Es geht von<br />Neuem los…
        </h2>
        <p class="text-white font-semibold text-lg leading-snug mb-4">
          … in eine neue Zeit hinein. Nach sieben wundervollen Festivaljahren wird
          aus dem „Pax Terra Musica" nun das „PAX Weltfriedensfestival"!
        </p>
        <p class="text-white/80 leading-relaxed">
          Wir laden dich von Herzen dazu ein, mit uns gemeinsam den Frieden zu feiern.
          Zur Musik zu tanzen und zu lachen, Vorträge zu hören, sich auszutauschen,
          zu vernetzen und in Workshops auszuprobieren, am Lagerfeuer zu singen,
          neue Freunde zu gewinnen und glücklich zu sein.
        </p>

        <div class="mt-8 flex flex-wrap gap-4">
          <span class="text-[#342268] text-xl font-bold self-center">Bist du dabei?</span>
          <a
            href="https://krasser.guru/veranstaltungen/pax-das-weltfriedensfestival-2026/"
            target="_blank"
            rel="noopener noreferrer"
            class="bg-pax-blue hover:bg-blue-800 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-colors"
          >
            Jetzt Ticket sichern
          </a>
        </div>
      </div>

      <!-- Foto rechts -->
      <div class="rounded-2xl overflow-hidden shadow-2xl aspect-[4/5]">
        <img :src="lpImage2" alt="Festivalbesucher" class="w-full h-full object-cover" />
      </div>
    </div>
  </section>


  <!-- ═══════════════════════════════════════════════════════════
       BEREICH 2 — "Warum PAX?" (SectionPhotoHero)
       ═══════════════════════════════════════════════════════════ -->
  <SectionPhotoHero
    :imgSrc="crowdImg"
    headline="Warum PAX Weltfriedensfestival?"
    btn-text="Mehr Infos"
    btn-to="/info"
    height-class="min-h-[55vh]"
  />


  <!-- ═══════════════════════════════════════════════════════════
       BEREICH 3 — Mission + Festival-Programm
       ═══════════════════════════════════════════════════════════ -->
  <section class="bg-[#f5ede0] py-20 px-6">
    <div class="max-w-3xl mx-auto text-center space-y-6 mb-16 text-gray-700 leading-relaxed">
      <p>
        Entgegen der weitläufigen Meinung, dass Krieg gar etwas Menschliches sei,
        kennen wir alle den tiefen, inneren Drang nach Harmonie und Weltfrieden.
        Wir wollen diese Stimme entfesseln und ihr die Kraft geben, gemeinsam zu erklingen,
        um zu zeigen, dass es sehr wohl auch anders geht. Und dass dies unglaublich schön sein kann.
      </p>
      <p>
        Daher bieten wir eine generationsübergreifende Plattform, die uns als Menschen eint,
        unsere Ideen sichtbar, Gedanken fühlbar und friedliche Lösungen greifbar macht.
        Im respektvollen Umgang miteinander und in hilfsbereiter Dankbarkeit füreinander
        kreieren wir das nahrhafte Substrat, um Frieden über diesen Platz hinaus in aller Welt sprießen zu lassen.
      </p>
    </div>

    <!-- Programm-Kacheln -->
    <div class="max-w-[1200px] mx-auto">
      <h2 class="text-3xl md:text-4xl font-extrabold text-pax-blue text-center mb-10">
        Entdecke unser Festival-Programm
      </h2>

      <div class="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        <router-link
          v-for="cat in programm"
          :key="cat.slug"
          :to="cat.to"
          class="group relative overflow-hidden rounded-2xl aspect-[3/4] flex flex-col justify-end shadow-lg hover:scale-[1.02] transition-transform"
          :style="{ background: cat.gradient }"
        >
          <!-- Photo bg (optional future) -->
          <img
            v-if="cat.img"
            :src="cat.img"
            :alt="cat.titel"
            class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div
            class="absolute inset-0"
            :style="{ background: cat.overlay }"
          />
          <div class="relative z-10 p-4 md:p-5">
            <h3 class="text-white font-extrabold text-xl md:text-2xl leading-tight mb-2">
              {{ cat.titel }}
            </h3>
            <p class="text-white/85 text-xs md:text-sm leading-relaxed">
              {{ cat.beschreibung }}
            </p>
          </div>
        </router-link>
      </div>

      <!-- "Und du?" CTA -->
      <div class="mt-14 text-center">
        <h3 class="text-2xl font-extrabold text-pax-blue mb-3">Und du?</h3>
        <p class="text-gray-600 mb-6 max-w-xl mx-auto text-sm">
          Möchtest du unser Festival aktiv mitgestalten? Wir freuen uns über Künstler und
          Vortragende, Workshopanbieter oder Aussteller, die zum Thema Frieden bzw.
          friedliches Miteinander passen.
          <router-link to="/mitmachen" class="text-pax-blue underline font-semibold">Kontaktiere uns</router-link>
          einfach!
        </p>
      </div>
    </div>
  </section>


  <!-- ═══════════════════════════════════════════════════════════
       BEREICH 4 — "Feier mit uns den Frieden" (SectionPhotoHero)
       ═══════════════════════════════════════════════════════════ -->
  <SectionPhotoHero
    :imgSrc="crowdImg"
    height-class="min-h-[45vh]"
    overlay="bg-gradient-to-b from-black/60 via-pax-blue/50 to-black/70"
    headline="Feier mit uns den Frieden"
    subline='und hole dir dein Ticket jetzt direkt bei "Krasser Guru":'
    btn-text="Jetzt Ticket sichern"
    btn-href="https://krasser.guru/veranstaltungen/pax-das-weltfriedensfestival-2026/"
  />

  <!-- ═══════════════════════════════════════════════════════════
       BEREICH 5 — "Was gefällt dir am PAX?"
       ═══════════════════════════════════════════════════════════ -->
  <section class="bg-white py-20 px-6">
    <div class="max-w-[1200px] mx-auto">
      <h2 class="text-3xl md:text-4xl font-extrabold text-pax-blue text-center mb-14">
        Was gefällt dir am PAX?
      </h2>

      <img
        :src="wasGefaelltImg"
        alt="Was gefällt dir am PAX?"
        class="w-full max-w-3xl mx-auto block"
      />
    </div>
  </section>


  <!-- ═══════════════════════════════════════════════════════════
       BEREICH 6 — Das Besondere am Ticketverkauf
       ═══════════════════════════════════════════════════════════ -->
  <section class="bg-[#F6E6D6] py-14 px-[52px]">
    <div class="max-w-[1200px] mx-auto flex flex-col gap-[50px]">

      <h2 class="text-[48px] font-bold text-[#342268] text-center leading-none">
        Das Besondere am Ticketverkauf
      </h2>

      <!-- Bild & Text -->
      <div class="flex flex-col md:flex-row justify-center items-start gap-[65px]">

        <!-- Content links -->
        <div class="flex flex-col gap-10 flex-1 max-w-[557px]">
          <div class="flex flex-col gap-[14px]">
            <h3 class="text-[36px] font-bold text-[#F99C25] leading-none">
              Entscheide selbst, wie viel du geben möchtest!
            </h3>
            <p class="text-[18px] text-[#342268] leading-relaxed">
              Du entscheidest, wie viel dir eine Woche PAX wert ist.
              Stärke mit deinem individuellen Beitrag, der sich gut und richtig anfühlt,
              der Friedensbewegung den Rücken – für eine liebevollere Zukunft.
            </p>
          </div>
          <div class="flex flex-col gap-[14px]">
            <h3 class="text-[36px] font-bold text-[#F99C25] leading-none">
              Für Kinder und Jugendliche ist der Eintritt frei!
            </h3>
            <p class="text-[18px] text-[#342268] leading-relaxed">
              Zum ersten Mal benötigen Kinder und Jugendliche unter 18 Jahren
              in Begleitung eines Erwachsenen kein Ticket. Sie kommen kostenlos
              auf das Festival. Sie sind uns von Herzen willkommen.
            </p>
          </div>
          <a
            href="https://krasser.guru/veranstaltungen/pax-das-weltfriedensfestival-2026/"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center justify-center bg-[#F99C25] hover:bg-amber-500 text-white font-normal text-[24px] py-[14px] px-[28px] rounded-full transition-colors self-center"
          >
            Ticket kaufen
          </a>
        </div>

        <!-- Bild rechts — quadratisch mit großen Ecken -->
        <div class="shrink-0 w-[491px] max-w-full aspect-square rounded-[50px] overflow-hidden shadow-xl">
          <img :src="heroImg" alt="Festival-Atmosphäre" class="w-full h-full object-cover" />
        </div>

      </div>
    </div>
  </section>


  <!-- ═══════════════════════════════════════════════════════════
       BEREICH 7 — So erreichst du das PAX
       ═══════════════════════════════════════════════════════════ -->
  <section class="bg-white py-20 px-6">
    <div class="max-w-[1200px] mx-auto">
      <h2 class="text-3xl md:text-4xl font-extrabold text-pax-blue text-center mb-14">
        So erreichst du das PAX Weltfriedensfestival
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 text-center">
        <div class="flex flex-col items-center gap-3">
          <span class="text-4xl">📍</span>
          <h3 class="font-extrabold text-pax-blue text-lg">Adresse</h3>
          <p class="text-gray-600 text-sm leading-relaxed">
            Für die manuelle Eingabe in ein Navigations-Tool deiner Wahl:
            Freilichtbühne Friesack, Vierrutiner Str. 14, 14662 Friesack.
          </p>
        </div>
        <div class="flex flex-col items-center gap-3">
          <span class="text-4xl">🚗</span>
          <h3 class="font-extrabold text-pax-blue text-lg">Mit dem Auto</h3>
          <p class="text-gray-600 text-sm leading-relaxed">
            Friesack liegt an der B5 (vom Brandenburger Tor immer Richtung Nord-Westen).
            Autobahnabfahrt Neuruppin oder Fehrbellin.
          </p>
        </div>
        <div class="flex flex-col items-center gap-3">
          <span class="text-4xl">🚆</span>
          <h3 class="font-extrabold text-pax-blue text-lg">Mit der Bahn</h3>
          <p class="text-gray-600 text-sm leading-relaxed">
            Ab Berlin Hauptbahnhof 45 Minuten Richtung Wittenberge bis Haltestelle
            Friesack (Mark) und danach weiter mit dem Bus, Shuttleservice oder
            gemütlichen 20 Minuten Fußweg zur Freilichtbühne.
          </p>
        </div>
      </div>

      <div id="pax-map" class="rounded-2xl overflow-hidden shadow-xl border border-gray-200" style="height: 380px" />
      <p class="text-center mt-3 text-xs text-gray-400">
        Freilichtbühne Friesack · Vierrutiner Str. 14 · 14662 Friesack
      </p>
    </div>
  </section>


  <!-- ═══════════════════════════════════════════════════════════
       BEREICH 8 — Friedenspost Newsletter
       ═══════════════════════════════════════════════════════════ -->
  <section class="bg-[#f5ede0] py-20 px-6">
    <div class="max-w-[1200px] mx-auto">
      <div class="max-w-xl mx-auto text-center">
        <h2 class="text-3xl md:text-4xl font-extrabold text-pax-blue mb-4">
          Melde dich zur Friedenspost an
        </h2>
        <p class="text-gray-600 leading-relaxed mb-10">
          Verpasse keine Neuigkeiten mehr und lass dich maximal einmal pro Woche
          über Ankündigungen neuer Bands und Vortragsredner sowie weitere
          interessante Neuigkeiten informieren.
        </p>

        <form @submit.prevent class="bg-white rounded-2xl shadow-md p-8 space-y-4 text-left">
          <div class="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Vorname"
              class="border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-pax-blue w-full"
            />
            <input
              type="email"
              placeholder="E-Mail-Adresse"
              class="border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-pax-blue w-full"
            />
          </div>
          <button
            type="submit"
            class="w-full bg-pax-blue hover:bg-blue-800 text-white font-bold py-3 rounded-lg transition-colors"
          >
            Abonnieren
          </button>
          <label class="flex items-start gap-2 text-xs text-gray-500 cursor-pointer">
            <input type="checkbox" class="mt-1 shrink-0" />
            <span>
              Ja, ich möchte den Newsletter erhalten und bin mit der Speicherung meiner Daten
              zu diesem Zweck einverstanden. Hinweise zum Datenschutz findest du in unserer
              <a href="/datenschutz" class="underline text-pax-blue">Datenschutzerklärung</a>.
            </span>
          </label>
          <p class="text-center text-xs text-gray-400 pt-1">Powered by EmailOctopus</p>
        </form>
      </div>
    </div>
  </section>


  <!-- ═══════════════════════════════════════════════════════════
       BEREICH 9 — Zitate (Crowd-Foto Hintergrund)
       ═══════════════════════════════════════════════════════════ -->
  <section class="relative overflow-hidden py-24 px-6">
    <img
      :src="crowdImg"
      alt="PAX Festival Publikum"
      class="absolute inset-0 w-full h-full object-cover"
    />
    <div class="absolute inset-0 bg-pax-blue/70" />

    <div class="relative z-10 max-w-[1200px] mx-auto grid md:grid-cols-2 gap-12 items-start">
      <blockquote class="text-white">
        <p class="text-xl md:text-2xl leading-relaxed italic mb-6">
          „Frieden ist nicht nur die Abwesenheit von Konflikten, sondern die Schaffung
          eines Umfelds, in dem alle gedeihen können."
        </p>
        <footer class="font-bold text-pax-gold text-base">~ Nelson Mandela</footer>
      </blockquote>

      <blockquote class="text-white">
        <p class="text-xl md:text-2xl leading-relaxed italic mb-6">
          „Frieden ist keine Aufgabe für Regierungen allein. Frieden ist eine kollektive
          Praxis. Jeder Mensch, der sich für Dialog, Mitgefühl und Wahrheit entscheidet,
          stärkt die Gemeinschaft der Menschheitsfamilie."
        </p>
        <footer class="font-bold text-pax-gold text-base">~ Daniele Ganser</footer>
      </blockquote>
    </div>
  </section>


  <!-- Sticky Ticket Button -->
  <a
    href="https://krasser.guru/veranstaltungen/pax-das-weltfriedensfestival-2026/"
    target="_blank"
    rel="noopener noreferrer"
    class="fixed bottom-6 right-6 bg-pax-gold hover:bg-amber-500 text-white font-bold py-3 px-5 rounded-full shadow-xl z-50 transition-colors flex items-center gap-2"
  >
    🎟 Tickets
  </a>

</template>

<style>
.pax-map-label {
  background: #342268;
  color: #fff;
  border: none;
  border-radius: 6px;
  padding: 3px 8px;
  font-size: 13px;
  font-weight: 700;
  white-space: nowrap;
  box-shadow: 0 2px 6px rgba(0,0,0,0.3);
}
.pax-map-label::before {
  display: none;
}
</style>
