import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { route } from './routes/route'
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <RouterProvider router={createBrowserRouter(route)}/>
  )
}

export default App
