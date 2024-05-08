import tratamiento1 from '../images/Tratamiento 1.png'
import tratamiento2 from '../images/Tratamiento 2.png'
import tratamiento3 from '../images/Tratamiento 3.png'
import tratamiento4 from '../images/Tratamiento 4.png'
import tratamiento5 from '../images/Tratamiento 5.png'
import tratamiento6 from '../images/Tratamiento 6.png'
import tratamiento7 from '../images/Tratamiento 7.png'
import tratamiento8 from '../images/Tratamiento 8.png'
import tratamiento9 from '../images/Tratamiento 9.png'


const CardTratamientos = () => {
  return (
<div className='Vista-tr'>
      <br />
      <div className='Text-category'>
        <h1 className='text-3xl font-bold'>TRATAMIENTOS</h1>
        <h3 className='text-lg'>En esta sección podrás encontrar todos tus productos de preferencia.</h3>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-4'>
        <div className='card-vistaproducts'>
          <div className='img-category'>
            <a href='#'><img src={tratamiento1} height="210" /></a>
          </div>
          <div className='info-vistaproducts'>
              <h2>Skala almidón de maíz</h2>
              <h2 className='text-base'>2 en 1.</h2>
              <h2 className='text-base'>$38.000 COP</h2>
              <a href='#' className='btn-vistaproducts'>AÑADIR AL CARRITO <i className="icon-buy fa-solid fa-cart-shopping"></i></a>
          </div>
        </div>

        {/* Repite estos bloques para cada producto */}

        {/* Ejemplo del segundo producto */}
    
        <div className='card-vistaproducts'>
          <div className='img-category'>
            <a href='#'><img src={tratamiento2} height="210" /></a>
          </div>
          <div className='info-vistaproducts'>
              <h2>Skala mais crespos</h2>
              <h2 className='text-base'>2 en 1.</h2>
              <h2 className='text-base'>$34.000 COP</h2>
              <a href='#' className='btn-vistaproducts'>AÑADIR AL CARRITO <i className="icon-buy fa-solid fa-cart-shopping"></i></a>
          </div>
        </div>
        {/* Fin del ejemplo del segundo producto */}

        {/* Repite los bloques anteriores para cada producto adicional */}
        <div className='card-vistaproducts'>
          <div className='img-category'>
            <a href='#'><img src={tratamiento3} height="210" /></a>
          </div>
          <div className='info-vistaproducts'>
              <h2>Skala divino</h2>
              <h2>potao 2 en 1.</h2>
              <h2>$35.000 COP</h2>
              <a href='#' className='btn-vistaproducts'>AÑADIR AL CARRITO <i className="icon-buy fa-solid fa-cart-shopping"></i></a>
          </div>
        </div>

        <div className='card-vistaproducts'>
          <div className='img-category'>
            <a href='#'><img src={tratamiento4} height="210" /></a>
          </div>
          <div className='info-vistaproducts'>
              <h2>Skala dona</h2>
              <h2>2 en 1</h2>
              <h2>$35.000 COP</h2>
              <a href='#' className='btn-vistaproducts'>AÑADIR AL CARRITO <i className="icon-buy fa-solid fa-cart-shopping"></i></a>
          </div>
        </div>

        <div className='card-vistaproducts'>
          <div className='img-category'>
            <a href='#'><img src={tratamiento5} height="210" /></a>
          </div>
          <div className='info-vistaproducts'>
              <h2>Skala mais</h2>
              <h2>cachos 2 en 1.</h2>
              <h2>$35.000 COP</h2>
              <a href='#' className='btn-vistaproducts'>AÑADIR AL CARRITO <i className="icon-buy fa-solid fa-cart-shopping"></i></a>
          </div>
        </div>

        <div className='card-vistaproducts'>
          <div className='img-category'>
            <a href='#'><img src={tratamiento6} height="210" /></a>
          </div>
          <div className='info-vistaproducts'>
              <h2>Skala</h2>
              <h2>mais lisos.</h2>
              <h2>$35.000 COP</h2>
              <a href='#' className='btn-vistaproducts'>AÑADIR AL CARRITO <i className="icon-buy fa-solid fa-cart-shopping"></i></a>
          </div>
        </div>

        <div className='card-vistaproducts'>
          <div className='img-category'>
            <a href='#'><img src={tratamiento7} height="210" /></a>
          </div>
          <div className='info-vistaproducts'>
              <h2>Tratamiento</h2>
              <h2>santo black poderoso.</h2>
              <h2>$35.000 COP</h2>
              <a href='#' className='btn-vistaproducts'>AÑADIR AL CARRITO <i className="icon-buy fa-solid fa-cart-shopping"></i></a>
          </div>
        </div>

        <div className='card-vistaproducts'>
          <div className='img-category'>
            <a href='#'><img src={tratamiento8} height="210" /></a>
          </div>
          <div className='info-vistaproducts'>
              <h2>Skala ninños</h2>
              <h2>divino potinho 2 en 1.</h2>
              <h2>$35.000 COP</h2>
              <a href='#' className='btn-vistaproducts'>AÑADIR AL CARRITO <i className="icon-buy fa-solid fa-cart-shopping"></i></a>
          </div>
        </div>
      </div>
      <br />
    </div>  
  )
}

export default CardTratamientos