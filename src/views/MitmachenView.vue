<template>
  <div class="min-h-screen bg-[#f5ede0]">

    <!-- Hero -->
    <div class="relative w-full overflow-hidden" style="min-height: 420px;">
      <img :src="heroImg" alt="Mitmachen" class="absolute inset-0 w-full h-full object-cover object-center" />
      <div class="absolute inset-0 bg-[#342268]/60" />
      <div class="relative z-10 flex flex-col justify-end h-full px-6 md:px-16 py-12" style="min-height: 420px;">
        <h1 class="text-3xl md:text-5xl font-bold text-white leading-tight max-w-xl">
          Was wäre das PAX ohne dich?
        </h1>
      </div>
    </div>

    <!-- Section 2: Ticket -->
    <section class="bg-[#f5ede0] py-16 px-4">
      <div class="max-w-5xl mx-auto">
        <h2 class="text-2xl md:text-3xl font-bold text-[#342268] text-center mb-10">
          Sei beim PAX dabei und hole dir jetzt Dein Ticket.
        </h2>
        <div class="grid md:grid-cols-2 gap-10 items-center">
          <div class="space-y-4 text-gray-800">
            <p class="font-bold text-lg leading-snug text-[#342268]">
              Wenn du dir dein Ticket im Vorverkauf holst, gibst Du uns einerseits Planungssicherheit und hilfst gleichzeitig, die Kosten die schon vor dem Festival anfallen, zu decken.
            </p>
            <p class="text-gray-700 text-sm leading-relaxed">
              Das zweite Argument, dir dein Ticket heute schon im VVK zu sichern: aus organisatorischen Gründen müssen wir die Teilnehmerzahl auf 2.500 begrenzen.
            </p>
          </div>
          <div>
            <img :src="ticketImg" alt="Festival-Ticket" class="w-full h-auto rounded-2xl object-cover" />
          </div>
        </div>
        <div class="text-center mt-10">
          <a
            href="https://krasser.guru/veranstaltungen/pax-das-weltfriedensfestival-2026/"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-block bg-pax-gold hover:bg-amber-500 text-white font-bold py-3 px-10 rounded-full transition-colors"
          >
            Ticket kaufen
          </a>
        </div>
      </div>
    </section>

    <!-- Section 3: Spende -->
    <section class="bg-white py-16 px-4">
      <div class="max-w-5xl mx-auto">
        <h2 class="text-2xl md:text-3xl font-bold text-[#342268] text-center mb-10">
          Unterstütze das PAX mit Deiner Spende!
        </h2>
        <div class="grid md:grid-cols-2 gap-10 items-center">
          <div class="space-y-4 text-gray-800">
            <p class="text-gray-700 leading-relaxed">
              Wenn Du die PAX-Idee gut findest und mit uns an einer neuen Welt arbeiten willst, kannst Du uns gerne auch finanziell unterstützen.
            </p>
            <p class="text-gray-700 leading-relaxed">
              Wir haben Visionen und es gibt Möglichkeiten. <strong>#PAX-Dorf</strong><br />
              Als gemeinnützige GmbH arbeiten wir alle ehrenamtlich und zukunftsorientiert an einem besseren morgen.
            </p>
            <p class="text-gray-700 leading-relaxed">
              Der einfachste Weg, mehr zu geben, ist der Schieberegler im Vorverkauf.<br />
              Für alles andere sprich uns gerne an: <a href="mailto:info@pax.family" class="text-pax-blue underline">info@pax.family</a>
            </p>
          </div>
          <div>
            <img :src="spendeImg" alt="PAX Gemeinschaft" class="w-full h-auto rounded-2xl object-cover" />
          </div>
        </div>
        <div class="text-center mt-10">
          <a
            href="https://krasser.guru/veranstaltungen/pax-das-weltfriedensfestival-2026/"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-block bg-pax-gold hover:bg-amber-500 text-white font-bold py-3 px-10 rounded-full transition-colors"
          >
            Jetzt spenden
          </a>
        </div>
      </div>
    </section>

    <!-- Section 4: Formular -->
    <section class="bg-[#f5ede0] py-16 px-4">
      <div class="max-w-3xl mx-auto">
        <h2 class="text-2xl md:text-3xl font-bold text-[#342268] text-center mb-6">
          Möchtest du unser Festival aktiv mitgestalten?
        </h2>
        <div class="text-center space-y-4 mb-10">
          <p class="text-gray-700 leading-relaxed">
            Wir freuen uns über Künstler und Vortragende, die mit ihrer Darbietung einen Beitrag zum Frieden leisten wollen. Magst du einen Workshop anbieten, der uns als Menschen und als Menschheit im Positiven voranbringt?
          </p>
          <p class="text-gray-700 leading-relaxed">
            Oder möchtest du Produkte oder Dienstleistungen in unserem Ausstellerbereich anbieten, die zum Thema Frieden bzw. friedliches Miteinander passen? Ebenso brauchen wir viele helfende Hände, um den reibungslosen Ablauf des Festivals gewährleisten zu können.
          </p>
          <p class="text-gray-700 leading-relaxed">
            Magst du vielleicht ein paar Tage vorher anreisen und beim Aufbau mithelfen oder länger bleiben, um mit abzubauen? Auch während des Festivals freuen wir uns über Unterstützung jeglicher Art. So werden immer Helfer an der Wunderbar und der Informierbar, bei den Parkplätzen und der Begegnungsoase zur Vorbereitung des Frühstücks gesucht.
          </p>
        </div>

        <h3 class="text-xl font-bold text-[#342268] mb-8">Wir freuen uns über deine Nachricht</h3>

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
            <label for="bereich" class="block text-sm text-gray-600 mb-1">Bereich:</label>
            <select
              id="bereich"
              v-model="form.bereich"
              required
              class="w-full bg-white rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-pax-blue"
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
            <label for="nachricht" class="block text-sm text-gray-600 mb-1">Deine Nachricht:</label>
            <textarea
              id="nachricht"
              v-model="form.nachricht"
              rows="5"
              required
              class="w-full bg-white rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-pax-blue resize-y"
            />
          </div>

          <div>
            <label class="block text-sm text-gray-600 mb-1">
              Anhang <span class="text-gray-400">(optional, z. B. EPK als PDF, max. 1 MB)</span>
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
              Ich habe die <a href="/datenschutz" class="text-pax-blue underline">Datenschutzerklärung</a> gelesen und bin einverstanden. *
            </label>
          </div>

          <div v-if="submitted" class="bg-green-50 border border-green-200 text-green-800 rounded-lg px-4 py-3 text-sm">
            ✅ Danke für deine Bewerbung! Wir melden uns so schnell wie möglich.
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
    </section>

  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import heroImg from '@/assets/images/mitmach-hero.png'
import ticketImg from '@/assets/images/info-box-3.png'
import spendeImg from '@/assets/images/info-box-1.png'

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
