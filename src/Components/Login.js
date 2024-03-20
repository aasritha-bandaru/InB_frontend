import React,{ useState } from "react";
import { useNavigate } from "react-router-dom";
import loginservice from '../services/loginservice';


const Login = (props)=>  {
  
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    const navigate = useNavigate();

    const validateUser =(e)=>{
        e.preventDefault();
        loginservice.getByUsernamePassword(username,password).then((response)=>{
            let user = response.data;
            if(user.role === "User"){
 //if(username === user.username && password===user.password){
    navigate('/Profile',{state:{id:1,name:response.data}});
            }
            else if(user.role === "Admin"){
                navigate('/Admin',{state:{id:1,name:response.data}});
               // alert("Invalid username/password");
            }
            else{
                alert("Invalid username/password");
            }
        })


    }

    const navigateToRegister =()=>{
        navigate("/Register");

    }

    const navigateToPwd =()=>{
        navigate("/Removeuser");

    }

    const submithandler = (e)=>{
        e.preventDefault();
        console.log(username + "  "+ password);
    }

    
        return (
           <section>
            <div className= "auth-form">
                <div className="col-1">
        <form id="form" className = "flex flex-col" onSubmit = {submithandler}>
        <h1>Infinity & Beyond</h1><br></br>
        <h2>Login</h2> <br></br>
            
            
                 <label>Username</label> 
                 <input id= "username" type="text" placeholder="username"  value={username} onChange = {(event)=> setUsername(event.target.value)}></input>
                   
                 <label>Password</label>      
                 <input id="password"  type="password" placeholder="password" value={password} onChange={(event)=> setPassword(event.target.value)}></input>  
             
                 <button id="btnsubmit" type="submit"  className="btn btn-success" onClick = {validateUser}>Login</button> 
               
          <button  className = "link-btn" onClick = {navigateToRegister} style={{marginLeft: "10px"}}>Don't have account? Register here</button>
          <button  className = "link-btn"  onClick = {navigateToPwd} style={{marginLeft: "10px"}}>Delete Account</button>
          </form>
          </div>
          {/* <div className="col-2">
            <img src={loginimg} alt=""></img>

          </div> */}

          </div>
          </section>
               
        );
    
}

export default Login
