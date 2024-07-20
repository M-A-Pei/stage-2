import { Outlet } from "react-router-dom"

function Home() {
  return (
    <div style={{height: "10000px"}}>
        this is home page
        <Outlet/>
    </div>
  )
}

export default Home