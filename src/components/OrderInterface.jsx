import React from 'react'
import { Train  } from 'react-ionicons'

function OrderInterface() {
  return (
    <div className='w-4/3 h-1/2 bg-gray-100 rounded ronded-4 mx-16 -my-3 py-2 shadow-lg flex'>
        <div>
            <div>
                <h1 
                className='bg-white py-3 px-2 font-bold text-pink-600 border-l-4 hover:border-l-8 active:bg-pink-700 hover:bg-pink-500 hover:text-blue-50 border-yellow-400 text-lg px-16'>
                    
                    Tiket Kereta Api
                    </h1>
            </div>
        </div>
        <div className='p-3 bg-white'>
            <h1 className=' text-2xl'>
                Tiket Kereta Api
            </h1>
            <form>
            <div className='flex '>
            <div className='m-3'>
            <label className="font-bold" htmlFor="">Dari</label>
            <input type="text"  name="from" className='w-full border-4 bg-gray-100 rounded h-9'/>
            </div>
            <div className='m-3'>
            <label className="font-bold" htmlFor="">Ke</label>
            <input type="text"  name="to" className='w-full border-4 bg-gray-100 rounded h-9'/>
            </div>

            </div>
            </form>

        </div>
    </div>
  )
}

export default OrderInterface