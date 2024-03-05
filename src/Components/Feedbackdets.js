import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import feedbackservice from '../services/feedbackservice';
import Headerfnc from './styles/headerfnc';
import Footer from './styles/footer';

const Feedbackdets = ({ username }) => {
 
    const location =useLocation();

  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await feedbackservice.getByUsername(location.state.name);
        if(response.data.length !== 0){
        setEmployees(response.data);
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
          setEmployees(NA);
        }
      } catch (error) {
        console.error('Error fetching feedback data:', error);
      }
    };

    fetchData();
  }, [username]);

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
            {employees.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.productname}</td>
                <td>{employee.rating}</td>
                <td>{employee.comments}</td>
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

export default Feedbackdets;