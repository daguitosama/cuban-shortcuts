export default defineNuxtConfig({
    app: {
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
                {
                    name: "theme-color",
                    media: "(prefers-color-scheme: dark)",
                    content: "black",
                },
                {
                    name: "theme-color",
                    media: "(prefers-color-scheme: light)",
                    content: "white",
                },
            ],
            link: [
                { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
                {
                    rel: "manifest",
                    href: "/manifest.json",
                    crossorigin: "use-credentials",
                },
                { rel: "apple-touch-icon", href: "/touch-icon-iphone.png" },
            ],

            bodyAttrs: {
                class: ["min-h-screen w-full"],
            },
        },
    },
    modules: ["@nuxtjs/tailwindcss"],
});
