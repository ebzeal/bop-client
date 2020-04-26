import styled from "styled-components";

const LearnMoreDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  background: -webkit-linear-gradient(180deg, #EB5757 0%, #872727 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  cursor: pointer;
  max-width:100%;
  bottom: 0px;

  :hover {
    background: -webkit-linear-gradient(202.46deg, #CCCCCC 0.54%, #000000 88.49%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: #000000;
    }
`;

const LearnMoreText = styled.p`
  font-size: 13px;
  line-height: 30px;
  letter-spacing: 0.05em;
`;

const LearnMoreArrow = styled.span`
 margin:15px 0 0 20px;
 font-size: 13px;
`;

export {LearnMoreDiv, LearnMoreText, LearnMoreArrow}
