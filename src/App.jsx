import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import { BrowserRouter as Router, Routes ,Route } from 'react-router-dom';
import DetailTicket from './components/DetailTicket';

// TODO Mocking 
function App() {

  return (
    <Router>
<Navbar>
</Navbar>
    
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/detail/:id" element={<DetailTicket/>}></Route>
      </Routes>
      <Footer>
      </Footer>
    
 
    
    </Router>
  )
}

export default App
