import React from 'react';
import { withRouter } from 'react-router-dom';
import {MenuBar} from './menu.styles'


const Menu = ({ history }):JSX.Element => (
  <MenuBar>
  <p onClick={() => history.push('/')}>Home</p>
  {/* <p onClick={() => history.push('/about')}>About Us</p> */}
  <p onClick={() => history.push('/services')}>Services</p>
  <p onClick={() => history.push('/publications')}>Publications</p>
  {/* <p onClick={() => history.push('/articles')}>Articles</p> */}
  <p onClick={() => history.push('/contact-us')}>Contact Us</p>
  </MenuBar>
);

export default withRouter(Menu);
