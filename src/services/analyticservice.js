import axios from "axios";

class analyticservice {
    getAllFeedback()
    {
    try{
    // return axios.get(`http://15.207.231.27:8082/api/Product/getAllFeedback`); -AWS ec2 instance IP address
     return axios.get(`http://localhost:8082/api/Product/getAllFeedback`);
 }
 catch(err)
 {
  console.log(err)
 }
}
}

export default new analyticservice()