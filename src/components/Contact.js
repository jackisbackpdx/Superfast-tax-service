import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';


export default function Contact() {

  
  const form = useRef();
    
  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs.sendForm('service_p1fzgbd', 'template_99swv0w', form.current, 'gx8lLP79wefnG8pRg')
    .then((result) => {
      console.log(result.text);
    }, (error) => {
      console.log(error.text);
    });
  };


    
    return (
      <div className='body'>

        <form ref={form} onSubmit={sendEmail} className='form'>

          <div class= "container">
            <div class="select">
              <select>
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
              /> 
          </label>

          <label for='email'>Email: 
            <input 
              type='text'
              className='email'
              name='user_email'
              /> 
          </label>

          <label for='subject'>Subject: 
            <input 
              type='text'
              className='subject'
              name='subject'
              /> 
          </label>

          <label for='message'>Message: 
            <textarea 
              type='text'
              className='message'
              name='message'
              /> 
          </label>
          <input type="submit" value="Send" />
        </form>
      </div>
    )
}
