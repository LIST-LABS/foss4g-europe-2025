import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
    plugins: [react(), tailwindcss()],
    server: {
        port: 3000,
    },
    envDir: process.env.NODE_ENV !== "development" ? "/etc/secrets/cm-dev/frontend/" : "./",
});
