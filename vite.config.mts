import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 对于 username.github.io 类型的仓库，base 路径应该是根路径 '/'
  base: '/',
  build: {
    outDir: 'dist',
  },
});


