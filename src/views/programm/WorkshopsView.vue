<script setup>
import ProgrammSection from '@/components/ProgrammSection.vue'
import { ref } from 'vue'

const days = ['Alle Tage', 'Do 23.', 'Fr 24.', 'Sa 25.', 'So 26.']
const activeDay = ref('Alle Tage')

function inDay(termine) {
  if (activeDay.value === 'Alle Tage') return true
  return termine?.some(t => t.tag?.includes(activeDay.value))
}
</script>

<template>
  <ProgrammSection
    json-file="workshops"
    title="Workshops"
    bewerbung-text="Du möchtest einen Workshop anbieten?"
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
        <template v-for="w in items" :key="w.id ?? w.titel">
          <div v-if="inDay(w.termine)"
            class="card bg-base-100 shadow hover:shadow-lg transition-shadow">
            <div class="card-body">
              <h3 class="card-title text-pax-purple">{{ w.titel }}</h3>
              <p class="text-sm text-gray-500">{{ w.leiter }} · {{ w.kategorie }}</p>
              <p class="text-sm mt-1">{{ w.beschreibung }}</p>
              <div v-if="w.termine?.length" class="mt-2 flex flex-wrap gap-1">
                <span v-for="t in w.termine" :key="t.zeit"
                  class="badge badge-outline badge-sm">
                  {{ t.tag }} {{ t.zeit }} · max. {{ t.teilnehmer }} TN
                </span>
              </div>
            </div>
          </div>
        </template>
      </div>
    </template>
  </ProgrammSection>
</template>
