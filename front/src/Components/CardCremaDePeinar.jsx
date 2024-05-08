import cremadepeinar1 from '../images/Crema de peinar 1.png'
import cremadepeinar2 from '../images/Crema de peinar 2.png'
import cremadepeinar3 from '../images/Crema de peinar 3.png'
import cremadepeinar4 from '../images/Crema de peinar 4.png'
import cremadepeinar5 from '../images/Crema de peinar 5.png'
import cremadepeinar6 from '../images/Crema de peinar 6.png'
import cremadepeinar7 from '../images/Crema de peinar 7.png'
const CardCremaDePeinar = () => {
  return (
    <div className='Vista-cr'>
      
      
      <br />
      <div className='Text-category'>
        <h1 className='text-3xl font-bold'>CREMAS PARA PEINAR</h1>
        <h3 className='text-lg'>En esta sección podrás encontrar todos tus productos de preferencia.</h3>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-4'>
        <div className='card-vistaproducts'>
          <div className='img-category'>
            <a href='#'><img src={cremadepeinar1} height="210" /></a>
          </div>
          <div className='info-vistaproducts'>
              <h2 className='text-xl'>Novex infusión</h2>
              <h2 className='text-lg'>colágeno.</h2>
              <h2 className='text-base'>$45.500 COP</h2>
              <a href='#' className='btn-vistaproducts'>AÑADIR AL CARRITO <i className="icon-buy fa-solid fa-cart-shopping"></i></a>
          </div>
        </div>

      
        {/* Ejemplo del segundo producto */}



        {/* Fin del ejemplo del segundo producto */}

        {/* Repite los bloques anteriores para cada producto adicional */}




        

      </div>
      <br />
      <br />
    </div>
  )
}

export default CardCremaDePeinar