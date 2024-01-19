import React from "react";
import styled from "styled-components";
import { defaultTheme } from "../../defaultTheme";
import { CardProps } from "../interface";

const MenuCards: React.FC<CardProps> = ({ meal, ingredients, price }) => {
  return (
    <Container>
      {/* <img src={img} alt="" /> */}
      <Infos>
        <Information>
          <div>
            <h3>{meal}</h3>
            <Ingredients>{ingredients}</Ingredients>
          </div>
          <Price>{price}</Price>
        </Information>
      </Infos>
    </Container>
  );
};

export default MenuCards;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Infos = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Information = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  h3 {
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: ${defaultTheme.colors.red};
  }
`;
const Ingredients = styled.p`
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: ${defaultTheme.colors.blue};
`;

const Price = styled.p`
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  color: ${defaultTheme.colors.red};
`;
