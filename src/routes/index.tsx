import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import HomePage from '../views/homePage/homePage';
import AboutPage from '../views/aboutPage/aboutPage';
import ServicesPage from '../views/servicePage/servicePage';
import PublicationsPage from '../views/publicationsPage/publicationsPage';

const Routes =():JSX.Element=>(
  <Router>
  <Header />
  <Switch>
    <Route exact path='/' component={HomePage} />
    <Route exact path='/about' component={AboutPage} />
    <Route exact path='/services' component={ServicesPage} />
    <Route exact path='/publications' component={PublicationsPage} />
  </Switch>
  <Footer />
  </Router>
)

export default Routes
