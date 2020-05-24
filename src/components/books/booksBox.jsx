import React from 'react';
import {BooksBoxDiv} from './books.styles';
import BookCard from './bookCard/bookCard'


const BooksBox = () => (
  <BooksBoxDiv>
    <BookCard />
    <BookCard />
    <BookCard />
    <BookCard />
  </BooksBoxDiv>
);

export default BooksBox;
