import React from 'react'
import ContactLeft from './contactLeft'
import ContactRight from './contactRight'

export default function Contact({mode}) {
  const theme = {
    dark:{backgroundColor:'white',color:'black'},
    light:{backgroundColor:'black',color:'white'}
   }
  return (
    <div className='w-full flex justify-between px-8' style={theme[`${mode}`]}>
      <ContactLeft></ContactLeft>
      <ContactRight mode={mode}></ContactRight>
    </div>
  )
}
