import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"

//Bootstrap para todo el proyecto
import 'bootstrap/dist/css/bootstrap.min.css'

import HolaMundo from './components/HolaMundo.jsx'
import Calama from './components/Calama.jsx'
import Ejercicio01 from './components/ejercicios/Ejercicio01.jsx'
import Tareas from './components/tareas/Tareas.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/hola",
    element: <HolaMundo/>
  },
  {
    path: "/ciudad",
    element: <Calama/>
  },
  {
    path: "/ejercicio01",
    element: <Ejercicio01/>
  },
  //Route Tareas
  {
    path: "/tareas",
    element: <Tareas/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
