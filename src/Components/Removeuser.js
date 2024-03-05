import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import Removeuserservice from '../services/Removeuserservice';

export default function Removeuser() {

    const[username, setUsername] = useState('');
    const[securityans, setSecurityans] = useState('');

    const navigate = useNavigate();

    const navigateToLogin =()=>{
      navigate("/");
  }

  const removeUser=(e)=>{
    e.preventDefault();
    // const request={
    //   username: username,
    //   securityans : securityans,
    // }
    Removeuserservice.updateByUsernameSecurityans(username, securityans).then((response)=>{
      let msg = response.data;
      if(msg=== "User Removed successfully"){
      alert("Removed User Successfully!!!!!");
      navigate("/");
      }
      else{
        alert("Invalid Username/security answer")
      }

    })
  }
  return (
    <div id="remove" className='remove'>
      <h4>Remove Account</h4>
       <label>Username</label>
      <input id="username" type="text" placeholder="username" value={username} onChange = {(event)=> setUsername(event.target.value)}></input>

      <label>What is your pet name</label>
      <input id="secans" type="text" placeholder="securityans" value={securityans} onChange = {(event)=> setSecurityans(event.target.value)}></input>
    
      <button className="btn" onClick={removeUser}>Delete</button>
      <button className="link-btn" onClick={navigateToLogin}>Back to login</button>
    </div>
  )
}
