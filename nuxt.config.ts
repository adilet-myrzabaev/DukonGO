// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  modules: ['@pinia/nuxt'],
  plugins: [
      '~/plugins/vue-the-mask.ts',
      '~/plugins/autoLogin.ts',
  ],
  css: ["bootstrap/dist/css/bootstrap.min.css"],
    router: {
    },
})
