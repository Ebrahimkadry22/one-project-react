import React from 'react'
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import {HiChatBubbleBottomCenter} from 'react-icons/hi2'
import './Contact.css'
const Contact = () => {
  return (
    <div className='cn-wrapper '>
    <div className='innerWidth paddings flexCenter cn-container'>


    <div className='cn-left flexColStart'>
    <span className='blueText'>Our Contact</span>
    <span className='primaryText'>Easy to Contact us</span>
    <span className='secondaryText'> We always ready to help by providijng<br></br>the best services<br></br> for you. We
    beleive a good blace to live can make your life better{" "}</span>
    <div className="flexStart contactModes">
            {/* first row */}
            <div className="flexCloStart row">
            
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Call</span>
                    <span className="secondaryText">021 123 145 14</span>
                  </div>
                </div>
                <div className="flexCenter button">Call now</div>
              </div>
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Chat</span>
                    <span className="secondaryText">021 123 145 14</span>
                  </div>
                </div>
                <div className="flexCenter button">Chat now</div>
              </div>
            </div>
            <div className="flexCloStart row">
            
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <HiChatBubbleBottomCenter size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Message</span>
                    <span className="secondaryText">021 123 145 14</span>
                  </div>
                </div>
                <div className="flexCenter button">Message now</div>
              </div>
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Chat</span>
                    <span className="secondaryText">021 123 145 14</span>
                  </div>
                </div>
                <div className="flexCenter button">Chat now</div>
              </div>
            </div>
    </div>
    </div>

    
    <div className='cn-right'>
    <div className='image-container'>
    <img src='../../../public/r4.jpg' />
    </div>
    </div>


    </div>
    </div>
  )
}

export default Contact
