<template>
  <div class="main-wrapper">
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

// 🔑 GOOGLE SEARCH CONSOLE VERIFICATION (WAJIB)
useHead({
  meta: [
    {
      name: 'google-site-verification',
      content: 'JNnU8Hd064hsZcZvwkkAePod9o3w5UkYyXh6lJ7H91E'
    }
  ]
})
</script>

<style>
.main-wrapper {
  min-height: 100vh;
}
</style>
