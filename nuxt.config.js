const routerBase =
  process.env.DEPLOY_ENV === 'GH_PAGES'
    ? {
        router: {
          base: 'https://kanchimatsumoto.github.io/qiita-demo'
        }
      }
    : {}
export default {
    // Global page headers (https://go.nuxtjs.dev/config-head)
    head: {
        title: 'qiita-demo',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1, , minimum-scale=1, user-scalable=yes' },
            { hid: 'description', name: 'description', content: '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: 'https://cdn.qiita.com/assets/favicons/public/production-c620d3e403342b1022967ba5e3db1aaa.ico' }
        ]
    },

    // Global CSS (https://go.nuxtjs.dev/config-css)
    css: [
      '@/assets/css/ress.css'
    ],

    styleResources: {
      scss: [
        '@/assets/scss/_mixin.scss',
        '@/assets/scss/_extend.scss',
      ]
    },

    // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
    plugins: [],

    // Auto import components (https://go.nuxtjs.dev/config-components)
    components: true,

    // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
    buildModules: [
        // https://go.nuxtjs.dev/tailwindcss
        '@nuxtjs/tailwindcss',
    ],

    // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/style-resources',
    'nuxt-mq',
  ],

  'mq': {
      defaultBreakpoint: 'sm',
      breakpoints: {
        sm: 768,
        md: 1200,
        pc: Infinity
      }
    },

    fontawesome: {
       imports: [
         {
           set: '@fortawesome/free-solid-svg-icons',
           icons: ['fas']
         }
       ]
     },

    // Build Configuration (https://go.nuxtjs.dev/config-build)
    build: {},
    ...routerBase
}
