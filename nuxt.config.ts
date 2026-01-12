// nuxt.config.ts
export default defineNuxtConfig({
  /* =========================
   * GLOBAL CSS
   * ========================= */
  // css: [
  //   '@/assets/css/animate.css',
  //   '@/assets/css/main.css',
  // ],

  /* =========================
   * PLUGINS (CLIENT ONLY)
   * ========================= */
  plugins: [
    { src: '~/plugins/aos.client.ts', mode: 'client' },
  ],

  /* =========================
   * MODULES
   * ========================= */
  modules: [
    '@nuxtjs/color-mode',
    '@nuxtjs/tailwindcss',
  ],

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
   * APP HEAD (SEO + FONT)
   * ========================= */
  app: {
    head: {
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
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap',
        },
      ],
    },
  },

  /* =========================
   * DEVTOOLS
   * ========================= */
  devtools: { enabled: true },

  /* =========================
   * COMPATIBILITY
   * ========================= */
  compatibilityDate: '2025-08-02',
})
