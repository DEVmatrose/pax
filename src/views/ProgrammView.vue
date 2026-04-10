<script setup>
import { RouterLink } from 'vue-router'
import { ref, computed, onMounted } from 'vue'

/* ── Tagesfilter ── */
const days = [
  { label: 'Alle Tage', key: 'alle' },
  { label: 'Do 23.', key: 'Donnerstag' },
  { label: 'Fr 24.', key: 'Freitag' },
  { label: 'Sa 25.', key: 'Samstag' },
  { label: 'So 26.', key: 'Sonntag' },
]
const activeDay = ref('alle')
const viewMode = ref('list')     // 'list' | 'grid'
const loading = ref(true)
const allEntries = ref([])
const activeBereich = ref('alle')
const baseUrl = import.meta.env.BASE_URL

/* ── Bereich-Metadaten ── */
const bereiche = {
  musik:      { label: 'Musik',     icon: '🎵', badge: 'badge-info' },
  vortraege:  { label: 'Vortrag',   icon: '🎤', badge: 'badge-accent' },
  workshops:  { label: 'Workshop',  icon: '🛠',  badge: 'badge-warning' },
  aussteller: { label: 'Aussteller',icon: '🏪', badge: 'badge-secondary' },
}

/* ── Tag-Erkennung ── */
function extractDay(tagStr) {
  if (!tagStr) return null
  const mapped = { donnerstag: 'Donnerstag', freitag: 'Freitag', samstag: 'Samstag', sonntag: 'Sonntag', mittwoch: 'Mittwoch' }
  const lower = tagStr.toLowerCase()
  for (const [k, v] of Object.entries(mapped)) {
    if (lower.includes(k)) return v
  }
  return null
}

/* ── Daten laden & normalisieren ── */
async function fetchJson(name) {
  try {
    const res = await fetch(`${import.meta.env.BASE_URL}data/${name}.json`)
    if (!res.ok) return []
    return await res.json()
  } catch { return [] }
}

onMounted(async () => {
  const [musiker, vortraege, workshops, aussteller] = await Promise.all([
    fetchJson('musiker'), fetchJson('vortraege'), fetchJson('workshops'), fetchJson('aussteller'),
  ])

  const entries = []

  // Musiker → je Tag ein Eintrag
  for (const m of musiker) {
    const tage = m.tage?.length ? m.tage : [null]
    for (const t of tage) {
      entries.push({
        id: `musik-${m.id}-${t}`,
        name: m.name,
        subtitle: m.subtitle || m.genre || '',
        image: m.image || null,
        bereich: 'musik',
        tag: extractDay(t),
        zeit: null,
        ort: null,
        link: '/programm/musik',
      })
    }
  }

  // Vorträge
  for (const v of vortraege) {
    entries.push({
      id: `vortrag-${v.id}`,
      name: v.name,
      subtitle: v.thema || '',
      image: v.image || null,
      bereich: 'vortraege',
      tag: extractDay(v.tag),
      zeit: null,
      ort: null,
      link: '/programm/vortraege',
    })
  }

  // Workshops → je Termin ein Eintrag
  for (const w of workshops) {
    const termine = w.termine?.length ? w.termine : [{}]
    for (const t of termine) {
      entries.push({
        id: `workshop-${w.id}-${t.tag}`,
        name: w.titel,
        subtitle: w.leiter || '',
        bereich: 'workshops',
        tag: extractDay(t.tag),
        zeit: t.uhrzeit || null,
        ort: t.ort || null,
        link: '/programm/workshops',
      })
    }
  }

  // Aussteller → kein Tag (tageübergreifend)
  for (const a of aussteller) {
    entries.push({
      id: `aussteller-${a.id}`,
      name: a.name,
      subtitle: a.kategorie || '',
      bereich: 'aussteller',
      tag: null,
      zeit: null,
      ort: null,
      link: '/programm/aussteller',
    })
  }

  allEntries.value = entries
  loading.value = false
})

/* ── Gefilterte & sortierte Einträge ── */
const filteredEntries = computed(() => {
  return allEntries.value.filter(e => {
    const dayOk = activeDay.value === 'alle' || e.tag === activeDay.value || e.tag === null
    const bereichOk = activeBereich.value === 'alle' || e.bereich === activeBereich.value
    return dayOk && bereichOk
  })
})

/* Sortierung: Einträge mit Uhrzeit zuerst, dann alphabetisch */
const sortedEntries = computed(() => {
  return [...filteredEntries.value].sort((a, b) => {
    if (a.zeit && !b.zeit) return -1
    if (!a.zeit && b.zeit) return 1
    if (a.zeit && b.zeit) return a.zeit.localeCompare(b.zeit)
    return a.name.localeCompare(b.name)
  })
})
</script>

