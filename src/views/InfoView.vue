<template>
  <div class="min-h-screen bg-[#f5ede0]">

    <!-- Page Header -->
    <div class="bg-gradient-to-r from-pax-blue to-pax-purple py-16 px-4 text-center text-white">
      <h1 class="text-4xl md:text-5xl font-bold mb-3">Festival-Info</h1>
      <p class="text-lg opacity-90">23. – 26. Juli 2026 · Friesack</p>
    </div>

    <div class="max-w-4xl mx-auto px-4 py-12 space-y-16">

      <!-- Tickets -->
      <section>
        <h2 class="text-3xl font-bold text-pax-blue mb-6">🎟️ Festival-Tickets</h2>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-white rounded-2xl shadow p-6 border-l-4 border-pax-gold">
            <h3 class="text-xl font-bold text-pax-purple mb-2">Kinder &amp; Jugendliche</h3>
            <p class="text-gray-700 text-lg font-semibold mb-1">Unter 18 Jahren: <span class="text-green-600">kostenlos!</span></p>
            <p class="text-gray-600 text-sm">In Begleitung Erwachsener. Kein Ticket erforderlich.</p>
          </div>
          <div class="bg-white rounded-2xl shadow p-6 border-l-4 border-pax-blue">
            <h3 class="text-xl font-bold text-pax-purple mb-2">Erwachsene</h3>
            <p class="text-gray-700 mb-3">Pay what you want – du bestimmst selbst, was dir das Festival wert ist.</p>
            <a
              href="https://krasser.guru/veranstaltungen/pax-das-weltfriedensfestival-2026/"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-block bg-pax-gold hover:bg-amber-500 text-white font-bold py-2 px-6 rounded-full transition-colors"
            >
              Ticket sichern →
            </a>
          </div>
        </div>
      </section>

      <!-- Festival ABC -->
      <section>
        <h2 class="text-3xl font-bold text-pax-blue mb-6">📖 Festival-ABC</h2>
        <div class="space-y-3">
          <details
            v-for="(item, i) in abc"
            :key="i"
            class="bg-white rounded-xl shadow group"
          >
            <summary class="flex items-center gap-4 px-6 py-4 cursor-pointer list-none select-none hover:bg-gray-50 rounded-xl">
              <span class="w-10 h-10 rounded-full bg-pax-blue text-white font-bold flex items-center justify-center text-lg flex-shrink-0">
                {{ item.buchstabe }}
              </span>
              <span class="font-semibold text-pax-blue">{{ item.titel }}</span>
            </summary>
            <div class="px-6 pb-4 pt-2 text-gray-700 leading-relaxed" v-html="item.inhalt" />
          </details>
        </div>
      </section>

    </div>
  </div>
</template>

