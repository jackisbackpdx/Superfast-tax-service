import { Routes, Route } from 'react-router-dom'
import './App.css'
import './Embla.css'
import './Dropdown.css'

import Navbar from './components/Navbar'
import Body from './components/Body'
import Contact from './components/Contact'

function App() {
  return (
    <div className="App">
        <Navbar className='navbar'/>
        <Routes>
        <Route path="/" element={ <Body/> } />
        <Route path="/contact" element={ <Contact/> } />
      </Routes>
    </div>
  );
}

export default App;
