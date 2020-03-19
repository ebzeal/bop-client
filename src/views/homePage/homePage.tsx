import React from 'react';
import {Helmet} from 'react-helmet'
import Banner from '../../components/banner/banner'
import ProjectManagement from '../../assets/projectManagement.svg';



const HomePage = ():JSX.Element => (
  <>
  <Helmet title='Ben Oketola Publications' />
  <Banner
    titleText = {'Excellent Project Delivery'}
    storyText = {'We take charge of your publishing projects from ground up. Our expertise is in making sure that your dream book comes to life'}
    button= {true}
    buttonText= {'See Our Works'}
    image={ProjectManagement}
    imgAlt={'Project Management at MindPlus'}
  />
  </>
)

export default HomePage
