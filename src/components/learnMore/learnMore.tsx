import React from 'react';

import Arrow from '../../assets/arrow.svg';
import {LearnMoreDiv, LearnMoreText, LearnMoreArrow} from './learnMore.styles';

const LearnMore = ({}) => (
  <LearnMoreDiv>
    <LearnMoreText>Learn More</LearnMoreText>
    <LearnMoreArrow><img src={Arrow} alt=""/></LearnMoreArrow>
  </LearnMoreDiv>
)

export default LearnMore;
