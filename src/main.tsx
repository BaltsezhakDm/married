import React from 'react'
import ReactDOM from 'react-dom/client'
import { Mobile } from './App'
import '@fontsource/eb-garamond/400.css';
import '@fontsource/eb-garamond/500.css';
import '@fontsource/cormorant-garamond/400.css';
import '@fontsource/cormorant-garamond/500.css';
import '@fontsource/cormorant-garamond/600.css';
import '@fontsource/cormorant-garamond/700.css';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Mobile />
  </React.StrictMode>,
)