<template>
  <div>
    <!-- Hero -->
    <div class="bg-gradient-to-r from-pax-blue to-pax-purple py-16 px-4 text-center text-white">
      <h1 class="text-4xl md:text-5xl font-bold mb-3">Programmübersicht</h1>
      <p class="text-lg opacity-90">PAX Weltfriedensfestival · 23.–26. Juli 2026</p>
    </div>

    <!-- Programmplan -->
    <section class="max-w-5xl mx-auto px-4 py-8">
      <h2 class="text-2xl font-bold text-pax-blue mb-6">Programmplan</h2>

      <!-- Filter-Leiste -->
      <div class="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
        <!-- Tagesfilter -->
        <div class="flex flex-wrap gap-2">
          <button v-for="d in days" :key="d.key"
            class="btn btn-sm"
            :class="activeDay === d.key ? 'btn-primary' : 'btn-outline btn-primary'"
            @click="activeDay = d.key">
            {{ d.label }}
          </button>
        </div>

        <div class="flex gap-2 sm:ml-auto">
          <!-- Bereichsfilter -->
          <select v-model="activeBereich" class="select select-sm select-bordered">
            <option value="alle">Alle Bereiche</option>
            <option value="musik">🎵 Musik</option>
            <option value="vortraege">🎤 Vorträge</option>
            <option value="workshops">🛠 Workshops</option>
            <option value="aussteller">🏪 Aussteller</option>
          </select>

          <!-- Ansichts-Toggle -->
          <div class="btn-group">
            <button class="btn btn-sm" :class="viewMode === 'list' ? 'btn-active' : ''"
              @click="viewMode = 'list'" title="Listenansicht">☰</button>
            <button class="btn btn-sm" :class="viewMode === 'grid' ? 'btn-active' : ''"
              @click="viewMode = 'grid'" title="Kachelansicht">▦</button>
          </div>
        </div>
      </div>

      <!-- Loading -->
      <div v-if="loading" class="flex justify-center py-20">
        <span class="loading loading-spinner loading-lg text-pax-blue" />
      </div>

      <!-- Keine Einträge -->
      <div v-else-if="sortedEntries.length === 0" class="text-center text-gray-400 py-16">
        Keine Programmpunkte für diesen Filter.
      </div>

      <!-- LISTENANSICHT -->
      <div v-else-if="viewMode === 'list'" class="space-y-2">
        <RouterLink
          v-for="e in sortedEntries" :key="e.id"
          :to="e.link"
          class="flex items-center gap-3 p-3 rounded-lg bg-base-100 shadow-sm hover:shadow transition-shadow group">
          <!-- Bereich-Icon -->
          <span class="text-xl w-8 text-center flex-shrink-0">{{ bereiche[e.bereich]?.icon }}</span>
          <!-- Infos -->
          <div class="flex-1 min-w-0">
            <div class="font-semibold text-pax-blue group-hover:underline truncate">{{ e.name }}</div>
            <div class="text-xs text-gray-500 truncate">{{ e.subtitle }}</div>
          </div>
          <!-- Tag & Zeit -->
          <div class="text-right flex-shrink-0 text-sm">
            <div v-if="e.tag" class="font-medium text-gray-700">{{ e.tag }}</div>
            <div v-if="e.zeit" class="text-xs text-pax-gold font-semibold">{{ e.zeit }}</div>
            <div v-if="e.ort" class="text-xs text-gray-400">{{ e.ort }}</div>
            <div v-if="!e.tag" class="text-xs text-gray-400 italic">tageübergreifend</div>
          </div>
          <!-- Bereich-Badge -->
          <span class="badge badge-sm flex-shrink-0" :class="bereiche[e.bereich]?.badge">
            {{ bereiche[e.bereich]?.label }}
          </span>
        </RouterLink>
      </div>

      <!-- KACHELANSICHT -->
      <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <RouterLink
          v-for="e in sortedEntries" :key="e.id"
          :to="e.link"
          class="card bg-base-100 shadow hover:shadow-lg transition-shadow">
          <figure v-if="e.image">
            <img :src="baseUrl + e.image" :alt="e.name" class="w-full h-48 object-cover object-top" />
          </figure>
          <div class="card-body p-5">
            <div class="flex items-start justify-between gap-2">
              <h3 class="card-title text-base text-pax-blue">
                <span class="mr-1">{{ bereiche[e.bereich]?.icon }}</span>
                {{ e.name }}
              </h3>
              <span class="badge badge-sm flex-shrink-0" :class="bereiche[e.bereich]?.badge">
                {{ bereiche[e.bereich]?.label }}
              </span>
            </div>
            <p class="text-sm text-gray-500 mt-1">{{ e.subtitle }}</p>
            <div class="mt-3 flex flex-wrap gap-2 text-xs">
              <span v-if="e.tag" class="badge badge-outline badge-sm">{{ e.tag }}</span>
              <span v-if="e.zeit" class="badge badge-primary badge-sm">{{ e.zeit }}</span>
              <span v-if="e.ort" class="badge badge-ghost badge-sm">{{ e.ort }}</span>
              <span v-if="!e.tag" class="badge badge-ghost badge-sm italic">tageübergreifend</span>
            </div>
          </div>
        </RouterLink>
      </div>

      <!-- Hinweis -->
      <p class="text-center text-gray-400 text-xs mt-8">
        Programmänderungen vorbehalten · Zeiten werden laufend ergänzt
      </p>
    </section>
  </div>
</template>
