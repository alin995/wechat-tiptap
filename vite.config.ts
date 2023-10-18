import { defineConfig, UserConfigExport } from "vite";
import react from "@vitejs/plugin-react";
import path, { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig(({mode}) => {
    const config: UserConfigExport = {
        plugins: [
            react(),
        ],
        build: {
            outDir: 'dist'
        },
        resolve: {
            alias: {
                "@": path.resolve(__dirname, "./src"),
                "@wechat-editor": resolve(__dirname, "./src/pages/wechat-editor")
            },
        },
        base: "/",
        server: {
            host: '0.0.0.0',
            port: 3000,
        },
    };

    return config;
});
