import React from 'react';
import {CardDiv} from './card.styles';
import {StoryText} from '../banner/banner.styles';
import LearnMore from '../learnMore/learnMore';

const CardComponent = ({image, alt, title, bodyText }:any) => (
  <CardDiv>
    <img src={image} alt={alt} />
  <h3>{title}</h3>
  <StoryText>{bodyText}</StoryText>
   <LearnMore />
  </CardDiv>
)


export default CardComponent;
