<script setup>
import AppNav from '@/components/AppNav.vue'
import AppFooter from '@/components/AppFooter.vue'
</script>

<template>
  <div data-theme="pax" class="min-w-[320px]">
    <AppNav />
    <main>
      <RouterView />
    </main>
    <AppFooter />
  </div>
</template>
