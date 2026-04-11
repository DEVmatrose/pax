<script setup>
import { ref } from 'vue'

const mobileOpen = ref(false)

function closeMenu() {
  mobileOpen.value = false
}

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
  <header class="bg-[#f5ede0] border-b border-[#e0d4c4] sticky top-0 z-50 shadow-sm">

    <!-- Hauptzeile -->
    <nav class="max-w-[1200px] mx-auto px-6 h-20 flex items-center">

      <!-- Logo -->
      <RouterLink to="/" class="shrink-0 mr-4" @click="closeMenu">
        <img src="@/assets/images/logo-pax-26.png" alt="PAX Weltfriedensfestival 2026" class="h-20 w-auto py-1" />
      </RouterLink>

      <!-- Desktop Nav items (center) -->
      <div class="hidden md:flex flex-1 items-center justify-center gap-6 text-sm font-normal text-pax-deep">
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
          :class="{ 'text-pax-gold': $route.path.startsWith('/programm') }">
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

      <!-- Desktop Date (right) -->
      <span class="hidden md:block shrink-0 text-pax-deep font-bold text-base whitespace-nowrap ml-auto">
        23. – 26. Juli 2026
      </span>

      <!-- Hamburger Button (mobile only) -->
      <button
        class="ml-auto md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 shrink-0"
        :aria-expanded="mobileOpen"
        aria-label="Menü öffnen/schließen"
        @click="mobileOpen = !mobileOpen"
      >
        <span class="block w-6 h-0.5 bg-pax-deep transition-all duration-300 origin-center"
          :class="{ 'rotate-45 translate-y-2': mobileOpen }" />
        <span class="block w-6 h-0.5 bg-pax-deep transition-all duration-300"
          :class="{ 'opacity-0 scale-x-0': mobileOpen }" />
        <span class="block w-6 h-0.5 bg-pax-deep transition-all duration-300 origin-center"
          :class="{ '-rotate-45 -translate-y-2': mobileOpen }" />
      </button>
    </nav>

    <!-- Mobile Menu Panel -->
    <div v-show="mobileOpen" class="md:hidden border-t border-[#e0d4c4] bg-[#f5ede0] shadow-md">
      <div class="flex flex-col px-6 py-5 gap-1 text-base font-normal text-pax-deep">
        <RouterLink to="/" @click="closeMenu"
          class="py-2.5 border-b border-[#e0d4c4] hover:text-pax-gold transition-colors"
          :class="{ 'text-pax-gold': $route.path === '/' }">
          Home
        </RouterLink>
        <RouterLink to="/info" @click="closeMenu"
          class="py-2.5 border-b border-[#e0d4c4] hover:text-pax-gold transition-colors"
          :class="{ 'text-pax-gold': $route.path.startsWith('/info') }">
          Info
        </RouterLink>
        <RouterLink to="/programm" @click="closeMenu"
          class="py-2.5 border-b border-[#e0d4c4] hover:text-pax-gold transition-colors"
          :class="{ 'text-pax-gold': $route.path === '/programm' }">
          Programm
        </RouterLink>
        <!-- Programm-Unterlinks (nur sichtbar wenn auf /programm) -->
        <template v-if="$route.path.startsWith('/programm')">
          <RouterLink
            v-for="item in programItems.slice(1)"
            :key="item.to"
            :to="item.to"
            @click="closeMenu"
            class="py-2 pl-4 border-b border-[#e0d4c4] text-sm hover:text-pax-gold transition-colors"
            :class="{ 'text-pax-gold font-semibold': $route.path === item.to }">
            {{ item.label }}
          </RouterLink>
        </template>
        <RouterLink to="/kontakt" @click="closeMenu"
          class="py-2.5 border-b border-[#e0d4c4] hover:text-pax-gold transition-colors"
          :class="{ 'text-pax-gold': $route.path.startsWith('/kontakt') }">
          Kontakt
        </RouterLink>
        <RouterLink to="/mitmachen" @click="closeMenu"
          class="py-2.5 border-b border-[#e0d4c4] hover:text-pax-gold transition-colors"
          :class="{ 'text-pax-gold': $route.path.startsWith('/mitmachen') }">
          Mitmachen
        </RouterLink>
        <span class="pt-3 text-sm text-pax-deep/60">23. – 26. Juli 2026</span>
      </div>
    </div>

    <!-- Programm-Unterzeile (nur Desktop) -->
    <nav v-if="$route.path.startsWith('/programm')"
      class="hidden md:block border-t border-[#e0d4c4] bg-[#ede4d6]">
      <div class="overflow-x-auto" style="-webkit-overflow-scrolling: touch">
        <div class="px-6 h-10 flex items-center gap-6 text-sm font-medium text-pax-deep whitespace-nowrap
                    max-w-[1200px] mx-auto md:justify-center">
          <RouterLink
            v-for="item in programItems"
            :key="item.to"
            :to="item.to"
            @click="closeMenu"
            class="hover:text-pax-gold transition-colors shrink-0"
            :class="{ 'text-pax-gold font-bold underline underline-offset-4 decoration-pax-gold': $route.path === item.to }">
            {{ item.label }}
          </RouterLink>
        </div>
      </div>
    </nav>

  </header>
</template>

