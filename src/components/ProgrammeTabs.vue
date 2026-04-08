<script setup>
import { ref, onMounted } from 'vue'
import MusikerTab from './tabs/MusikerTab.vue'
import WorkshopsTab from './tabs/WorkshopsTab.vue'
import VortraegeTab from './tabs/VortraegeTab.vue'
import AusstellerTab from './tabs/AusstellerTab.vue'

const activeTab = ref('musiker')

const tabs = [
  { key: 'musiker',    label: '🎵 Musiker' },
  { key: 'workshops',  label: '🛠 Workshops' },
  { key: 'vortraege',  label: '🎤 Vorträge' },
  { key: 'aussteller', label: '🏪 Aussteller' },
]

const days = ['Alle Tage', 'Do 23.', 'Fr 24.', 'Sa 25.', 'So 26.']
const activeDay = ref('Alle Tage')
</script>

<template>
  <section class="py-20 px-4 max-w-6xl mx-auto">
    <h2 class="text-4xl font-extrabold text-center text-pax-blue mb-10">Programm</h2>

    <!-- Tab Navigation -->
    <div class="tabs tabs-boxed justify-center mb-6">
      <a
        v-for="tab in tabs"
        :key="tab.key"
        class="tab tab-lg"
        :class="{ 'tab-active': activeTab === tab.key }"
        @click="activeTab = tab.key"
      >
        {{ tab.label }}
      </a>
    </div>

    <!-- Tag-Filter -->
    <div class="flex flex-wrap gap-2 justify-center mb-8">
      <button
        v-for="day in days"
        :key="day"
        class="btn btn-sm"
        :class="activeDay === day ? 'btn-primary' : 'btn-outline'"
        @click="activeDay = day"
      >
        {{ day }}
      </button>
    </div>

    <!-- Tab Content -->
    <MusikerTab    v-if="activeTab === 'musiker'"    :active-day="activeDay" />
    <WorkshopsTab  v-if="activeTab === 'workshops'"  :active-day="activeDay" />
    <VortraegeTab  v-if="activeTab === 'vortraege'"  :active-day="activeDay" />
    <AusstellerTab v-if="activeTab === 'aussteller'" :active-day="activeDay" />
  </section>
</template>
