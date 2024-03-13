import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx'
import Detalle from './components/Detalle/detalle.jsx';
import Agregar from './components/Agregar/agregar.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <div>404 Not Found</div>,
  },
  {
    path: '/detalle/:id',
    element: <Detalle/>,
  },
  {
    path: '/agregar',
    element: <Agregar/>,
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
