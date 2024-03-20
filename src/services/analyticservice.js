import axios from "axios";

class analyticservice {
    getAllFeedback()
    {
    try{
     return axios.get(`http://localhost:8082/api/Product/getAllFeedback`);
 }
 catch(err)
 {
  console.log(err)
 }
}
}

export default new analyticservice()