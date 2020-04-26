import styled from 'styled-components';


let BannerDiv = styled.div`
padding: 100px 0 200px 0;
width: 100%;
background: linear-gradient(0deg, rgba(146, 150, 153, 0.2) 8.84%, rgba(152, 195, 232, 0) 31.12%);
padding-left: 14%;
display: flex;
flex-wrap: wrap;
`;

const TitleText = styled.h1`
font-size: 64px;
line-height: 74px;
letter-spacing: 0.04em;
background: -webkit-linear-gradient(180deg, #EB5757 0%, #872727 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
max-width:530px;
`;


const StoryText = styled.p`
font-size: 16px;
line-height: 26px;
letter-spacing: 0.05em;
opacity: 0.6;
max-width:415px;
background: -webkit-linear-gradient(180deg, #EB5757 0%, #872727 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
`;

const BannerImage = styled.div`
margin-top:90px;
padding-left:40px;

img {
  max-width:90%
}
`;

export {BannerDiv, TitleText, StoryText, BannerImage}
