import React from 'react'
import './Service.css'

const Service = ({img,h,p}) => {
  return (
    <div className='block'>
        <img src={img} alt="" className='b-img' />
        <h3>{h}</h3>
        <p>{p}</p>
    </div>
  )
}

export default Service