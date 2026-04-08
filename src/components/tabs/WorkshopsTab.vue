<script setup>
import { ref, computed, onMounted } from 'vue'

const props = defineProps({
  activeDay: { type: String, default: 'Alle Tage' },
})

const workshops = ref([])

onMounted(async () => {
  const res = await fetch('/data/workshops.json')
  workshops.value = await res.json()
})

const filtered = computed(() => {
  if (props.activeDay === 'Alle Tage') return workshops.value
  return workshops.value.filter(w =>
    w.termine?.some(t => t.tag?.includes(props.activeDay))
  )
})
</script>

<template>
  <div>
    <!-- Bewerbungs-Banner -->
    <div class="alert alert-info mb-6">
      <span>Du möchtest einen Workshop anbieten?
        <a href="mailto:bewerbung@pax-festival.de" class="link font-bold">Jetzt bewerben</a>
      </span>
    </div>

    <div v-if="filtered.length === 0" class="text-center text-gray-400 py-12">
      Keine Einträge für diesen Tag.
    </div>

    <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="w in filtered"
        :key="w.id ?? w.titel"
        class="card bg-base-100 shadow-md hover:shadow-lg transition-shadow"
      >
        <div class="card-body">
          <h3 class="card-title text-pax-purple">{{ w.titel }}</h3>
          <p class="text-sm text-gray-500">{{ w.leiter }} · {{ w.kategorie }}</p>
          <p class="text-sm mt-1">{{ w.beschreibung }}</p>
          <div v-if="w.termine?.length" class="mt-2">
            <span
              v-for="t in w.termine"
              :key="t.zeit"
              class="badge badge-outline badge-sm mr-1"
            >{{ t.tag }} {{ t.zeit }} · max. {{ t.teilnehmer }} TN</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
