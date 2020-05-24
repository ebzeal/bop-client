import React from 'react';
import {BookCarDiv, BookInfo, BookInfoImg, BookInfoDetails, BookAbout, BookButtons} from './bookCard.styles';
import Button from '../../button/button';

const BookCard = () => (
  <BookCarDiv>
    <BookInfo>
      <BookInfoImg>
        <img src="https://res.cloudinary.com/dxehksqg1/image/upload/v1590272494/confectioners/Vendors/everyday_with_Jesus_xfie63.jpg" alt='Everyday with Jesus' />
      </BookInfoImg>
      <BookInfoDetails>
        <div>
          <label>
          Book: 
          </label>
          <p>
            Everyday With jesus
          </p>
        </div>
        <div>
          <label>
          Author: 
          </label>
          <p>
            Ben Oketola
          </p>
        </div>
        <div>
          <label>
          Pages: 
          </label>
          <p>
            238
          </p>
        </div>
        <div>
          <label>
          Date Published: 
          </label>
          <p>
            02/04/2018
          </p>
        </div>
        <div>
          <label>
          Genre: 
          </label>
          <p>
            Religion
          </p>
        </div>
      </BookInfoDetails>
    </BookInfo>

<BookAbout>
    <label>About</label>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing 
elit, sed do eiusmod tempor incididunt ut labore et 
dolore magna aliqua. Ut enim ad minim veniam.</p>
</BookAbout>
<BookButtons>
  <Button buttonText='Preview' smallButton={true} />
  <Button buttonText='Buy' smallButton={true}  />
</BookButtons>
  </BookCarDiv>
);

export default BookCard;
