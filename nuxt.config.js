export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'whoPaysNY?',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet',  href:"https://fonts.googleapis.com/css2?family=Cutive+Mono&display=swap" },
      { rel: 'stylesheet', href:"https://fonts.googleapis.com/css2?family=Fjalla+One&display=swap"}
    ]
  },
  server: {
    port: 8080, // default: 3000
    host: '0.0.0.0' // default: localhost
  },
  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
   '@nuxtjs/vuetify'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/style-resources','@nuxt/content'
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },

  //Style Resources
  styleResources: {
    scss: [
        '~/assets/scss/variables.scss',
    ]
}
}
