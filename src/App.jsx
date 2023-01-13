import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
// import { useContext , useState } from 'react'
import { UserContextProvider , UserContext } from './contexts/userContext'
import { ReactQueryDevtools  } from 'react-query/devtools'
import { useEffect , useContext , useState } from 'react'
import { BrowserRouter as Router, Routes ,Route } from 'react-router-dom';
import DetailTicket from './components/DetailTicket';
import { QueryClient ,  QueryClientProvider } from 'react-query'
import { API , setAuthToken } from './configs/apis'


function ServiceProvider() {


  var [loading, setIsloading] = useState(true)



// var   navigate = useNavigate()

const [ state, dispatch ] = useContext(UserContext);

  

useEffect(() => {

  
  if (localStorage.getItem('token')) {
    setAuthToken(localStorage.getItem("token"));
    setIsloading(false)
  }else{
    setIsloading(false)
  }

  // Redirect Auth
  if (state.isLogin === false) {
    // navigate('/auth');
  } else {
    if (state.user.status === 1) {

    } else if (state.user.status === 0) {
    
    }
  }
}, [state]);



const checkUser = async () => {
  try {
    const response = await API.get('/check-auth');

    // If the token incorrect
    console.log("Status" , response)



    if(response?.data.data.code == 401){
      console.log("respon unautoriuzed")
      setIsloading(false)
      return dispatch({
        type: 'AUTH_ERROR',
      });

    }
    if (response?.data.data.code == 404) {
      setIsloading(false)
      return dispatch({
        type: 'AUTH_ERROR',
      });
      
    }

   

    // Get user data
    let payload = response.data.data;
    
    // Get token from local storage
    payload.token = localStorage.getItem("token");

    // Send data to useContext
    dispatch({
      type: 'USER_SUCCESS',
      payload,
    });
    setIsloading(false)
  } catch (error) {
    console.log(error);
  }
};

useEffect(() => {
  if (localStorage.getItem("token") != null) {
    checkUser();
  }
}, []);

const client = new QueryClient()

  return (
      <QueryClientProvider client={client}>

    <Router>
<Navbar>
</Navbar>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/detail/:id" element={<DetailTicket/>}></Route>
      </Routes>
      <Footer>
      </Footer>
        <ReactQueryDevtools initialIsOpen={false} />
    </Router>

    </QueryClientProvider>
  )
  
}



function App() {





  return (<UserContextProvider>
    <ServiceProvider>

    </ServiceProvider>
    </UserContextProvider>
  )
}

export default App
