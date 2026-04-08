<script setup>
import ProgrammSection from '@/components/ProgrammSection.vue'
</script>

<template>
  <ProgrammSection
    json-file="aussteller"
    title="Aussteller"
    bewerbung-text="Du möchtest ausstellen?"
  >
    <template #default="{ items }">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="a in items" :key="a.id ?? a.name"
          class="card bg-base-100 shadow hover:shadow-lg transition-shadow">
          <div class="card-body">
            <h3 class="card-title text-pax-gold">{{ a.name }}</h3>
            <p class="text-sm text-gray-500">{{ a.kategorie }} · Stand {{ a.standnummer }}</p>
            <p class="text-sm mt-1">{{ a.angebot }}</p>
          </div>
        </div>
      </div>
    </template>
  </ProgrammSection>
</template>
