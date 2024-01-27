import { Outlet,useNavigate,Navigate } from "react-router-dom"
import { useAuth } from "../context/AuthProvider"
import { useEffect } from "react";
const Layout=()=>{
    const authCtx = useAuth();
    
    
        if(Object.keys(authCtx.currentUser).length===0){
            //Unautheticated user has not  been logged in
          return <Navigate to="/login"/>
        }
    return (
        <div>
            <h4>Header</h4>
            <Outlet/>
            <h4>Footer</h4>
        </div>
    )

}
export default Layout
   

