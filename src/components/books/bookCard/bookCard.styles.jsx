import styled from 'styled-components';

const BookCarDiv = styled.div`
background: #fff;
padding:30px;
margin-bottom: 20px;

@media (min-width: 1350px){  
  flex-basis: 30%;

}

@media (min-width: 768px) and (max-width: 1349px){
  flex-basis: 45%;
}
label{
  font-size: 12px;
  color: red;
  letter-spacing: 0.05em;
  flex:1;
}

p{
  font-size: 12px;
  color: black;
  letter-spacing: 0.05em;
  flex:1;
  margin-top:-2px;
}
`;


const BookInfo = styled.div`
  display:flex;
  justify-content: space-between;
  box-sizing: border-box;
`;

const BookInfoImg = styled.div`
  flex: 1;
  flex-basis: 50%;

   img{
     width:90%;
   }
`;

const BookInfoDetails = styled.div`
  flex: 1;
  flex-basis: 50%;
  margin-top:40px;

  div {
    display: flex;
    align-items: flex-start;
    justify-content:space-between;
    margin: 15px 0;

   
  }

  
`;

const BookAbout = styled.div`
  
`;


const BookButtons = styled.div`
  display: flex;
  justify-content:space-between;
  
`;

export {BookCarDiv, BookInfo, BookInfoImg, BookInfoDetails, BookAbout, BookButtons}
