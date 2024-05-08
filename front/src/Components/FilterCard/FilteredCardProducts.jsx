
import { useProducts } from '../../Context/Products.Context'
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";
import { useEffect, useState } from 'react';
import notFoundImage from '../../images/not_found.jpg'




const FilteredCardProducts = ({category = 'shampoo'}) => {

    const navigate = useNavigate();
    const { products, getProducts } = useProducts();
    const [filteredProducts, setFilteredProducts] = useState([]);
    const { addToCart } = useAuth();

    useEffect(() => {
        getProducts()
    }, [])

    // const filterShampoo = products.filter(product => product[0].category === 'shampoo')
    console.log(filteredProducts, "filter ")

    useEffect(() => {
        if (products.length > 0) {
            const shampooProducts = products.filter(product => product.category === category);
            setFilteredProducts(shampooProducts);
        }
    }, [products]);

//comprar en el carrito
    const handleBuyNow = (product) => {
        addToCart(product);
        navigate('/cart')
      }

    return (
        <div className='container mx-auto mt-5 '>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center mx-auto '>

                {filteredProducts && filteredProducts.length > 0 ? (
                    <>

                        {filteredProducts.map((product, i) => (


                            <div className=' bg-pink-500 bg-opacity-80 shadow-md rounded-md p-4 flex flex-wrap justify-center  space-x-3' key={i}>

                               
                                    <img src={product.images ? product.images.url : notFoundImage} className='hover:scale-110' alt="img" width="150" style={{ borderRadius: 10 }} height="150" />
    
                              
                                <div className='flex flex-col justify-center'>
                                    <h1 className='text-lg font-semibold mt-4'>{product.name}</h1>
                                    <div className='flex items-center mt-2'>
                                        <span className='text-white 600 mr-2'>Stock:</span>
                                        <span className='text-white'>{product.stock}</span>
                                    </div>


                                    <div className='flex items-center mt-2'>
                                        <span className='text-white 600 mr-2'>Precio:</span>
                                        <span className='text-white'>{product.price}</span>
                                    </div>


                                    <button className='btn btn-blue bg-purple-700 p-2 text-white rounded-md mt-4' onClick={() => handleBuyNow(product)}>Añadir al carrito</button>
                                </div>
                            </div>

                        ))}


                    </>




                ) : (
                        <><h1 className='text-center mt-10 text-lg font-semibold text-white bg-gray-800 p-4 rounded-md'>No hay productos para mostrar</h1>
                        </>
                    )}

            </div>
        </div>
    )
}

export default FilteredCardProducts
