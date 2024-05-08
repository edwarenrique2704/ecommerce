import React, { useEffect, useState } from 'react'
import { MdEdit } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";
import { useAuth } from '../Context/AuthContext';
import AdminEditUserDataForm from './Forms/AdminEditUserDataForm';

const Tableusers = () => {
    // estado para los datos de todos los usuarios

    const { getAllUsers, deleteUser, allUsers } = useAuth();

    // manejar la visibilidad del formulario
    const [adminForm, setEditAdminForm] = useState(false);

    // guarda ID del usuario
    const [userId, setUserId] = useState([])
    console.log(allUsers)

    useEffect(() => {

        const traerUsuarios = async () => {
            const res = await getAllUsers();
           

        }
        traerUsuarios();
    }, [])


    return (
        <div>
            <center>
                <div className="pedidos-page">
                    <h1 className='title-dashboard'>Usuarios registrados.</h1>
                </div>
            </center>
            <div className="table-container">
                <table className="table caption-top rounded">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">@Usuario</th>
                            <th scope="col">Nombre completo</th>
                            <th scope="col">Correo</th>
                            <th scope="col">Tipo de Identificación</th>
                            <th scope="col">Número de Identificación</th>
                            <th scope="col">Celular</th>
                            <th scope="col">Dirección</th>
                          
                            <th scope="col">Edit</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>

                        {allUsers && allUsers.length > 0 ? (

                            <>
                              {allUsers && allUsers.map(user => (
                            <tr key={user._id}>
                                <td>{user._id}</td>
                                <td>{user.username}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.typeIdentification}</td>
                                <td>{user.phone}</td>
                                <td>{user.identification}</td>
                                <td>{user.address}</td>
                              
                               
              
                         
                        
                                <td className="edit-icon">

                                    <button onClick={() => { setEditAdminForm(preve => !preve); setUserId(user._id) }}>
                                        <MdEdit />
                                    </button>
                                </td>

                                <td className="delete-icon">

                                    <button onClick={() => { deleteUser(user._id) }}> <AiFillDelete /></button>

                                </td>
                            </tr>
                        ))}
                            </>

                        ) : (
                           
                           <>
                           <h1>No hay usuarios para mostrar.</h1>
                           </> 

                        )}
                    </tbody>
                </table>

            </div>


            
            {adminForm && (
                <div className='justify-center mx-auto inset-0  w-screen absolute h-screen my-36'>
                   
                    <AdminEditUserDataForm formVisibility={setEditAdminForm} userId={userId}   blockForm={setEditAdminForm}/>
                </div>
            )}
        </div>
    )
}

export default Tableusers