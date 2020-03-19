import React from 'react';
// import  { ReactComponent as MenuIcon} from "../../assets/menu_icon.svg"
import MenuIcon from "../../assets/menu_icon.svg"
// import MenuIcon from '../../assets/menu-icon'

import {LogoText, HeaderBar, SpaceBetween} from './header.styles'


const Header = ():JSX.Element => (
<HeaderBar>
  <LogoText>BOP</LogoText>
  <SpaceBetween />
   <img src={MenuIcon} />
  </HeaderBar>
  );

export default Header
