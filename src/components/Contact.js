import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';

import MtVernonMap from '../accessories/MtVernonMap'
import EverettMap from '../accessories/EverettMap';
import KennewickMap from '../accessories/KennewickMap';

export default function Contact() {

  const [location, setLocation] = useState('')
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [service_ID, setService_ID] = useState('service_p1fzgbd');
  const [template_ID, setTemplate_ID] = useState('template_99swv0w');
  const [publicKey, setPublicKey] = useState('gx8lLP79wefnG8pRg')

  let Map;

  if(location === '') {
    Map = MtVernonMap;
  }
  if(location === '(360) 424-5124') {
    Map = MtVernonMap;
  }
  if(location === '(425)-353-2664') {
    Map = EverettMap;
  }
  if(location === '(509) 582-0320') {
    Map = KennewickMap;
  }

  const form = useRef();
    
  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs.sendForm(service_ID, template_ID, form.current, publicKey)
    .then((result) => {
      console.log(result.text);
    }, (error) => {
      console.log(error.text);
    });

    setName('')
    setEmail('')
    setSubject('')
    setMessage('')
  };
    
  const handleChange = (e) => {
    if(e.target.name === 'location') {
      setLocation(e.target.value)
      if(e.target.value === '(360) 424-5124') {
        setService_ID('service_p1fzgbd');
        setTemplate_ID('template_99swv0w');
        setPublicKey('gx8lLP79wefnG8pRg');
        Map = MtVernonMap;
      }
      if(e.target.value === '(425)-353-2664') {
        setService_ID('service_zjkdxl5');
        setTemplate_ID('template_j9j9qvi');
        setPublicKey('NwTjMqLzW-XLMd845');
      }
    } 
    if(e.target.name === 'user_name') {
      setName(e.target.value)
    }
    if(e.target.name === 'user_email') {
      setEmail(e.target.value)
    }
    if(e.target.name === 'subject') {
      setSubject(e.target.value)
    }
    if(e.target.name ===  'message') {
      setMessage(e.target.value) 
    }
  } 

    return (
      <div className='body'>

        <form ref={form} onSubmit={sendEmail} className='form'>

          <div class= "container contact-location">
            <div class="select" >
              <select name='location' onChange={handleChange}>
                <option value='(360) 424-5124'>Mt. Vernon</option>
                <option value='(425)-353-2664' >Everett</option>
                <option value='(509) 582-0320'>Kennewick</option>
              </select>
            </div>
          </div> 

          <label for='name'> Name:
            <input 
              type='text'
              className='name'
              name='user_name'
              value={name}
              onChange={handleChange}
              /> 
          </label>

          <label for='email'>Email: 
            <input 
              type='text'
              className='email'
              name='user_email'
              value={email}
              onChange={handleChange}
              /> 
          </label>

          <label for='subject'>Subject: 
            <input 
              type='text'
              className='subject'
              name='subject'
              value={subject}
              onChange={handleChange}
              /> 
          </label>

          <label for='message'>Message: 
            <textarea 
              type='text'
              className='message'
              name='message'
              value={message}
              onChange={handleChange}
              /> 
          </label>
          <input type="submit" className='submit' value="Send" />
        </form>

        <Map className='location-map'/>

      </div>
    )
}