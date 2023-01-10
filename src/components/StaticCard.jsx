import React from 'react'
import Img1 from '../assets/OG_Image_ARSB_66cefac2a6.jpg'

function StaticCard() {
  return (
    <div className="flex justify-between bg-gradient-to-r from-pink-500 to-pink-600 w-full h-full p-2">
   
            <div className='px-16 py-1'>
            <p className=' font-bold  text-white w-3/5 my-16 text-5xl'>
               Hello Nigga! 
               <br /> 
            </p>

               <p className='text-normal text-4xl text-white'>you wanna to go home? Check our services!</p>
            </div>
            
            <div className='w-72 h-72 rounded'>
                <img  className='rounded-lg' src={Img1}></img>
            </div>
  
    </div>
  )
}

export default StaticCard