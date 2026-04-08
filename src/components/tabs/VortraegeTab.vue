<script setup>
import { ref, computed, onMounted } from 'vue'

const props = defineProps({
  activeDay: { type: String, default: 'Alle Tage' },
})

const vortraege = ref([])

onMounted(async () => {
  const res = await fetch('/data/vortraege.json')
  vortraege.value = await res.json()
})

const filtered = computed(() => {
  if (props.activeDay === 'Alle Tage') return vortraege.value
  return vortraege.value.filter(v => v.tag?.includes(props.activeDay))
})
</script>

<template>
  <div>
    <!-- Bewerbungs-Banner -->
    <div class="alert alert-info mb-6">
      <span>Du möchtest einen Vortrag halten?
        <a href="mailto:bewerbung@pax-festival.de" class="link font-bold">Jetzt bewerben</a>
      </span>
    </div>

    <div v-if="filtered.length === 0" class="text-center text-gray-400 py-12">
      Keine Einträge für diesen Tag.
    </div>

    <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="v in filtered"
        :key="v.id ?? v.titel"
        class="card bg-base-100 shadow-md hover:shadow-lg transition-shadow"
      >
        <div class="card-body">
          <h3 class="card-title text-pax-blue">{{ v.titel }}</h3>
          <p class="text-sm text-gray-500">{{ v.redner }} · {{ v.organisation }}</p>
          <p class="text-sm mt-1">{{ v.beschreibung }}</p>
          <div v-if="v.themen?.length" class="mt-2 flex flex-wrap gap-1">
            <span
              v-for="thema in v.themen"
              :key="thema"
              class="badge badge-primary badge-sm"
            >{{ thema }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
