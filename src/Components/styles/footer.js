import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom';

function Footer (){
    const navigate = useNavigate();
    const FAQ=()=>{
        navigate("/FAQ");
      }
        return (
           
            <div>
            <footer className="footer" >
             <div>
            {/* <button id="TnC"  class="text-white" type="button" onclick="window.location.href='https://www.google.com/maps'">Locate Us</button>*/}
             <a  href="https://www.google.com/maps" id="TnC" class="text-white">Locate Us</a>

            
             <button id="TnC" class="text-white" onClick={FAQ}>FAQ</button>
            </div> 
              
              
             
  
              
            </footer>
                               
                           </div>
        );
    
}

export default Footer;