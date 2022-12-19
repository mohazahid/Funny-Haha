// import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar'
import Home from './pages/home'
import AboutMe from './pages/aboutme'
import {Route, Routes} from 'react-router-dom'

function App() {
  return (
  <>
    <Navbar />
      <div className="containers">
        <Routes> 
          <Route path="/" element={<Home />} />
          <Route path ="/aboutme" element={<AboutMe />} />
        </Routes>
      </div>
    </>
  )
}

export default App;

