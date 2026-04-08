<script setup>
import { RouterLink } from 'vue-router'

const sections = [
  { label: 'Musik',           to: '/programm/musik',       icon: '🎵' },
  { label: 'Vorträge',        to: '/programm/vortraege',   icon: '🎤' },
  { label: 'Workshops',       to: '/programm/workshops',   icon: '🛠' },
  { label: 'Healingoase',     to: '/programm/healingoase', icon: '🌿' },
  { label: 'Aussteller',      to: '/programm/aussteller',  icon: '🏪' },
  { label: 'Kinder & Jugend', to: '/programm/kinder',      icon: '🧒' },
]
</script>

<template>
  <section class="max-w-5xl mx-auto px-6 py-20">
    <h1 class="text-4xl font-extrabold text-pax-blue mb-10">Programm</h1>
    <div class="grid grid-cols-2 sm:grid-cols-3 gap-6">
      <RouterLink
        v-for="s in sections"
        :key="s.to"
        :to="s.to"
        class="card bg-base-100 shadow hover:shadow-lg transition-shadow p-6 text-center">
        <div class="text-4xl mb-3">{{ s.icon }}</div>
        <div class="font-bold text-pax-blue">{{ s.label }}</div>
      </RouterLink>
    </div>
  </section>
</template>
