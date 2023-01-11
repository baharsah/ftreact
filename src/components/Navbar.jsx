import React from 'react'
import { useNavigate } from 'react-router-dom'



function Navbar() {

  var navigate = useNavigate()
  return (
    <>
    <nav className="px-2 sm:px-4 py-2.5 flex">
    <div class="container  drop-shadow-lg flex flex-wrap items-center justify-between mx-auto">
        {/* TODO: Change Logo  */}
        {/* TODO: Create Register and Login */}
      <a href="#" class="flex flex-row items-center hover:bg-pink-400" onClick={() => {navigate('/')}}>
          <span class="self-center text-4xl font-bold whitespace-nowrap text-pink-400 hover:text-pink-100 p-3">Landtik</span>
          </a>
      <div class="w-full md:block md:w-auto" id="navbar-default">
        <ul class="flex p-4 mt-4 flex-row space-x-8 mt-0 text-sm font-medium border-0">
        <li>
                    <label htmlFor='my-modal-6' className="btn font-semibold text-pink-600/100 border-4 border-pink-500/100 text-xl rounded px-3 py-1">Daftar</label>

          </li>
          <li>
                    <button className="bg-gradient-to-r from-pink-500 to-pink-400 text-white text-xl rounded px-4 py-2">Login</button>
          </li>
          <div className="dropdown dropdown-end z-[500]">
  <label tabIndex={0} className="rounded rounded-1 bg-gradient-to-r from-pink-500 to-pink-400 text-white text-xl px-4 py-2">Profile</label>
  <ul tabIndex={0} className=" my-2 bg-gray-100 dropdown-content menu p-2 shadow rounded-box w-52">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>
          <li>



          </li>

        </ul>
      </div>
    </div>
  </nav>
                      {/* modal Register  */}
                      
                      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
                      <div className="modal bg-gray-500/[.7] modal-bottom">
                   <div className="modal-box bg-gray-100 z-50">
                   <label htmlFor="my-modal-6" className="btn border-0 bg-gray-300 btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-6xl m-2 text-lg text-center">Daftar</h3>
                    <label htmlFor="">Nama Lengkap</label>
                    <input type="text" placeholder="Nama" class="input input-bordered w-full m-3" />
                    <label htmlFor="">Username</label>
                    <input type="text" placeholder="Username" class="input input-bordered w-full m-3" />
                    <label htmlFor="">Email</label>
                    <input type="email" placeholder="Email" class="input input-bordered w-full m-3" />
                    <label htmlFor="">Password</label>
                    <input type="password" placeholder="Password" class="input input-bordered w-full m-3" />
                    
                  <div className="modal-action">
                   {/* <label htmlFor="my-modal-6" className="btn">Yay!</label> */}
                   </div>
                     </div>
                      </div>
                      </>
  )
}

export default Navbar