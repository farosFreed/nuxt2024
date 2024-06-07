// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui"],
  plugins: [
    {
      src: "~/plugins/ably.server.js",
      // ssr: false,
    },
    { src: "node_modules/nuxtjs-phaser", mode: "client" },
  ],
  runtimeConfig: {
    ablySecret: "",
    public: {
      // only public keys here!!
    },
  },
});
