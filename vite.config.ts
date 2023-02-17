import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'assets': path.resolve(__dirname, './src/assets'),
      'pages': path.resolve(__dirname, './src/pages'),
      'components': path.resolve(__dirname, './src/components'),
      'atoms': path.resolve(__dirname, './src/components/atoms'),
      'hoc': path.resolve(__dirname, './src/components/hoc'),
      'molecules': path.resolve(__dirname, './src/components/molecules'),
      'organisms': path.resolve(__dirname, './src/components/organisms'),
      '@': path.resolve(__dirname, './src'),
    }
  }
})
