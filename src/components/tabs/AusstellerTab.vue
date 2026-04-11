<script setup>
import { ref, onMounted } from 'vue'

const aussteller = ref([])

onMounted(async () => {
  const res = await fetch('/data/aussteller.json')
  aussteller.value = await res.json()
})
</script>

<template>
  <div>
    <!-- Bewerbungs-Banner -->
    <div class="alert alert-info mb-6">
      <span>Du möchtest ausstellen?
        <a href="mailto:bewerbung@pax-festival.de" class="link font-bold">Jetzt bewerben →</a>
      </span>
    </div>

    <div v-if="aussteller.length === 0" class="text-center text-gray-400 py-12">
      Noch keine Aussteller eingetragen.
    </div>

    <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="a in aussteller"
        :key="a.id ?? a.name"
        class="card bg-base-100 shadow-md hover:shadow-lg transition-shadow"
      >
        <div class="card-body">
          <h3 class="card-title text-pax-gold">{{ a.name }}</h3>
          <p class="text-sm text-gray-500">{{ a.kategorie }} · Stand {{ a.standnummer }}</p>
          <p class="text-sm mt-1">{{ a.angebot }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
