import React from 'react'
import data from '../utils/Slider.json'
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide  } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/navigation';
import './Residencies.css'
const Residencies = () => {
  return (
    <div className='r-warpper '>
    <div className='paddings  innerWidth r-container'>
    <div className='r-head'>
    <p className='blueText'>Best Choices</p>
    <h3 className='primaryText '>Popular Residencies</h3>
    </div>
    
<Swiper className='swiper'
modules={{Navigation}}
{...SliderSetting}
      navigation
>
{

data.map((card,i)=>(
<SwiperSlide key={i}>
<div className='r-card flexColStart'>
<div className='r-image'>
<img src={card.image} alt='home' />
</div>
<span className='r-price secondaryText'>
<span className='blueText '>$</span>
<span>{card.price}</span>
</span>
<span className='primaryText'>{card.name}</span>
<span className='secondaryText'>{card.detail}</span>

</div>
</SwiperSlide>

  ))

}

</Swiper>

    </div>
    </div>
  )
}

export default Residencies

const SliderSetting = {
  slidesPerView:1,
  spaceBetween:20,
  breakpoints:{
    480: {
      slidesPerView : 2,
      spaceBetween:30
    },
    600: {
      slidesPerView :2
    },
    750 : {
      slidesPerView: 3
    },
    1010: {
      slidesPerView: 4
    }
  }

}