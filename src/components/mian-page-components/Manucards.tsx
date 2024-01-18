import React from "react";
import styled from "styled-components";

const ManuCards = ({ img, meal, ingredients, price }) => {
  return (
    <Container>
      <img src={img} alt="" />

      <div>
        <Information>
          <div>
            <h3>{meal}</h3>
            <p>{ingredients}</p>
          </div>
          <Price>{price}</Price>
        </Information>
      </div>
    </Container>
  );
};
export default ManuCards;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Information = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  h3 {
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  p {
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

const Price = styled.p`
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
