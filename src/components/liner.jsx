import React from 'react'
import House from '../assets/house.jpg'
import House1 from '../assets/house1.jpg'
import Real from '../assets/real.jpg'
function Liner() {
  return (
 
        <div className='flex-col justify-between h-100 w-auto bg-amber-100  -mt-20 '>
          <p className='text-4xl text-blue-800  ml-105 mt-40'>Get the available <span className='text-rose-700'>HOT DEALS!!!</span></p>
            <img src={House}  className='h-120 w-280  rounded-3xl ml-35 mt-5 mb-10'/>
           
        </div>
  )
}

export default Liner