// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    // ... другие модули
    '@pinia/nuxt',
  ],
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  plugins: ['~/plugins/vue-skeletor.ts', '~/plugins/theme.ts'],
  css: ['~/styles/global.css'],
});
