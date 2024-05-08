import gel from '../images/Gel Skala.png'
import aceite from '../images/Aceite.png'
import cepillo1 from '../images/Cepillo 1.png'
import cepillo2 from '../images/Cepillo 2.png'
import cepillo3 from '../images/Cepillo 3.png'
import cepillo4 from '../images/Cepillo 4.png'
const CardOtros = () => {
  return (
    <div className='Vista-cr'>
    <center>
      <br />
      <div className='Text-category'>
        <h1 className='text-3xl font-bold'>OTROS</h1>
        <h3 className='text-lg'>En esta sección podrás encontrar todos tus productos de preferencia como geles, aceites y accesorios para el cabello.</h3>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-4'>
        <div className='card-vistaproducts'>
            <div className='img-category'>
              <a href='#'><img src={gel} height="210" /></a>
            </div>
            <div className='info-vistaproducts'>
                <h2>Gel fluido skala</h2>
                <h2 className='text-lg'>para definir crespos.</h2>
                <h2 className='text-base'>$36.500 COP</h2>
                <a href='#' className='btn-vistaproducts'>AÑADIR AL CARRITO <i className="icon-buy fa-solid fa-cart-shopping"></i></a>
            </div>
          </div>

        {/* Repite estos bloques para cada producto */}

        {/* Ejemplo del segundo producto */}
        
        <div className='card-vistaproducts'>
            <div className='img-category'>
              <a href='#'><img src={aceite} height="210" /></a>
            </div>
            <div className='info-vistaproducts'>
                <h2>Aceite de jojoba</h2>
                <h2 className='text-lg'>curly lovers.</h2>
                <h2 className='text-base'>$36.500 COP</h2>
                <a href='#' className='btn-vistaproducts'>AÑADIR AL CARRITO <i className="icon-buy fa-solid fa-cart-shopping"></i></a>
            </div>
          </div>

        {/* Fin del ejemplo del segundo producto */}

        {/* Repite los bloques anteriores para cada producto adicional */}

        <div className='card-vistaproducts'>
            <div className='img-category'>
              <a href='#'><img src={cepillo1} height="210" /></a>
            </div>
            <div className='info-vistaproducts'>
                <h2>Cepillo desenredante</h2>
                <h2 className='text-lg'>flexible.</h2>
                <h2 className='text-base'>$36.500 COP</h2>
                <a href='#' className='btn-vistaproducts'>AÑADIR AL CARRITO <i className="icon-buy fa-solid fa-cart-shopping"></i></a>
            </div>
          </div>

          <div className='card-vistaproducts'>
            <div className='img-category'>
              <a href='#'><img src={cepillo2} height="210" /></a>
            </div>
            <div className='info-vistaproducts'>
                <h2>Cepillo desenredante</h2>
                <h2 className='text-lg'>y definidor.</h2>
                <h2 className='text-base'>$36.500 COP</h2>
                <a href='#' className='btn-vistaproducts'>AÑADIR AL CARRITO <i className="icon-buy fa-solid fa-cart-shopping"></i></a>
            </div>
          </div>

          <div className='card-vistaproducts'>
            <div className='img-category'>
              <a href='#'><img src={cepillo3} height="210" /></a>
            </div>
            <div className='info-vistaproducts'>
                <h2>Difusor universal</h2>
                <h2 className='text-lg'>en goma.</h2>
                <h2 className='text-base'>$36.500 COP</h2>
                <a href='#' className='btn-vistaproducts'>AÑADIR AL CARRITO <i className="icon-buy fa-solid fa-cart-shopping"></i></a>
            </div>
          </div>

          <div className='card-vistaproducts'>
            <div className='img-category'>
              <a href='#'><img src={cepillo4} height="210" /></a>
            </div>
            <div className='info-vistaproducts'>
                <h2>Cepillo definidor</h2>
                <h2 className='text-lg'>de crespos y hileras.</h2>
                <h2 className='text-base'>$36.500 COP</h2>
                <a href='#' className='btn-vistaproducts'>AÑADIR AL CARRITO <i className="icon-buy fa-solid fa-cart-shopping"></i></a>
            </div>
          </div>
      </div>
      <br />
      <br />
    </center>
  </div>
  
  )
}

export default CardOtros