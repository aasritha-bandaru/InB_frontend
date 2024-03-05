
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Headerfnc from './styles/headerfnc';
import Footer from './styles/footer';
import feedbackservice from '../services/feedbackservice';

const Feedback =(props)=>{

    const [productname, setProductName] = useState('');
    const [rating, setRating] = useState('');
    const [comments, setComment] = useState('');

    const navigate = useNavigate();
    const location =useLocation();
 
    const products = [
        "InB Soundbar",
        "InB TWS",
        "InB Smartwatch",
        "InB Fitbit"
    ];

    const ratings = [
        "1",
        "2",
        "3",
        "4",
        "5"
    ];
    const onProductChangeHandler = (event) => {
        setProductName(event.target.value);
        console.log(
            "User Selected product - ",
            event.target.value
        );
    };

    const onRatingChangeHandler = (event) => {
        setRating(event.target.value);
        console.log(
            "User Selected rating - ",
            event.target.value
        );
    };

    const addDetails =(e)=>{
        e.preventDefault();
        const request = {
            productname : productname,
            rating  : rating,
            comments :comments,
            username : location.state.name.username
        }

        feedbackservice.feedback(request).then((response)=>{
            let user = response.data;
           if(user === "Please fill out all the fields"){
                alert("Please fill out all the fields");
            }
            else{
              alert("Submitted!!!");
              navigate('/Profile',{state:{id:1,name:location.state.name}})
           
            }
        })

    }

    const navigateToProfile= ()=>{
        navigate('/Profile',{state:{id:1,name:location.state.name}});
    }

    const submithandler = (e)=>{
        e.preventDefault();
        console.log("Submitted");
    }
 
    return (
      <div className ='feedback'>
        <form id="form" onSubmit = {submithandler}>
            <h3>Provide your Feedback</h3>

            <label>Product Name</label><br/>
            <select onChange={onProductChangeHandler}>
                <option>Select one</option>
                {products.map((option, index) => {
                    return (
                        <option key={index}>
                            {option}
                        </option>
                    );
                })}
            </select><br/>

            <label>Rate the product</label><br/>
            <select onChange={onRatingChangeHandler}>
                <option>Select one</option>
                {ratings.map((option, index) => {
                    return (
                        <option key={index}>
                            {option}
                        </option>
                    );
                })}
            </select><br/>

            <label>
      Add your comment:
      <textarea rows={4} cols={37}  onChange={(event)=> setComment(event.target.value)}/>
    </label>

      <button id="btnsubmit" type="submit"  className="btn btn-success" onClick = {addDetails}>Submit</button><br/>
   <button id="btnsubmit" type="submit" className="btn btn-success" onClick = {navigateToProfile}>Cancel</button>

            <Headerfnc/>
            <Footer/>

        </form>
        
      </div>
    )
  }


export default Feedback
