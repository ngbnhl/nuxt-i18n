export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'NuxtI18n',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'nuxt-i18n',
  ],
  i18n: {
    locales: ['en', 'fr', 'es','ja'],
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en',
      messages: {
        en: {
          welcome: 'Welcome',
          love: 'I love you',
        },
        fr: {
          welcome: 'Bienvenue',
          love: 'I love you 2',
        },
        es: {
          welcome: 'Bienvenido',
          love: 'I love you 3',
        },
        ja:{
          welcome: "こんにちは、世界!",
          love: 'わたしは、あなたを愛しています',
        }
      }
    }
    },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
