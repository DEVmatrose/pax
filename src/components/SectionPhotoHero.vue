<template>
  <section
    class="relative overflow-hidden"
    :class="[heightClass, titleAlign === 'bottom-left' ? 'flex items-end' : 'flex items-center']"
  >
    <!-- Background photo -->
    <img
      :src="imgSrc"
      :alt="headline"
      class="absolute inset-0 w-full h-full object-cover"
    />

    <!-- Overlay -->
    <div
      class="absolute inset-0"
      :class="overlay || (titleAlign === 'bottom-left'
        ? 'bg-gradient-to-b from-black/20 via-black/25 to-black/55'
        : 'bg-gradient-to-b from-black/50 via-black/40 to-black/60')"
    />

    <!-- Bottom color bleed (seamless transition to section below) -->
    <div
      v-if="bottomColor"
      class="absolute bottom-0 left-0 right-0 h-28 pointer-events-none"
      :style="{ background: `linear-gradient(to bottom, transparent, ${bottomColor})` }"
    />

    <!-- Content: bottom-left -->
    <div v-if="titleAlign === 'bottom-left'" class="relative z-10 w-full px-8 pb-12 md:pb-16">
      <h2 class="text-white text-4xl md:text-5xl lg:text-6xl font-extrabold drop-shadow-lg leading-tight">
        {{ headline }}
      </h2>
      <p v-if="subline" class="text-white/85 text-lg md:text-xl mt-3 max-w-2xl leading-relaxed">
        {{ subline }}
      </p>
      <div v-if="btnText" class="mt-6 flex flex-wrap gap-4">
        <router-link v-if="btnTo" :to="btnTo"
          class="inline-block bg-pax-gold hover:bg-amber-500 text-white font-bold py-3 px-10 rounded-full shadow-lg transition-colors text-base">
          {{ btnText }}
        </router-link>
        <a v-else-if="btnHref" :href="btnHref" target="_blank" rel="noopener noreferrer"
          class="inline-block bg-pax-gold hover:bg-amber-500 text-white font-bold py-3 px-10 rounded-full shadow-lg transition-colors text-base">
          {{ btnText }}
        </a>
      </div>
      <slot />
    </div>

    <!-- Content: center (default) -->
    <div v-else class="relative z-10 w-full text-center px-6 py-20 md:py-28">
      <h2 class="text-white text-3xl md:text-5xl font-extrabold drop-shadow-lg leading-tight max-w-3xl mx-auto">
        {{ headline }}
      </h2>
      <p v-if="subline" class="text-white/85 text-lg md:text-xl mt-4 max-w-2xl mx-auto leading-relaxed">
        {{ subline }}
      </p>
      <div v-if="btnText" class="mt-8 flex flex-wrap gap-4 justify-center">
        <router-link v-if="btnTo" :to="btnTo"
          class="inline-block bg-pax-gold hover:bg-amber-500 text-white font-bold py-3 px-10 rounded-full shadow-lg transition-colors text-base">
          {{ btnText }}
        </router-link>
        <a v-else-if="btnHref" :href="btnHref" target="_blank" rel="noopener noreferrer"
          class="inline-block bg-pax-gold hover:bg-amber-500 text-white font-bold py-3 px-10 rounded-full shadow-lg transition-colors text-base">
          {{ btnText }}
        </a>
      </div>
      <slot />
    </div>
  </section>
</template>

<script setup>
defineProps({
  imgSrc:      { type: String, required: true },
  headline:    { type: String, required: true },
  subline:     { type: String, default: '' },
  btnText:     { type: String, default: '' },
  btnTo:       { type: String, default: '' },
  btnHref:     { type: String, default: '' },
  overlay:     { type: String, default: '' },
  heightClass: { type: String, default: 'min-h-[50vh]' },
  titleAlign:  { type: String, default: 'center' },   // 'center' | 'bottom-left'
  bottomColor: { type: String, default: '' },          // CSS color for seamless bottom fade
})
</script>
