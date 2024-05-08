import Banner1 from '../images/Banner Skala.jpg';
import Banner2 from '../images/Banner Skala 2.jpg';
// import Shampoo from '../images/Shampoo 1.jpg';
// import Crema1 from '../images/crema de peinar 1.jpg'
import Aceiteportada from '../images/Aceiteportada.jpg'
import Cepillosportada from '../images/Cepillosportada.jpg'
import Gelportada from '../images/Gelportada.jpg'
import Cremadepeinarportada from '../images/Cremadepeinarportada.jpg';
import Acondicionadorportada from '../images/Acondicionadorportada.jpg';
import Tratamientosportada from '../images/Tratamientoportada.jpg';
import Shampooportada from '../images/Shampoportada.jpg';
import shampoo3 from '../images/Shampo 3.png'
import tratamiento8 from '../images/Tratamiento 8.png'
import cremadepeinar5 from '../images/Crema de peinar 5.png'
import acondicionador2 from '../images/Acondicionador 2.png'
import cepillo3 from '../images/Cepillo 3.png'
import tratamiento4 from '../images/Tratamiento 4.png'
import shampoo11 from '../images/Shampoo 11.png'
import aceite from '../images/Aceite.png'
const Carrusel = () => {
  return (
    <div className='flex flex-col w-screen'>
      <div className='banner' >
          <img src={Banner1} className="d-block w-screen" alt="Banner 1" />
         <div className='capa z-0'></div> 
      </div>
      <br />
      <br />
      <center className='mx-auto justify-center'> 
        <div className='Categorias'>
          <div className='Text-category'>
              <h1 className='text-3xl font-bold'>CATEGORIAS.</h1>
              <h3 className='text-lg'>Navegue a través de las diferentes categorías de productos que están a la venta.</h3>
            </div>
          <div className='card-category1'>
            <div className='img-category'>
              <img src={Shampooportada}  width="" alt="Shampoo" />
            </div>
            <div className='info-category'>
              <a href='/Shampoo'><button className='button-category'>Ir a shampoo</button></a>
            </div>
          </div>
          <div className='card-category1'>
            <div className='img-category'>
              <img src={Tratamientosportada} height="50%" alt="Tratamientos" />
            </div>
            <div className='info-category'>
              <a href='/Tratamientos'><button className='button-category'>Ir a tratamientos</button></a>
            </div>
          </div>
          <div className='card-category1'>
            <div className='img-category'>
              <img src={Acondicionadorportada} height="210" alt="Acondicionador" />
            </div>
            <div className='info-category'>
              <a href='/Acondicionador'><button className='button-category'>Ir a acondicionadores</button></a>
            </div>
          </div>
          <div className='card-category1'>
            <div className='img-category'>
              <img src={Cremadepeinarportada} height="210" alt="Crema de peinar" />
            </div>
            <div className='info-category'>
              <a href='/Cremadepeinar'><button className='button-category'>Ir a cremas de peinar</button></a>
            </div>
          </div>
          <div className='card-category1'>
            <div className='img-category'>
              <img src={Gelportada} height="210" alt="Gel" />
            </div>
            <div className='info-category'>
              <a href='/Otros'><button className='button-category'>Ir a geles</button></a>
            </div>
          </div>
          <div className='card-category1'>
            <div className='img-category'>
              <img src={Aceiteportada} height="210" alt="Aceite" />
            </div>
            <div className='info-category'>
              <a href='/Otros'><button className='button-category'>Ir a aceites</button></a>
            </div>
          </div>
          <div className='card-category1'>
            <div className='img-category'>
              <img src={Cepillosportada} height="210" alt="Cepillos" />
            </div>
            <div className='info-category'>
              <a href='/Otros'><button className='button-category'>Ir a accesorios</button></a>
            </div>
          </div>
          <br />
          <br />
          <br />
        </div>
      </center>
      <br />
      <div className='Text-category'>
          <h1 className='text-3xl font-bold'>PRODUCTOS</h1>
          <h3 className='text-lg'>Estos son algunos de los productos que podrás encontrar en nuestro catálogo de ventas.</h3>
        <div className='card-vista'>
          <div className='img-category'>
            <a href='#'><img src={shampoo3} height="210" alt="Producto 1" /></a>
          </div>
          <div className='info-vistaproducts'>
            <h2>Novex broto de bambú.</h2>
            <h2>de bambú.</h2>
            <h2>$35.900 COP</h2>
            <a href='#'><button className='button-vista'>AÑADIR AL CARRITO <i className="icon-buy fa-solid fa-cart-shopping"></i></button></a>
          </div>
        </div>

        <div className='card-vista'>
          <div className='img-category'>
            <a href='#'><img src={tratamiento8} width="210" height="210" alt="Producto 2" /></a>
          </div>
          <div className='info-vistaproducts'>
            <h2>Skala niños divino</h2>
            <h2>potinho 2 en 1.</h2>
            <h2>$39.000 COP</h2>
            <a href='#'><button className='button-vista'>AÑADIR AL CARRITO <i className="icon-buy fa-solid fa-cart-shopping"></i></button></a>
          </div>
        </div>

        <div className='card-vista'>
            <div className='img-category'>
                <a href='#'><img src={cremadepeinar5} width="210" height="210" /></a>
            </div>
            <div className='info-vistaproducts'>
                <h2>Novex cachos</h2>
                <h2>intensos.</h2>
                <h2>$60.000 COP</h2>
                <a href='#'><button className='button-vista'>AÑADIR AL CARRITO <i className="icon-buy fa-solid fa-cart-shopping"></i></button></a>
            </div>
        </div>

        <div className='card-vista'>
            <div className='img-category'>
                <a href='#'><img src={acondicionador2} width="210" height="210" /></a>
            </div>
            <div className='info-vistaproducts'>
                <h2>3 en 1</h2>
                <h2>nutrición.</h2>
                <h2>$35.000 COP</h2>
                <a href='#'><button className='button-vista'>AÑADIR AL CARRITO <i className="icon-buy fa-solid fa-cart-shopping"></i></button></a>
            </div>
        </div>

        <div className='card-vista'>
            <div className='img-category'>
                <a href='#'><img src={cepillo3} width="210" height="210" /></a>
            </div>
            <div className='info-vistaproducts'>
                <h2>Difusor universal</h2>
                <h2>en goma.</h2>
                <h2>$40.000 COP</h2>
                <a href='#'><button className='button-vista'>AÑADIR AL CARRITO <i className="icon-buy fa-solid fa-cart-shopping"></i></button></a>
            </div>
        </div>

        <div className='card-vista'>
            <div className='img-category'>
                <a href='#'><img src={tratamiento4} width="210" height="210" /></a>
            </div>
            <div className='info-vistaproducts'>
                <h2>Skala dona</h2>
                <h2>2 en 1.</h2>
                <h2>$36.000 COP</h2>
                <a href='#'><button className='button-vista'>AÑADIR AL CARRITO <i className="icon-buy fa-solid fa-cart-shopping"></i></button></a>
            </div>
        </div>

        <div className='card-vista'>
            <div className='img-category'>
                <a href='#'><img src={shampoo11} width="210" height="210" /></a>
            </div>
            <div className='info-vistaproducts'>
                <h2>Hidratante skala almidon de maiz.</h2>
                <h2 className='sub-info'>(Con sulfatos.)</h2>
                <h2>$29.000 COP</h2>
                <a href='#'><button className='button-vista'>AÑADIR AL CARRITO <i className="icon-buy fa-solid fa-cart-shopping"></i></button></a>
            </div>
        </div>
    
      </div>

      <center>
      <div className="contactanos">
          <div className="info-contact">
          <h2>Contactanos</h2>
          <p>Contactanos por medio de las siguientes herramientas:</p>
          <a href="https://api.whatsapp.com/send?phone=%2B573195029879&data=ARA-nc-a32wVchUvAWY7LG1Tpw2i1xF5Flfs6t8xG99y5hHR_nHAHJNdBY4evNIQtMmxW5FUh_-DwgfsryryeGD-qUxStWvhh7qspSXIwobenK4n8AdHJQO-0TAa0gD9lKOBeP8dM4tgT6qSUP8su58bKQ&source=FB_Page&app=facebook&entry_point=page_cta">
            <i className="fa-solid fa-phone"></i>+57 319 5029879
          </a>
          <a href="#"><i className="fa-solid fa-envelope"></i>vm@gmail.com</a>
          <a href="#"><i className="fa-solid fa-map"></i>Medellín, San Antonio de Prado</a>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15866.489805882275!2d-75.65857072192304!3d6.181260184005563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4681b34feb4531%3A0xc4eeb898f00e2663!2sSan%20Antonio%20de%20Prado%2C%20Medell%C3%ADn%2C%20Antioquia!5e0!3m2!1ses-419!2sco!4v1703203512404!5m2!1ses-419!2sco" width="450" height="150" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <form action="" autoComplete="off">
          <input type="text" name="Nombre" placeholder="Nombre" className="campo" />
          <input type="text" name="Email" placeholder="Correo" className="campo" />
          <input type="text" name="Phone" placeholder="Phone" className="campo" />
          <textarea name="Mensaje" placeholder="Mensaje"></textarea>
          <button type="submit" name="Enviar" value="Enviar" className="btn-enviar">Enviar</button>
        </form>
      </div>
      </center>
      <br />
    </div>
  )
}

export default Carrusel
