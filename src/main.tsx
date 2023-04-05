import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'
import './index.css'
import { LangContextProvider } from './context/LangContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <LangContextProvider>
      <App />
    </LangContextProvider>
  </React.StrictMode>,
)
