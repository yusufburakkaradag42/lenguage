import React from 'react'
import { data } from '../helper/data'
const LessonCard = () => {

  return (
    <div>
        <div className='text'>LessonRemind</div>
        {
            data.map(({image,name,age})=>(
             <div className='section'>
                <img src={image} alt="" />
            </div>
            )) }
        
        
    </div>
  )
}

export default LessonCard