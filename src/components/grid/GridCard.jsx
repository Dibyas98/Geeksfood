import React from 'react'
import './grid.css'
import pro from './pro.avif'

export default function GridCard(props) {
  return (
    <div className='grid-card'>
        <div className="grid-text">
            <p>{props.about}</p>
        </div>
        <div className="grid-logo">
            <img src={pro} alt="" />
            <div className="grid-name">
                <h6>Gladis Lennon</h6>
                <p>Head of SEO</p>
            </div>
        </div>
      
    </div>
  )
}
