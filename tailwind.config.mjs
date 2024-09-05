import starlightPlugin from '@astrojs/starlight-tailwind';
const colors = {
    "base": "#101010",
    "warning": "#FCD452",
    "success": "#16A34A",
    "error": "#DC2626",
    "coollabs": "#6B16ED",
    "coollabs-100": "#7317FF",
    "coolgray-100": "#181818",
    "coolgray-200": "#202020",
    "coolgray-300": "#242424",
    "coolgray-400": "#282828",
    "coolgray-500": "#323232",
}
/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Inter", "sans-serif"],
            },
            colors
        },
    },
    plugins: [starlightPlugin()],
};