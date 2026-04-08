<template>
  <div class="min-h-screen bg-[#f5ede0]">

    <!-- Page Header -->
    <div class="bg-gradient-to-r from-pax-purple to-pax-blue py-16 px-4 text-center text-white">
      <h1 class="text-4xl md:text-5xl font-bold mb-3">Mitmachen</h1>
      <p class="text-lg opacity-90">Gestalte das PAX aktiv mit!</p>
    </div>

    <div class="max-w-3xl mx-auto px-4 py-12 space-y-12">

      <section class="prose prose-lg max-w-none text-gray-700">
        <p>
          Möchtest du unser Festival aktiv mitgestalten? Ob als <strong>Künstler</strong>, <strong>Vortragsredner</strong>,
          <strong>Workshop-Anbieter</strong>, <strong>Aussteller</strong> oder tatkräftiger <strong>Helfer</strong> –
          wir freuen uns über jede Form der Unterstützung!
        </p>
        <p>Als Helfer kannst du zum Beispiel beim <em>Aufbau</em>, an der <em>Wunderbar</em>, am <em>Informierbar</em>,
          auf den <em>Parkplätzen</em> oder in der <em>Begegnungsoase</em> eingesetzt werden.</p>
        <p>Schreib uns einfach dein Anliegen und wir melden uns bei dir!</p>
      </section>

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
          <label for="bereich" class="block text-sm font-semibold text-gray-700 mb-1">Bereich *</label>
          <select
            id="bereich"
            v-model="form.bereich"
            required
            class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pax-blue bg-white"
          >
            <option value="" disabled>Bitte wählen …</option>
            <option value="musiker">Musiker / Künstler</option>
            <option value="vortragsredner">Vortragsredner</option>
            <option value="workshop">Workshop-Anbieter</option>
            <option value="aussteller">Aussteller</option>
            <option value="helfer">Helfer</option>
            <option value="sonstiges">Sonstiges</option>
          </select>
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

        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-1">
            Anhang <span class="text-gray-400 font-normal">(optional, z. B. EPK als PDF, max. 1 MB)</span>
          </label>
          <input
            type="file"
            accept=".pdf"
            @change="handleFile"
            class="w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-pax-blue file:text-white hover:file:bg-blue-700"
          />
          <p v-if="fileError" class="text-red-500 text-xs mt-1">{{ fileError }}</p>
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
          ✅ Danke für deine Bewerbung! Wir melden uns so schnell wie möglich.
        </div>

        <button
          type="submit"
          :disabled="submitted"
          class="w-full bg-pax-gold hover:bg-amber-500 disabled:opacity-50 text-white font-bold py-3 rounded-xl transition-colors"
        >
          Bewerbung absenden
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
  bereich: '',
  nachricht: '',
  dsgvo: false
})

const submitted = ref(false)
const fileError = ref('')

function handleFile(e) {
  const file = e.target.files[0]
  if (file && file.size > 1024 * 1024) {
    fileError.value = 'Die Datei ist zu groß (max. 1 MB).'
    e.target.value = ''
  } else {
    fileError.value = ''
  }
}

function handleSubmit() {
  // Formular-Backend noch nicht konfiguriert — Platzhalter
  submitted.value = true
}
</script>
