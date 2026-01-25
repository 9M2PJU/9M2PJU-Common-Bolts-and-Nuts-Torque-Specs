import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    // base: '/9M2PJU-Common-Bolts-and-Nuts-Torque-Specs/', // We might need to adjust this for GH pages, but starting with root relative for now or usually it's repo name
    base: './',
    build: {
        outDir: 'docs',
    },
})
