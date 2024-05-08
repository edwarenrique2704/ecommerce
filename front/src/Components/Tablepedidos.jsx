import React from 'react'
import { MdEdit } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";

const Tablepedidos = () => {
  return (
    <div>
      <center>
      <div className="pedidos-page">
        <h1 className='title-dashboard'>Peidos realizados.</h1>
      </div>
      </center>
      <div className="table-container">
        <table className="table caption-top rounded">
            <thead>
                <tr>
                <th scope="col"># De orden</th>
                <th scope="col">Nombre completo</th>
                <th scope="col">Dirección</th>
                <th scope="col">Telefono</th>
                <th scope="col">Producto</th>
                <th scope="col">Cantidad</th>
                <th scope="col">Total</th>
                <th scope="col">Edit</th>
                <th scope="col">Delet</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row">1</th>
                <td>Maria Jose</td>
                <td>Sabaneta</td>
                <td>300*******</td>
                <td>Difusor universal de goma</td>
                <td>2</td>
                <td>$80.000 COP</td>
                 <td className="edit-icon"><MdEdit /></td><td className="delete-icon"><AiFillDelete /></td>
                </tr>
                <tr>
                <th scope="row">2</th>
                <td>Sara Gomes</td>
                <td>Estrella</td>
                <td>302*******</td>
                <td>Aceite de jojoba curly lovers</td>
                <td>1</td>
                <td>$48.000 COP</td>
                 <td className="edit-icon"><MdEdit /></td><td className="delete-icon"><AiFillDelete /></td>
                </tr>
                <tr>
                <th scope="row">3</th>
                <td>Estefania</td>
                <td>Itagüi</td>
                <td>301*******</td>
                <td>Skala dona 2 en 1</td>
                <td>1</td>
                <td>$36.000 COP</td>
                 <td className="edit-icon"><MdEdit /></td><td className="delete-icon"><AiFillDelete /></td>
                </tr>
                <tr>
                <th scope="row">3</th>
                <td>Estefania</td>
                <td>Itagüi</td>
                <td>301*******</td>
                <td>Skala dona 2 en 1</td>
                <td>1</td>
                <td>$36.000 COP</td>
                 <td className="edit-icon"><MdEdit /></td><td className="delete-icon"><AiFillDelete /></td>
                </tr>
                <tr>
                <th scope="row">3</th>
                <td>Estefania</td>
                <td>Itagüi</td>
                <td>301*******</td>
                <td>Skala dona 2 en 1</td>
                <td>1</td>
                <td>$36.000 COP</td>
                 <td className="edit-icon"><MdEdit /></td><td className="delete-icon"><AiFillDelete /></td>
                </tr>
            </tbody>
        </table>
      </div>  
    </div>
  )
}

export default Tablepedidos