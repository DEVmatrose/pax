<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// Festival start: 23. Juli 2026 12:00
const target = new Date('2026-07-23T12:00:00')

const days  = ref(0)
const hours = ref(0)
const mins  = ref(0)
const secs  = ref(0)

let timer = null

function update() {
  const diff = target - Date.now()
  if (diff <= 0) {
    days.value = hours.value = mins.value = secs.value = 0
    clearInterval(timer)
    return
  }
  days.value  = Math.floor(diff / 86400000)
  hours.value = Math.floor((diff % 86400000) / 3600000)
  mins.value  = Math.floor((diff % 3600000)  / 60000)
  secs.value  = Math.floor((diff % 60000)    / 1000)
}

onMounted(() => { update(); timer = setInterval(update, 1000) })
onUnmounted(() => clearInterval(timer))
</script>

<template>
  <div class="flex items-center gap-3">
    <div v-for="(val, label) in { Tage: days, Std: hours, Min: mins, Sek: secs }"
      :key="label"
      class="flex flex-col items-center bg-[#342268] text-white rounded-lg px-3 py-2 min-w-[52px]">
      <span class="text-2xl font-extrabold tabular-nums leading-none">{{ String(val).padStart(2,'0') }}</span>
      <span class="text-[10px] font-semibold opacity-70 mt-0.5">{{ label }}</span>
    </div>
  </div>
</template>
