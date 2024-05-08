import React from 'react'
import SideBar from '../Components/SideBar';
import Tableusers from '../Components/Tableusers';
import { useAuth } from '../Context/AuthContext';


const Usuarios = () => {

  return (
    <div>
      <div className='flex'>
        <div >
            <SideBar />
        </div>
        <div className='flex-grow p-5'>
            <Tableusers />
        </div>
      </div>  
    </div>
  )
}

export default Usuarios