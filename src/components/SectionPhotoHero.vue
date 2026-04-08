<template>
  <section class="relative overflow-hidden flex items-center" :class="heightClass">
    <!-- Background photo -->
    <img
      :src="imgSrc"
      :alt="headline"
      class="absolute inset-0 w-full h-full object-cover"
    />
    <!-- Overlay (default: dark center gradient for readability) -->
    <div
      class="absolute inset-0"
      :class="overlay || 'bg-gradient-to-b from-black/50 via-black/40 to-black/60'"
    />

    <!-- Content -->
    <div class="relative z-10 w-full text-center px-6 py-20 md:py-28">
      <h2 class="text-white text-3xl md:text-5xl font-extrabold drop-shadow-lg leading-tight max-w-3xl mx-auto">
        {{ headline }}
      </h2>
      <p
        v-if="subline"
        class="text-white/85 text-lg md:text-xl mt-4 max-w-2xl mx-auto leading-relaxed"
      >
        {{ subline }}
      </p>

      <!-- CTA Button -->
      <div v-if="btnText" class="mt-8 flex flex-wrap gap-4 justify-center">
        <router-link
          v-if="btnTo"
          :to="btnTo"
          class="inline-block bg-pax-gold hover:bg-amber-500 text-white font-bold py-3 px-10 rounded-full shadow-lg transition-colors text-base"
        >
          {{ btnText }}
        </router-link>
        <a
          v-else-if="btnHref"
          :href="btnHref"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-block bg-pax-gold hover:bg-amber-500 text-white font-bold py-3 px-10 rounded-full shadow-lg transition-colors text-base"
        >
          {{ btnText }}
        </a>
      </div>

      <!-- Extra slot for additional content -->
      <slot />
    </div>
  </section>
</template>

<script setup>
defineProps({
  imgSrc: { type: String, required: true },
  headline: { type: String, required: true },
  subline: { type: String, default: '' },
  btnText: { type: String, default: '' },
  btnTo: { type: String, default: '' },
  btnHref: { type: String, default: '' },
  overlay: { type: String, default: '' },
  heightClass: { type: String, default: 'min-h-[50vh]' }
})
</script>
