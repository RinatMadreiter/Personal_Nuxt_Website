export default defineNuxtConfig({
  ssr: false,
  compatibilityDate: '2025-09-11',
  devtools: { enabled: true },

  app: {
    baseURL: '/',
    head: {
      title: 'Personal Portfolio Website built with Nuxt 4',
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          'http-equiv': 'Content-Security-Policy',
          content:
            "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self' https: data:;"
        }
      ],
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