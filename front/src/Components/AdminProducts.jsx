import React from 'react'

export const AdminProducts = () => {
  return (
<div className=''>
      <div className=''>
        <div className='row g-3 my-2'>
          <div className='col-md-3'>
            <div className='p-3 bg-white shadow-sm- d-flex justify-content-around align-items-center rounded'>
              <div>
                <h3 className='fs-2'>260</h3>
                <span className='fs-5'>Usuarios</span>
                <p>Registrados.</p>
              </div>
              <i className='bi bi-person p-3 fs-1'></i>
            </div>
          </div>

          <div className='col-md-3'>
            <div className='p-3 bg-white shadow-sm- d-flex justify-content-around align-items-center rounded'>
              <div>
                <h3 className='fs-2'>230</h3>
                <span className='fs-5'>Total</span>
                <p>De productos.</p>
              </div>
              <i className='bi bi-clipboard2-data p-3 fs-1'></i>
            </div>
          </div>
          <div className='col-md-3'>
            <div className='p-3 bg-white shadow-sm- d-flex justify-content-around align-items-center rounded'>
              <div>
                <h3 className='fs-2'>230</h3>
                <span className='fs-5'>Pedidos</span>
                <p>Realizados.</p>
              </div>
              <i className='bi bi-cart-plus p-3 fs-1'></i>
            </div>
          </div>
          <div className='col-md-3'>
            <div className='p-3 bg-white shadow-sm- d-flex justify-content-around align-items-center rounded'>
              <div>
                <h3 className='fs-2'>230</h3>
                <span className='fs-5'>Citas</span>
                <p>Agendadas.</p>
              </div>
              <i className='bi bi-calendar3 p-3 fs-1'></i>
            </div>
          </div>
        </div>
      </div>
      <table className="table caption-top rounded mt-2">
        <caption className='text-white fs-4'>Recent Orders</caption>
        <thead>
          <tr>
            <th scope="col"># De orden</th>
            <th scope="col">Nombre completo</th>
            <th scope="col">Dirección</th>
            <th scope="col">Telefono</th>
            <th scope="col">Producto</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Total</th>
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
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Sara Gomes</td>
            <td>Estrella</td>
            <td>302*******</td>
            <td>Aceite de jojoba curly lovers</td>
            <td>1</td>
            <td>$48.000 COP</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Estefania</td>
            <td>Itagüi</td>
            <td>301*******</td>
            <td>Skala dona 2 en 1</td>
            <td>1</td>
            <td>$36.000 COP</td>
          </tr>
        </tbody>
      </table>
    </div> )
}


export default AdminProducts