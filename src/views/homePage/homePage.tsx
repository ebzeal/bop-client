import React from 'react';
import {Helmet} from 'react-helmet'
import ProjectManagement from '../../assets/projectManagement.svg';

import {MarginedBody} from './homePage.styles';

import Banner from '../../components/banner/banner';
import WhatWeDo from '../../components/whatWeDo/whatWeDo';
import PublishedBooks from '../../components/books/publishedBooks';





const HomePage = ():JSX.Element => (
  <>
  <Helmet title='Ben Oketola Publications' />
  <Banner
    titleText = {'Excellent Project Delivery'}
    storyText = {'We take charge of your publishing projects from ground up. Our expertise is in making sure that your dream book comes to life'}
    button= {true}
    buttonText= {'See Our Works'}
    image={ProjectManagement}
    imgAlt={'Project Management at BOP'}
  />
  <MarginedBody>
  <WhatWeDo />
  <PublishedBooks />
  </MarginedBody>
  </>
)

export default HomePage
