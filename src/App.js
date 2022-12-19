import './App.css';
import Navbar from './Navbar'
import Home from './pages/home'
import AboutMe from './pages/aboutme'
import './styles.css'
// import Game from './pages/game'
// import Credits from './pages/credits'
// import Logs from './pages/logs'
import {Route, Routes} from 'react-router-dom'

function App() {
  <>
    <Navbar />
      <div className="containers">
        <Routes> 
          <Route path="/" element={<Home />} />
          <Route path ="/aboutme" element={<AboutMe />} />
          {/* <Route path ="/" element={<Credits />} />
          <Route path ="/" element={<Logs />} />  */}
        </Routes>
      </div>
  </>
}

export default App;
