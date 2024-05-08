import React from 'react'
import { useForm } from 'react-hook-form';
import { useAuth } from '../../Context/AuthContext';

const AdminEditUserDataForm = ({ formVisibility, userId, blockForm }) => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const { adminUpdateUserData } = useAuth();

    const onSubmit = handleSubmit(async (data) => {
        try {

            const res = await adminUpdateUserData(userId, data)
            console.log(res)
            if (res.status === 200) {
                blockForm(false)
            }

        } catch (error) {
            console.log(error)
        }
    })


    return (
        <div className="max-w-md mx-auto">
            <form onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <button type='button' onClick={() => { formVisibility(false) }} className='bg-red-600 rounded-md p-1 left-0 justify-end ml-40' ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                </button>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="registerName">
                        Nombres
                    </label>

                    <input
                        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.name ? 'border-red-500' : ''}`}
                        name="name"
                        type="text"
                        placeholder="Ingresa los nombres"
                        {...register("name",)}
                    />
                    {errors.name && <p className="text-red-500 text-xs italic">Este campo es requerido</p>}
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="registerIdentification">
                        Numero de identificación
                    </label>
                    <input
                        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.identification ? 'border-red-500' : ''}`}
                        name="identification"
                        type="text"
                        placeholder="Ingresa el nuevo número de identificación"
                        {...register("identification",)}
                    />
                    {errors.identification && <p className="text-red-500 text-xs italic">Este campo es requerido</p>}
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="registerPhone">
                        Teléfono
                    </label>
                    <input
                        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.phone ? 'border-red-500' : ''}`}
                        name="phone"
                        type="text"
                        placeholder="Ingresa el teléfono"
                        {...register("phone",)}
                    />
                    {errors.phone && <p className="text-red-500 text-xs italic">Este campo es requerido</p>}
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="registerAddress">
                        Dirección
                    </label>
                    <input
                        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.address ? 'border-red-500' : ''}`}
                        name="address"
                        type="text"
                        placeholder="Ingresa la nueva dirección"
                        {...register("address",)}
                    />
                    {errors.address && <p className="text-red-500 text-xs italic">Este campo es requerido</p>}
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="registerUsername">
                        Nombre de Usuario
                    </label>
                    <input
                        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.username ? 'border-red-500' : ''}`}
                        name="username"
                        type="text"
                        placeholder="Ingresa el nuevo nombre de usuario"
                        {...register("username",)}
                    />
                    {errors.username && <p className="text-red-500 text-xs italic">Este campo es requerido</p>}
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="registerEmail">
                        Correo electrónico
                    </label>
                    <input
                        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.email ? 'border-red-500' : ''}`}
                        name="email"
                        type="text"
                        placeholder="Ingresa el nuevo correo electrónico"
                        {...register("email",)}
                    />
                    {errors.email && <p className="text-red-500 text-xs italic">Por favor ingresa un correo electrónico válido</p>}
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="registerPassword">
                        Contraseña
                    </label>
                    <input
                        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.password ? 'border-red-500' : ''}`}
                        name="password"
                        type="password"
                        placeholder="Ingresa la nueva contraseña"
                        {...register("password",)}
                    />
                    {errors.password && <p className="text-red-500 text-xs italic">La contraseña debe tener al menos 6 caracteres</p>}
                </div>

                <div className="flex items-center justify-between">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mx-auto"
                        type="submit"
                    >
                        Modificar
                    </button>
                </div>
            </form>
        </div>
    )
}

export default AdminEditUserDataForm
