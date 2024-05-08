import { Link } from "react-router-dom"

const Error_Page = () => {
  return (
    <body className="bg-gray-100 h-screen flex flex-col items-center justify-center">
    <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg text-center">
        <h2 className="text-4xl font-semibold text-red-500">404</h2>
        <p className="text-xl mt-4">Página no encontrada</p>
        <p className="text-gray-500 mt-2">Lo sentimos, la página que estás buscando no se encuentra.</p>
        <Link to={"/"} className="mt-4 inline-block px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600">Ir a la página principal</Link>
    </div>
</body>
  )
}

export default Error_Page