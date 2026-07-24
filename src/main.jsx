import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Archivo stands in for Parabolica (brand typeface, files not yet supplied) —
// see PRODUCT.md "Brand Commitments" and DESIGN.md Typography.
import '@fontsource/archivo/300.css'
import '@fontsource/archivo/400.css'
import '@fontsource/archivo/500.css'
import '@fontsource/archivo/700.css'
import '@fontsource/archivo/900.css'
import './index.css'
import './i18n'
import App from './App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
