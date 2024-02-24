import React from 'react'
import { tvData } from '../data/tv'

const TV = () => {
    const firstFiveImages=tvData.slice(0,5)
  return (
    <>
    <div className="proTitle">
    <h2>TV's</h2>
    </div>
    
    <div className='proSection'>{
        firstFiveImages.map((item)=>{
      return(
        <div className='imgBox'>
            <img className='proImage' src={item.image} alt="Image" /></div>
            )
        })
        }</div>
        </>
  )
}

export default TV