import React from 'react';
import {Helmet} from 'react-helmet'

import {MarginedBody} from './publicationsPage.styles';

import PublishedBooks from '../../components/books/publishedBooks';





const PublicationsPage = ():JSX.Element => (
  <>
  <Helmet title='Ben Oketola Publications - Publications' />
  <MarginedBody>
  <PublishedBooks />
  </MarginedBody>
  </>
)

export default PublicationsPage
