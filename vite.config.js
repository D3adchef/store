import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Set `base: '/'` in dev, but `'/store/'` in production
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/store/' : '/',
  plugins: [react()],
})
