import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './figma-make-dist/styles/globals.css'
import App from './figma-make-dist/App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
) 