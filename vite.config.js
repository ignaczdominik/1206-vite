import { fileURLToPath } from "url";
import { defineConfig } from "vite";
import viteProgressBar from "vite-plugin-progress";

export default defineConfig({
    server:{
        host: true,
    },
    build:{
        assetsInlineLimit: (38*1024)
    },
    plugins:[
        viteProgressBar()
    ],
    resolve:{
        alias:{
            '@': fileURLToPath(new URL('./src',import.meta.url)),
            '@images': fileURLToPath(new URL('./src/assets/images',import.meta.url))
        }
    }
})