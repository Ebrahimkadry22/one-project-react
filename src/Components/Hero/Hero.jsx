import React from 'react'
import {HiLocationMarker} from 'react-icons/hi'
import CountUp from 'react-countup'
import './Hero.css'
const Hero = () => {
  return (
    <div>
      <section className='hero-wrapper'>
      <div className='hero-container flexCenter paddings innerWidth '>
      <div className='hero-left flexCenert'>
      <div className='hero-title flexStart' >
      <h1>
      Discover<br />most suitable <br /><span>EAQAR WA</span>
      </h1>
     
      </div>
      <div className='hero-des'>
      <p className='secondaryText'>Find the right <span>EAQAR WA</span>  for you with ease and <br /> forget all the difficulty</p>
      </div>
      
      <div className='search-bar flexCenter'>
      <HiLocationMarker color='var(--blue)' size={25} />
      <input type='text' placeholder='Search EAQAR WA'/>
      <button className='button'>Search</button>
      </div>
      
      <div className='flexCenter stats'>

      <div className='flexColCenter stat'>
      <span>
      <CountUp start={8800} end={9000} duration={4} />
      <span>+</span>
      </span>
      <span className='secondaryText'>Premium Products</span>
      </div>

      <div className='flexColCenter stat'>
      <span>
      <CountUp start={1950} end={2000} duration={4} />
      <span>+</span>
      </span>
      <span className='secondaryText'>Happy Customers</span>
      </div>

      <div className='flexColCenter stat'>
      <span>
      <CountUp  end={28} />
      <span>+</span>
      </span>
      <span className='secondaryText'>Award Winnings</span>
      </div>


     

      

      </div>

      </div>
      <div className='hero-right'>
      <div className='image-container'>
      <img src='/public/hero.jpg'></img>
      </div>
      </div>
      </div>
      </section>
    </div>
  )
}

export default Hero
