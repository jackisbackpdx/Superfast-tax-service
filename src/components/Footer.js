import React from 'react'

export default function Footer() {
  return (
    <div className='footer'>
        <div className='info'>
    
            <a className='facebook-link' href='https://www.facebook.com/SuperfastTaxServiceMV/' rel='noreferrer' target='_blank'>
                <img className='facebook-logo' src={require('../assets/facebook-logo.png')} alt='go to facebook page'/>
            </a>
            <div className='line'></div>
            <p>&copy;2025 superfasttaxservice.com</p>
        </div>
    </div>
  )
}
