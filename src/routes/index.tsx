import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import HomePage from '../views/homePage/homePage';
import AboutPage from '../views/aboutPage/aboutPage';
import ServicesPage from '../views/servicePage/servicePage';
import PublicationsPage from '../views/publicationsPage/publicationsPage';
import Login from '../views/admin/login';
import AddBooks from '../views/admin/books/addBooks';
import AddArticle from '../views/admin/articles/addArticles';
import ProtectedRoute from '../components/auth/auth'

const Routes =():JSX.Element=>(
  <Router>
  <Header />
  <Switch>
    <Route exact path='/' component={HomePage} />
    <Route exact path='/about' component={AboutPage} />
    <Route exact path='/services' component={ServicesPage} />
    <Route exact path='/publications' component={PublicationsPage} />

    <Route exact path='/admin/login' component={Login} />
    <ProtectedRoute exact path='/admin/add-book' component={AddBooks}/>
    <ProtectedRoute exact path='/admin/add-article' component={AddArticle} />
  </Switch>
  <Footer />
  </Router>
)

export default Routes
