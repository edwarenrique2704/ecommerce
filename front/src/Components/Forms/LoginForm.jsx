import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form'
import { useAuth } from '../../Context/AuthContext';
import { useEffect } from 'react';
const LoginForm = () => {


    const { register, handleSubmit, formState: {errors}, } = useForm();
    const { signIn,  autenticado } = useAuth();


    const navigate = useNavigate();


    const submitForm = handleSubmit(async (data) => {
        signIn(data)
    })


    
useEffect(() =>{

  if(autenticado){
   navigate("/")
  }

},[autenticado] )

    useEffect(() => {

      const errorTimers = setTimeout(() => {

        

      },5000)

    },[])

    return (
        <div className="flex justify-center items-center h-screen ">
        <div className="w-full max-w-md p-8 bg-pink-400 rounded shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Formulario de Inicio de Sesión</h2>
          <form onSubmit={submitForm} className="space-y-4">
            <div className="mb-4">
              {errors.email && (
                <p className='text-red-700 bg-zinc-800 p-2 rounded-md text-center'>Ingresa un correo electrónico</p>
              )}
              <label htmlFor="email" className="block text-sm font-medium text-gray-600">Correo Electrónico</label>
              <input type="text" className="mt-1 p-2 w-full border rounded-md" {...register("email", { required: true })} />
            </div>
            <div className="mb-4">
            {errors.password && (
                <p className='text-red-700 bg-zinc-800 p-2 rounded-md text-center'>Ingresa una contraseña</p>
              )}
              <label htmlFor="password" className="block text-sm font-medium text-gray-600">Contraseña</label>
              <input type="password" className="mt-1 p-2 w-full border rounded-md" {...register("password", { required: true })} />
              <div className="text-sm  text-blue-500 mt-3">
                No tienes una cuenta? <Link to="/registro" className="font-semibold bg-zinc-800 p-1 rounded-md">Regístrate</Link>
              </div>
            </div>
            <div className="text-center">
              <button type="submit" className="px-4 py-2  text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300 bg-zinc-800">
                Iniciar Sesión
              </button>
            </div>
          </form>
        </div>
      </div>
  
        )
}

export default LoginForm