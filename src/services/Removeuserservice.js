import axios from 'axios'

class Removeuserservice  {
   updateByUsernameSecurityans(username, securityans)
   {
   try{
    // let details ={
    //     username : props.username,
    //     securityans : props.securityans,

    // }
    return axios.delete(`http://15.207.231.27:8082/api/UserDetails/deleteuser/${username}/${securityans}`);

}
catch(err)
{
    alert("Invalid Username/ Security ans")
 console.log(err)
}
}
}

export default new Removeuserservice()