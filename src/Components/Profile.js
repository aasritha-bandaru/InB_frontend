
import React from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';  
import Footer from './styles/footer';
//import {Container , Col, Button} from 'react-bootstrap'; 
//import Card from "react-bootstrap/Card";
import Headerfnc from './styles/headerfnc';
import feedbackservice from '../services/feedbackservice';
//import Feedbackdetails from './Feedbackdetails';
import Feedbackdets from './Feedbackdets';


const Profile = (props)=>{
  const location =useLocation();

 // const username = location.state.name.username;
  const navigate = useNavigate();

  const logout = ()=>{
    navigate("/");
  }
  const profileDetails=()=>{
 //   navigate("/Profiledetails",{state:{id:1,details:location.state.name}});
    navigate("/Feedback",{state:{id:1,name:location.state.name}});
  }

  const feedbackDetails=(e)=>{
    e.preventDefault();
//     feedbackservice.getByUsername(username).then((response)=>{
//             let user = response.data;
//             if(user){
//  if(username === user.username && password===user.password){
//   navigate("/Feedbackdetails",{state:{id:1,name:response.data}});
//             }
//             else{
//                 alert("No data");
//             }
//         })

    navigate("/Feedbackdets",{state:{id:1,name:location.state.name.username}});

 
  }

    return(
        <div className="details">
            <form>
            <h3>Welcome {location.state.name.firstname}!</h3>
            <img src="https://img.icons8.com/nolan/64/user.png"/> 
          {/*  <button  className = "link-btn"  onClick = {profileDetails} style={{marginLeft: "10px"}}>Click for profile details</button>*/}

            <button  className = "link-btn"  onClick = {profileDetails} style={{marginLeft: "10px"}}>Provide Feedback</button>
            <button  className = "link-btn"  onClick = {feedbackDetails} style={{marginLeft: "10px"}}>View your feedback</button>
          
          
            </form>
            {/* <Header/> */}
            <Headerfnc/>
            <Footer/>
            
           
        </div>
    );
}


export default Profile