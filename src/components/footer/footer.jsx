import React from 'react';

import Testimonials from './testimonials/testimonials';
import Contact from './contact/contact';

import {FooterBg} from './footer.styles';

const Footer = () =>(
  <FooterBg>
    <Testimonials />
    <Contact />
  </FooterBg>
)

export default Footer;
