<script setup>
// TODO: Newsletter-Formular-Logik
</script>

<template>
  <!-- Hero Section: Logo, Social Icons, Datum/Ort, Newsletter -->
  <section class="hero min-h-screen bg-gradient-to-br from-pax-blue to-pax-purple">
    <div class="hero-content text-center text-white">
      <div class="max-w-3xl">
        <!-- Logo -->
        <img src="@/assets/images/hero-girl.png" alt="PAX Logo" class="mx-auto mb-8 w-64" />

        <h1 class="text-5xl font-extrabold mb-4">PAX 2026</h1>
        <p class="text-2xl mb-2 font-semibold">Das Weltfriedensfestival</p>
        <p class="text-xl mb-8 opacity-90">23. – 26. Juli · Friesack bei Berlin</p>

        <!-- TODO: Newsletter-Formular -->
        <div class="form-control w-full max-w-md mx-auto">
          <div class="input-group">
            <input type="email" placeholder="Deine E-Mail-Adresse" class="input input-bordered w-full text-neutral" />
            <button class="btn btn-accent">Anmelden</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
