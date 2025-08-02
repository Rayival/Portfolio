<template>
  <div :class="['main-wrapper', colorMode === 'dark' ? 'dark-mode' : 'light-mode']">
    <client-only>
      <Header />
    </client-only>

    <NuxtPage />

    <client-only>
      <Footer />
    </client-only>
  </div>
</template>

<script setup>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'

// Ambil colorMode dari Nuxt
const { $colorMode } = useNuxtApp()
const colorMode = $colorMode?.value
</script>

<style>
.main-wrapper {
  min-height: 100vh;
  transition: background-color 0.5s ease, color 0.5s ease;
}

/* LIGHT MODE */
.light-mode {
  background: linear-gradient(to right top, #ffffff, #e6f0ff, #d4ecff, #c2e7ff);
  color: #212529;
}

/* DARK MODE */
.dark-mode {
  background: linear-gradient(to right top, #0f0f0f, #1a1a1a, #222222, #2a2a2a);
  color: #f1f1f1;
}

/* Contoh tambahan styling elemen transparan */
.bg-glass {
  background-color: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(10px);
  transition: background-color 0.3s ease;
}

.dark-mode .bg-glass {
  background-color: rgba(30, 30, 30, 0.6);
}

.glass-card {
  background-color: rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(12px);
  transition: transform 0.3s ease, background-color 0.3s ease;
}

.dark-mode .glass-card {
  background-color: rgba(40, 40, 40, 0.75);
}

.glass-card:hover {
  transform: translateY(-4px);
}
</style>
