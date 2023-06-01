import {Outlet} from 'react-router-dom'
import Sidebar from '../Components/Sidebar'
import Resumen from '../Components/Resumen'

const Layout = () => {
  return (
    <div className='md-flex'>
        <Sidebar />
        <main className='flex-1'>
          <Outlet />
        </main>
        
        
        <Resumen />
    </div>
  )
}

export default Layout