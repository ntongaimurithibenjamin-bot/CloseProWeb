import React from 'react'
import './hero'
import Real from '../assets/real.jpg'
import Real1 from '../assets/real-1.jpg'
import Real2 from '../assets/real-2.jpg'


function Hero() {
  return (
    
    <div className=" flex  sm:mr-10 sm:justify-center md:flex-row justify-between  mr-10 bg-amber-100" >
        <div className='h-96 w-80 rounded-2xl mt-10 ml-10'>
            <img src={Real}  className='h-98 w-82 rounded-3xl'/>
            <p className='font-extrabold font-sans animate-wave-stop mt-2 text-2xl ml-2'>Ease the <span className='text-red-400 '>Deals</span></p>
        </div>
        <div className='h-96 w-80 rounded-2xl mt-10 ml-10'>
            <img src={Real1}  className='h-98 w-82 rounded-3xl'/>
            <p className='font-extrabold font-sans animate-wave-stop mt-2 text-2xl ml-2'>Buy your <span className='text-fuchsia-800 '>Dream!</span></p>
        </div>
        <div className='h-56 w-80  rounded-3xl mt-10 ml-10'>
            <img src={Real2}  className='h-98 w-82 rounded-3xl' />
            <p className='font-extrabold font-sans animate-wave-stop mt-2 text-2xl ml-2'>Get Trusted <span className='text-purple-800 '>Agents!!!</span></p>
        </div>
        
    </div>

  )
}

export default Hero