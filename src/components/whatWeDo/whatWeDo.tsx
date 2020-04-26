import React from 'react';
import {WhatWeDoBar, ItemColumn, HeadText, CardDiv} from './whatWeDo.styles';
import CardComponent from '../card/card';

import Printing from '../../assets/printing.svg';
import Proofread from '../../assets/proof-read.svg'
import Branding from '../../assets/branding.svg'


const WhatWeDo = () => (
  <WhatWeDoBar>
    <ItemColumn>
      <HeadText>
        <h2>How we help our 
        clients to publish 
        their dreams</h2>
      </HeadText>
      <CardDiv>
        <CardComponent 
        image={Printing} 
        alt="Printing and Publishing of books and documents" 
        title="Printing and Publishing of books and documents" 
        bodyText="Ben Oketola Publications handles printing and publishing. Our works are top notch and world standards. "
/>
      </CardDiv>
    </ItemColumn>
    <ItemColumn>
      <CardDiv>
        <CardComponent
        image={Proofread} 
        alt="Proof-reading of articles and manuscripts" 
        title="Proof-reading of articles and manuscripts" 
        bodyText="Your materials cannot be strewn with errors, we at BOP ensure that we cover every line and word in your document."
/>
      </CardDiv>
      <CardDiv>
        <CardComponent
        image={Branding} 
        alt="Branding and Marketing of published works" 
        title="Branding and Marketing of published works" 
        bodyText="Ben Oketola Publications help to publicize and market your materials. We make sure that you get to your audience."
/>
      </CardDiv>
    </ItemColumn>
  </WhatWeDoBar>
)

export default WhatWeDo;
