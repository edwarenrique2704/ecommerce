import {
    FaTh,
    FaClipboardList,
    FaBars
  } from "react-icons/fa"
  import { IoIosPerson } from "react-icons/io";
  import { 
    IoCalendarSharp,
    IoSettings 
  } from "react-icons/io5";
  import { FaShop } from "react-icons/fa6";
  import { LuLogOut } from "react-icons/lu";
  
  import { NavLink } from "react-router-dom";
  import { useState } from "react"; 
import { useAuth } from "../Context/AuthContext";
  
  
  const SideBar = ({children}) => {
    const[isOpen, setIsOpen] = useState(true);
    const {logout } = useAuth();
    const toggle = () => setIsOpen (!isOpen);
    const menuItem = [
        {
            path:"/dashboard",
            name:"Perfil",
            icon:<IoSettings />
        },
      //   {
      //       path:"/admin/products",
      //       name:"Dashboard",
      //       icon:<FaTh />
      //   },
        {
            path:"/usuarios",
            name:"Usuarios",
            icon:<IoIosPerson />
        },
        {
            path:"/pedidos",
            name:"Pedidos",
            icon:<FaClipboardList />
        },
        {
            path:"/admin/products",
            name:"Products",
            icon:<FaShop />
        }
        
    ]
  
  return (
    <>
        <div className=" flex flex-wrap  ">
            <div style={{width: isOpen ? "250px" : "50px"}} className="sidebar   ">
                <div className="top_section  ">
                <h2 style={{display: isOpen ? "block" : "none"}}> ADMIN </h2>
                    <div style={{marginLeft: isOpen ? "30px" : "0px"}} className="bars">
                        <FaBars onClick={toggle}/>
                    </div>
                </div>
                {
                    menuItem.map((item, index) =>(
                        <NavLink to={item.path} key={index} className="link space-y-5" activeclassName="active">
                            <div className="icon">{item.icon}</div>
                            <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                        </NavLink>
                    ))
                }
                <div className="icon-logout">
               <button onClick={() => {logout()}}>
               <LuLogOut  /> <h2 style={{display: isOpen ? "block" : "none"}} className="text-btn-logout">Logout</h2>
               </button>
                </div>
            </div>
            <main>{children}</main>
        </div>
    </>
  );
  };
  
  export default SideBar
  