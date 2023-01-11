import React , { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaSpinner } from "react-icons/fa";


function Schedules() {

  var [isLoading, changeIsLoading] = useState(true)
var handleLoading = () => { setTimeout(() =>{} , 9000 ); changeIsLoading(false); }


 var  navigate = useNavigate()
  return (
    <div className="overflow-x-auto mx-32">
      {/* TODO: Update Modal */}
      {/* The button to open modal */}
<label htmlFor="my-modal" className="btn">open modal</label>

{/* Put this part before </body> tag */}
<input type="checkbox" id="my-modal" className="modal-toggle" />
<div className="modal ">
  <div className="modal-box bg-pink-500 box-shadow-lg hover:bg-pink-600">
    {isLoading && <FaSpinner className="animate-spin text-white h-1/4 w-1/4 m-auto" /> }
    {  !isLoading && <><h3 className="font-bold text-lg text-white">Congratulations random Internet user!</h3>
    <p className="py-4 text-white">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
    <div className="modal-action">
      <label htmlFor="my-modal" className="btn">Yay!</label>
    </div></>}
  </div>
</div>
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
        <button className="m-3 bg-gradient-to-r from-pink-500 to-pink-400 text-white text-xl rounded px-4 py-2 font-bold">Order</button>


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
        <button className="m-3 bg-gradient-to-r from-pink-500 to-pink-400 text-white text-xl rounded px-4 py-2 font-bold">Order</button>


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
          <button className=" m-3 bg-gradient-to-r from-pink-500 to-pink-400 text-white text-xl rounded px-4 py-2 font-bold">Order</button>


        </td>
      </tr>
    </tbody>
  </table>
</div>
  )
}

export default Schedules