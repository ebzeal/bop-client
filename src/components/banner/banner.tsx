import React, { Fragment } from 'react';
import {BannerDiv, TitleText, StoryText, BannerImage} from './banner.styles';
import Button from '../button/button';


const Banner = (props):JSX.Element => {
  
  const {titleText, storyText, button, buttonText, image, imgAlt} = props
  console.log("image", image)
  return(
  <BannerDiv>
    <div>
     <TitleText>{titleText}</TitleText>
     <StoryText>{storyText}</StoryText>
      { button ? <Button buttonText={buttonText} /> : ''}
    </div>
    <div>
      <BannerImage> <img src={image} alt={imgAlt} /> </BannerImage>
  </div>
  </BannerDiv>
)};

export default Banner
