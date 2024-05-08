import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";

export const CartPage = () => {
    const { cart, removeFromCart, clearCart } = useContext(AuthContext);
    const [totalPrice, setTotalPrice] = useState(0);
    const navigateQr = useNavigate();

    useEffect(() => {
        // Calcular el precio total del carrito
        const calculateTotalPrice = () => {
            let total = 0;
            cart.forEach(product => {
                total += product.price * product.quantity;
            });
            setTotalPrice(total);
        };

        calculateTotalPrice();
    }, [cart]);

    const handleRemoveOneFromCart = (productId) => {
        removeFromCart(productId);
    };

    const handlePayment = () => {
       navigateQr('/pagos')
        console.log("Redirigiendo a la página de pagos...");
    };

    return (
        <div className="w-screen mx-auto justify-center sm:max-w-screen-lg bg-gray-100 -pr-16 mt-5">
            <h1 className="Text-category text-3xl font-bold mb-6 align-">Carrito de Compras</h1>
            <table className="min-w-full divide-y divide-gray-200 ">
                <thead className="bg-gray-50">
                    <tr className="">
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Producto
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Precio
                        </th>
                       
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Cantidad
                        </th>
                        <th scope="col" className="shop px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-widershop relative px-6 py-3">
                            <span className="sr-only">Eliminar</span>
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {cart.map((product, index) => (
                        <tr key={index}>
                            <td className="px-6 py-4 whitespace-nowrap">{product.name}</td>
                            <td className="px-6 py-4 whitespace-nowrap">${product.price * product.quantity}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{product.quantity}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                <button onClick={() => handleRemoveOneFromCart(product._id)} className="text-red-600 hover:text-red-900">
                                    Eliminar
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <p className="text-right text-xl font-bold mt-6 p-2">Total: ${totalPrice.toFixed(2)}</p>
            <center>
                <button onClick={() => clearCart()} className="mt-4  bg-red-400 hover:bg-red-500 text-white font-bold py-2 px-4 rounded mb-5">
                    Vaciar carrito
                </button>
                <button onClick={handlePayment} className="mt-4 bg-green-400 hover:bg-green-500 text-white font-bold py-2 px-4 rounded mb-5 ml-3">
                    Ir a pagos
                </button>
            </center>
            
        </div>
    );
};

export default CartPage;