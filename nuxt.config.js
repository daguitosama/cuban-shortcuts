export default defineNuxtConfig({
    // Target: https://go.nuxtjs.dev/config-target
    // target: "static",

    // router: {
    //   base: '/'
    // },

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: "Atajos",
        htmlAttrs: {
            lang: "es",
        },
        meta: [
            { charset: "utf-8" },
            {
                name: "viewport",
                content: "width=device-width, initial-scale=1",
            },
            { hid: "description", name: "description", content: "" },
            { name: "format-detection", content: "telephone=no" },
            {
                name: "description",
                content: "The cuban transfermovil shortcuts on the web",
            },
        ],
        link: [
            { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
            { rel: "manifest", href: "/manifest.json" },
            { rel: "apple-touch-icon", href: "/touch-icon-iphone.png" },
            // <link rel="manifest" href="manifest.json">
            // <link rel="apple-touch-icon" href="touch-icon-iphone.png">
        ],

        bodyAttrs: {
            class: ["min-h-screen w-full"],
        },
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: ["@nuxtjs/tailwindcss"],
});
