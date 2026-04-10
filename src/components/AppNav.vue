<script setup>
const programItems = [
  { label: 'Übersicht',       to: '/programm' },
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

  <header class="bg-[#f5ede0] border-b border-[#e0d4c4] sticky top-0 z-50 shadow-sm">
    <!-- Hauptzeile -->
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

        <RouterLink to="/programm"
          class="hover:text-pax-gold transition-colors"
          :class="{ 'text-pax-gold font-bold': $route.path.startsWith('/programm') }">
          Programm
        </RouterLink>

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

    <!-- Programm-Unterzeile -->
    <nav v-if="$route.path.startsWith('/programm')"
      class="border-t border-[#e0d4c4] bg-[#ede4d6]">
      <div class="max-w-[1200px] mx-auto px-6 h-10 flex items-center gap-6 text-sm font-medium text-pax-blue">
        <RouterLink
          v-for="item in programItems"
          :key="item.to"
          :to="item.to"
          class="hover:text-pax-gold transition-colors whitespace-nowrap"
          :class="{ 'text-pax-gold font-bold underline underline-offset-4 decoration-pax-gold': $route.path === item.to }">
          {{ item.label }}
        </RouterLink>
      </div>
    </nav>
  </header>
</template>

