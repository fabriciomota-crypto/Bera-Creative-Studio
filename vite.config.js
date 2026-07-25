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

      server.middlewares.use('/__design-layout', (req, res) => {
        const layoutPath = path.resolve(process.cwd(), 'src/design/layout.json')
        if (req.method === 'GET') {
          res.setHeader('Content-Type', 'application/json')
          res.end(fs.readFileSync(layoutPath, 'utf-8'))
          return
        }
        if (req.method === 'POST') {
          let body = ''
          req.on('data', (chunk) => { body += chunk })
          req.on('end', () => {
            try {
              const { active } = JSON.parse(body)
              const layout = JSON.parse(fs.readFileSync(layoutPath, 'utf-8'))
              if (!layout.presets[active]) throw new Error(`Unknown preset: ${active}`)
              layout.active = active
              fs.writeFileSync(layoutPath, JSON.stringify(layout, null, 2) + '\n', 'utf-8')
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
    },
  }
}

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react(), ...(command === 'serve' ? [designPanelDevServer()] : [])],
}))
