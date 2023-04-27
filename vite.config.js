import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import { resolve } from 'path';

export default defineConfig({
  plugins: [reactRefresh()],
  resolve: {
    alias: {
      '@ionic/react': resolve(__dirname, 'node_modules/@ionic/react'),
      'ionicons': resolve(__dirname, 'node_modules/ionicons'),
    },
  },
});
