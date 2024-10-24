// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['nuxt-security'],

  compatibilityDate: '2024-04-03',

  devtools: { enabled: true },

  router: {
    options: {
      strict: true,
    },
  },

  routeRules: {
    '/custom': {
      security: {
        // headers: {
        //   contentSecurityPolicy: {
        //     'frame-ancestors': [
        //       "'self'",
        //       'https://example.com',
        //       'https://www.example.com',
        //     ],
        //   },
        // },
      },
    },
  },

  // security: {
  //   headers: {
  //     contentSecurityPolicy: {
  //       'img-src': [
  //         "'self'",
  //         'data:',
  //         'https://example.com',
  //       ],
  //     },
  //     crossOriginEmbedderPolicy:
  //       process.env.NODE_ENV === 'development' ? 'unsafe-none' : 'unsafe-none',
  //   },
  //   corsHandler: {
  //     origin: [process.env.NUXT_PUBLIC_APP_BASE_URL as string],
  //   },
  //   rateLimiter: {
  //     tokensPerInterval: 8,
  //     interval: 10000,
  //   },
  // },
})
