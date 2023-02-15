import React from 'react'
import { data } from '../helper/data'
import './LessonCard.css'
const LessonCard = () => {

  return (
    <div>
        <div className='text'>LessonRemind</div>
        {
            data.map(({image,name,age})=>(
             <div className='section'>
                <img width="180px" height="180px" src={image} alt="" />
                <div className='card'>
                    <h3> <span>Lesson Name : </span> {name}</h3>
                    <h3> <span>Lesson Name : </span> {age} </h3>
                </div>
            </div>
            )) }
        
        
    </div>
  )
}

export default LessonCard