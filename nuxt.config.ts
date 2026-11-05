// nuxt.config.ts
export default defineNuxtConfig({
  /* =========================
   * MODULES
   * ========================= */
  modules: [
    '@nuxtjs/color-mode',
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@nuxtjs/google-fonts',
  ],

  /* =========================
   * PLUGINS (CLIENT ONLY)
   * ========================= */
  plugins: [
    { src: '~/plugins/aos.client.ts', mode: 'client' },
  ],

  /* =========================
   * GOOGLE FONTS (LOCAL & NON-BLOCKING)
   * ========================= */
  googleFonts: {
    families: {
      Geist: [500, 600, 700],
      Inter: [400, 500, 600, 700],
      'JetBrains+Mono': [400, 500],
    },
    display: 'swap',
    download: true, // Download font ke lokal server/Vercel agar loading super cepat
  },

  /* =========================
   * IMAGE OPTIMIZATION (@nuxt/image)
   * ========================= */
  image: {
    format: ['webp', 'avif'],
    quality: 80,
  },

  /* =========================
   * BUILD
   * ========================= */
  build: {
    transpile: ['@iconify/vue'],
  },

  /* =========================
   * DARK MODE
   * ========================= */
  colorMode: {
    classSuffix: '',
    preference: 'system',
    fallback: 'light',
    storageKey: 'nuxt-color-mode',
  },

  /* =========================
   * APP HEAD (SEO + ACCESSIBILITY)
   * ========================= */
  app: {
    head: {
      htmlAttrs: {
        lang: 'id', // Menghilangkan warning accessibility "Elemen <html> tidak memiliki atribut [lang]"
      },
      title: 'Rayival Dede Saputra | Tech Enthusiast & Web Developer',
      meta: [
        {
          name: 'description',
          content:
            'Portfolio of Rayival – Tech enthusiast focused on modern web development using Vue, Nuxt, and Tailwind.',
        },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#6366F1' },
      ],
      script: [
        {
          src: 'https://www.tiktok.com/embed.js',
          async: true,
        },
      ],
    },
  },

  /* =========================
   * ROUTE RULES (CACHE CONTROL)
   * ========================= */
  routeRules: {
    '/_nuxt/**': { headers: { 'cache-control': 'public, max-age=31536000, immutable' } },
  },

  /* =========================
   * DEVTOOLS & COMPATIBILITY
   * ========================= */
  devtools: { enabled: true },
  compatibilityDate: '2025-08-02',
})