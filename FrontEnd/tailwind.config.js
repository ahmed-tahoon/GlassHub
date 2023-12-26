/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./app.vue",
        "./error.vue",
        "./nuxt.config.{js,ts}",
        "./node_modules/flowbite/**/*.{js,ts}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#15B68F",
                secondary: "#8F15B6",
                primaryDark: "#0D8B69",
            },
        },
    },
    plugins: [require('@tailwindcss/forms'), require('flowbite/plugin')],
};
