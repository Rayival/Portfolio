// nuxt.config.ts
export default defineNuxtConfig({
  css: [
    '@/assets/css/main.css',
    'bootstrap/dist/css/bootstrap.min.css',
    'bootstrap-icons/font/bootstrap-icons.css',
    '@/assets/css/animate.css',
  ],

  plugins: [
    { src: '~/plugins/bootstrap.client.ts', mode: 'client' },
    { src: '~/plugins/aos.client.ts', mode: 'client' },
  ],

  modules: [
    '@nuxtjs/color-mode'
  ],

  colorMode: {
    classSuffix: '',     
    preference: 'system', 
    fallback: 'light',    
    storageKey: 'nuxt-color-mode' 
  },

  app: {
    head: {
      script: [
        {
          src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js',
          defer: true,
        },
      ]
    }
  },

  compatibilityDate: '2025-08-02'
})
