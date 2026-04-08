<template>
  <footer class="bg-[#2a1f5e] text-white">
    <div class="max-w-[1200px] mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-10 items-start">

      <!-- Logo + Claim -->
      <div class="flex flex-col gap-3">
        <img src="@/assets/images/pax-logo-txt.png" alt="PAX Weltfriedensfestival" class="h-16 w-auto object-contain" />
      </div>

      <!-- Links -->
      <div class="flex flex-col gap-2 text-sm">
        <RouterLink to="/datenschutz" class="text-white/70 hover:text-white transition-colors">Datenschutz</RouterLink>
        <RouterLink to="/impressum"   class="text-white/70 hover:text-white transition-colors">Impressum</RouterLink>
        <RouterLink to="/presse"      class="text-white/70 hover:text-white transition-colors">Presse</RouterLink>
      </div>

      <!-- Social -->
      <div class="flex flex-col gap-2 text-sm">
        <span class="text-white/50 font-semibold uppercase text-xs tracking-widest mb-1">Folge uns …</span>
        <a href="https://instagram.com/paxfestival" target="_blank" rel="noopener"
          class="text-white/70 hover:text-white transition-colors">Instagram</a>
        <a href="https://facebook.com/paxfestival" target="_blank" rel="noopener"
          class="text-white/70 hover:text-white transition-colors">Facebook</a>
        <a href="https://t.me/paxfestival" target="_blank" rel="noopener"
          class="text-white/70 hover:text-white transition-colors">Telegram</a>
      </div>
    </div>

    <!-- Bottom bar -->
    <div class="border-t border-white/10 py-4 text-center text-pax-gold text-sm font-semibold">
      PAX – Das Weltfriedensfestival
    </div>
  </footer>
</template>

