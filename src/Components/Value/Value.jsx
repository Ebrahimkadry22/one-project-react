import React, { useState } from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState,
} from 'react-accessible-accordion';

import 'react-accessible-accordion/dist/fancy-example.css';
import {MdOutlineArrowDropDown} from  'react-icons/md'
import data from '../utils/Accordion'
import './Value.css'
const Value = () => {
  return (
    <div className='v-wrapper'>
    <div className='v-container innerWidth flexCenter paddings '>


    <div className='v-left'>
    <div className='image-container'>
    <img src='../../../public/r2.jpg' />
    </div>
    </div>

    <div className='v-right flexColStart'>
    <span className='blueText'>Our Value</span>
    <span className='primaryText'>Value We Give To You</span>
    <span className='secondaryText'>
    We always ready to help by providijng the best services for you.
            <br />
            We beleive a good blace to live can make your life better
    </span>

    <Accordion className='accordion' allowMultipleExpanded={false} preExpanded={[0]}>
    
    {

        data.map((item,i)=> {
            
            return(
                <AccordionItem className='accordionItem ' key={i}>

                <AccordionItemHeading>

                <AccordionItemButton className='accordionItemButton flexCenter '>

                <AccordionItemState>
                {({expanded})=> expanded }
                </AccordionItemState>




                <div className='icon'>{item.icon}
                </div>
                <span className='primaryText'>{item.heading}</span>
                <div className='flexCenter'>
                <MdOutlineArrowDropDown size={25} color='var(--blue)' />
                </div>

                </AccordionItemButton>

                </AccordionItemHeading>
                <AccordionItemPanel>
                <p className='secondaryText'>{item.detail}</p>
                </AccordionItemPanel>
                </AccordionItem>
            )
        })

    }
    </Accordion>

    </div>


    </div>
    </div>
  )
}

export default Value
