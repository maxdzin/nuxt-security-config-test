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
    '/': {
      security: {
        // headers: {
        //   contentSecurityPolicy: {
        //     'frame-ancestors': [
        //       "'self'",
        //     ],
        //   },
        // },
        corsHandler: {
          origin: [
            process.env.NUXT_PUBLIC_APP_BASE_URL as string,
          ],
        },
        rateLimiter: {
          tokensPerInterval: 8,
          interval: 10000,
        },
      },
    },
    '/test': {
      security: {
        // headers: {
        //   contentSecurityPolicy: {
        //     'frame-ancestors': [
        //       "'self'",
        //     ],
        //   },
        // },
        corsHandler: {
          origin: [
            process.env.NUXT_PUBLIC_APP_BASE_URL as string,
          ],
        },
        rateLimiter: {
          tokensPerInterval: 8,
          interval: 10000,
        },
      },
    },
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
        corsHandler: {
          origin: [
            process.env.NUXT_PUBLIC_APP_BASE_URL as string,
            'https://example.com',
            'https://www.example.com',
          ],
        },
        rateLimiter: {
          tokensPerInterval: 8,
          interval: 10000,
        },
      },
    },
    '/api/statistics/custom': {
      security: {
        corsHandler: {
          origin: ['https://example.com', 'https://www.example.com'],
        },
        rateLimiter: {
          tokensPerInterval: 8,
          interval: 10000,
        },
      },
    },
    '/api/statistics/entries': {
      security: {
        corsHandler: {
          origin: [process.env.NUXT_PUBLIC_APP_BASE_URL as string],
        },
        rateLimiter: {
          tokensPerInterval: 8,
          interval: 10000,
        },
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
