import React from 'react';
import {Helmet} from 'react-helmet'

import {MarginedBody} from './servicePage.styles';

import WhatWeDo from '../../components/whatWeDo/whatWeDo';





const servicePage = ():JSX.Element => (
  <>
  <Helmet title='Ben Oketola Publications - Our Services' />
  <MarginedBody>
  <WhatWeDo />
  </MarginedBody>
  </>
)

export default servicePage
