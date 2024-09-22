import { UserConfigExport, defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'

const baseConfig: UserConfigExport = {
    plugins: [react()],
    server: {
        host: true,
        port: 3000,
        open: true,
    },
    css: {
        devSourcemap: true,
    },
    resolve: {
        alias: [
            { find: '@', replacement: path.resolve(__dirname, 'src') },
            { find: '@assets', replacement: path.resolve(__dirname, 'src/assets') },
            { find: '@components', replacement: path.resolve(__dirname, 'src/components') },
            { find: '@layouts', replacement: path.resolve(__dirname, 'src/layouts') },
            { find: '@pages', replacement: path.resolve(__dirname, 'src/pages') },
            { find: '@utils', replacement: path.resolve(__dirname, 'src/utils') },
            { find: '@hooks', replacement: path.resolve(__dirname, 'src/hooks') },
        ],
    },
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd())
    if (env.VITE_REACT_APP_ENV === 'development') {
        baseConfig.base = `/${env.VITE_PUBLIC_URL}`
    }
    return baseConfig
})
