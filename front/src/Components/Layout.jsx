import React, { useEffect } from 'react';
import logo from '../images/Logo.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../Context/AuthContext';
import user_placeholder from '../images/user_placeholder.jpg'

const Layout = () => {

  const [desplegable, setDesplegable] = useState(false)
  const { autenticado, logout, getProfile, user, profile } = useAuth();
  const [userData, setUserData] = useState([])

  console.log(userData, "userdata state")
  useEffect(() => {

    const getProfileUser = async () => {
      const res = await getProfile();
      console.log(res, "userdata")
      setUserData(res.data)
    }

    getProfileUser();

  }, [autenticado, user])
  return (

    <nav className=" bg-pink-600  w-screen z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600 mx-auto">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 w-screen"   >
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={logo} className="h-20" alt="Flowbite Logo" />
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <div >
            <ul>
              <li><Link to={"cart"}><i className="mr-4 fa-solid fa-cart-shopping">carrito</i></Link></li>
            </ul>
          </div>
          <ul className="mx-auto">
            <ul className="menu-horizontal ">
              <li onClick={() => { setDesplegable(prev => !prev) }} className="mx-auto ">
                <a className="nav-link active" aria-current="page" href="#"> <i className="fa-solid fa-shop"> Tienda</i></a>
                <ul className={`absolute w-[200px] mt-11 -ml-14  p-5 bg-pink-300 rounded-md ${desplegable ? "block" : "hidden"} `}>
                  <li className=''><a href="/Shampoo">Shampoo</a></li>
                  <li><a href="/Tratamientos">Tratamientos</a></li>
                  <li><a href="/Acondicionador">Acondicionador</a></li>
                  <li><a href="/Cremadepeinar">Crema de peinar</a></li>
                  <li><a href="/Otros">Otros</a></li>
                </ul>
                
                
              </li>
              
            </ul>
          </ul>
          
        </div>

        <div className="items-center justify-between   w-full md:flex md:w-auto md:order-1  " id="navbar-sticky">
          <ul className="flex mx-auto justify-center  space-x-5  flex-wrap p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:border-gray-700">
            <li>
              <a className="nav-link active space-x-5" aria-current="page" href="/"><i className="fa-solid fa-house">Inicio</i></a>
            </li>

            <li>

            </li>

            <li className=' flex  md:space-x-8 space-x-5' >

              {userData.role === 'admin' && autenticado && (

                <Link to={"/dashboard"} className="nav-link active" aria-current="page" >

                  Dashboard



                </Link>
              )}



              {!autenticado && (
                <>

                  <Link to={"/login"} className="nav-link active" aria-current="page" >

                    Iniciar sesión



                  </Link>

                  <Link to={"/registro"} className="nav-link active ml-2" aria-current="page">

                    Registarse



                  </Link>
                </>
              )}


              {autenticado && (

                <div className='flex flex-wrap'>
                  <Link to={"/perfil"} className="nav-link active" aria-current="page">
                    <div className='flex space-x-4 mr-2'>



                      <p> Mi perfil</p>



                      { profile && profile.images && profile.images.url ? (
                        <>
                          <img src={profile.images.url || user_placeholder} className='w-[30px] h-[30px] rounded-full' alt="" />
                        </>
                      )

                        : (
                          <>
                            <img src={user_placeholder} className='w-[30px] h-[30px] rounded-full' alt="" />
                          </>

                        )}



                    </div>

                  </Link>
                  <div>

                    <button onClick={logout} className="nav-link active ml-2" aria-current="page" href="/registro">

                      Cerrar sesión



                    </button>
                  </div>


                </div>

              )}



            </li>
            {/* <li>
              <a className='nav-link active' aria-current="page" href=""><i class="fa-solid fa-calendar-days"></i>
              </a>
            </li> */}
            {/* <li>
              <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Layout



