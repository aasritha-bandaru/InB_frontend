import React, { useState, useEffect, useRef} from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import Headerfnc from './styles/headerfnc';
import Footer from './styles/footer';

const Feedbackchart = () => {
  const [ratingsData, setRatingsData] = useState([]);
  const chartRef = useRef(null);

  useEffect(() => {
    const apiEndpoint = 'http://localhost:8082/api/Product/getAllFeedback';

    axios.get(apiEndpoint)
      .then(response => {
        setRatingsData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
      if (chartRef.current) {
        chartRef.current.destroy();
      }
  }, [ratingsData]);

  const data = {
    labels: ratingsData.map(product => product.productname),
    datasets: [
      {
        label: 'Ratings',
        backgroundColor: '#302b63',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
        hoverBackgroundColor: '#302b63',
        hoverBorderColor: 'rgba(75,192,192,1)',
        data: ratingsData.map(product => product.rating),
      },
    ],
  };

  const options = {
    scales: {
      y: {
        type: 'linear',
        beginAtZero: true,
        max: 5,
      },
    },
  };
  // const options = {
  //   scales: {
  //     y: {
  //       type: 'linear',
  //       beginAtZero: true,
  //       max: 5,
  //       ticks: {
  //         color: '#000', // Color of the tick marks
  //       },
  //       grid: {
  //         color: '#ccc', // Color of the grid lines
  //       },
  //     },
  //     x: {
  //       ticks: {
  //         color: '#000', // Color of the tick marks
  //       },
  //       grid: {
  //         display: false, // Hide x-axis grid lines
  //       },
  //     },
  //   }
  // };

  return (
        <div>
     <div className='chartdetails'>
     <div className='barchart'>
       <h2 style={{ textAlign: 'center' }}>Rating Analytics</h2>
       <Bar data={data}  options={options} /><br/> 

    {/* <div>
        <h3>Ratings Data</h3>
        <ul>
          {ratingsData.map(product => (
            <li key={product.productname}>
              <strong>{product.productname}</strong> {product.comments}
            </li>
          ))}
        </ul>
      </div> */}
    </div>
   </div>
    <Headerfnc/>
            <Footer/>
            </div>
 
  );
};

export default Feedbackchart;
