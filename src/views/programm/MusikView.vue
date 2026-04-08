<script setup>
import SectionPhotoHero from '@/components/SectionPhotoHero.vue'
import ProgrammSection from '@/components/ProgrammSection.vue'
import heroImg from '@/assets/images/prog-hero-musik.png'
import { ref } from 'vue'

const days = ['Alle Tage', 'Do 23.', 'Fr 24.', 'Sa 25.', 'So 26.']
const activeDay = ref('Alle Tage')

function inDay(auftritte) {
  if (activeDay.value === 'Alle Tage') return true
  return auftritte?.some(a => a.tag?.includes(activeDay.value))
}
</script>

<template>
  <div>
    <SectionPhotoHero
      :img-src="heroImg"
      headline="Unser Musikprogramm"
    />

    <!-- Info-Box -->
    <section class="bg-pax-purple text-white py-12 px-6 text-center">
      <div class="max-w-3xl mx-auto">
        <h3 class="text-2xl md:text-3xl font-bold text-pax-gold italic mb-4">2026 wird es eine Neuerung geben</h3>
        <p class="leading-relaxed">
          Wir bringen nicht nur grandiose Musiker auf DIE Bühne, sondern in diesem Jahr erstmals auf
          mehrere Bühnen. In den kommenden Wochen wird diese Seite stetig aktualisiert – sei gespannt:
          es kommen noch einige Überraschungen 🙂 Freue dich auf ein vielfältiges Angebot! Es ist für
          jeden Musikgeschmack etwas dabei.
        </p>
        <p class="mt-4 leading-relaxed">
          Wenn du übersichtlich und aktuell über neue Zusagen infomiert werden möchtest, dann melde
          dich jetzt für unsere
          <a href="https://pax.family/#newsletter" target="_blank" rel="noopener noreferrer" class="underline font-bold">Friedenspost</a>
          an. Dort erfährst du immer als Erstes von Neuigkeiten rund um das PAX.
        </p>
      </div>
    </section>

    <ProgrammSection
      json-file="musiker"
      title="Musik"
      bewerbung-text="Du möchtest auf der PAX-Bühne auftreten?"
    >
      <template #default="{ items }">
        <!-- Tag-Filter -->
        <div class="flex flex-wrap gap-2 mb-8">
          <button
            v-for="day in days" :key="day"
            class="btn btn-sm"
            :class="activeDay === day ? 'btn-primary' : 'btn-outline btn-primary'"
            @click="activeDay = day">
            {{ day }}
          </button>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <template v-for="m in items" :key="m.id ?? m.name">
            <div v-if="inDay(m.auftritte)"
              class="card bg-base-100 shadow hover:shadow-lg transition-shadow">
              <div class="card-body">
                <h3 class="card-title text-pax-blue">{{ m.name }}</h3>
                <p class="text-sm text-gray-500">{{ m.genre }} · {{ m.land }}</p>
                <div v-if="m.auftritte?.length" class="mt-2 flex flex-wrap gap-1">
                  <span v-for="a in m.auftritte" :key="a.zeit"
                    class="badge badge-outline badge-primary badge-sm">
                    {{ a.tag }} {{ a.zeit }}
                  </span>
                </div>
              </div>
            </div>
          </template>
        </div>
      </template>
    </ProgrammSection>
  </div>
</template>
