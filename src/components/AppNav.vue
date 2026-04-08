<script setup>
import { ref } from 'vue'

const programDropdownOpen = ref(false)

const programItems = [
  { label: 'Musik',           to: '/programm/musik' },
  { label: 'Vorträge',        to: '/programm/vortraege' },
  { label: 'Workshops',       to: '/programm/workshops' },
  { label: 'Healingoase',     to: '/programm/healingoase' },
  { label: 'Aussteller',      to: '/programm/aussteller' },
  { label: 'Kinder & Jugend', to: '/programm/kinder' },
]
</script>

<template>
  <!-- Orange top accent line -->
  <div class="h-1 bg-pax-gold w-full" />

  <header class="bg-[#f5ede0] border-b border-[#e8ddd0] sticky top-0 z-50 shadow-sm">
    <nav class="max-w-[1200px] mx-auto px-6 h-16 flex items-center gap-8">

      <!-- Logo -->
      <RouterLink to="/" class="shrink-0 mr-4">
        <img src="@/assets/images/logo-pax-26.png" alt="PAX Weltfriedensfestival 2026" class="h-10 w-auto" />
      </RouterLink>

      <!-- Nav items (center) -->
      <div class="flex-1 flex items-center justify-center gap-6 text-sm font-semibold text-pax-blue">

        <RouterLink to="/"
          class="hover:text-pax-gold transition-colors"
          :class="{ 'text-pax-gold': $route.path === '/' }">
          Home
        </RouterLink>

        <RouterLink to="/info"
          class="hover:text-pax-gold transition-colors"
          :class="{ 'text-pax-gold': $route.path.startsWith('/info') }">
          Info
        </RouterLink>

        <!-- Programm Dropdown -->
        <div class="relative"
          @mouseenter="programDropdownOpen = true"
          @mouseleave="programDropdownOpen = false">

          <RouterLink to="/programm"
            class="hover:text-pax-gold transition-colors flex items-center gap-1"
            :class="{ 'text-pax-gold underline underline-offset-4 decoration-pax-gold': $route.path.startsWith('/programm') }">
            Programm
            <svg class="w-3 h-3 mt-0.5 opacity-60" fill="none" viewBox="0 0 10 6">
              <path d="M1 1l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
            </svg>
          </RouterLink>

          <!-- Dropdown panel — sub-items in smaller text below -->
          <Transition name="fade-down">
            <div v-if="programDropdownOpen"
              class="absolute top-full left-0 mt-1 bg-[#f5ede0] border border-[#e0d4c4] rounded-xl shadow-lg py-2 min-w-[170px]">
              <RouterLink
                v-for="item in programItems"
                :key="item.to"
                :to="item.to"
                class="block px-5 py-2 text-sm text-pax-blue hover:bg-pax-gold/10 hover:text-pax-gold transition-colors"
                :class="{ 'text-pax-gold font-bold': $route.path === item.to }">
                {{ item.label }}
              </RouterLink>
            </div>
          </Transition>
        </div>

        <RouterLink to="/kontakt"
          class="hover:text-pax-gold transition-colors"
          :class="{ 'text-pax-gold': $route.path.startsWith('/kontakt') }">
          Kontakt
        </RouterLink>

        <RouterLink to="/mitmachen"
          class="hover:text-pax-gold transition-colors"
          :class="{ 'text-pax-gold': $route.path.startsWith('/mitmachen') }">
          Mitmachen
        </RouterLink>
      </div>

      <!-- Date (right) -->
      <span class="shrink-0 text-pax-blue font-bold text-base whitespace-nowrap">
        23. – 26. Juli 2026
      </span>

    </nav>
  </header>
</template>

<style scoped>
.fade-down-enter-active,
.fade-down-leave-active {
  transition: opacity 0.15s ease, transform 0.15s ease;
}
.fade-down-enter-from,
.fade-down-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}
</style>
