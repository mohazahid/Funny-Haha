// import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar'
import Home from './pages/home'
import About from './pages/about'
import Work from './pages/work'
import {Route, Routes} from 'react-router-dom'

function App() {
  return (
  <>
      
        <Routes> 
          <Route path="/" element={<Home />} />
          <Route path ="/work" element={<Work />} />
          <Route path ="/about" element={<About/>} />
        </Routes>

    </>
  )
}

export default App;
