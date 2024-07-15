import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import { route } from './routes/route'

function App() {
  return (
    <RouterProvider router={createBrowserRouter(route)}/>
  )
}

export default App
