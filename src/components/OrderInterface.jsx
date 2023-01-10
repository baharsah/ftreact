import React , {useState} from 'react'
import { Train  } from 'react-ionicons'



function OrderInterface() {

    var [tikName , setTikName] = useState("Kereta Api")
  return (
    <div className='w-4/3 h-1/2 bg-gray-100 rounded ronded-4 mx-16 -mt-6 mb-7 py-1 shadow-lg flex'>
        <div>
            <div onClick={() => {setTikName("Kereta Api")}}>
                <h1 
                className='my-2 bg-white py-3 px-1 font-bold text-pink-600 border-l-4 hover:border-l-8 active:bg-pink-700 hover:bg-pink-500 hover:text-blue-50 border-yellow-400 text-lg px-16'>
                    
                    Tiket Kereta Api
                    </h1>
            </div>
            <div onClick={() => {setTikName("Pesawat")}}>
                <h1 
                className='my-2 bg-white py-3 px-1 font-bold text-pink-600 border-l-4 hover:border-l-8 active:bg-pink-700 hover:bg-pink-500 hover:text-blue-50 border-yellow-400 text-lg px-16'>
                    
                    Tiket Pesawat
                    </h1>
            </div>
        </div>
        <div className='p-3 bg-white'>
            <h1 className=' text-2xl'>
                Tiket {tikName}
            </h1>
            <form>
            <div className='flex flex-wrap'>
            <div className='m-3 w-1/4'>
            <label className="font-bold" htmlFor="">Dari</label>
            <input type="text"  name="from" className='w-full border-4 bg-gray-100 rounded h-9'/>
            </div>
            <div className='m-3 w-1/4'>
            <label className="font-bold" htmlFor="">Ke</label>
            <input type="text"  name="to" className='w-full border-4 bg-gray-100 rounded h-9'/>
            </div>
            <div className='m-3 w-1/4'>
            <label className="font-bold" htmlFor="">Tanggal Berangkat</label>
            <input type="datetime-local"  name="date-berangkat" className='w-full border-4 bg-gray-100 rounded h-9'/>
            </div>
            <div className='m-3 w-1/4'>
            <label className="font-bold" htmlFor="">Dewasa</label>
            <input type="number"  name="dewasa" className='w-full border-4 bg-gray-100 rounded h-9'/>
            </div>
            <div className='m-3 w-1/4'>
            <label className="font-bold" htmlFor="">bayi</label>
            <input type="number"  name="bayi" className='w-full border-4 bg-gray-100 rounded h-9'/>
            </div>
            <div className='m-3 w-1/4'>
            <button className="bg-gradient-to-r from-pink-500 to-pink-400 text-white text-xl rounded px-4 py-2">Cari Tiket</button>
            </div>
            

            </div>
            </form>

        </div>
    </div>
  )
}

export default OrderInterface