import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    if(loading){
        return <progress className="progress progress-primary w-56" value="40" max="100"></progress>
    }
    if(user?.email){
        return children;
    }
    return <Navigate to ='/login' replace></Navigate>
};

export default PrivateRoute;