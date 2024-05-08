import React from 'react'
import CardTratamientos from '../Components/CardTratamientos'
import FilteredCardProducts from '../Components/FilterCard/FilteredCardProducts'


const TratamientosPage = () => {
  return (
    <div>
      <FilteredCardProducts category='tratamientos'/>
      <br />
    </div>
  )
}

export default TratamientosPage
