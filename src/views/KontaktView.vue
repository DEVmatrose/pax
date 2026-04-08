<template>
  <div class="min-h-screen bg-[#f5ede0]">

    <!-- Page Header -->
    <div class="bg-gradient-to-r from-pax-blue to-pax-purple py-16 px-4 text-center text-white">
      <h1 class="text-4xl md:text-5xl font-bold mb-3">Kontakt</h1>
      <p class="text-lg opacity-90">Wir freuen uns auf deine Nachricht!</p>
    </div>

    <div class="max-w-2xl mx-auto px-4 py-12">

      <p class="text-gray-700 text-lg mb-8">
        Du hast Fragen oder Anregungen zum Festival? Dann schreib uns gerne – wir melden uns so schnell wie möglich.
        Wenn du beim Festival <strong>mitmachen</strong> möchtest (als Künstler, Aussteller oder Helfer), nutze bitte unsere
        <router-link to="/mitmachen" class="text-pax-blue font-semibold underline">Mitmachen-Seite</router-link>.
      </p>

      <form
        @submit.prevent="handleSubmit"
        class="bg-white rounded-2xl shadow-lg p-8 space-y-5"
      >
        <div class="grid md:grid-cols-2 gap-5">
          <div>
            <label for="vorname" class="block text-sm font-semibold text-gray-700 mb-1">Vorname *</label>
            <input
              id="vorname"
              v-model="form.vorname"
              type="text"
              required
              autocomplete="given-name"
              class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pax-blue"
            />
          </div>
          <div>
            <label for="nachname" class="block text-sm font-semibold text-gray-700 mb-1">Nachname <span class="text-gray-400 font-normal">(optional)</span></label>
            <input
              id="nachname"
              v-model="form.nachname"
              type="text"
              autocomplete="family-name"
              class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pax-blue"
            />
          </div>
        </div>

        <div>
          <label for="email" class="block text-sm font-semibold text-gray-700 mb-1">E-Mail *</label>
          <input
            id="email"
            v-model="form.email"
            type="email"
            required
            autocomplete="email"
            class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pax-blue"
          />
        </div>

        <div>
          <label for="betreff" class="block text-sm font-semibold text-gray-700 mb-1">Betreff *</label>
          <input
            id="betreff"
            v-model="form.betreff"
            type="text"
            required
            class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pax-blue"
          />
        </div>

        <div>
          <label for="nachricht" class="block text-sm font-semibold text-gray-700 mb-1">Nachricht *</label>
          <textarea
            id="nachricht"
            v-model="form.nachricht"
            rows="5"
            required
            class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pax-blue resize-y"
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
            Ich habe die <a href="/datenschutz" class="text-pax-blue underline">Datenschutzerklärung</a> gelesen und bin damit einverstanden, dass meine Daten zur Bearbeitung meiner Anfrage gespeichert werden. *
          </label>
        </div>

        <div v-if="submitted" class="bg-green-50 border border-green-200 text-green-800 rounded-lg px-4 py-3 text-sm">
          ✅ Danke für deine Nachricht! Wir melden uns bald.
        </div>

        <button
          type="submit"
          :disabled="submitted"
          class="w-full bg-pax-gold hover:bg-amber-500 disabled:opacity-50 text-white font-bold py-3 rounded-xl transition-colors"
        >
          Nachricht senden
        </button>
      </form>

    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'

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
