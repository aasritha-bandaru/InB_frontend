import React, {useState} from 'react'
import registerservice from '../services/registerservice';
import { useNavigate } from "react-router-dom";


const Register =(props) =>{

    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [username, setUsername] = useState('');
    const[password, setPassword] = useState('');
    const [email, setEmail] = useState(''); 
    const [phonenumber, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [securityans, setSecurityans] = useState('');
   

    const navigate = useNavigate();

    const addDetails =(e)=>{
        e.preventDefault();
        const request ={
            firstname : firstname,
            lastname : lastname,
            username : username,
            password : password,
            email : email,
            phonenumber : phonenumber,
            address : address,
            securityans : securityans
        }
      //  registerservice.registerUser(request);
      //  alert("Registration success!!!");
      //  navigate("/");

      registerservice.registerUser(request).then((response)=>{
        let user = response.data;
        if(user === "Username already exist"){
        alert("Choose a different username");
        }
        else if(user === "Please fill out all the fields"){
            alert("Please fill out all the fields");
        }
        else{
          alert("Registration success!!!");
        navigate("/");
        }
    })


    }

    const navigateToLogin =()=>{
        navigate("/");

    }
  
   
    const submithandler = (e)=>{
        e.preventDefault();
        console.log(username + "  "+ password);
    }

    return(
        <section>
        <div className= "reg-form">
        <div className="col-1">
        <form id= "regform" className = "regform flex-col" onSubmit = {submithandler}>
           
            <h2 id = "heading">Register Now</h2> <br></br>
     
                 <label>First name</label>
                 <input id= "firstname" type="text" placeholder="firstname"  value={firstname} onChange = {(event)=> setFirstname(event.target.value)} ></input>
                 
                 <label>Last name</label>
                 <input id= "lastname" type="text" placeholder="lastname"  value={lastname} onChange = {(event)=> setLastname(event.target.value)} ></input>
                
                 <label>Username</label>
                 <input id= "username" type="text" placeholder="username"  value={username} onChange = {(event)=> setUsername(event.target.value)}></input>
                
                 <label>Password</label>      
                 <input id="password" type="password" placeholder="password" value={password} onChange={(event)=> setPassword(event.target.value)} ></input>  
         
                 <label>Email</label>      
                 <input id="email" type="email" placeholder="email" value={email} onChange={(event)=> setEmail(event.target.value)} ></input>  
                
                 <label>Phone number</label>      
                 <input id="phone" type="number" placeholder="phone number" pattern="[0-9]{10}"  value={phonenumber} onChange={(event)=> setPhone(event.target.value)} ></input>  
                
                 <label>Address</label>      
                 <input id="address" type="text" placeholder="address" value={address} onChange={(event)=> setAddress(event.target.value)} ></input>  
                
                 <label>what is your petname?</label>      
                 <input id="securityans" type="text" placeholder="security answer" value={securityans} onChange={(event)=> setSecurityans(event.target.value)} ></input>  
             
                 <button id="btnsubmit" type="submit"  className="btn btn-success" onClick = {addDetails}>Sign in</button>
                 <button className = "link-btn" onClick = {navigateToLogin}  style={{marginLeft: "10px"}}>Back to Login</button> 
           
        </form>
       </div>
        </div>
        </section>
    );
}

export default Register