import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route, BrowserRouter, Router } from 'react-router-dom'
import Layout from './Components/Layout'
import Home from './Pages/Home'
import LoginPage from './Pages/LoginPage.jsx'
import { AuthProvider } from './Context/AuthContext.jsx'
import RegisterPage from './Pages/RegisterPage.jsx'
import Productos from './Pages/ProductosPage.jsx'
import CremaDePeinarPage from './Pages/CremaDePeinarPage.jsx'
import OtrosPage from './Pages/OtrosPage.jsx'
import AcondicionadorPage from './Pages/AcondicionadorPage.jsx'
import ShampooPage from './Pages/ShampooPage.jsx'
import TratamientosPage from './Pages/TratamientosPage.jsx'
import DashboardPage from './Pages/DashboardPage.jsx'
import Footer from './Components/Footer.jsx'
import {AdminProtectedRoutes, UserProtectedRoutes} from './Protected_Routes/AdminProtectedRoutes.jsx'
import { ProductsProvider } from './Context/Products.Context.jsx'
import AdminProducts from './Pages/Admin/AdminProducts.jsx'
import Pedidos from './Pages/Pedidos.jsx'
import Usuarios from './Pages/Usuarios.jsx'
import CartPage from './Pages/CartPage'
import Profile from './Pages/Profile.jsx'
import FilteredCardProducts from './Components/FilterCard/FilteredCardProducts.jsx'
import Error_Page from './Pages/404/error_page.jsx'
import { CartProvider } from './Context/CartContext.jsx'


function App() {

  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <ProductsProvider>
            <CartProvider>
          <div className='w-screen '>
            <Layout />
           
              <Routes>

                <Route path="*" element={<Error_Page/>} />
                <Route path="/" element={<Home />} />
                <Route path='/login' element={<LoginPage />} />
                <Route path='/registro' element={<RegisterPage />} />
                <Route path='/productos' element={<Productos />} />
                <Route path='/cremadepeinar' element={<CremaDePeinarPage />} />
                <Route path='/otros' element={<OtrosPage />} />
                <Route path='/acondicionador' element={<AcondicionadorPage />} />
                <Route path='/shampoo' element={<ShampooPage />} />
                <Route path='/tratamientos' element={<TratamientosPage />} />
                <Route path="/cart" element={<CartPage />} />

                {/* Rutas protegidas */}
                <Route element={<UserProtectedRoutes />}>
                  <Route path='/perfil' element={<Profile />} />
                </Route>


               <Route element={<AdminProtectedRoutes/>}>

               <Route path='/dashboard' element={<DashboardPage />} />
                <Route path='/admin/products' element={<AdminProducts />} />
                <Route path='/usuarios' element={<Usuarios />} />
                <Route path='/pedidos' element={<Pedidos />} />

               </Route>
              </Routes>
            <br />
            <Footer />


          </div>
            
            </CartProvider>
          </ProductsProvider>
        </AuthProvider>
      </BrowserRouter>
    </>
  )
}

export default App
