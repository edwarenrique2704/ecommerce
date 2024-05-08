import React, { useEffect, useState } from 'react'
import profile from '../images/user_placeholder.jpg'
import { useAuth } from '../Context/AuthContext';
import { useForm } from 'react-hook-form'

const Profile = () => {

  const [editProfile, setEditProfile] = useState(false);
  const [userProfile, setUserProfile] = useState([])
  const { register, handleSubmit, setValue, getValues } = useForm();
  const { getProfile, updateUserData, loadingDataUser } = useAuth();
  const [showImageInput, setShowImageInput] = useState(false)

  console.log(userProfile, "this is a user profile")
  useEffect(() => {

    const getUseProfile = async () => {
      const response = await getProfile();
      console.log(response, "thiss")
      setUserProfile(response.data)
    }

    getUseProfile();

  }, [])

  const handleData = handleSubmit(async (data) => {

    try {
      console.log(data)
      const formData = new FormData();

      formData.append("image", data.image[0])
      formData.append('name', data.name)
      formData.append("email", data.email)
      formData.append("identification", data.identification)
      formData.append("phone", data.phone)
      formData.append("password", data.password)
      formData.append("address", data.address)
      const res = await updateUserData(formData)
      if (res.status === 200) {
        setValue('name', "")
        setValue('email', "")
        setValue('identification', "")
        setValue('phone', "")
        setValue('username', "")
        setValue('password', "")
        setValue('address', "")
        setValue('image', "")
        setEditProfile(false)
        setUserProfile(res.data)
        setShowImageInput(false)

      }
      console.log(res, "res desde profile")

    } catch (error) {
      console.log(error)
    }
  })


  return (
    <div className=' '>
      <center>
        <div className="cover  min-h-screen  p-5 flex bg-white  flex-col  max-w-md ">


          {!editProfile && (
            <>
              <h2 className='mb-3 mt-2'>{userProfile.role !== 'admin' ? "Mi perfil " : "Administrador"}</h2>
              <img className='rounded-full w-[150px] h-[150px]' src={userProfile.images ? userProfile.images.url : profile} style={{}} alt="" />


              <div className='flex  flex-wrap '>

                <label className='text-black  justi'>Nombre de usuario</label>
                <p className='bg-gray-300 p-5 w-full '>{userProfile.username}</p>

                <label className='text-black'>Nombre completo</label>
                <p className='bg-gray-300 p-5 w-full '>{userProfile.name}</p>

                <label className='text-black'>Correo electronico</label>
                <p className='bg-gray-300 p-5 w-full '>{userProfile.email}</p>

                <label className='text-black'>Número de identificación</label>
                <p className='bg-gray-300 p-5 w-full '>{userProfile.identification}</p>

                <label className='text-black'>Dirección</label>
                <p className='bg-gray-300 p-5 w-full '>{userProfile.address}</p>

                <label className='text-black'>Telefono</label>
                <p className='bg-gray-300 p-5 w-full '>{userProfile.phone}</p>


              </div>



              <button className='btn-editar mt-5 hover:scale-105' onClick={() => { setEditProfile(prev => !prev) }}>Editar datos</button>

            </>
          )}


          {editProfile && (
            <>
              <img className='rounded-full w-[150px] h-[150px]' src={userProfile.images ? userProfile.images.url : profile} style={{}} alt="" />



              <form onSubmit={handleData} className='profile-form' encType="multipart/form-data">







                {!showImageInput && (
                  <div className='mt-3 mb-2'>

                    <button type='button' className='bg-pink-700 rounded-md p-2 text-white' onClick={() => { setShowImageInput(true) }}>{userProfile && userProfile.images === 0 ? "Subir una foto" : "Cambiar foto"}</button>
                  </div>
                )}


                {showImageInput && (
                  <div className='flex flex-wrap'>
                    <label className='text-black  font-bold'>Selecciona una imagen para subir y luego presiona el botón &quot;Guardar cambios&quot;</label>

                    <input
                      type="file"
                      placeholder='Ingresa los nombres'
                      className='bg-gray-300 p-5 w-full mb-1'
                      {...register('image')}
                    />


                    <div className='flex justify-center mx-auto mb-2'>
                      <button type='button' className='bg-red-700 rounded-md p-2 text-white' onClick={() => { setShowImageInput(false) }}>Cancelar</button>

                    </div>
                  </div>
                )}



                <label className='text-black  font-bold'>Nombres</label>
                <input
                  type="text"
                  placeholder='Ingresa los nombres'
                  className='bg-gray-300 p-5 w-full mb-4'
                  {...register('name')}
                />

                <label className='text-black font-bold'>Nombre de Usuario</label>
                <input
                  type="text"
                  placeholder='Ingresa el nuevo nombre de usuario'
                  className=' bg-gray-300 p-5 w-full mb-4'
                  {...register('username')}
                />

                <label className='text-black font-bold'>Correo electrónico</label>
                <input
                  type="email"
                  placeholder='Ingresa el nuevo correo electrónico'
                  className='bg-gray-300 p-5 w-full mb-4'
                  {...register('email')}
                />
                <label className='text-black font-bold'>Contraseña</label>
                <input
                  type="password"
                  placeholder='Ingresa la contraseña'
                  className=' bg-gray-300 p-5 w-full mb-4'
                  {...register('password')}
                />

                <label className='text-black font-bold'>Teléfono</label>
                <input
                  type="text"
                  placeholder='Ingresa el teléfono'
                  className='bg-gray-300 p-5 w-full mb-4'
                  {...register('phone')}
                />

                <label className='text-black font-bold'>Numero de identificación</label>
                <input
                  type="text"
                  placeholder='Ingresa el nuevo número de identificación'
                  className='bg-gray-300 p-5 w-full mb-4'
                  {...register('identification')}
                />

                <label className='text-black font-bold'>Dirección</label>
                <input
                  type="text"
                  placeholder='Ingresa la nueva dirección'
                  className=' bg-gray-300 p-5 w-full mb-4'
                  {...register('address')}
                />



                <div className='flex flex-wrap mx-auto justify-center  space-x-2'>
                  <button onClick={() => { setEditProfile(false) }} className='bg-red-800 p-2 rounded-md text-white mt-2 '>Cerrar</button>
                  <button type='submit' className="bg-green-800 p-2 rounded-md text-white mt-2">Guardar cambios
                  {loadingDataUser && (
                    <>

                      <div role="status" className='ml-[45px]'>
                        <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-green-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                          <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                        </svg>
                        <span className="sr-only">Loading...</span>
                      </div>

                    </>
                  )}</button>
                  
                </div>

              </form>
            </>
          )}


        </div>

      </center>
    </div>
  )
}

export default Profile