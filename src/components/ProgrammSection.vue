<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps({
  jsonFile: { type: String, required: true }, // z.B. 'musiker'
  title: { type: String, required: true },
  bewerbungText: { type: String, default: '' },
})

const items = ref([])
const loading = ref(true)
const error = ref(null)

onMounted(async () => {
  try {
    const res = await fetch(`/data/${props.jsonFile}.json`)
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    items.value = await res.json()
  } catch (e) {
    error.value = e.message
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <section class="max-w-6xl mx-auto px-6 py-16">
    <h1 class="text-4xl font-extrabold text-pax-blue mb-8">{{ title }}</h1>

    <!-- Bewerbungs-Banner -->
    <div v-if="bewerbungText" class="alert bg-pax-blue/10 border-pax-blue/20 text-pax-blue mb-8">
      <span>{{ bewerbungText }}
        <a href="mailto:bewerbung@pax-festival.de" class="link font-bold ml-1">Jetzt bewerben →</a>
      </span>
    </div>

    <div v-if="loading" class="flex justify-center py-20">
      <span class="loading loading-spinner loading-lg text-pax-blue" />
    </div>

    <div v-else-if="error" class="alert alert-error">
      Fehler beim Laden: {{ error }}
    </div>

    <div v-else-if="items.length === 0" class="text-center text-gray-400 py-20">
      Noch keine Einträge vorhanden.
    </div>

    <slot v-else :items="items" />
  </section>
</template>
