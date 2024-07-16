import { Outlet } from "react-router-dom"

function Home() {
  return (
    <div>
        this is home page
        <Outlet/>
    </div>
  )
}

export default Home