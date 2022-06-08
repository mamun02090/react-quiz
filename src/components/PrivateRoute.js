import { useAuth } from "../contexts/AuthContext";
import {  Navigate} from "react-router-dom";



export default function PrivateRoute({children}){
    const {currentUser}= useAuth();
    //const navigate= useNavigate()
    console.log(currentUser)
    return currentUser? children: (
        <Navigate to='/Login'/>
        )
    
}