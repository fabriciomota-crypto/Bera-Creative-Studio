import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'node:fs'
import path from 'node:path'

// Dev-only middleware backing the visual control panel (src/dev/DesignPanel.tsx).
// Never runs in production: configureServer only executes under `vite dev`,
// and the plugin itself is dropped from the array on `vite build` below.
function designPanelDevServer() {
  return {
    name: 'bera-design-panel-dev-server',
    configureServer(server) {
      server.middlewares.use('/__design-tokens', (req, res) => {
        const tokensPath = path.resolve(process.cwd(), 'src/design/tokens.css')
        if (req.method === 'GET') {
          res.setHeader('Content-Type', 'text/plain')
          res.end(fs.readFileSync(tokensPath, 'utf-8'))
          return
        }
        if (req.method === 'POST') {
          let body = ''
          req.on('data', (chunk) => { body += chunk })
          req.on('end', () => {
            try {
              const { css } = JSON.parse(body)
              fs.writeFileSync(tokensPath, css, 'utf-8')
              res.statusCode = 200
              res.end('ok')
            } catch (err) {
              res.statusCode = 400
              res.end(String(err))
            }
          })
          return
        }
        res.statusCode = 405
        res.end('Method not allowed')
      })

      server.middlewares.use('/__design-image', (req, res) => {
        if (req.method !== 'POST') {
          res.statusCode = 405
          res.end('Method not allowed')
          return
        }
        let body = ''
        req.on('data', (chunk) => { body += chunk })
        req.on('end', () => {
          try {
            const { slot, dataUrl } = JSON.parse(body)
            const match = /^data:(image\/\w+);base64,(.+)$/.exec(dataUrl)
            if (!slot || !match) throw new Error('Invalid slot or dataUrl')
            const ext = match[1].split('/')[1]
            const uploadsDir = path.resolve(process.cwd(), 'src/assets/uploads')
            fs.mkdirSync(uploadsDir, { recursive: true })
            const filename = `${slot}.${ext}`
            fs.writeFileSync(path.join(uploadsDir, filename), Buffer.from(match[2], 'base64'))

            const manifestPath = path.resolve(process.cwd(), 'src/design/images.json')
            const manifest = fs.existsSync(manifestPath)
              ? JSON.parse(fs.readFileSync(manifestPath, 'utf-8'))
              : {}
            manifest[slot] = `/src/assets/uploads/${filename}`
            fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2))

            res.statusCode = 200
            res.end(JSON.stringify({ path: manifest[slot] }))
          } catch (err) {
            res.statusCode = 400
            res.end(String(err))
          }
        })
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react(), ...(command === 'serve' ? [designPanelDevServer()] : [])],
}))
