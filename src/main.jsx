import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import './Styles/Utils.css'
import './Styles/WebFlow.css'
import './Styles/Modern-Normalize.css'
import './Components/Newsletter/Observer.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
