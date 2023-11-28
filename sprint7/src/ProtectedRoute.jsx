import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute({
    isLoggedIn,
    redirectPath ="/login"
}) {


    if (!isLoggedIn){
        return <Navigate to={redirectPath} replace /> 
    }
    return <Outlet />
}

export default ProtectedRoute;