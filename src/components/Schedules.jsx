import React , { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaSpinner } from "react-icons/fa";


function Schedules() {

  var [isLoading, changeIsLoading] = useState(true)
var handleLoading = () => { setTimeout(() =>{} , 9000 ); changeIsLoading(false); }


 var  navigate = useNavigate()
  return (
    <div className="overflow-x-auto mx-32">
  <table className="table w-full">
    {/* <!-- head --> */}
    <thead>
      <tr>
        <th></th>
        <th>Train</th>
        <th>Arrival</th>
        <th>Depature</th>
        <th>Price Per Person </th>

      </tr>
    </thead>
    <tbody>
      {/* <!-- row 1 --> */}
      <tr>
        <th>1</th>
        <td>Gandalion Train </td>
        <td>30 December 2022 12:30 WIB</td>
        <td>2 January 2023 03:30 WIB</td>
        <td className='font-bold'>Rp. 300.000</td>
        <td>
        <div className=' flex'>
            <label className="font-bold m-3" htmlFor="">Dewasa</label>
            <input type="number"  name="dewasa" className='w-1/2 border-4 bg-gray-100 rounded h-9'/>
            </div>
            <div className=''>
            <label className="font-bold m-3" htmlFor="">bayi</label>
            <input type="number"  name="bayi" className='w-1/2 border-4 bg-gray-100 rounded h-9'/>

            </div>
        <button className="m-3 bg-gradient-to-r from-pink-500 to-pink-400 text-white text-xl rounded px-4 py-2 font-bold">Order Now</button>


        </td>
      </tr>
      {/* <!-- row 2 --> */}
      <tr onClick={() => {navigate("/detail/1")}}>
        <th>1</th>
        <td>Gandalion Train</td>
        <td>30 December 2022 12:30 WIB</td>
        <td>2 January 2023 03:30 WIB</td>
        <td className='font-bold'>Rp. 300.000</td>
        <td>
        <div className='flex'>
            <label className="font-bold m-3" htmlFor="">Dewasa</label>
            <input type="number"  name="dewasa" className='w-1/2 border-4 bg-gray-100 rounded h-9'/>
            </div>
            <div className=''>
            <label className="font-bold m-3" htmlFor="">bayi</label>
            <input type="number"  name="bayi" className='w-1/2 border-4 bg-gray-100 rounded h-9'/>

            </div>
        <button className="m-3 bg-gradient-to-r from-pink-500 to-pink-400 text-white text-xl rounded px-4 py-2 font-bold">Order Now</button>


        </td>
      </tr>
      {/* <!-- row 3 --> */}
      <tr onClick={() => {navigate("/detail/1")}}>
        <th>1</th>
        <td>Gandalion Train</td>
        <td>30 December 2022 12:30 WIB</td>
        <td>2 January 2023 03:30 WIB</td>
        <td className='font-bold'>Rp. 300.000
    
        </td>
        <td>
        <div className='flex'>
            <label className="font-bold m-3" htmlFor="">Dewasa</label>
            <input type="number"  name="dewasa" className='w-1/2 border-4 bg-gray-100 rounded h-9'/>
            </div>
            <div className='w-full'>
            <label className="font-bold m-3" htmlFor="">bayi</label>
            <input type="number"  name="bayi" className='w-1/2 border-4 bg-gray-100 rounded h-9'/>

            </div>
          <button className=" m-3 bg-gradient-to-r from-pink-500 to-pink-400 text-white text-xl rounded px-4 py-2 font-bold">Order Now</button>


        </td>
      </tr>
    </tbody>
  </table>
</div>
  )
}

export default Schedules