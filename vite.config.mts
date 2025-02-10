import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  base: '',
  plugins: [react(), svgr()],
  envPrefix: 'REACT_APP',
  define: { 'process.env': {} },
  server: {
    port: 3000,
  },
});
