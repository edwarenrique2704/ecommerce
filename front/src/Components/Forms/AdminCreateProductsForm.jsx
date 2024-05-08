import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useProducts } from '../../Context/Products.Context';

const AdminCreateProductsForm = ({ status, productId }) => {
  // manejar la visibilidad del formulario



  const { createProducts, loading, updateProducts, getProduct } = useProducts();
  const { register, handleSubmit, formState: { errors }, setValue } = useForm();



  console.log(productId)

useEffect(() => {



  
    const getProductById = async () => {
      if(productId){
      try {

        const res = await getProduct(productId)
        setValue('name', res.data.name)
        setValue('description', res.data.description)
        setValue('price', res.data.price)
        setValue('category', res.data.category)
        setValue('stock', res.data.stock)


        
      } catch (error) {
        console.log(error)
      }
    }
    }
 

  getProductById();

},[productId])


  const onSubmitForm = handleSubmit(async (data) => {
    try {

      const newFormData = new FormData();
      newFormData.append('name', data.name);
      newFormData.append('description', data.description);
      newFormData.append('price', data.price);
      newFormData.append('category', data.category);
      newFormData.append('stock', data.stock);
      newFormData.append('image', data.image[0]);


      if (productId) {


        const response = await updateProducts(productId, newFormData)
        console.log(response)

        if (response.status === 201) {

          status(false)

        }
      } 
      
      else {

        const res = await createProducts(newFormData)

        if (res.status === 201) {

          status(false)

        }
      }


      console.log(data)
    } catch (error) {
      console.log(error)
    }


  })

  return (
    <div className="max-w-md mx-auto    min-h-screen ">

      <div className=' flex flex-col '>


        <form onSubmit={onSubmitForm} className="bg-pink-600 shadow-md  bg-opacity-90 rounded px-8 pt-6 pb-8 mb-4 space-x-2">
          <div className="flex items-center justify-center  rounded-md p-3 bg-zinc-900 text-white flex-col mb-5">
            <h2 className="text-center">{productId ? "Editar producto" : "Agregar producto"}</h2>
            <button
              type="button"
              onClick={() => { status(false) }}
              className="bg-red-600 rounded-md p-1 absolute top-0 ml-[420px]  mr-5"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
            </button>
          </div>


          <div className="flex flex-wrap justify-center space-y-4">
  <div className="mb-4 w-full max-w-md">
    <label className="block text-white text-sm font-bold mb-2" htmlFor="registerName">
      Nombre
    </label>
    <input
      className={`shadow appearance-none border rounded w-full py-2 px-3 text-black  leading-tight focus:outline-none focus:shadow-outline ${errors.name ? 'border-red-500' : ''}`}
      name="name"
      type="text"
      placeholder="Ingresa el nombre"
      {...register("name", { required: true })}
    />
    {errors.name && <p className="text-red-500 text-xs italic">Este campo es requerido</p>}
  </div>

  <div className="mb-4 w-full max-w-md">
    <label className="block text-white text-sm font-bold mb-2" htmlFor="registerPrice">
      Precio
    </label>
    <input
      className={`shadow appearance-none border rounded w-full py-2 px-3 text-black  leading-tight focus:outline-none focus:shadow-outline ${errors.price ? 'border-red-500' : ''}  `}
      name="price"
      type="number"
      placeholder="Ingresa el precio"
      {...register("price", { required: true })}
    />
    {errors.price && <p className="text-red-500 text-xs italic">Este campo es requerido</p>}
  </div>

  <div className="mb-4 w-full max-w-md">
    <label className="block text-white text-sm font-bold mb-2" htmlFor="registerDescription">
      Descripción
    </label>
    <textarea
      className={`shadow appearance-none border rounded w-full py-2 px-3 text-blackleading-tight ${errors.description ? 'border-red-500' : ''}`}
      name="description"
      placeholder="Ingresa la descripción"
      {...register("description", { required: true })}
    ></textarea>
    {errors.description && <p className="text-red-500 text-xs italic">Este campo es requerido</p>}
  </div>

  <div className="mb-4 w-full max-w-md">
    <label className="block text-white text-sm font-bold mb-2" htmlFor="registerStock">
      Stock
    </label>
    <input
      className={`shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline ${errors.stock ? 'border-red-500' : ''}`}
      name="stock"
      type="number"
      placeholder="Ingresa el stock"
      {...register("stock", { required: true })}
    />
    {errors.stock && <p className="text-red-500 text-xs italic">Este campo es requerido</p>}
  </div>

  <div className="mb-4 w-full max-w-md">
    <label className="block text-white text-sm font-bold mb-2" htmlFor="registerCategory">
      Categoría
    </label>
    <select {...register("category")} className={`border rounded w-full py-2 px-3 text-black  leading-tight focus:outline-none focus:shadow-outline ${errors.category ? 'border-red-500' : ''}`}>
      <option ></option>
      <option value="shampoo">Shampoo</option>
      <option value="acondicionador">Acondicionador</option>
      <option value="crema-para-peinar">Crema para peinar</option>
      <option value="otros">Otros</option>
      <option value="tratamientos">Tratamientos</option>
    </select>
    {errors.category && <p className="text-red-500 text-xs italic">Este campo es requerido</p>}
  </div>

  <div className="mb-4 w-full max-w-md">
    <label className="block text-white text-sm font-bold mb-2" htmlFor="registerStock">
      Imagen del producto
    </label>
    <input
      className={`shadow appearance-none border rounded w-full py-2 px-3 text-black  leading-tight focus:outline-none focus:shadow-outline ${errors.stock ? 'border-red-500' : ''}`}
      name="stock"
      type="file"
      placeholder="Sube la imagen"
      {...register("image", { required: productId ? false : true })}
    />
    {errors.image && <p className="text-white-500 text-xs italic">Este campo es requerido</p>}
  </div>
</div>


          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 mt-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mx-auto"
              type="submit"
            >
              {productId ? "Editar producto" : "Agregar producto"}

              {loading && (
                <>

                  <div className='mx-auto justify-center ml-[50px]' role="status ">
                    <svg aria-hidden="true" class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-green-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                      <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                    </svg>
                    <span class="sr-only">Loading...</span>
                  </div>

                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>


  )
}

export default AdminCreateProductsForm