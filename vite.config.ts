import react from '@vitejs/plugin-react'
import path from 'path'
import { type Plugin, defineConfig, loadEnv } from 'vite'
import svgr from 'vite-plugin-svgr'

// Serves api/contact.ts during `vite dev`; Vercel handles it in production
const devApi = (): Plugin => ({
  name: 'dev-api',
  apply: 'serve',
  configureServer(server) {
    server.middlewares.use('/api/contact', async (req, res) => {
      const chunks: Buffer[] = []
      for await (const chunk of req) chunks.push(chunk)
      const { POST } = await server.ssrLoadModule('/api/contact.ts')
      const response: Response = await POST(
        new Request('http://localhost/api/contact', {
          method: 'POST',
          body: Buffer.concat(chunks),
        }),
      )
      res.statusCode = response.status
      res.end(await response.text())
    })
  },
})

// https://vitejs.dev/config/

export default defineConfig(({ mode }) => {
  Object.assign(process.env, loadEnv(mode, process.cwd(), ''))

  return {
    plugins: [
      react(),
      svgr({
        svgrOptions: {
          exportType: 'default',
          ref: true,
          svgo: false,
          titleProp: true,
        },
        include: '**/*.svg?react',
      }),
      devApi(),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
  }
})
