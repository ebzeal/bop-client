import React from 'react';
import {Helmet} from './node_modules/react-helmet'
import ProjectManagement from '../../assets/projectManagement.svg';

import {MarginedBody} from './aboutPage.styles';

import Banner from '../../components/banner/banner';
import WhatWeDo from '../../components/whatWeDo/whatWeDo';
import PublishedBooks from '../../components/books/publishedBooks';





const AboutPage = ():JSX.Element => (
  <>
  <Helmet title='Ben Oketola Publications' />
  <MarginedBody>
  <WhatWeDo />
  </MarginedBody>
  </>
)

export default AboutPage
