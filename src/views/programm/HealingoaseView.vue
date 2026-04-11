<script setup>
import SectionPhotoHero from '@/components/SectionPhotoHero.vue'
import heroImg from '@/assets/images/prog-hero-healing.png'
</script>

<template>
  <div>
    <SectionPhotoHero
      :img-src="heroImg"
      headline="Unser Healingbereich"
      title-align="bottom-left"
      bottom-color="#F7941D"
      height-class="min-h-[55vh]"
    />

    <!-- Info-Box -->
    <section class="bg-pax-gold text-white py-12 px-6 text-center">
      <div class="max-w-3xl mx-auto">
        <p class="text-lg md:text-xl font-bold leading-relaxed">
          Hier findest du eine alphabetische Auflistung der bisherigen Zusagen für unser Programm.
        </p>
        <p class="mt-4 leading-relaxed">
          Wenn du übersichtlich und aktuell über neue Zusagen infomiert werden möchtest, dann melde
          dich jetzt für unsere
          <a href="https://pax.family/#newsletter" target="_blank" rel="noopener noreferrer" class="underline font-bold">Friedenspost</a>
          an.
        </p>
      </div>
    </section>

    <div class="max-w-3xl mx-auto px-4 py-12 space-y-10">

      <section class="bg-white rounded-2xl shadow p-8">
        <h2 class="text-2xl font-bold text-pax-purple mb-4">Was ist die Healing-Area?</h2>
        <p class="text-gray-700 leading-relaxed">
          In unserer Healing-Area (ehemals Waldoase) findest du Workshops rund um die Themen
          Spiritualität, Entspannung und Geistiges Wohlbefinden. Hier steht dir auch unser
          <strong>Emotional Support</strong> zur Verfügung, den du gerne bei Konflikten oder
          psychischen Krisensituationen ansprechen darfst.
        </p>
        <p class="text-gray-500 mt-4 italic">Weitere Inhalte und Anbieter werden in Kürze bekanntgegeben.</p>
      </section>

      <section class="bg-pax-blue/5 border border-pax-blue/20 rounded-2xl p-6 text-center">
        <p class="text-pax-blue font-semibold text-lg">🕊️ Bleib gespannt – mehr Infos folgen!</p>
        <p class="text-gray-600 mt-2 text-sm">
          Melde dich für unsere <strong>Friedenspost</strong> an und erfahre als Erstes, was die Healing-Area 2026 zu bieten hat.
        </p>
        <a
          href="https://pax.family/#newsletter"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-block mt-4 bg-pax-blue hover:bg-blue-800 text-white font-bold py-2 px-6 rounded-full transition-colors"
        >
          Friedenspost abonnieren
        </a>
      </section>

    </div>
  </div>
</template>
