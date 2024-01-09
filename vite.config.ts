import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from "path";

export default defineConfig(()=>{

  return {
    plugins: [react()],
    server: {
      port: 3001,
    },
    resolve: {
      alias: {
        "@": path.resolve("", "./src/"),
      }
    }
  }
})
