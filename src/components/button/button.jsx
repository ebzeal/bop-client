import React from 'react';
import {ButtonBox, SmallButtonBox} from './button.styles'


const Button = ({buttonText, smallButton}) => (
  smallButton ? <SmallButtonBox> {buttonText} </SmallButtonBox> : <ButtonBox>{buttonText}</ButtonBox>
);

export default Button
