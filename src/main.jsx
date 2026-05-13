import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

document.addEventListener('contextmenu', e => e.preventDefault())
document.addEventListener('keydown', e => {
  if ((e.ctrlKey || e.metaKey) && ['c', 'u', 's', 'a'].includes(e.key.toLowerCase())) {
    e.preventDefault()
  }
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
