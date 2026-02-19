
  import { defineConfig } from 'vite';
  import react from '@vitejs/plugin-react-swc';
  import path from 'path';

  export default defineConfig({
    plugins: [react()],
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
      alias: {
        '@': path.resolve(__dirname, './src'),
        'figma:asset/4750205eb49dda48758e33109eb62c5f8f3d4bfe.png': path.resolve(__dirname, './src/assets/4750205eb49dda48758e33109eb62c5f8f3d4bfe.png'),
        'figma:asset/26fb579544545ed52d17ee92cb23dea2cb8e9fd2.png': path.resolve(__dirname, './src/assets/26fb579544545ed52d17ee92cb23dea2cb8e9fd2.png'),
      },
    },
    build: {
      target: 'esnext',
      outDir: 'dist',
    },
    server: {
      port: 3000,
      open: true,
    },
  });