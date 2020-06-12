import React from 'react';
import {Helmet} from 'react-helmet'
import ProjectManagement from '../../assets/projectManagement.svg';

import {MarginedBody} from './aboutPage.styles';

import Banner from '../../components/banner/banner';
import WhatWeDo from '../../components/whatWeDo/whatWeDo';
import PublishedBooks from '../../components/books/publishedBooks';





const AboutPage = ():JSX.Element => (
  <>
  <Helmet title='Ben Oketola Publications - About' />
  <MarginedBody>
  <WhatWeDo />
  </MarginedBody>
  </>
)

export default AboutPage
