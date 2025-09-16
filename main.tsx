import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './cape-theme/styles/globals.css'
import App from './cape-theme/App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
) 