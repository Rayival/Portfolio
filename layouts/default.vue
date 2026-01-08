<template>
  <div class="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
    <Header />
    <NuxtPage />
    <Footer />
  </div>
</template>

<script setup>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'

useHead({
  meta: [
    {
      name: 'google-site-verification',
      content: 'JNnU8Hd064hsZcZvwkkAePod9o3w5UkYyXh6lJ7H91E'
    }
  ]
})
</script>
