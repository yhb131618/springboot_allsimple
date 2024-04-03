import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import eslint from 'vite-plugin-eslint'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint()],
  server: {
    proxy: {
      // API 요청을 프록시할 경로 설정
      '/api': 'http://localhost:8080', // Spring Boot 서버 주소
    },
  },
})
