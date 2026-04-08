<script setup>
import { ref } from 'vue'

const visible = ref(!localStorage.getItem('pax_cookie_accepted'))

function accept() {
  localStorage.setItem('pax_cookie_accepted', '1')
  visible.value = false
}
</script>

<template>
  <div
    v-if="visible"
    class="fixed bottom-0 left-0 right-0 z-50 bg-neutral text-neutral-content p-4 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-2xl"
  >
    <p class="text-sm">
      Diese Website verwendet Cookies, um dir die beste Erfahrung zu bieten.
      <a href="/datenschutz.html" class="link link-accent">Mehr erfahren</a>
    </p>
    <button class="btn btn-accent btn-sm shrink-0" @click="accept">Akzeptieren</button>
  </div>
</template>
