import {useState , useContext , useRef}  from 'react'
import { useNavigate } from 'react-router-dom'
import { useMutation , useQuery } from 'react-query';
import { API } from '../configs/apis';
import { UserContext } from '../contexts/userContext';



function Navbar() {


  
  // login button reference 


  var loginExitReference = useRef(null)


  var [loginStatus , updateLoginStatus] = useState(null)
  var [SignupStatus , updateSignupStatus] = useState(null)
  

  // Contaxt 
  var [state , dispatch] = useContext(UserContext)

  console.log(state)

  // signup state table

  const [signupData , setSignupData] = useState(); 

  const updateSignupData = e => {
    // e.preventDefault()
    // console.log(SignupData)
  
    setSignupData({...signupData,
      [e.target.name]: e.target.value
      
  })
  console.log(signupData)

  }

  var submitSignupData = useMutation(async (e)  => {

    try {

    e.preventDefault();

  
      // Configuration Content-type
      const config = {
        headers: {
          'Content-type': 'application/json',
        },
      };
  
      // Data body
      const body = JSON.stringify(signupData);
  
      // Insert data user to database
      const response = await API.post('/register', body, config);
  
      // Notification
      if (response.status == 200) {
        console.log("register successfully")
  
      } else {
     
        // setMessage(alert);
      }
    } catch (error) {
      updateSignupStatus(error.response.data.validator.errors)
     
      // setMessage(alert);
      console.log(error);
    }
  
  })

  // signini data

  const [signinData , setSigninData] = useState()
  var submitSigninData = useMutation(async (e) => {
    e.preventDefault();
    try {
  
      // Configuration Content-type
      const config = {
        headers: {
          'Content-type': 'application/json',
        },
      };
  
      // Data body
      const body = JSON.stringify(signinData);
  
      // Insert data user to database
      const response = await API.post('/login', body, config);
  
      if (response?.status === 200) {
  
        dispatch({
          type : "LOGIN_SUCCESS" , 
          payload : response.data.data
        })
        updateLoginStatus([{"msg" : "Login Berhasil!"}])
      setTimeout(function(){ updateLoginStatus(null) ;  loginExitReference.current.click() } , 2000)
     

  
        

  
      }
  
      // Handling response here
    } catch (error) {

      if(error.response.data.validator != null){

      console.log(error.response.data.validator.errors)
      updateLoginStatus(error.response.data.validator.errors)
      }else {
        updateLoginStatus([{"msg" : "data tidak ditemukan"}])
      }
      setTimeout(function(){ updateLoginStatus(null) } , 2000)

    }
  })
  
  const updateSigninData = e => {
      
    setSigninData({...signinData,
      [e.target.name]: e.target.value
      
  })

 



  }
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
            {(!state.isLogin) && <>  <li>
                    <label htmlFor='modal-register' className="btn font-semibold text-pink-600/100 border-4 border-pink-500/100 text-xl rounded px-3 py-1">Daftar</label>

          </li>
          <li>
          <label htmlFor='modal-login' className="btn bg-gradient-to-r from-pink-500 to-pink-400 text-white text-xl rounded px-4 py-2 text-xl btn-rounded px-3 py-1">Login</label>
          </li></>}
          {(state.isLogin)&& <><div className="dropdown dropdown-end z-[500]">
            {/* TODO: Profile */}
  <label tabIndex={0} className="rounded rounded-1 bg-gradient-to-r from-pink-500 to-pink-400 text-white text-xl px-4 py-2">User Navigation</label>
  <ul tabIndex={0} className=" my-2 bg-gray-100 dropdown-content menu p-2 shadow rounded-box w-52">
   {(!state.user.isAdmin) && <><li className='hover:bg-gray-400'><a>Tiket Saya</a></li>
    <li className='hover:bg-gray-400'><a>Payment</a></li> </>}
    {(state.user.isAdmin) && <li className='hover:bg-gray-400'><a>Tambah Tiket</a></li>}
    <li className='hover:bg-gray-400'><a>Logout</a></li>
  </ul>
</div></> }
          <li>



          </li>

        </ul>
      </div>
    </div>
  </nav>
                      {/* modal Register  */}
                      
                      <input type="checkbox" id="modal-register" className="modal-toggle" />
                      <div className="modal bg-gray-500/[.7] modal-middle">
                   <div className="modal-box bg-gray-100 z-50">
                   <label htmlFor="modal-register" className="btn border-0 bg-gray-300 btn-sm btn-circle absolute right-2 top-2">✕</label>
                   <form onSubmit={(e) => submitSignupData.mutate(e)} method="post">

                    <h3 className="font-bold text-6xl m-2 text-lg text-center">Daftar</h3>
                    {(SignupStatus != null) && SignupStatus.map((a) => {
                        return ( 
                          <div className="animate-bounce alert bg-yellow-400 my-3 shadow-lg">

                           <div className=''>
                        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <span>{a.msg}</span>
                      </div> </div>  )
                      }) }
                    <label htmlFor="">Nama Lengkap</label>
                    <input type="text" placeholder="Nama" name='fullname'  onChange={updateSignupData} class="input input-bordered w-full" />
                    <label htmlFor="">Username</label>
                    <input type="text" placeholder="Username" name='username'  onChange={updateSignupData} class="input input-bordered w-full" />
                    <label htmlFor="">Email</label>
                    <input type="email" placeholder="Email" name='email'  onChange={updateSignupData} class="input input-bordered w-full" />
                    <label htmlFor="">Password</label>
                    <input type="password" placeholder="Password" name='password'  onChange={updateSignupData} class="input input-bordered w-full" />
                    <button type='submit' className="my-3 bg-gradient-to-r from-pink-500 to-pink-400  w-full text-white text-xl rounded rounded-full px-4 py-2">Daftar Gan!</button>
                    </form>

                     </div>
                      </div>
                      {/* login  */}
                      <input type="checkbox" id="modal-login" className="modal-toggle" />
                      <div className="modal bg-gray-500/[.7] modal-middle">
                   <div className="modal-box bg-gray-100 z-50">
                   <label htmlFor="modal-login" ref={loginExitReference} className="btn border-0 bg-gray-300 btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-6xl m-2 text-lg text-center">Login</h3>
                    
                      {(loginStatus != null) && loginStatus.map((a) => {
                        return ( 
                          <div className="animate-bounce alert bg-yellow-400 my-3 shadow-lg">

                           <div className=''>
                        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <span>{a.msg}</span>
                      </div> </div>  )
                      }) }


                  <form onSubmit={(e) => submitSigninData.mutate(e)}>
                    <label htmlFor="">Username</label>
                    <input type="text" placeholder="Username" onChange={updateSigninData} name="username" class="input input-bordered w-full" />
                    <label htmlFor="">Password</label>
                    <input type="password" placeholder="Password" onChange={updateSigninData} name='password' class="input input-bordered w-full" />
                    <button className="my-3 bg-gradient-to-r from-pink-500 to-pink-400  w-full text-white text-xl rounded rounded-full px-4 py-2">Login gan!</button>
                    </form>

                  <div className="modal-action">
                   </div>
                     </div>
                      </div>
                      </>
  )
}

export default Navbar