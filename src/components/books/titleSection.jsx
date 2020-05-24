import React from 'react';
import {TitleDiv, HeadText} from './books.styles';
import {StoryText} from '../banner/banner.styles';


const TitleSection = () => (
    <TitleDiv>
      <HeadText>
        <h2>Published Books</h2>
      </HeadText>
      <StoryText>
      We take pride in top notch publications, leaving a legacy of excellence and  quality standards ion every page we print.
Here are some of our recent works...
      </StoryText>
    </TitleDiv>
);

export default TitleSection;
