import axios from "axios"

class feedbackservice {
    feedback(props)
    {
    try{
        let details = {
            productname : props.productname,
            rating  : props.rating,
            comments : props.comments,
            username : props.username

        }
     return axios.post(`http://localhost:8080/api/Product/addFeeback`,details);
}
catch(err)
 {
 // console.log(err)
 }
    }

    getByUsername(username)
   {
   try{
    return axios.get(`http://localhost:8080/api/Product/getFeedback/${username}`);
}
catch(err)
{
 console.log(err)
}
}
}
export default new feedbackservice()