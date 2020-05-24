import React from 'react';

import ContactDetails from './contactDetails';
import {ContactAllDiv, ContactDiv, ContactText, ContactButton} from './contact.styles';

const Contact=()=>(
  <ContactAllDiv>
  <ContactDiv>
    <ContactText>
    <h1>Do you want us to 
handle your next publication?</h1>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
</ContactText>
<ContactButton><button>Let's Talk</button></ContactButton>

  </ContactDiv>
<ContactDetails />
  </ContactAllDiv>
)

export default Contact;
