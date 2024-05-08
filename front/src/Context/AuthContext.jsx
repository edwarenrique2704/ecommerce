import { createContext, useContext, useState, useEffect } from 'react'
import { registerReq, loginReq, verifyTokenRequest, logoutRequest, getProfileRequest, getAllUserRequest, deleteUserRequest, updateUserDataRequest, adminupdateUserDataRequest } from '../Api/auth';
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom';
import AlertS from '../Components/Alert';
export const AuthContext = createContext();



export const useAuth = () => {


    const Context = useContext(AuthContext);
    if (!Context) {
      throw new Error('UseAuth deberia estar dentro de un provider')
    }
  
    return Context
  }




  export const AuthProvider = ({children}) => {

    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];

        const [user, setUser] = useState(null)
        const [autenticado, setAutenticado] = useState(null)
        const [loading, setLoading] = useState(null)
        const [loadingDataUser, setLoadingDataUser] = useState(null)
        const [allUsers, setAllUsers] = useState([])
        const [profile, setProfile] = useState(null)

        const [cart, SetCart] = useState(savedCart);
     
  
        const navigate = useNavigate();
       
        const signUp = async (user) => {

            try {

                const res = await registerReq(user)
                console.log(res)
                setUser(res.data)
                setAutenticado(true)
                
            } catch (error) {
                console.log(error)
                setUser(null)
              setAutenticado(false)
              AlertS({
                icon: 'error',
                title: `${error.response.data.message}`
              })

            }

        }


        const signIn = async (user) => {
            try {
                const res = await loginReq(user)
                setUser(res.data)
                setAutenticado(true)
            } catch (error) {
              AlertS({
                icon: 'error',
                title: `${error.response.data.message}`
              })
             console.log(error)
            


            }
        }


        const getProfile = async () => {
          try {
            const res = await getProfileRequest()
            console.log(res)
            setProfile(res.data)
            return res
            
          } catch (error) {
            console.log(error)
          }
        }

        const getAllUsers = async () => {
          try {
            const res = await getAllUserRequest()
            setAllUsers(res.data)
            console.log(res)
            return res
            
          } catch (error) {
            console.log(error)
          }
        }


        const updateUserData = async (data) => {
          try {

            setLoadingDataUser(true)
            const res = await updateUserDataRequest(data)
           if(res.status === 200){
            setLoadingDataUser(false)

            AlertS({
              icon:'success',
              title: "Datos actualizados"
            })
           
           }
            console.log(res, "res del update data")

            return res


          } catch (error) {
            setLoadingDataUser(false)

            AlertS({
              icon: 'error',
              title: `${error.response.data.message}`
            })
            console.log(error)
          }
        }


        const adminUpdateUserData = async (id,data) => {
          try { 
            const res = await adminupdateUserDataRequest(id,data)
            console.log(res)
            if(res.status == 200){
              AlertS({
                icon:'success',
                title: "Datos actualizados"
              })
              getAllUsers();
            }

            return res

            
          } catch (error) {

            AlertS({
              icon: 'error',
              title: `${error.response.data.message}`
            })
            console.log(error)
          }
        }

        const deleteUser = async (id) => {
          try {
            
            const confirmation = window.confirm('¿Estás de seguro de eliminar a este usuario?')
            if(confirmation){
              const res = await deleteUserRequest(id)

              if(res.status === 204){
                AlertS({
                  icon:'success',
                  title: `Usuario eliminado`
                })

                setAllUsers(allUsers.filter(user => user._id !== id))

              }

              return res
              

            }else {
              AlertS({
                icon: 'warning',
                title: 'Operación cancelada'
              })
            }
          } catch (error) {
            console.log(error)
          }
        }


        const logout = async () => {

          try {
            const res = await logoutRequest();
            if(res.status === 200 ){
              setAutenticado(false)
              setUser(null)
              Cookies.remove('token')
              navigate('/')
            }
            console.log(res)
          } catch (error) {
            console.log(error)
            setAutenticado(false)

          }
        }




        



        useEffect(() => {
          async function checkLogin() {
      
      
            const cookies = Cookies.get();
            
            if (!cookies.token) {
              setAutenticado(false)
              setLoading(false)
              setUser(null)
              return
           
            }
      
            try {
      
              const res = await verifyTokenRequest(cookies.token);  
      
              if (!res.data) {
                setAutenticado(false)
                setLoading(false)
                return;
      
              }
      
      
              setAutenticado(true);
              setUser(res.data)
              setLoading(false)
            } catch (error) {
             
              if(error){
                console.log(error, "error verify")


               AlertS({
                   icon: 'error',
                 title: `${error.response.data.message}`
                })
      
                navigate("/login")
              }
              setAutenticado(false)
              setUser(null)
              setLoading(false)
            }
      
          }
      
          checkLogin();
      
        }, [])
      
      

//localstorage
        
useEffect(() => {
  localStorage.setItem("cart", JSON.stringify(cart));
}, [cart]);


 // inicio carrito

 const addToCart = (product) => {
  const existingProduct = cart.find(item => item._id === product._id);
  if (existingProduct) {
      const updatedCart = cart.map(item =>
          item._id === product._id ? { ...item, quantity: item.quantity + 1 } : item
      );
      SetCart(updatedCart);
  } else {
      SetCart([...cart, { ...product, quantity: 1 }]);
  }


};


const removeFromCart = (productId) => {
  const updatedCart = cart.filter(item => item._id !== productId);
  SetCart(updatedCart);
};

const clearCart = () => SetCart([]);

// fin carrito






return (

    <AuthContext.Provider value={{ signUp, user, signIn, autenticado, loading, logout, getProfile, getAllUserRequest, getAllUsers, deleteUser, profile, updateUserData, adminUpdateUserData, allUsers, loadingDataUser , // Estado y funciones relacionadas al carrito
    cart,
    addToCart,
    removeFromCart,
    clearCart}} >

            {children}

    </AuthContext.Provider>
)

  }