import axios from 'axios';

class registerservice  {
    registerUser(props)
    {
    try{
        let details = {
            firstname : props.firstname,
            lastname : props.lastname,
            username : props.username,
            password: props.password,
            email : props.email,
            phonenumber : props.phonenumber,
            address : props.address,
            securityans : props.securityans


        }
     return axios.post(`http://localhost:8080/api/UserDetails/adduserdetails`,details);
 }
 catch(err)
 {
    alert("Username already exist. Choose a different one");
  console.log(err)
 }
 }
 }
 
 export default new registerservice()
 
 