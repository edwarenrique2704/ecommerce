



import {useForm,} from 'react-hook-form'
import { useAuth } from '../../Context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const RegisterForm = () => {

    
    const {register, handleSubmit, formState: {errors}, } = useForm();
    const {signUp, user, autenticado} = useAuth();
  
    const navigate = useNavigate();


    
    useEffect(() =>{

      if(autenticado){
        navigate("/login")
      }
    },[autenticado] )
    
    const submitForm = handleSubmit( async (data) => {
        signUp(data)
        
    })
    
  return (
    <div className="flex justify-center items-center  rounded-md p-20">
      <div className="w-screen h-full max-w-md p-8 bg-pink-400 rounded shadow-lg">
        <div className="wrapper-register">
          <div className="login">
            <h2 className="mb-3 text-2xl font-semibold">Formulario Registro</h2>
            <form onSubmit={submitForm}>

              {errors.username && (
                <p className="text-red-700 bg-zinc-800  rounded-md text-center">Ingresa el username</p>
              )}

              <div className="form-group mb-4">
                <label htmlFor="username" className="block text-sm font-medium text-gray-600">Nombre Usuario</label>
                <input type="text" className="mt-1 p-2 w-full border rounded-md" {...register('username', { required: true })} />
              </div>

              {errors.email && (
                <p className="text-red-700 bg-zinc-800  rounded-md text-center">Ingresa el email</p>
              )}

              <div className="form-group mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-600">Correo Electrónico</label>
                <input type="text" className="mt-1 p-2 w-full border rounded-md" {...register('email', { required: true })} />
              </div>


              {errors.name && (
                <p className="text-red-700 bg-zinc-800  rounded-md text-center">Ingresa el nombre completo</p>
              )}
              <div className="form-group mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-600">Nombre completo</label>
                <input type="text" className="mt-1 p-2 w-full border rounded-md" {...register('name', { required: true })} />
              </div>

              {errors.typeIdentification && (
                <p className="text-red-700 bg-zinc-800  rounded-md text-center">Ingresa el tipo de identificación</p>
              )}
              <div className="form-group mb-4">
                <label htmlFor="typeIdentification" className="block text-sm font-medium text-gray-600">Tipo de Identificación</label>
                <select className="mt-1 p-2 w-full border rounded-md" {...register('typeIdentification', { required: true })}>
                  <option value="cc">Cédula de Ciudadanía</option>
                  <option value="ti">Tarjeta de Identidad</option>
                  <option value="pp">Pasaporte</option>
                </select>
              </div>
              {errors.identification && (
                <p className="text-red-700 bg-zinc-800  rounded-md text-center">Ingresa el numero de identificacion</p>
              )}
              <div className="form-group mb-4">
                <label htmlFor="identification" className="block text-sm font-medium text-gray-600">Nro de Identificación</label>
                <input type="text" className="mt-1 p-2 w-full border rounded-md" {...register('identification', { required: true })} />
              </div>
              {errors.phone && (
                <p className="text-red-700 bg-zinc-800 rounded-md text-center">Ingresa el numero telefonico</p>
              )}
              <div className="form-group mb-4">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-600">Número Celular</label>
                <input type="text" className="mt-1 p-2 w-full border rounded-md" {...register('phone', { required: true })} />
              </div>
              {errors.address && (
                <p className="text-red-700 bg-zinc-800  rounded-md text-center">Ingresa una dirección</p>
              )}
              <div className="form-group mb-4">
                <label htmlFor="address" className="block text-sm font-medium text-gray-600">Dirección</label>
                <input type="text" className="mt-1 p-2 w-full border rounded-md" {...register('address', { required: true })} />
              </div>
              {errors.password && (
                <p className="text-red-700 bg-zinc-800  rounded-md text-center">Ingresa una contraseña</p>
              )}
              <div className="form-group mb-4">
                <label htmlFor="password" className="block text-sm font-medium text-gray-600">Contraseña</label>
                <input type="password" className="mt-1 p-2 w-full border rounded-md" {...register('password', { required: true })} />
              </div>

              <div className="text-sm mt1 text-blue-500 mb-10">
                ¿Ya tienes cuenta? <Link to="/login" className="font-semibold bg-zinc-800 p-1 rounded-md">Ingresa</Link>
              </div>
           

              <div className="text-center">
                <button type="submit" className="px-4 py-2  text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300 bg-zinc-800 -mt-1">
                  Registrarse
                </button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegisterForm
