import React from 'react'
import PP from '../assets/pp.jpg'
import PP1 from '../assets/pp1.jpg'
import PP2 from '../assets/pp2.jpg'
import Star from '../assets/start.png'
function Testimonial() {
  return (
    <>
    <h5 className='text-4xl ml-70 mt-50'>Testimonials from some <span className='text-fuchsia-800'>Happy</span> clients</h5>
    <div className='flex h-120 w-auto ml-10 mr-10 -mt-2 rounded-2xl mb-10'>
        <div className='h-90 w-100 bg-amber-50 rounded-3xl mt-10 ml-5'>
           <img src={PP}  className='h-15 w-15 rounded-4xl ml-5 mt-5 mb-5'/>
           <p className='-mt-15 ml-22 font-bold text-cyan-950'>Murr Simon</p>
            <p className='mt-4 ml-2'>I needed to sell my apartment urgently, and ClosePro matched me with an agent who closed the deal in just 12 days. The process was transparent, fast, and completely stress-free. I finally felt confident I was working with a proven professional.</p>
        </div>
        <div className='h-90 w-100 bg-amber-50 rounded-3xl mt-10 ml-5'>
            <img src={PP2}  className='h-15 w-15 rounded-4xl ml-5 mt-5 mb-5'/>
            <p className='-mt-15 ml-22 font-bold text-cyan-950'>Benjamin Murithi</p>
            <p className='mt-4 ml-2'>Time is money in real estate. ClosePro helped me find a trusted agent with verified results, and the transaction moved incredibly fast. No guessing, no trial and error — just results.</p>
        </div>
        <div className='h-90 w-100 bg-amber-50 rounded-3xl mt-10 ml-5'>
            <img src={PP1}  className='h-15 w-15 rounded-4xl ml-5 mt-5 mb-5'/>
            <p className='-mt-15 ml-22 font-bold text-cyan-950'>Brooke Anet</p>
            <p className='mt-4 ml-2'>What impressed me most was how ClosePro connects you with agents based on real performance. The agent I was matched with had a strong closing record — and it showed. My property sold quicker than I expected.</p>
        </div>
    </div>
    </>
  )
}

export default Testimonial