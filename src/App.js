import React, {useState} from 'react'
import './App.css';
import Login from './Components/Login'
import Register from './Components/Register'
import 'bootstrap/dist/css/bootstrap.min.css';  
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Profile from './Components/Profile';
import Removeuser from './Components/Removeuser';
import Profiledetails from './Components/Profiledetails';
import TnC from './Components/TnC';
import Feedback from './Components/Feedback';
import Feedbackdets from './Components/Feedbackdets';
import AdminDashboard from './Components/AdminDashboard';
import FAQ from './Components/FAQ';
import Analytics from './Components/Analytics';
import Feedbackchart from './Components/Feedbackchart';

function App() {
  const cors = require('cors');
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}

  return (
    <div className="App">
     
 
     <BrowserRouter>
     <Routes>

     <Route path="/" element={<Login />} />
     <Route path="Profile" element={<Profile />} />
     <Route path="Admin" element={<AdminDashboard/>}/>
      <Route path="Register" element={<Register />} />
      <Route path="Removeuser" element={<Removeuser/>} />
      <Route path="Profiledetails" element={<Profiledetails/>}/>
      <Route path="TnC" element={<TnC/>}/>
      <Route path="FAQ" element={<FAQ/>}/>
      <Route path="Feedback" element={<Feedback/>}/>
      <Route path="Feedbackdets" element={<Feedbackdets/>}/>
      <Route path="Analytics" element={<Analytics/>}/>
      <Route path="Feedbackchart" element={<Feedbackchart/>}/>
      </Routes>
    </BrowserRouter>
      

    </div>
  );
  
}

export default App;
