import styled from 'styled-components';

const ContactAllDiv = styled.div`
background: linear-gradient(180deg, #EB5757 0%, #872727 100%);
border-radius: 0px 200px 0px 0px;

`;

const ContactDiv = styled.div`
padding: 100px 150px;
display: flex;
justify-content: space-between;
align-items: center; 
`;

const ContactText = styled.div`
flex-direction:column;
flex:1;
`;

const ContactButton = styled.div`
display:flex;
justify-content: center;
flex:1;
button{
  background: #5A98D0;
border-radius: 10px;
padding:10px 25px;
cursor:pointer;
border: none;
}

`;

const ContactDetailsDiv = styled.div`
display:flex;
justify-content: space-between;
margin: 0px 150px;
flex:1;
`;


export {ContactAllDiv, ContactDiv, ContactText, ContactButton, ContactDetailsDiv}