<script setup>
const abc = [
  {
    buchstabe: 'A',
    titel: 'Anfahrt',
    inhalt: '<p><strong>Adresse:</strong> Vietznitzer Straße 14, 14662 Friesack</p><p class="mt-2"><strong>Auto:</strong> Über A24 (Abfahrt Neuruppin), A10 oder B5 in Richtung Friesack.</p><p class="mt-2"><strong>Bahn:</strong> Ab Berlin Hauptbahnhof ca. 1 Stunde. Bus 661 ab Bahnhof Friesack. Shuttleservice vom Bahnhof Friesack zum Gelände.</p><p class="mt-2"><strong>Fahrrad:</strong> Ca. 50 km von Berlin-Spandau.</p>'
  },
  {
    buchstabe: 'A',
    titel: 'Aussteller',
    inhalt: '<p>In unserem Ausstellerbereich findest du Künstler, Handwerker, Händler und Projekte mit Herz. Besuche unsere <a href="/programm/aussteller" class="text-pax-blue underline">Aussteller-Seite</a> für alle Infos.</p>'
  },
  {
    buchstabe: 'B',
    titel: 'Barrierefreiheit',
    inhalt: '<p>Wir bemühen uns, das Festival für alle zugänglich zu machen. Bitte kontaktiere uns vorab bei speziellen Bedürfnissen.</p>'
  },
  {
    buchstabe: 'B',
    titel: 'Bühnen',
    inhalt: '<p>2026 erstmals auf mehreren Bühnen! Auf der Hauptbühne treten die großen Acts auf; weitere Bühnen bieten Raum für intimere Auftritte und Workshops.</p>'
  },
  {
    buchstabe: 'C',
    titel: 'Camping',
    inhalt: '<p>Camping ist auf dem Festivalgelände möglich. Zelt, Wohnmobil oder Van – alle willkommen. Details folgen in Kürze.</p>'
  },
  {
    buchstabe: 'C',
    titel: 'Campwoche',
    inhalt: '<p>Vor dem Festival gibt es eine optionale Campwoche für alle, die früher anreisen möchten und das Gemeinschaftsleben in vollen Zügen genießen wollen.</p>'
  },
  {
    buchstabe: 'D',
    titel: 'Drogen',
    inhalt: '<p>Das PAX Festival ist ein drogenfreies Event. Der Konsum illegaler Substanzen ist auf dem Gelände nicht gestattet.</p>'
  },
  {
    buchstabe: 'D',
    titel: 'Duschen',
    inhalt: '<p>Duschmöglichkeiten sind auf dem Gelände vorhanden. Genaue Infos folgen näher zum Festival.</p>'
  },
  {
    buchstabe: 'E',
    titel: 'Einkaufen',
    inhalt: '<p>Auf dem Gelände gibt es Aussteller und Foodstands. Der nächste Supermarkt befindet sich in Friesack (ca. 2 km).</p>'
  },
  {
    buchstabe: 'E',
    titel: 'Einlass',
    inhalt: '<p>Der offizielle Einlass beginnt am Donnerstag, 23. Juli 2026. Genaue Einlasszeiten werden rechtzeitig bekannt gegeben.</p>'
  },
  {
    buchstabe: 'E',
    titel: 'Erste Hilfe',
    inhalt: '<p>Ein Sanitätsdienst ist während des gesamten Festivals auf dem Gelände. Der Infopoint vermittelt schnell Hilfe.</p>'
  },
  {
    buchstabe: 'E',
    titel: 'Essen & Trinken',
    inhalt: '<p>Es gibt Food-Stände mit einer Auswahl an Speisen und Getränken auf dem Gelände. Eigene Speisen dürfen mitgebracht werden.</p>'
  },
  {
    buchstabe: 'F',
    titel: 'Familien',
    inhalt: '<p>Das PAX ist ein Familienfestival! Kinder unter 18 kommen kostenlos in Begleitung Erwachsener. Es gibt einen eigenen Kinder(T)Raum und Familienangebote.</p>'
  },
  {
    buchstabe: 'F',
    titel: 'Feuerstelle',
    inhalt: '<p>Es gibt Feuerstellen auf dem Gelände für gemütliches Beisammensein. Offenes Feuer außerhalb der dafür vorgesehenen Stellen ist nicht erlaubt.</p>'
  },
  {
    buchstabe: 'G',
    titel: 'Geldautomat',
    inhalt: '<p>Auf dem Festivalgelände gibt es keinen Geldautomaten. Am besten genügend Bargeld mitbringen. Der nächste Geldautomat befindet sich in Friesack.</p>'
  },
  {
    buchstabe: 'H',
    titel: 'Healing-Oase',
    inhalt: '<p>In unserer Healing-Area findest du Workshops und Angebote rund um Spiritualität, Entspannung und geistiges Wohlbefinden sowie Emotional Support.</p>'
  },
  {
    buchstabe: 'H',
    titel: 'Helfer',
    inhalt: '<p>Du möchtest das Festival aktiv mitgestalten? Melde dich auf unserer <a href="/mitmachen" class="text-pax-blue underline">Mitmachen-Seite</a>!</p>'
  },
  {
    buchstabe: 'H',
    titel: 'Hunde',
    inhalt: '<p>Hunde sind willkommen, müssen aber an der Leine geführt und jederzeit unter Kontrolle sein.</p>'
  },
  {
    buchstabe: 'I',
    titel: 'Infopoint',
    inhalt: '<p>Der Infopoint befindet sich am Eingang des Geländes. Dort bekommst du alle Infos, Programmhefte und Hilfe bei Fragen und Notfällen.</p>'
  },
  {
    buchstabe: 'K',
    titel: 'Kinder & Jugendliche',
    inhalt: '<p>Kinder und Jugendliche unter 18 Jahren kommen kostenlos in Begleitung Erwachsener. Details auf der <a href="/programm/kinder" class="text-pax-blue underline">Kinder & Jugend-Seite</a>.</p>'
  }
]
</script>
