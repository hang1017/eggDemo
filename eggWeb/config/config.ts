import { defineConfig } from 'alita';

const baseUrl = 'http://127.0.0.1:7001';

export default defineConfig({
  appType: 'h5',
  mobileLayout: true,
  proxy: {
    '/api': {
      target: baseUrl,
      changeOrigin: true,
    },
  },
});
