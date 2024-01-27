import { useEffect } from 'react';
import {useAuth} from '../context/AuthProvider';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Dashboard=()=>{
    const authCtx=useAuth();
    // const navigate=useNavigate();

    // useEffect(()=>{
    //     if(Object.keys(authCtx.currentUser).length===0){
    //         //Unautheticated user has not  been logged in
    //         navigate("/"); 
    //     }
    // },[])


    // console.log(authCtx);
    // if(Object.keys(authCtx.currentUser).length===0){

        const onLogout=async()=>{
           try{
           await authCtx.logout();
           authCtx.setCurrentUser({})
           }
           catch(err){
                console.error(err)
           }
        }

        return (
            <div>
            <h1>Loading...</h1>;
            <Button type='button' onClick={onLogout}>Logout</Button>
            </div>
            
        )
    // }
   
     
    return(
        <div>
            <h1>Dashboard Screen</h1>
        </div>
    )
}
export default Dashboard