import axios from 'axios'

class Removeuserservice  {
   updateByUsernameSecurityans(username, securityans)
   {
   try{
    // let details ={
    //     username : props.username,
    //     securityans : props.securityans,

    // }
    return axios.delete(`http://localhost:8080/api/UserDetails/deleteuser/${username}/${securityans}`);

}
catch(err)
{
    alert("Invalid Username/ Security ans")
 console.log(err)
}
}
}

export default new Removeuserservice()