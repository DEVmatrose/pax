<script setup>
import SectionPhotoHero from '@/components/SectionPhotoHero.vue'
import ProgrammSection from '@/components/ProgrammSection.vue'
import heroImg from '@/assets/images/prog-hero-vortrag.png'
import { ref } from 'vue'

const days = ['Alle Tage', 'Do 23.', 'Fr 24.', 'Sa 25.', 'So 26.']
const activeDay = ref('Alle Tage')
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
          <template v-for="v in items" :key="v.id ?? v.titel">
            <div v-if="activeDay === 'Alle Tage' || v.tag?.includes(activeDay)"
              class="card bg-base-100 shadow hover:shadow-lg transition-shadow">
              <div class="card-body">
                <h3 class="card-title text-pax-blue">{{ v.titel }}</h3>
                <p class="text-sm text-gray-500">{{ v.redner }} · {{ v.organisation }}</p>
                <p class="text-sm mt-1">{{ v.beschreibung }}</p>
                <div v-if="v.themen?.length" class="mt-2 flex flex-wrap gap-1">
                  <span v-for="t in v.themen" :key="t" class="badge badge-primary badge-sm">{{ t }}</span>
                </div>
              </div>
            </div>
          </template>
        </div>
      </template>
    </ProgrammSection>
  </div>
</template>
