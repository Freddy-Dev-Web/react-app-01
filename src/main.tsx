import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App01 from './01/App01'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App01 />
  </StrictMode>,
)
