import React from 'react'
import Headerfnc from './styles/headerfnc'
import Footer from './styles/footer'

 const TnC=()=> {
  return (
    <div className ='TnC'>
      <form>
        <h5 class="text-black">
        Welcome to Infinity & Beyond!<br/> We appreciate your valuable feedback and are committed to providing you with an exceptional user experience. Before using our customer feedback application, please carefully read and agree to the following terms and conditions:<br/>

* Acceptance of Terms:
By accessing or using our customer feedback application, you agree to comply with and be bound by these terms and conditions. If you do not agree with any part of these terms, please do not use the application.<br/>

* Feedback Submission:
Users are encouraged to submit honest and constructive feedback about their experiences with our products or services. All submissions should adhere to community guidelines and refrain from any unlawful, defamatory, or inappropriate content.<br/>
* Privacy and Data Security:
We take your privacy seriously. Any personal information collected through the feedback application will be handled in accordance with our Privacy Policy. Your data will be used solely for the purpose of improving our products and services.<br/>
* Availability of the Service:
While we strive to ensure the continuous availability of the feedback application, we may temporarily suspend access for maintenance or other reasons. We will make reasonable efforts to provide advance notice of any scheduled downtime.
        </h5>
      </form>
      <Headerfnc/>
     <Footer/>
    </div>
  )

}

export default TnC
