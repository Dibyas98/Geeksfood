import React from 'react'

export default function ContactRight({mode}) {
  return (
    <div className='pt-28  w-1/2 pr-8 contact-right'  >
      <div className=' flex flex-col p-5 gap-5 ' style={{boxShadow:'0 25px 25px rgb(0 0 0 / 0.15'}}>
      <input style={mode === 'light'?{background:'#1B254A'}:null} type="text" placeholder='Your Name' className='border w-full h-11 p-3 rounded focus:outline-none'/>
      <input style={mode === 'light'?{background:'#1B254A'}:null} type="text" placeholder='Your Email' className='border w-full h-11 p-3 rounded focus:outline-none'/>
      <input style={mode === 'light'?{background:'#1B254A'}:null} type="text" placeholder='Your Phone' className='border w-full h-11 p-3 rounded focus:outline-none'/>
      <textarea style={mode === 'light'?{background:'#1B254A'}:null} name="" placeholder='Your message' id="" cols="30"  className='h-32 border w-full  p-3 overflow-hidden resize-none rounded focus:outline-none'></textarea>
      <button className='bg-[#0095FF] text-[#fff] h-10 rounded hover:text[#2E7D32] hover:bg[#fff]'>Submit</button>
      </div>
    </div>
  )
}
