import React from 'react'
import ContactLeft from './contactLeft'
import ContactRight from './contactRight'
import './contact.css'

export default function Contact({mode}) {
  const theme = {
    dark:{backgroundColor:'white',color:'black'},
    light:{backgroundColor:'black',color:'white'}
   }
  return (
    <div className=' contact-cont w-full flex justify-between px-8 h-screen' style={theme[`${mode}`]}>
      <ContactLeft></ContactLeft>
      <ContactRight mode={mode}></ContactRight>
    </div>
  )
}
