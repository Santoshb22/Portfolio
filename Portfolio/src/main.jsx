import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import ProjectDetail from "./pages/ProjectDetail"
import App from './App'
import Home from './pages/Home'
import AppProvider from './contextAPI/AppProvider'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
        {
            path: "/",
            element: <Home />,
        },
        {
          path: "/project/:id",
          element: <ProjectDetail/>
        }
      ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <AppProvider>
    <RouterProvider router={router}/>
  </AppProvider>
  </StrictMode>
)
