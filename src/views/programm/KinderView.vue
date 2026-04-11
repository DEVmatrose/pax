<script setup>
import SectionPhotoHero from '@/components/SectionPhotoHero.vue'
import heroImg from '@/assets/images/prog-hero-aussteller.png'
const baseUrl = import.meta.env.BASE_URL
</script>

<template>
  <div class="min-h-screen bg-[#f5ede0]">

    <SectionPhotoHero
      :img-src="heroImg"
      headline="Kinder &amp; Jugendliche"
      title-align="bottom-left"
      bottom-color="#662D91"
      height-class="min-h-[55vh]"
    />

    <!-- Info-Box -->
    <section class="bg-pax-purple text-white py-12 px-6 text-center">
      <div class="max-w-3xl mx-auto">
        <p class="text-lg md:text-xl font-bold leading-relaxed">
          Wir wollen auch dieses Jahr wieder einen Raum für junge Menschen schaffen.
          Menschen jeden Alters sollen bei uns eine Ecke finden können, in der sie sich wohl fühlen.
        </p>
        <p class="mt-4 leading-relaxed">
          Wir wollen unser Angebot ausbauen – insbesondere für Jugendliche – und sind noch in der Ideen-Sammelphase.
        </p>
      </div>
    </section>

    <div class="max-w-3xl mx-auto px-4 py-12 space-y-10">

      <!-- Kinder(T)Raum -->
      <section class="bg-white rounded-2xl shadow overflow-hidden">
        <img :src="baseUrl + 'images/kinder/kindertraum.jpg'" alt="Kinder(T)Raum" class="w-full h-56 object-cover object-top" />
        <div class="p-8">
        <h2 class="text-2xl font-bold text-pax-blue mb-4">🎪 Kinder(T)Raum</h2>
        <p class="text-gray-700 leading-relaxed mb-4">
          Hier steht das Wohl der Kinder im Mittelpunkt. Mit verschiedenen Materialien und Aufbauten
          können sich Kinder und Junggebliebene ausprobieren: laufen, springen, rutschen, schwingen,
          bälleschlagen, jonglieren und Türme bauen – eine Auszeit vom „langweiligen Erwachsenenkram".
        </p>
        <p class="text-gray-700 leading-relaxed mb-4">
          Neben besonderen Gesichtsbemalungen und Body Paintings von unserer hauseigenen Künstlerin
          <strong>MuNic</strong> gibt es überall verteilt kleine oder auch große Spielmöglichkeiten –
          sei es nun ein Kicker oder eine Bastelstation.
        </p>
        <div class="flex flex-wrap gap-4 text-sm text-gray-600">
          <div class="bg-pax-gold/10 rounded-lg px-4 py-2">
            <strong>Aufsicht:</strong> Eltern
          </div>
          <div class="bg-pax-blue/10 rounded-lg px-4 py-2">
            <strong>Sicherheit:</strong> Security &amp; Sanitätsdienst ca. 20 m entfernt
          </div>
        </div>
        </div>
      </section>

      <!-- Tickets -->
      <section class="bg-green-50 border border-green-200 rounded-2xl p-6 text-center">
        <p class="text-green-800 font-bold text-lg">🎟️ Kinder &amp; Jugendliche unter 18 Jahren: kostenlos!</p>
        <p class="text-green-700 mt-1 text-sm">In Begleitung Erwachsener. Kein Ticket erforderlich.</p>
      </section>

    </div>
  </div>
</template>
