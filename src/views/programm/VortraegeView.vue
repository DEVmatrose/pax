<script setup>
import SectionPhotoHero from '@/components/SectionPhotoHero.vue'
import ProgrammSection from '@/components/ProgrammSection.vue'
import heroImg from '@/assets/images/prog-hero-vortrag.png'
import { ref } from 'vue'

const days = ['Alle Tage', 'Do 23.', 'Fr 24.', 'Sa 25.', 'So 26.']
const activeDay = ref('Alle Tage')
const dayMap = { 'Do 23.': 'Donnerstag', 'Fr 24.': 'Freitag', 'Sa 25.': 'Samstag', 'So 26.': 'Sonntag' }
</script>

<template>
  <div>
    <SectionPhotoHero
      :img-src="heroImg"
      headline="Unser Vortragsprogramm"
    />

    <!-- Info-Box -->
    <section class="bg-teal-600 text-white py-12 px-6 text-center">
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
      json-file="vortraege"
      title="Vorträge"
      bewerbung-text="Du möchtest einen Vortrag halten?"
    >
      <template #default="{ items }">
        <div class="flex flex-wrap gap-2 mb-8">
          <button v-for="day in days" :key="day"
            class="btn btn-sm"
            :class="activeDay === day ? 'btn-primary' : 'btn-outline btn-primary'"
            @click="activeDay = day">
            {{ day }}
          </button>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <template v-for="v in items" :key="v.id ?? v.name">
            <div v-if="activeDay === 'Alle Tage' || v.tag === dayMap[activeDay]"
              class="card bg-base-100 shadow hover:shadow-lg transition-shadow">
              <figure v-if="v.image">
                <img :src="'/' + v.image" :alt="v.name" class="w-full h-48 object-cover" />
              </figure>
              <div class="card-body">
                <h3 class="card-title text-pax-blue">{{ v.name }}</h3>
                <p v-if="v.subtitle" class="text-sm font-medium text-gray-600">{{ v.subtitle }}</p>
                <p v-if="v.thema" class="text-xs text-gray-400">{{ v.thema }}</p>
                <p v-if="v.bio" class="text-sm mt-1 line-clamp-4">{{ v.bio }}</p>
                <div class="mt-2 flex flex-wrap gap-1">
                  <span v-if="v.tag" class="badge badge-outline badge-primary badge-sm">{{ v.tag }}</span>
                </div>
              </div>
            </div>
          </template>
        </div>
      </template>
    </ProgrammSection>
  </div>
</template>
