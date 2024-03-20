import React from 'react'
import Headerfnc from './styles/headerfnc'
import Footer from './styles/footer'

 const FAQ=()=> {
  return (
    <div className ='TnC'>
      <form>
        <h5 class="text-black">
        Welcome to Infinity & Beyond FAQ's<br/>

       * Is my feedback confidential?<br/>

Yes, we prioritize the confidentiality of your feedback. Your responses are stored securely, and only authorized personnel have access to the information. Rest assured, your input will be treated with the utmost privacy and used exclusively for improvement purposes.<br/>


* Is there a limit to the number of feedback submissions I can make?<br/>

In most cases, there is no limit to the number of feedback submissions you can make. We encourage users to provide as much input as possible to help us improve. However, be mindful of specific guidelines or restrictions set by the organization or business using the application.<br/>
* I'm experiencing technical issues with the feedback application. What should I do?<br/>

If you encounter technical difficulties, please contact our support team through the designated channels. They will assist you in resolving any issues and ensure a smooth experience with the feedback application.<br/>
* How often are updates made based on user feedback?<br/>

The frequency of updates depends on the nature and volume of feedback received. Our team prioritizes and analyzes feedback regularly, striving to implement improvements in a timely manner. Major updates may be communicated through release notes or announcements.
        </h5>
      </form>
      <Headerfnc/>
     <Footer/>
    </div>
  )

}

export default FAQ
