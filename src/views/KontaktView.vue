<template>
  <div class="min-h-screen bg-[#f5ede0]">

    <!-- Hero -->
    <div class="relative w-full overflow-hidden" style="min-height: 420px;">
      <img :src="heroImg" alt="Kontakt" class="absolute inset-0 w-full h-full object-cover object-center" />
      <div class="absolute inset-0 bg-black/55" />
      <div class="relative z-10 flex flex-col justify-end h-full px-6 md:px-16 py-12" style="min-height: 420px;">
        <h1 class="text-3xl md:text-5xl font-bold text-white leading-tight max-w-xl">
          Wir freuen uns auf deine Nachricht!
        </h1>
      </div>
    </div>

    <!-- Intro -->
    <div class="bg-[#342268] py-10 px-4">
      <div class="max-w-3xl mx-auto text-center space-y-4">
        <p class="text-white font-semibold text-base md:text-lg leading-relaxed">
          Hier kannst du dich als Festival-Besucher mit deinen Fragen, Wünschen oder sonstigen Nachrichten an uns wenden.
        </p>
        <p class="text-white font-semibold text-base md:text-lg leading-relaxed">
          Für alle anderen, die das PAX aktiv mitgestalten möchten, steht ein Formular unter dem Punkt „Unterstützen" zur Verfügung.
        </p>
      </div>
    </div>

    <!-- Form -->
    <div class="bg-[#f5ede0] py-12 px-4">
      <div class="max-w-lg mx-auto">
        <h2 class="text-2xl font-bold text-[#342268] mb-8">Wir freuen uns über deine Nachricht</h2>

        <form @submit.prevent="handleSubmit" class="space-y-5">

          <div>
            <label for="vorname" class="block text-sm text-gray-600 mb-1">Dein Vorname:</label>
            <input
              id="vorname"
              v-model="form.vorname"
              type="text"
              required
              autocomplete="given-name"
              class="w-full bg-white rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-pax-blue"
            />
          </div>

          <div>
            <label for="nachname" class="block text-sm text-gray-600 mb-1">Dein Nachname:</label>
            <input
              id="nachname"
              v-model="form.nachname"
              type="text"
              autocomplete="family-name"
              class="w-full bg-white rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-pax-blue"
            />
          </div>

          <div>
            <label for="email" class="block text-sm text-gray-600 mb-1">E-Mail-Adresse:</label>
            <input
              id="email"
              v-model="form.email"
              type="email"
              required
              autocomplete="email"
              class="w-full bg-white rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-pax-blue"
            />
          </div>

          <div>
            <label for="betreff" class="block text-sm text-gray-600 mb-1">Betreff:</label>
            <input
              id="betreff"
              v-model="form.betreff"
              type="text"
              required
              class="w-full bg-white rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-pax-blue"
            />
          </div>

          <div>
            <label for="nachricht" class="block text-sm text-gray-600 mb-1">Deine Nachricht:</label>
            <textarea
              id="nachricht"
              v-model="form.nachricht"
              rows="5"
              required
              class="w-full bg-white rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-pax-blue resize-y"
            />
          </div>

          <div class="flex items-start gap-3">
            <input
              id="dsgvo"
              v-model="form.dsgvo"
              type="checkbox"
              required
              class="mt-1 w-4 h-4 accent-pax-blue flex-shrink-0"
            />
            <label for="dsgvo" class="text-sm text-gray-600">
              Ich habe die <a href="/datenschutz" class="text-pax-blue underline">Datenschutzerklärung</a> gelesen und bin einverstanden. *
            </label>
          </div>

          <div v-if="submitted" class="bg-green-50 border border-green-200 text-green-800 rounded-lg px-4 py-3 text-sm">
            ✅ Danke für deine Nachricht! Wir melden uns bald.
          </div>

          <button
            type="submit"
            :disabled="submitted"
            class="bg-pax-gold hover:bg-amber-500 disabled:opacity-50 text-white font-bold py-3 px-8 rounded-full transition-colors"
          >
            Abschicken
          </button>

        </form>
      </div>
    </div>

  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import heroImg from '@/assets/images/kontakt-hero.png'

const form = reactive({
  vorname: '',
  nachname: '',
  email: '',
  betreff: '',
  nachricht: '',
  dsgvo: false
})

const submitted = ref(false)

function handleSubmit() {
  // Formular-Backend noch nicht konfiguriert — Platzhalter
  submitted.value = true
}
</script>
