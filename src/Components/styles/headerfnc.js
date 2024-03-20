
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

 function Headerfnc() {
        const navigate = useNavigate();

        const location =useLocation();

   const logout = ()=>{
    navigate("/");
  }
  /*const profileDetails=()=>{
    navigate("/Profiledetails");
  }*/
  const profileDetails=()=>{
      navigate("/Profiledetails",{state:{id:1,name:location.state.name}});
  }
  const TnC=()=>{
    navigate("/TnC");
  }
  // const Profile = ()=>{
  //   navigate("/Profile");
  // }
  return (
    <div>
        <header  className='header'>
        <h4 id="name">Infinity & Beyond</h4>
        <div className='headerbtn'>
       <button id="TnC" class="text-white" onClick={TnC}>Terms and Conditions</button>
         <button id="Profile" class="text-white" onClick={profileDetails}>Profile</button> 
        <button id="logout" class="text-white" onClick = {logout}>Logout</button>
        </div>
        </header>
      
    </div>
  )
}
export default Headerfnc;
