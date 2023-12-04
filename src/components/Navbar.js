import React from 'react'
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className='navbar'>
        <ul className='list'>

          
            <div className='header-logo'>
              <Link className='link' to='/'>
                <li><img src={require('../assets/tax-service-logo.png')} alt='Tax preparer man over super fast tax service text'/></li>
              </Link>
            </div>
     

            <div className='header-links'>
              <li className='about'>About</li>
              
              <Link className='link' to='/contact'>
                <li className='contact'>Contact</li>
              </Link>
            </div>
        </ul>
    </div>
  )
}

export default Navbar