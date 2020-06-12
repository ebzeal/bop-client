import styled, {keyframes} from "styled-components";
import { bounceInDown } from 'react-animations';

const bounceInDownAnimation = keyframes`${bounceInDown}`;

const MenuBar =  styled.div`
animation: .5s ${bounceInDownAnimation};
  padding: 20px 5%;
  flex-wrap: wrap;
  justify-content: space-around;
  background: rgba(0,0,0, 0.6);
  color: #fff;
 p {
   cursor: pointer;
  &:hover{
    color:rgba(0,0,0, 0.8);
  }
}

@media (min-width: 450px){ 
  display: flex;
 }
`;


export {MenuBar}
