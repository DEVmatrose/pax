<script setup>
import { ref, computed, onMounted } from 'vue'

const props = defineProps({
  activeDay: { type: String, default: 'Alle Tage' },
})

const musiker = ref([])

onMounted(async () => {
  const res = await fetch('/data/musiker.json')
  musiker.value = await res.json()
})

const filtered = computed(() => {
  if (props.activeDay === 'Alle Tage') return musiker.value
  return musiker.value.filter(m =>
    m.auftritte?.some(a => a.tag?.includes(props.activeDay))
  )
})
</script>

<template>
  <div>
    <!-- Bewerbungs-Banner -->
    <div class="alert alert-info mb-6">
      <span>Du möchtest auftreten?
        <a href="mailto:bewerbung@pax-festival.de" class="link font-bold">Jetzt bewerben</a>
      </span>
    </div>

    <div v-if="filtered.length === 0" class="text-center text-gray-400 py-12">
      Keine Einträge für diesen Tag.
    </div>

    <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="m in filtered"
        :key="m.id ?? m.name"
        class="card bg-base-100 shadow-md hover:shadow-lg transition-shadow"
      >
        <div class="card-body">
          <h3 class="card-title text-pax-blue">{{ m.name }}</h3>
          <p class="text-sm text-gray-500">{{ m.genre }} · {{ m.land }}</p>
          <div v-if="m.auftritte?.length" class="mt-2 space-y-1">
            <span
              v-for="a in m.auftritte"
              :key="a.zeit"
              class="badge badge-outline badge-sm mr-1"
            >{{ a.tag }} {{ a.zeit }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
