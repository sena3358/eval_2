import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      '/glpi-v2': {
        target: 'http://localhost',
        changeOrigin: true,
        // API High-Level v2.3 de GLPI (endpoints modernes)
        rewrite: (path) => path.replace(/^\/glpi-v2/, '/glpi/api.php/v2.3'),
      },
      '/glpi': {
        target:'http://localhost',
        changeOrigin: true,
          // API REST historique de GLPI (initSession/killSession/getFullSession)
        rewrite: (path) => path.replace(/^\/glpi/, '/apirest.php'),  
      },
      // Proxy pour votre backend SQLite (si nécessaire)
      '/api': {
        target: 'http://localhost:8082',
        changeOrigin: true,
      },
    },
  },
})