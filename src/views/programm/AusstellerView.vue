<script setup>
import SectionPhotoHero from '@/components/SectionPhotoHero.vue'
import ProgrammSection from '@/components/ProgrammSection.vue'
import heroImg from '@/assets/images/prog-hero-aussteller.png'
</script>

<template>
  <div>
    <SectionPhotoHero
      :img-src="heroImg"
      headline="Unser Ausstellerbereich"
    />

    <!-- Info-Box -->
    <section class="bg-purple-200 text-pax-purple py-12 px-6 text-center">
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

    <ProgrammSection
      json-file="aussteller"
      title="Aussteller"
      bewerbung-text="Du möchtest ausstellen?"
    >
      <template #default="{ items }">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="a in items" :key="a.id ?? a.name"
            class="card bg-base-100 shadow hover:shadow-lg transition-shadow">
            <div class="card-body">
              <h3 class="card-title text-pax-gold">{{ a.name }}</h3>
              <p v-if="a.kategorie" class="text-xs badge badge-outline badge-secondary mb-1">{{ a.kategorie }}</p>
              <p class="text-sm mt-1">{{ a.beschreibung }}</p>
              <a v-if="a.website" :href="a.website" target="_blank" rel="noopener noreferrer"
                class="text-xs text-pax-blue underline mt-2 block truncate">{{ a.website }}</a>
            </div>
          </div>
        </div>
      </template>
    </ProgrammSection>
  </div>
</template>
