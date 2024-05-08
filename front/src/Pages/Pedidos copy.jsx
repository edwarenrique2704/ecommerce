import React from 'react'
import SideBar from '../Components/SideBar'
import Tablepedidos from '../Components/Tablepedidos'

const Pedidos = () => {
  return (
    <div>
        <div className='flex'>
            <div >
                <SideBar />
            </div>
            <div className='flex-grow p-5'>
                <Tablepedidos />
            </div>
        </div>  
    </div>
  )
}

export default Pedidos