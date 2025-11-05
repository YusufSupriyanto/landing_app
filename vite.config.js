import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
    plugins: [
        react({
            babel: {
                plugins: [
                    ['babel-plugin-react-compiler']
                ]
            },
        }),
        tailwindcss(),
    ],
    base: '/landing_app/', // sesuai nama repo kamu
    build: {
        outDir: 'dist',
        assetsDir: 'Assets',
    },
})