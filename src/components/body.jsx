import React from 'react'
import Liner from './liner'
import Testimonial from './testimonial'
import Footer from './footer'
import Hero from './hero'
import Navbar from './navbar'

function Body() {
  return (
    <div className='bg-amber-100'>
        
        <Hero />
        <Liner />
        <Testimonial />
        <Footer />
        
    </div>
  )
}

export default Body