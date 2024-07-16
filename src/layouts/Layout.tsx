import {Link, Outlet} from 'react-router-dom'

function Layout() {
  return (
    <div className='container-fluid'>
      <div className="row d-flex" style={{height: '100vh'}}>

        <div className='col-md-2 bg-dark'>
          <nav className="nav flex-column p-1">
            <img height='100px' width='100px' className='rounded-circle border' src="https://avatars3.githubusercontent.com/u/34464790?s=220&v=4" alt="" />
            <Link to='home' className="nav-link text-light"><i className="bi bi-house text-light"></i> Home</Link>
            <Link to='about' className="nav-link text-light"><i className="bi bi-person text-light"></i> About</Link>
            <Link to='follows' className='nav-link text-light'><i className="bi bi-heart text-light"></i> Follows</Link>
            <Link to='follows' className='nav-link text-light'><i className="bi bi-person-circle text-light"></i> Profile</Link>
            <Link to='todo' className='nav-link text-light'><i className="bi bi-list-check text-light"></i> Todo list</Link>
            <button className='btn btn-outline-warning rounded'>make new post</button>
          </nav>
        </div>

        <div className='col-md-7 bg-dark border-end border-start text-light p-3'>
          <Outlet/>
        </div>

        <div className='col-md-3 bg-dark'>
          <div className='d-flex flex-column h-100'>
            <div className='my-3 h-25 rounded' style={{backgroundColor:'RGB(59, 59, 59)'}}>
              <div className='bg-warning h-50 rounded w-100'></div>
              <div className='d-flex'>
                <img className='rounded-circle border position-relative' height='80px' width='80px' src="https://i.pinimg.com/originals/a9/99/ee/a999ee87f1cc57beb5cc1c60fc96cded.jpg" style={{top:"-40px"}} alt="" />
                <p className='text-light mx-2 fs-5'>Itadori Yuji</p>

                <button className='btn btn-outline-warning rounded ms-auto h-25 mt-1'>follow</button>
              </div>
            </div>

            <div className='h-50' style={{backgroundColor:'RGB(59, 59, 59)', borderRadius: '20px'}}>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Layout