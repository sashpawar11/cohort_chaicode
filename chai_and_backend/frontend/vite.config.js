import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
   //proxy setup
  server: {
    proxy: {
      '/api/v1' : 'http://127.0.0.1:3000',
    }
  },
  plugins: [react()]

 
 
})
