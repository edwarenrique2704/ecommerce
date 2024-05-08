import React from 'react'
import SideBar from '../../Components/SideBar'
import Tableproducts from '../../Components/Tableproducts'

const Products = () => {
  return (
    <div>
        <div className='flex'>
        <div >
            <SideBar />
        </div>
        <div className='flex-grow p-5 '>
            <Tableproducts />
        </div>
      </div> 
    </div>
  )
}

export default Products