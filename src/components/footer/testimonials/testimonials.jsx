import React from 'react';

import {TestimonialDiv, TestimonialSlider} from './testimonials.styles'

const Testimonials = ()=>(
  <TestimonialDiv>
  <h1>What Our Clients Say</h1>
  
  <TestimonialSlider>
  <i class="fa fa-angle-left" aria-hidden="true" /> <img src='https://res.cloudinary.com/dxehksqg1/image/upload/v1575664489/icon_by3ywb.jpg' alt='client' /> <p className="text">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
 <p> - &nbsp;&nbsp; John Kaymar</p> 
    </p> <i class="fa fa-angle-right" aria-hidden="true" />
  </TestimonialSlider>
  </TestimonialDiv>
);
export default Testimonials;
