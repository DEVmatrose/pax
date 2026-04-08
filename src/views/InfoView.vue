<template>
  <div class="min-h-screen bg-[#f5ede0]">

    <!-- Hero -->
    <div class="relative w-full overflow-hidden" style="min-height: 480px;">
      <img :src="heroImg" alt="Festival-Woche" class="absolute inset-0 w-full h-full object-cover object-center" />
      <div class="absolute inset-0 bg-black/50" />
      <div class="relative z-10 flex flex-col justify-end h-full px-6 md:px-16 py-12" style="min-height: 480px;">
        <h1 class="text-3xl md:text-5xl font-bold text-white leading-tight max-w-2xl">
          Eine Festival-Woche in Fülle und Frieden
        </h1>
      </div>
    </div>

    <!-- Box 1: Bild links, Text rechts — Campwoche -->
    <section class="bg-[#f5ede0] py-16 px-4">
      <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <img :src="box1Img" alt="Campwoche" class="w-full h-auto rounded-2xl object-cover" />
        </div>
        <div class="space-y-4 text-gray-800">
          <h2 class="text-2xl md:text-3xl font-bold text-[#342268] leading-tight">
            Eine Festival-Woche in Fülle und Frieden
          </h2>
          <p>Nicht nur unser liebevoll gestaltetes Programm vom 23. bis 26. Juli 2026 ist eine Reise zu uns nach Friesack wert.</p>
          <p>Auf vielfachen Wunsch und um euch noch mehr gemeinsame Zeit zu ermöglichen, haben wir bereits letztes Jahr alles in Bewegung gesetzt, um euch die Tore länger geöffnet zu halten.</p>
          <p>Die Campwoche beginnt dieses Jahr am Dienstag den 21. und endet am 28. Juli.</p>
          <p>Eine absolute Empfehlung, sich diese Zeit zu nehmen! Wer möchte, kann sich beim Auf- und Abbau beteiligen oder einfach eine schöne Zeit vor Ort verbringen.</p>
        </div>
      </div>
    </section>

    <!-- Box 2: Text links, Bild rechts — Was ist PAX? -->
    <section class="bg-white py-16 px-4">
      <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div class="space-y-4 text-gray-800">
          <h2 class="text-2xl md:text-3xl font-bold text-[#342268] leading-tight">
            Was ist das PAX Weltfriedensfestival?
          </h2>
          <p>Das PAX Weltfriedensfestival ist ein gemeinnütziges Festival für die ganze Familie, das sich dem Frieden auf allen Ebenen verschrieben hat.</p>
          <p>Menschen aller Altersklassen kommen hier für vier Tage zusammen, um gemeinsam an konkreten Lösungsvorschlägen für eine friedlichere, bessere Welt zu arbeiten – sei es auf persönlicher, gesellschaftlicher oder politischer Ebene.</p>
          <p>Das PAX möchte die Meinungsbildung unter der Voraussetzung von Offenheit und Integration fördern. Unsere vielfältigen Angebote von Kunst und Kultur, Musik und Bildung dienen der persönlichen Weiterentwicklung jedes Einzelnen.</p>
          <p>Für die Kinder und Jugendlichen gibt es besondere Aufenthaltsbereiche, in denen sie sich kreativ-spielerisch ausprobieren und austauschen können.</p>
          <p>Letztendlich ist es aber die besondere Energie, die durch die Festivalteilnehmer in diesen Tagen kreiert wird, und die eine ganz bezaubernde und friedliche Atmosphäre erschafft – eine Art Vorausschau in eine neue, eine liebevollere Welt.</p>
        </div>
        <div>
          <img :src="box2Img" alt="Was ist PAX?" class="w-full h-auto rounded-2xl object-cover" />
        </div>
      </div>
    </section>

  <!-- Box 2: Text links, Bild rechts — Was ist PAX? -->




    <div class="max-w-4xl mx-auto px-4 py-12 space-y-16">

    

      <!-- Box 3:  Festival ABC -->
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

      <!-- Box 4: Orte des Festivals -->
    </div>

    <section class="bg-[#f5ede0] py-16 px-4">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-bold text-[#342268] text-center mb-12">Orte des Festivals</h2>
        <div class="grid md:grid-cols-3 gap-x-8 gap-y-10">

          <div class="text-center">
            <h3 class="text-xl font-bold text-[#662D91] mb-3">Bühnen</h3>
            <p class="text-gray-700 text-sm leading-relaxed">2026 wird es eine Überraschung geben! Wir bringen nicht nur grandiose Musiker auf DIE Bühne, sondern dieses Jahr auf mehrere Bühnen.</p>
          </div>

          <div class="text-center">
            <h3 class="text-xl font-bold text-[#662D91] mb-3">Vortragszelt</h3>
            <p class="text-gray-700 text-sm leading-relaxed">Wie gewohnt gibt es hier ein buntes Spektrum interessanter Vorträge und Diskussionen von Politik und Zeitgeschehen bis zu alternativen Zukunftslösungen. Lerne Referenten kennen, die Du sonst nur bei YouTube siehst und komme mit ihnen ins Gespräch.</p>
          </div>

          <div class="text-center">
            <h3 class="text-xl font-bold text-[#662D91] mb-3">Diplomatenzelt</h3>
            <p class="text-gray-700 text-sm leading-relaxed">In diesem Jahr haben wir neben dem Vortragszelt noch ein zweites Zelt mit Diskussionsrunden und Vorträgen, die sich explizit mit der Verständigung zwischen den Völkern befassen. Wir sind dankbar, das wir auch hier einige namhafte Referenten gewinnen konnten.</p>
          </div>

          <div class="text-center">
            <h3 class="text-xl font-bold text-[#662D91] mb-3">Aussteller</h3>
            <p class="text-gray-700 text-sm leading-relaxed">Auch dieses Jahr haben wir wieder fantastische Aussteller auf unserem Markt der Möglichkeiten.</p>
          </div>

          <div class="text-center">
            <h3 class="text-xl font-bold text-[#662D91] mb-3">Kinder (T)raum</h3>
            <p class="text-gray-700 text-sm leading-relaxed">Hier steht das Wohl der Kinder im Mittelpunkt: laufen, springen, rutschen, schwingen, bälleschlagend, jonglierend und Türme bauend können sie eine Auszeit vom „langweiligen Erwachsenenkram" genießen.</p>
          </div>

          <div class="text-center">
            <h3 class="text-xl font-bold text-[#662D91] mb-3">Jugendcamp</h3>
            <p class="text-gray-700 text-sm leading-relaxed">Frieden bewegt uns alle, egal wie alt wir sind, woher wir kommen und woran wir glauben. Darum möchten wir ein Raum sein, in dem sich möglichst viele Menschen wohlfühlen, in dem sich junge Leute neu entdecken, frei entfalten und neue Erfahrungen machen können.</p>
          </div>

          <div class="text-center">
            <h3 class="text-xl font-bold text-[#662D91] mb-3">Workshopzelt</h3>
            <p class="text-gray-700 text-sm leading-relaxed">Ob du zur Ruhe kommen, dich bewegen oder inspirierende Impulse mitnehmen möchtest – für jeden ist etwas dabei. Gemeinsam schaffen wir einen Raum für Austausch, Wachstum und neue Ideen.</p>
          </div>

          <div class="text-center">
            <h3 class="text-xl font-bold text-[#662D91] mb-3">Healing-Oase</h3>
            <p class="text-gray-700 text-sm leading-relaxed">Komm zur Healing Oase mit Chill-Bereich, Massage Angeboten und verschiedenen Workshops wie Breathwork, Ecstatic Dance, Rapé Zeremonie, Cannabis Zeremonie, Yoga u.v.m. und tanke auf für Körper, Geist und Seele.</p>
          </div>

          <div class="text-center">
            <h3 class="text-xl font-bold text-[#662D91] mb-3">Goldenes Dreieck</h3>
            <p class="text-gray-700 text-sm leading-relaxed">Elektronische Tanzmusik mit Live-DJs und aus der Dose. Ein kleiner, feiner Floor am Ende des Zeltplatzes für alle, die sich mal richtig ausstanzen wollen.</p>
          </div>

        </div>

        <div class="text-center mt-12">
          <RouterLink
            to="/programm"
            class="inline-block bg-pax-gold hover:bg-amber-500 text-white font-bold py-3 px-8 rounded-full transition-colors"
          >
            Zum Programm
          </RouterLink>
        </div>
      </div>
    </section>

    <div class="max-w-4xl mx-auto px-4 py-12 space-y-16">

      <!--  Box 5: Tickets -->
      <section>
        <h2 class="text-3xl font-bold text-[#342268] text-center mb-10">Festival-Tickets</h2>
        <div class="grid md:grid-cols-2 gap-10">

          <!-- Kinder frei -->
          <div class="space-y-4">
            <h3 class="text-xl font-bold text-pax-gold leading-snug">Für Kinder und Jugendliche ist der Eintritt frei!</h3>
            <img :src="box3Img" alt="Kind mit Schmetterlingsflügeln" class="w-full h-64 object-cover rounded-2xl" />
            <p class="font-semibold text-gray-800">Frieden wünschen wir uns alle.<br />Frieden betrifft uns alle.<br />Aus diesem Grund möchten wir allen Menschen die Teilnahme am PAX Weltfriedensfestival ermöglichen.</p>
            <p class="text-gray-700 text-sm leading-relaxed">Vor allem Familien bekommen dieses Jahr ein großes Geschenk und eine besondere Einladung von uns: <strong>Zum ersten Mal benötigen Kinder und Jugendliche unter 18 Jahren in Begleitung eines Erwachsenen kein Ticket.</strong></p>
            <p class="text-gray-700 text-sm leading-relaxed">Sie kommen kostenlos auf das Festival. Sie sind uns von Herzen willkommen. Denn wofür veranstalten wir letztendlich unser Festival? Weswegen machen wir uns wieder und wieder für den Frieden stark, wenn nicht für unsere Kinder? Sie stehen für unsere Zukunft, sie sind unsere Zukunft.</p>
          </div>

          <!-- Pay what you want -->
          <div class="space-y-4">
            <h3 class="text-xl font-bold text-pax-gold leading-snug">Du entscheidest selbst, wie viel du geben möchtest!</h3>
            <img :src="box4Img" alt="Frieden für alle" class="w-full h-64 object-cover rounded-2xl" />
            <p class="font-semibold text-gray-800 leading-snug">Auch für alle anderen, nämlich die Erwachsenen, haben wir Neuerungen. Es gibt nur ein individuelles Ticket – und du kannst selbst den Preis bestimmen.</p>
            <p class="text-gray-700 text-sm leading-relaxed">Du darfst entscheiden, wie viel dir eine Woche PAX wert ist. Du bezahlst, was du bezahlen kannst und was du bezahlen willst. Nach oben hin gibt es (fast) keine Grenzen 🙂</p>
            <p class="text-gray-700 text-sm leading-relaxed">Wir legen dir hiermit ein Instrument der Selbstbestimmung in die Hände. Bitte gehe sorgsam damit um. <strong>Wir möchten, dass alle Menschen, die das PAX besuchen wollen, auch kommen können, egal, wie groß oder klein ihr Geldbeutel ist.</strong></p>
            <a
              href="https://krasser.guru/veranstaltungen/pax-das-weltfriedensfestival-2026/"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-block bg-pax-gold hover:bg-amber-500 text-white font-bold py-3 px-8 rounded-full transition-colors"
            >
              Ticket sichern →
            </a>
          </div>

        </div>
      </section>

    </div>

    <!-- Box 6: CTA — Feier mit uns den Frieden -->
    <SectionPhotoHero
      :imgSrc="crowdImg"
      height-class="min-h-[45vh]"
      overlay="bg-gradient-to-b from-black/60 via-pax-blue/50 to-black/70"
      headline="Feier mit uns den Frieden"
      subline='und hole dir dein Ticket jetzt direkt bei "Krasser Guru":'
      btn-text="Jetzt Ticket sichern"
      btn-href="https://krasser.guru/veranstaltungen/pax-das-weltfriedensfestival-2026/"
    />

  </div>
</template>

<script setup>
import SectionPhotoHero from '@/components/SectionPhotoHero.vue'
import crowdImg from '@/assets/images/image1.png'
import heroImg from '@/assets/images/info-hero.png'
import box1Img from '@/assets/images/info-box-1.png'
import box2Img from '@/assets/images/info-box-2.png'
import box3Img from '@/assets/images/info-box-3.png'
import box4Img from '@/assets/images/info-box-4.png'

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
