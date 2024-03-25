
import axios from 'axios'

class loginservice  {
   getByUsernamePassword(username,password)
   {
   try{
    return axios.get(`http://15.207.231.27:8082/api/UserDetails/login/${username}/${password}`);
}
catch(err)
{
 console.log(err)
}
}
}

export default new loginservice()

