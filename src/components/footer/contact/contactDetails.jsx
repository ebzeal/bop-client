import React from 'react';

import {ContactDetailsDiv} from './contact.styles';

const ContactDetails=()=>(
  <ContactDetailsDiv>
    <div>
      <h2>BOP</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      <p>+62-812-7313-4321</p>
      <p>benoketolapublications@gmail.com</p>
    </div>
  
  <div>
    <h2>About Us</h2>
    <p className="link">About</p>
    <p className="link">What We do</p>
    <p className="link">Project</p>
    <p className="link">Contact Us</p>
  </div>
  <div>
    <h2>Follow Us</h2>
    <p className="link">Instagram</p>
    <p className="link">Facebook</p>
    <p className="link">LinkedIn</p>
    <p className="link">Twitter</p>
  </div>
  </ContactDetailsDiv>
)

export default ContactDetails;
