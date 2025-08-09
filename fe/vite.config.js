import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path' // ✅ Add this

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [react()],
    define: {
      'process.env': JSON.stringify(env),
    },
    resolve: {
      alias: {
        '@Utils': path.resolve(__dirname, 'src/utils'),
        '@Components': path.resolve(__dirname, 'src/components'),
        '@Pages': path.resolve(__dirname, 'src/pages'),
        // Add more aliases as needed
      },
    },
  }
})
