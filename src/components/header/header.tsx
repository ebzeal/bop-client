import React from 'react';
import MenuIcon from "../../assets/menu_icon.svg";

import {LogoText, HeaderBar, SpaceBetween} from './header.styles'


const Header = ():JSX.Element => (
<HeaderBar>
  <h1>BOP</h1>
  <SpaceBetween />
   <img src={MenuIcon} />
  </HeaderBar>
  );

export default Header
