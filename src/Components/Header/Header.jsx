import React, { useState } from 'react'
import {BiMenuAltRight} from 'react-icons/bi'
import OutsideClickHandler from 'react-outside-click-handler'
import './Header.css'
const Header = () => {
  const [menuopened , setMenuOpened]=useState(false);
  const getMenuStyles =()=> {
   if(setMenuOpened){
    return {right: !menuopened && '-100%'}
   }
  }


  return (
    <div>
      <section className='h-wapper'>
      <div className='flexCenter innerWidth   h-container'>
      <a href='#'>EAQAR WA</a>


      <OutsideClickHandler 
      onOutsideClick={
        ()=>{
          setMenuOpened(false)
        }
      }
      >

      <div className='h-meun flexCenter' style={getMenuStyles(menuopened)}>
      <a href=''>Residencies</a>
      <a href=''>Our value</a>
      <a href=''>Contact Us</a>
      <a href=''>Get Started</a>
      <button className='button'>
      <a href=''>Contact</a>
      </button>
      </div>

      </OutsideClickHandler>

      <div className='menu-icon'onClick={()=>setMenuOpened((prev)=> !prev)} >
      <BiMenuAltRight size={30}/>
      </div>



      </div>
      
      </section>
    </div>
  )
}

export default Header
