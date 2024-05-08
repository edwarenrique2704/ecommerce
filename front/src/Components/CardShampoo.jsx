import shampoo1 from '../images/Shampoo 1.1.png'
import shampoo2 from '../images/Shampoo 2.1.png'
import shampoo3 from '../images/Shampo 3.png'
import shampoo4 from '../images/Shampoo 4.png'
import shampoo5 from '../images/Shampoo 5.png'
import shampoo6 from '../images/Shampoo 6.png'
import shampoo7 from '../images/Shampoo 7.png'
import shampoo8 from '../images/Shampoo 8.png'
import shampoo9 from '../images/Shampoo 9.png'
import shampoo10 from '../images/Shampoo 10.png'
import shampoo11 from '../images/Shampoo 11.png'
import shampoo12 from '../images/Shampoo 12.png'

const CardShampoo = () => {
  return (
    <div className='Vista-sh'>
      <br />
      <div className='Text-category'>
        <h1 className='text-3xl font-bold'>SHAMPOO</h1>
        <h3 className='text-lg'>En esta sección podrás encontrar todos tus productos de preferencia.</h3>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-4'>
        <div className='card-vistaproducts'>
          <div className='img-category'>
            <a href='#'><img src={shampoo1}  alt="Shampoo skala limón siciliano" /></a>
          </div>
          <div className='info-vistaproducts'>
            <h2>Shampoo skala limón siciliano.</h2>
            <h2 className='sub-info'>(Para cuero cabelludo grasoso.)</h2>
            <h2>$26.000 COP</h2>
            <a href='#' className='btn-vistaproducts'>AÑADIR AL CARRITO <i className="icon-buy fa-solid fa-cart-shopping"></i></a>
          </div>
        </div>

        {/* Repite estos bloques para cada producto */}
        {/* Ejemplo del segundo producto */}
        <div className='card-vistaproducts'>
          <div className='img-category'>
            <a href='#'><img src={shampoo2} height="210" /></a>
          </div>
          <div className='info-vistaproducts'>
              <h2>Shampoo skala</h2>
              <h2>banana y bacure.</h2>
              <h2>$25.000 COP</h2>
              <a href='#' className='btn-vistaproducts'>AÑADIR AL CARRITO <i className="icon-buy fa-solid fa-cart-shopping"></i></a>
          </div>
        </div>
        {/* Fin del ejemplo del segundo producto */}

        {/* Repite los bloques anteriores para cada producto adicional */}
        <div className='card-vistaproducts'>
          <div className='img-category'>
            <a href='#'><img src={shampoo3} height="210" /></a>
          </div>
          <div className='info-vistaproducts'>
              <h2>Novex broto de bambú.</h2>
              <h2>de bambú.</h2>
              <h2>$35.900 COP</h2>
              <a href='#' className='btn-vistaproducts'>AÑADIR AL CARRITO <i className="icon-buy fa-solid fa-cart-shopping"></i></a>
          </div>
        </div>

        <div className='card-vistaproducts'>
          <div className='img-category'>
            <a href='#'><img src={shampoo4} height="210" /></a>
          </div>
          <div className='info-vistaproducts'>
              <h2>Skala divino</h2>
              <h2>potao.</h2>
              <h2>$25.000 COP</h2>
              <a href='#' className='btn-vistaproducts'>AÑADIR AL CARRITO <i className="icon-buy fa-solid fa-cart-shopping"></i></a>
          </div>
        </div>

        <div className='card-vistaproducts'>
          <div className='img-category'>
            <a href='#'><img src={shampoo5} height="210" /></a>
          </div>
          <div className='info-vistaproducts'>
              <h2>Meus cachos</h2>
              <h2>de cinema.</h2>
              <h2>$37.500 COP</h2>
              <a href='#' className='btn-vistaproducts'>AÑADIR AL CARRITO <i className="icon-buy fa-solid fa-cart-shopping"></i></a>
          </div>
        </div>

        <div className='card-vistaproducts'>
          <div className='img-category'>
            <a href='#'><img src={shampoo6} height="210" /></a>
          </div>
          <div className='info-vistaproducts'>
              <h2>Santo black.</h2>
              <h2 className='sub-info'>(Hidratante sin sulfatos.)</h2>
              <h2>$40.000 COP</h2>
              <a href='#' className='btn-vistaproducts'>AÑADIR AL CARRITO <i className="icon-buy fa-solid fa-cart-shopping"></i></a>
          </div>
        </div>

        <div className='card-vistaproducts'>
          <div className='img-category'>
            <a href='#'><img src={shampoo7} height="210" /></a>
          </div>
          <div className='info-vistaproducts'>
              <h2>Hidratante novex meus cachos.</h2>
              <h2 className='sub-info'>(Sin sulfatos.)</h2>
              <h2>$45.000 COP</h2>
              <a href='#' className='btn-vistaproducts'>AÑADIR AL CARRITO <i className="icon-buy fa-solid fa-cart-shopping"></i></a>
          </div>
        </div>

        <div className='card-vistaproducts'>
          <div className='img-category'>
            <a href='#'><img src={shampoo8} height="210" /></a>
          </div>
          <div className='info-vistaproducts'>
              <h2>Meus cachos</h2>
              <h2>niños.</h2>
              <h2>$49.000 COP</h2>
              <a href='#' className='btn-vistaproducts'>AÑADIR AL CARRITO <i className="icon-buy fa-solid fa-cart-shopping"></i></a>
          </div>
        </div>

        <div className='card-vistaproducts'>
          <div className='img-category'>
            <a href='#'><img src={shampoo9} height="210" /></a>
          </div>
          <div className='info-vistaproducts'>
              <h2>Skala spa</h2>
              <h2>naturals mandarina.</h2>
              <h2>$30.000 COP</h2>
              <a href='#' className='btn-vistaproducts'>AÑADIR AL CARRITO <i className="icon-buy fa-solid fa-cart-shopping"></i></a>
          </div>
        </div>

        <div className='card-vistaproducts'>
          <div className='img-category'>
            <a href='#'><img src={shampoo10} height="210" /></a>
          </div>
          <div className='info-vistaproducts'>
              <h2>Skala más rizos.</h2>
              <h2 className='sub-info'>(Hidratante)</h2>
              <h2>$29.500 COP</h2>
              <a href='#' className='btn-vistaproducts'>AÑADIR AL CARRITO <i className="icon-buy fa-solid fa-cart-shopping"></i></a>
          </div>
        </div>

        <div className='card-vistaproducts'>
          <div className='img-category'>
            <a href='#'><img src={shampoo11} height="210" /></a>
          </div>
          <div className='info-vistaproducts'>
              <h2>Hidratante skala almidon de maiz.</h2>
              <h2 className='sub-info'>(Con sulfatos.)</h2>
              <h2>$29.000 COP</h2>
              <a href='#' className='btn-vistaproducts'>AÑADIR AL CARRITO <i className="icon-buy fa-solid fa-cart-shopping"></i></a>
          </div>
        </div>

        <div className='card-vistaproducts'>
          <div className='img-category'>
            <a href='#'><img src={shampoo12} height="210" /></a>
          </div>
          <div className='info-vistaproducts'>
              <h2>Novex babosa.</h2>
              <h2 className='sub-info'>(Contiene sulfatos)</h2>
              <h2>$39.000 COP</h2>
              <a href='#' className='btn-vistaproducts'>AÑADIR AL CARRITO <i className="icon-buy fa-solid fa-cart-shopping"></i></a>
          </div>
        </div>

      </div>
      <br />
    </div>  
  )
}

export default CardShampoo