<script setup>
import crowdImg from '@/assets/images/image1.png'
</script>

<template>
  <!-- CTA oberhalb des Footers -->
  <section class="relative overflow-hidden min-h-[320px] flex items-center justify-center">
    <img :src="crowdImg" alt="PAX Festival Publikum"
      class="absolute inset-0 w-full h-full object-cover object-center" />
    <div class="absolute inset-0" style="background: rgba(52,34,104,0.65)" />
    <div class="relative z-10 text-center px-6 py-16 max-w-3xl mx-auto">
      <p class="text-pax-gold font-extrabold text-2xl md:text-3xl mb-2">
        Feier mit uns den Frieden
      </p>
      <p class="text-white font-semibold text-xl md:text-2xl mb-8">
        und hole dir dein Ticket jetzt direkt bei „Krasser Guru":
      </p>
      <a
        href="https://krasser.guru/veranstaltungen/pax-das-weltfriedensfestival-2026/"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-block bg-pax-gold hover:bg-amber-500 text-white font-bold text-lg py-3 px-10 rounded-full shadow-lg transition-colors"
      >
        Jetzt Ticket sichern
      </a>
    </div>
  </section>

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

