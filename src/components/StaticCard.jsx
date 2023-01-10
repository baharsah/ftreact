import React from 'react'
import Img1 from '../assets/OG_Image_ARSB_66cefac2a6.jpg'

function StaticCard() {
  return (
    <div className='bg-gradient-to-r from-pink-500 to-red-400 py-16 px-16'>
    <div className="flex justify-between w-full h-full p-3">
   
            <div className='py-1'>
            <p className=' font-bold  text-white w-3/5 my-8 text-5xl'>
               Hello World! 
               <br /> 
            </p>

               <p className='text-normal text-4xl text-white'>you wanna to go home? Check our services!</p>
            </div>
            
            <div className='w-1/4 h-1/4 py-5 rounded relative'>
                <img  className='rounded-lg absolute border-8' src={Img1}></img>
            <img  className='rounded-lg absolute -translate-y-7 translate-x-7 border-8' src={Img1}></img>

            </div>

  
    </div>
    </div>
  )
}

export default StaticCard