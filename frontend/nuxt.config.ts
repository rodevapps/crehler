// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ['bootstrap/dist/css/bootstrap.min.css', '~/assets/styles/main.scss'],
    vite: {
        define: {
          "process.env.DEBUG": false,
        },
    },
})
