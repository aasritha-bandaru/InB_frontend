import React, { useState, useEffect } from 'react';
import Headerfnc from './styles/headerfnc';
import Footer from './styles/footer';
import analyticservice from '../services/analyticservice';

const Analytics = () => {
 
   // const location =useLocation();

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await analyticservice.getAllFeedback();
        if(response.data.length !== 0){
            setData(response.data);
        }
        else{
          const NA = [
            {
                id:1,
                productname: "NA",
                rating: "NA",
                comments : "NA"
            }]
          alert("No data to display");
          setData(NA);
        }
      } catch (error) {
        console.error('Error fetching feedback data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className ='feedbackDetails'>
      <h2 className="text-center">Feedback details</h2>
      <br></br>
      <div className="row">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Rating</th>
              <th>Comments</th>
            </tr>
          </thead>
          <tbody>
            {data.map((details) => (
              <tr key={details.id}>
                <td>{details.productname}</td>
                <td>{details.rating}</td>
                <td>{details.comments}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Headerfnc/>
            <Footer/>
    </div>
  );
};

export default Analytics;