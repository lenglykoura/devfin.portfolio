/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                devfin: {
                    50: '#f4f7fb',
                    100: '#e3eaf4',
                    200: '#c5d5e9',
                    500: '#3b6ca1',
                    600: '#123764', // Your Brand Color
                    700: '#0e2b4f',
                    800: '#0b203b',
                    900: '#123764',
                }
            },
            fontFamily: {
                sans: ['Inter', 'Google Sans', 'Noto Sans Khmer', 'sans-serif'],
            }
        },
    },
    plugins: [],
}