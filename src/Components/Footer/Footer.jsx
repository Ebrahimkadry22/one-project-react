import React from 'react'
import './Footer.css'
function Footer() {
  return (
   <div className='f-wrapper'>
   <div className='paddings innerWidth flexCenter f-container'>
  {/*Start footer left*/}
  <div className='f-left flexColStart'>
  <span className='blueText'>EAQAR WA</span>
  <span className='secondaryText'>
  Our vision is to make all people <br />
  the best place to live for them.
  </span>
  </div>
  {/*Start footer right*/}
  <div className='f-right flexColStart'>
  <span className='primaryText'>Information</span>
  <span className="secondaryText">145 New York, FL 5467, USA</span>
  <div className="flexCenter f-menu">
            <span>Property</span>
            <span>Services</span>
            <span>Product</span>
            <span>About Us</span>
          </div>
  
  </div>

   </div>
   </div>
  )
}

export default Footer
