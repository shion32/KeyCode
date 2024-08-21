
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

//punto de entrada 
createRoot(document.getElementById('root')).render( // trae el elemnto root que se encuentra en index, para ejecutar el codiggo dentro de la funcion 
  <StrictMode> {/*permite trabajar con un modelo estricto, mantenerlo activo.*/}
    <App />
  </StrictMode>,
)
