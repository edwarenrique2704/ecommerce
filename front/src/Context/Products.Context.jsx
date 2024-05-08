import { createContext, useContext, useState } from "react";
import { createNewProductRequest, deleteProductsRequest, getProductByIdRequest, getProductsRequest, updateProductRequest } from "../Api/product.js";
import AlertS from "../Components/Alert.jsx";

const ProductsContext = createContext();


export const useProducts = () => {

    const context = useContext(ProductsContext);
    if (!context) {

        throw new Error("useProducts debe estar dentro de un Provider")
    }

    return context;
}

export const ProductsProvider = ({children}) => {

    const [products, setProducts ] = useState([])
    const [loading, setloading] = useState(false)


    const createProducts = async (data) => {
        try {

            setloading(true)
            const res = await createNewProductRequest(data);
            console.log(res)
            if(res.status === 201) {
                setloading(false)

                AlertS({
                    icon:'success',
                    title: "Producto creado"
                })
                getProducts();
            }


            return res
            
        } catch (error) {
            console.log(error)
            AlertS({
                icon: 'error',
                title: `${error.response.data.message}`
            })
            setloading(false)

        }
    }

    const getProducts = async () => {
        try {

            const response = await getProductsRequest();
            setProducts(response.data)
            console.log(response)
            
        } catch (error) {
            console.log(error)
        }
    }

    const getProduct = async (id) => {
        try {

            const res = await getProductByIdRequest(id)
            return res
        } catch (error) {
            console.log(error)
        }
    }


    const deleteProducts = async (id) => {
        try {
            const confirmation = window.confirm('¿Estás seguro de eliminar el producto?')
            if(confirmation ) {
                const res = await deleteProductsRequest(id);
                
                if(res.status === 204) {
                    AlertS({
                        icon: 'success',
                        title: 'Producto eliminado',
                        
                    })
                    setProducts(products.filter(product => product._id !== id))

                    
                }
                
            }else {

                AlertS({
                    icon: "error",
                    title: "No se ha eliminado el producto"
                })
            }
        } catch (error) {
          
            console.log(error)
        }
    }


    const updateProducts = async (id, data) => {
        try {

            setloading(true)
            const res = await updateProductRequest(id,data)
            console.log(res, "res de update produts")
            if(res.status === 201){

                AlertS({
                    icon: 'success',
                    title: 'Producto actualizado',
                    
                })
                setloading(false)

                await getProducts();

            }
            return res
        } catch (error) {
            console.log(error)
            setloading(false)
            AlertS({
                icon: 'error',
                title: `${error.response.data.message}`
            })
        }
    }



    return (

        <ProductsContext.Provider value={{products, getProducts, deleteProducts, createProducts, loading, updateProducts, getProduct}}>
            {children}
        </ProductsContext.Provider>
    )
}