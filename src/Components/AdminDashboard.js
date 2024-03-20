import React from 'react'
import { useLocation, useNavigate  } from 'react-router-dom'
import Headerfnc from './styles/headerfnc';
import Footer from './styles/footer';


const  AdminDashboard= () => {

    const location =useLocation();
    const navigate = useNavigate();

    const Analytics = ()=>{
    //  navigate("/Analytics");
    navigate("/Feedbackchart");
    }

  return (
    <div className="details">
         <form>
            <h3>Welcome {location.state.name.firstname}!</h3>
            <img src="https://img.icons8.com/nolan/64/user.png"/> 

           {/* <button  className = "link-btn"   style={{marginLeft: "10px"}}>Provide Feedback</button> */}
            <button  className = "link-btn"  style={{marginLeft: "10px"}} onClick={Analytics}>Feedback Analytics</button>
          
          
            </form>
            <Headerfnc/>
            <Footer/>
            
      
    </div>
  )
}

export default AdminDashboard
