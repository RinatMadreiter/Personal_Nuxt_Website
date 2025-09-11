export default defineNuxtConfig({
  ssr: true,
  compatibilityDate: '2025-09-11',
  devtools: { enabled: true },

  app: {
    baseURL: '/',
    head: {
      title: 'Personal Portfolio Website built with Nuxt 4',
      htmlAttrs: {
        lang: 'en'
      },
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },
  modules: ['@nuxt/fonts'],
  fonts: {
    families: [
      {
        name: 'Inter',
        provider: 'none',
        weights: ['400', '500', '700', '900'],
        src: [
          '/fonts/inter/inter-v11-latin-regular.woff2',
          '/fonts/inter/inter-v11-latin-500.woff2',
          '/fonts/inter/inter-v11-latin-700.woff2',
          '/fonts/inter/inter-v11-latin-900.woff2',
        ],
        fallbacks: [
          'sans-serif',
        ],
        display: 'swap',
        preload: true,
      }
    ]
  }
})