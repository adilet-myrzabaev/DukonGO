// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  modules: ['@pinia/nuxt'],
  plugins: [
      '~/plugins/vue-the-mask.ts',
      '~/plugins/autoLogin.ts',
  ],
  nitro: {
    compressPublicAssets:true,
    devProxy: {
      "/api/v1": {
        target: "https://dukongo.kg/api/v1",
        changeOrigin: true,
        prependPath: true,
      },
    },
  },
  css: ["bootstrap/dist/css/bootstrap.min.css"],
    router: {
        
    },
})
