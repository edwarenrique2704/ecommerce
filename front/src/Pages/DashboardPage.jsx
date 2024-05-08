import SideBar from '../Components/SideBar'
import AdminProducts from '../Components/AdminProducts.jsx'
import AdminNavbar from '../Components/AdminNavbar'
import Profile from './Profile.jsx'

const DashboardPage = () => {
  return (
    <>
      
      <div className='flex flex-wrap'>
        <div  className='' >
          <SideBar />
        </div>

        <div className='flex  justify-start mx-auto  '>
          {/* <AdminProducts /> */}
          <Profile />
        </div>

        <div className='flex p-5'>
          {/* <AdminProducts /> */}
        </div>
        
      </div>
    </>
  )
}

export default DashboardPage