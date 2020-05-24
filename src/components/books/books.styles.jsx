import styled from 'styled-components';
import BooksBoxBg from '../../assets/publishedBooks.svg';

const TitleDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
`;


const HeadText = styled.div`
max-width:75%;
margin-bottom: 10%;
`;

const BooksBoxDiv = styled.div`
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
  background-image:url(${ BooksBoxBg});
  padding: 20px;

  @media (min-width: 768px){
    display: flex;
  }
    
`;

export {TitleDiv, HeadText, BooksBoxDiv}
