import acondicionador1 from '../images/Acondicionador 1.png'
import acondicionador2 from '../images/Acondicionador 2.png'
import acondicionador3 from '../images/Acondicionador 3.png'
import acondicionador4 from '../images/Acondicionador 4.png'
import acondicionador5 from '../images/Acondicionador 5.png'
import acondicionador6 from '../images/Acondicionador 6.png'
import acondicionador7 from '../images/Acondicionador 7.png'
import acondicionador8 from '../images/Acondicionador 8.png'


const CardAcondicionador = () => {
  return (
    <div className='Vista-ac'>
      <br />
      <div className='Text-category'>
        <h1 className='text-3xl font-bold'>ACONDICIONADORES</h1>
        <h3 className='text-lg'>En esta sección podrás encontrar todos tus productos de preferencia.</h3>
      </div>
      <br />
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-4'>
        <div className='card-vistaproducts'>
          <div className='img-category'>
            <a href='#'><img src={acondicionador1} height="210" /></a>
          </div>
          <div className='info-vistaproducts'>
              <h2>3 en 1</h2>
              <h2 className='text-lg'>hidratación.</h2>
              <h2 className='text-base'>$36.500 COP</h2>
              <a href='#' className='btn-vistaproducts'>AÑADIR AL CARRITO <i className="icon-buy fa-solid fa-cart-shopping"></i></a>
          </div>
        </div>
        {/* Repite estos bloques para cada producto */}

        {/* Ejemplo del segundo producto */}

        <div className='card-vistaproducts'>
          <div className='img-category'>
            <a href='#'><img src={acondicionador2} height="210" /></a>
          </div>
          <div className='info-vistaproducts'>
              <h2>3 en 1</h2>
              <h2 className='text-lg'>nutrición.</h2>
              <h2 className='text-base'>$36.500 COP</h2>
              <a href='#' className='btn-vistaproducts'>AÑADIR AL CARRITO <i className="icon-buy fa-solid fa-cart-shopping"></i></a>
          </div>
        </div>

        {/* Fin del ejemplo del segundo producto */}

        {/* Repite los bloques anteriores para cada producto adicional */}

        <div className='card-vistaproducts'>
          <div className='img-category'>
            <a href='#'><img src={acondicionador3} height="210" /></a>
          </div>
          <div className='info-vistaproducts'>
              <h2>3 en 1</h2>
              <h2 className='text-lg'>reparación.</h2>
              <h2 className='text-base'>$36.500 COP</h2>
              <a href='#' className='btn-vistaproducts'>AÑADIR AL CARRITO <i className="icon-buy fa-solid fa-cart-shopping"></i></a>
          </div>
        </div>

        <div className='card-vistaproducts'>
          <div className='img-category'>
            <a href='#'><img src={acondicionador4} height="210" /></a>
          </div>
          <div className='info-vistaproducts'>
              <h2>Novex infusión</h2>
              <h2 className='text-lg'>de colágeno.</h2>
              <h2 className='text-base'>$36.500 COP</h2>
              <a href='#' className='btn-vistaproducts'>AÑADIR AL CARRITO <i className="icon-buy fa-solid fa-cart-shopping"></i></a>
          </div>
        </div>

        <div className='card-vistaproducts'>
          <div className='img-category'>
            <a href='#'><img src={acondicionador5} height="210" /></a>
          </div>
          <div className='info-vistaproducts'>
              <h2>Acondicionador hidratante</h2>
              <h2 className='text-lg'>sin sulfantes santo black.</h2>
              <h2 className='text-base'>$36.500 COP</h2>
              <a href='#' className='btn-vistaproducts'>AÑADIR AL CARRITO <i className="icon-buy fa-solid fa-cart-shopping"></i></a>
          </div>
        </div>

        <div className='card-vistaproducts'>
          <div className='img-category'>
            <a href='#'><img src={acondicionador6} height="210" /></a>
          </div>
          <div className='info-vistaproducts'>
              <h2>Acondicionador</h2>
              <h2 className='text-lg'>meus cachos.</h2>
              <h2 className='text-base'>$36.500 COP</h2>
              <a href='#' className='btn-vistaproducts'>AÑADIR AL CARRITO <i className="icon-buy fa-solid fa-cart-shopping"></i></a>
          </div>
        </div>

        <div className='card-vistaproducts'>
          <div className='img-category'>
            <a href='#'><img src={acondicionador7} height="210" /></a>
          </div>
          <div className='info-vistaproducts'>
              <h2>Meus cachos niños</h2>
              <h2 className='text-lg'>acondicionador.</h2>
              <h2 className='text-base'>$36.500 COP</h2>
              <a href='#' className='btn-vistaproducts'>AÑADIR AL CARRITO <i className="icon-buy fa-solid fa-cart-shopping"></i></a>
          </div>
        </div>

        <div className='card-vistaproducts'>
          <div className='img-category'>
            <a href='#'><img src={acondicionador8} height="210" /></a>
          </div>
          <div className='info-vistaproducts'>
              <h2>Acondicionador</h2>
              <h2 className='text-lg'>meus cachos de cinema.</h2>
              <h2 className='text-base'>$36.500 COP</h2>
              <a href='#' className='btn-vistaproducts'>AÑADIR AL CARRITO <i className="icon-buy fa-solid fa-cart-shopping"></i></a>
          </div>
        </div>
      </div>
      <br />
    </div>
  )
}

export default CardAcondicionador
