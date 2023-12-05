import Carousel from '../accessories/Carousel';
import Call from './Call';
import Reviews from './Reviews';
import React from 'react';

const OPTIONS = { containScroll: 'trimSnaps' }
const SLIDE_COUNT = 3
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

function Body() {
  return (
    <div>
        <Carousel slides={SLIDES} options={OPTIONS}/>
        <div>
          <h1>Visit us at one of our 3 locations!</h1>
        </div>
        <iframe src="https://snazzymaps.com/embed/547741" 
        title='Locations'
        className='map'
        width="100%" height="600px" style={{border: 'none;'}}>
        </iframe>
        <div className='action'>
          <Call/>
          <Reviews/>
        </div>
    </div>
  )
}

export default Body