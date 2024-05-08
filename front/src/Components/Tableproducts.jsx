import React, { useEffect, useState } from 'react'
import { MdEdit} from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";
import { MdAdd } from 'react-icons/md';
import { useProducts } from '../Context/Products.Context';
import AdminCreateProductsForm from './Forms/AdminCreateProductsForm';


const Tableproducts = () => {

  const { products, getProducts, deleteProducts } = useProducts();

  const [adminProduct, setCreateAdminProduct] = useState(false);

  // guarda ID del producto
  const [productId, setProductId] = useState([])


  useEffect(() => {

    getProducts();
  }, [])




  return (
    <div className=''>
      <center>
        <div className="pedidos-page">
          <h1 className='title-dashboard'>Productos disponibles.</h1>
        </div>
      </center>
      <div className=" flex flex-wrap">
        <table className="table caption-top rounded ">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Producto</th>
              <th scope="col">Cantidad</th>
              <th scope="col">Descripción</th>
              <th scope="col">Disponibilidad</th>
              <th scope="col">Categoria</th>
              <th scope="col">Precio</th>
              <th scope="col">Editar</th>
              <th scope="col">Agregar</th>
              <th scope="col">Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {products && products.length > 0 ? (

              <>
                {products.map(product => (
                  <tr key={product._id}>
                    <td>{product._id}</td>
                    <td>{product.name}</td>
                    <td>{product.description}</td>
                    <td>{product.stock}</td>
                    <td>{product.stock > 0 ? 'Disponible' : 'No disponible'}</td>
                    <td>{product.category}</td>
                    <td>${product.price} COP</td>

                    <td className="edit-icon">
                      <button onClick={() => { setCreateAdminProduct('update-product'); setProductId(product._id)}}>  <MdEdit /></button>

                    </td>

                    <td className="delete-icon ">
                      <button onClick={() => { setCreateAdminProduct('create-product')}}>
                        <MdAdd/>
                      </button></td>

                    <td className="delete-icon">
                      <button onClick={() => { deleteProducts(product._id) }}>
                        <AiFillDelete />
                      </button></td>


                  </tr>
                ))}
              </>

            ) : (
              <div className='ml-1'>
                <h1 className='mb-2 '>No hay productos para mostrar.</h1>
                <button onClick={() => { setCreateAdminProduct('create-product') }} className='bg-blue-500 rounded-md p-2 text-white mb-1'>Agregar un producto</button>
              </div>
            )}
          </tbody>
        </table>


      </div>
      {adminProduct === 'create-product' && (

        <div className='justify-center mx-auto inset-0  w-screen absolute h-screen my-36'>
          <AdminCreateProductsForm status={setCreateAdminProduct} />
        </div>

      )}

      {adminProduct === 'update-product' && (

        <div className='justify-center mx-auto inset-0  w-screen absolute h-screen my-36'>
          <AdminCreateProductsForm status={setCreateAdminProduct}  productId={productId}/>
        </div>

      )}
    </div>
  )
}

export default Tableproducts