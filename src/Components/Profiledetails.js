import React from 'react'
import { useLocation } from 'react-router-dom';
import Headerfnc from './styles/headerfnc';
import Footer from './styles/footer';

const Profiledetails=(props)=> {
    const location =useLocation();
  return (
    <div className='profileDetails'>
        <form>
        <h3>Profile information</h3>
      <table className='table table-striped'>
            <tbody>
                <tr>
                    <td>Name</td>
                    <td>{location.state.name.firstname}{location.state.name.lastname}</td>
                </tr>
                <tr>
                <td>email</td>
                <td>{location.state.name.email}</td>
                </tr>
                <tr>
                <td>Phone number</td>
                <td>{location.state.name.phonenumber}</td>
                </tr>
                <tr>
                <td>Address</td>
                <td>{location.state.name.address}</td>
                </tr>
            </tbody>
            </table>
            </form>
            <Headerfnc/>
            <Footer/>
    </div>
  )
}

export default Profiledetails