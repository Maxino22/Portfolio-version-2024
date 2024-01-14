// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
     "@pinia/nuxt",
     '@vueuse/nuxt',
     '@nuxt/content',
     '@nuxtseo/module',
     'nuxt-icon',
     '@nuxt/image',
     '@nuxtjs/color-mode',
     "@storyblok/nuxt",
     ["nuxt-mail", {
      message: {
        to: "me@maxino.dev"
      },
       smtp: {
       host: process.env.MAIL_HOST,
       port: process.env.MAIL_PORT,
       auth: {
         user: process.env.MAIL_USER,
         pass: process.env.MAIL_PASS,
       }
     }

     }]
],

app: {
  pageTransition: { name: 'fade', mode: 'out-in' },
  head: {
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      {
        name: 'google-site-verification',
        content: 'NZ2gcKbbjIC2NPIzsgOCzLX-IgB_3w9i6LUvAcc5pCU',
      },
    ],
    link: [{ rel: 'icon', type: 'image/png', href: '/favicon-32x32.png' }],
  },
},
site:{
   url: "https://www.maxino.dev",
   name: "Maxwell Muanda | Portfolio Website",
   description: "Welcome to my Digital Home, Portfolio & Blog",
},
runtimeConfig: {
  public: {

    siteDescription: 'Welcome to my Digital Home, Portfolio & Blog',
  },
},
storyblok: {
  accessToken: process.env.STORYBLOK_TOKEN,
},

colorMode: {
  classSuffix: '',
  preference: 'system',
  fallback: 'dark',
},

})
