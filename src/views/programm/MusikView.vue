<script setup>
import ProgrammSection from '@/components/ProgrammSection.vue'

const days = ['Alle Tage', 'Do 23.', 'Fr 24.', 'Sa 25.', 'So 26.']
import { ref, computed } from 'vue'
const activeDay = ref('Alle Tage')

function inDay(auftritte) {
  if (activeDay.value === 'Alle Tage') return true
  return auftritte?.some(a => a.tag?.includes(activeDay.value))
}
</script>

<template>
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
</template>
