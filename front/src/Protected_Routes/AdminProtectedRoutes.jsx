import { useAuth } from "../Context/AuthContext"
import { Navigate, Outlet } from "react-router-dom"
import Error_Page from "../Pages/404/error_page";
import { useEffect } from "react";


export const UserProtectedRoutes = () => {

  const { autenticado, loading } = useAuth();

  if (autenticado === false) return <Navigate to={"/login"} replace />




  return (
    <Outlet />
  )




}

export const AdminProtectedRoutes = () => {

  const { autenticado, loading, profile } = useAuth();

 

  if (autenticado === false) return <Navigate to={"/login"} replace />

  if (loading) return <h1>Cargando....</h1>
  
  if(profile && profile.role !== "admin") return <Error_Page/>

  return (
    <Outlet />
  )




}


