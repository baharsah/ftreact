import React from 'react'
import VT from '../assets/vt.png'

function DetailTicket() {
  return (
    <>
    <h1 className='m-4 text-center font-bold text-xl'>Tiket Saya</h1>
    <div className='flex max-md:flex-col'>
    <div className="m-16 border rounded rounded-8 border-8">
    <img  src={VT} width={"20%"} height={"20%"}/>
    <div className="flex m-8 justify-evenly max-md:flex-col flex-wrap w-full">
      <div className='px-16'>
        <h1 className='font-bold text-2xl'>Argo Wilis</h1>
        <p>Eksekutif</p>
        <p className="text-yellow-600 bg-yellow-200 p-2 text-center rounded-8 m-2">Pending</p>
      </div>
      <div>
      <ol className="border-l border-l-4 border-pink-400">
  <li>
    <div className="flex flex-start items-center pt-3">
      <div className="animate-ping border-pink-600 border border-3 bg-white w-4 h-4 rounded-full -ml-2 mr-3"></div>
      <div className="border-pink-600 border border-3 bg-white w-4 h-4 rounded-full -ml-7 mr-3"></div>
      <p className="text-gray-500 text-sm">12 Febuari 2022 12:00</p>
    </div>
    <div className="mt-0.5 ml-4 mb-6">
      <h4 className="text-gray-800 font-semibold text-xl mb-1.5">Jakarta (GMR)</h4>
      <p className="text-gray-500 mb-3"> Stasiun Gambir</p>
    </div>
  </li>
  <li>
    <div className="flex flex-start items-center pt-3">
      <div className="bg-pink-600 border border-3 bg-white w-4 h-4 rounded-full animate-ping -ml-2 mr-3"></div>
      <div className="bg-pink-600 border border-3 bg-white w-4 h-4 rounded-full -ml-7 mr-3"></div>
      <p className="text-gray-500 text-sm">13 Febuari 2022 16:00</p>
    </div>
    <div className="mt-0.5 ml-4 mb-6">
      <h4 className="text-gray-800 font-semibold text-xl mb-1.5">Surabaya (SBY)</h4>
      <p className="text-gray-500 mb-3">Stasiun Surabaya</p>
    </div>
  </li>
</ol>
      </div>
      <div>
        <h1 className='text-4xl mx-32 font-bold'>Tiket Kereta Api</h1>
        <h1 className='text-2xl mx-32 text-gray-400'>Sabtu, 3 Desember 2022</h1>
      </div>


    </div>
    <div classname="overflow-x-auto m-32">
  <table className="table w-full">
    {/* <!-- head --> */}
    <thead>
      <tr>
        <th>Tanda Pengenal</th>
        <th>Nama Pemesan</th>
        <th>No Telepon</th>
        <th>Email</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* <!-- row 1 --> */}
      <tr>
        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
        <td>Blue</td>
        <td>Blue</td>
        <td>

        </td>
        <td>
        </td>
      </tr>
    </tbody>
  </table>
</div>
    </div>
    <div className='bg-gray-300 h-1/2 w-full my-8 mx-2'>
      <div className=''>
        <h1 className='text-2xl font-bold text-center'>Tiket Kereta Api</h1>
        <h1 className='text-lg text-center'>Sabtu, 3 Desember 2021</h1>
        <div className='w-full p-3 bg-gray-100'>
          <h1 className=' text-2xl font-bold'>Argo Wilis</h1>
          <h1 className=' text-2xl'>Total Price</h1>
          <h1 className=' text-lg'>Rp 200.000 * 2 (Adult) * 1 (Child)</h1>
          <h1 className=' text-2xl font-bold text-pink-400'> Rp. 500.000</h1>
          {/* The button to open modal */}
<label htmlFor="my-modal" className="bg-gradient-to-r m-3 btn from-pink-500 to-pink-400 text-white text-xl rounded px-4 py-2 font-bold">Detail</label>
<button className="bg-gradient-to-r from-pink-500 to-pink-400 text-white text-xl rounded px-4 py-2 font-bold">Pay Now</button>


{/* Put this part before </body> tag */}
<input type="checkbox" id="my-modal" className="modal-toggle" />
<div className="modal modal-bottom bg-gray-50/[.6]">
  <div className="modal-box  bg-gray-100">

    <label htmlFor="my-modal" className="btn border-0 bg-gray-300 btn-sm btn-circle absolute right-2 top-2">✕</label>


    <div className="m-16 bg-white border rounded rounded-8 border-8">
    <img  src={VT} width={"20%"} height={"20%"}/>
    <div className="flex m-8 justify-evenly max-md:flex-col flex-wrap w-full">
      <div className='px-16'>
        <h1 className='font-bold text-2xl'>Argo Wilis</h1>
        <p>Eksekutif</p>
        {/* <p className="text-yellow-600 bg-yellow-200 p-2 text-center rounded-8 m-2">Pending</p> */}
      </div>
      <div>
      <ol className="border-l border-l-4 border-pink-400">
  <li>
    <div className="flex flex-start items-center pt-3">
      <div className="animate-ping border-pink-600 border border-3 bg-white w-4 h-4 rounded-full -ml-2 mr-3"></div>
      <div className="border-pink-600 border border-3 bg-white w-4 h-4 rounded-full -ml-7 mr-3"></div>
      <p className="text-gray-500 text-sm">12 Febuari 2022 12:00</p>
    </div>
    <div className="mt-0.5 ml-4 mb-6">
      <h4 className="text-gray-800 font-semibold text-xl mb-1.5">Jakarta (GMR)</h4>
      <p className="text-gray-500 mb-3"> Stasiun Gambir</p>
    </div>
  </li>
  <li>
    <div className="flex flex-start items-center pt-3">
      <div className="bg-pink-600 border border-3 bg-white w-4 h-4 rounded-full animate-ping -ml-2 mr-3"></div>
      <div className="bg-pink-600 border border-3 bg-white w-4 h-4 rounded-full -ml-7 mr-3"></div>
      <p className="text-gray-500 text-sm">13 Febuari 2022 16:00</p>
    </div>
    <div className="mt-0.5 ml-4 mb-6">
      <h4 className="text-gray-800 font-semibold text-xl mb-1.5">Surabaya (SBY)</h4>
      <p className="text-gray-500 mb-3">Stasiun Surabaya</p>
    </div>
  </li>
</ol>
      </div>
      <div>
        <h1 className='text-4xl mx-32 font-bold'>Tiket Kereta Api</h1>

        <h1 className='text-2xl mx-32 text-gray-400'>Sabtu, 3 Desember 2022</h1>
        <h1 className='text-sm mx-32 text-gray-400'>Ticket ID : JKSF-EFR-ME-2202-4444</h1>
        <h1 className='text-sm mx-32 text-gray-400'>ORDER ID : TIC-440UA</h1>

      </div>


    </div>
    <div classname="overflow-x-auto m-32">
  <table className="table w-full">
    {/* <!-- head --> */}
    <thead>
      <tr>
        <th>Tanda Pengenal</th>
        <th>Nama Pemesan</th>
        <th>No Telepon</th>
        <th>Email</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* <!-- row 1 --> */}
      <tr>
        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
        <td>Blue</td>
        <td>Blue</td>
        <td>

        </td>
        <td>
        </td>
      </tr>
    </tbody>
  </table>
</div>
    </div>
  </div>
</div>



          
        </div>
      </div>
    </div>
    </div>
   </>

 )
}

export default DetailTicket