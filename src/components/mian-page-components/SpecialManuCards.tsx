import React from "react";
import styled from "styled-components";
import { defaultTheme } from "../../defaultTheme";
// import { SpecialManuCardsProps } from "../interface";

interface SpecialManuCardsProps {
  img: string;
  text: string;
}

const SpecialManucards: React.FC<SpecialManuCardsProps> = ({ img, text }) => {
  return (
    <CardsContainer>
      <div>
        <img src={img} alt="img" />
        <p>{text}</p>
      </div>
    </CardsContainer>
  );
};

export default SpecialManucards;

const CardsContainer = styled.div`
  margin-top: 31px;

  p {
    width: 120px;
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: ${defaultTheme.colors.red};
  }
`;
