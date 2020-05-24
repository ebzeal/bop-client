import styled from 'styled-components';

const TestimonialDiv = styled.div`
  margin: 20px 220px 0px 220px;

`;


const TestimonialSlider = styled.div`
color:#fff;
justify-content:space-between;
margin: 80px;

@media (min-width: 768px){
  display: flex;
}
i{
  flex-basis: 1;
  color:rgba(0,0,0,0.6);
  cursor: pointer;
   &:hover{
     color:rgba(0,0,0,0.9);
   }
}
img{
  margin: 0 20px;
  border-radius:50%;
  flex-basis: 2;
  width:150px;
}
.text{
  flex-basis: 3;
  margin: 0 30px;

  p{
    display: flex;
    margin-top:10px;
    justify-content: flex-end;
  }
}
`;

export {TestimonialDiv, TestimonialSlider}
