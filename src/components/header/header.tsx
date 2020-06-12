import React, {useState} from 'react';
import MenuIcon from "../../assets/menu_icon.svg";
import Menu from '../header/menu/menu';

import {LogoText, HeaderBar, SpaceBetween} from './header.styles'


const Header = ():JSX.Element => {

  const [showMenu, setShowMenu] = useState(false);
  return(
  <>
  {showMenu ? <Menu /> : null }
<HeaderBar>
  <h1>BOP</h1>
  <SpaceBetween />
  <button onClick={()=> setShowMenu(!showMenu)}><i className={ showMenu ? "fa fa-times fa-2x" : "fa fa-bars fa-2x"}  aria-hidden="true" /></button>
    </HeaderBar>
  </>
  )
};

export default Header
