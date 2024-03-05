import React,{useState} from 'react'
import { useNavigate } from "react-router-dom";

const Registersuccess =(props)=>{

    const navigate = useNavigate();
    const navigateToLogin =()=>{
        navigate("/Login");

    }
   return(
    <div className = "Registersuccess">
        <label>Registration Successfull!!!</label><br/>
        <button  onClick = {navigateToLogin}>Click to Login </button>
    </div>
   );
}

export default Registersuccess