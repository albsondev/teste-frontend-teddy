import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    server: {
        port: 3001,
      },
      preview: {
        port: 3001,
      },
    build: {
        lib: {
            entry: './src/App.tsx', // Exposicao do App como módulo
            name: 'ClientsApp',
            fileName: (format) => `clients-app.${format}.js`,
            formats: ['umd'],
        },
    },
});
