import React from "react";
import styled from "styled-components";
import { defaultTheme } from "../../defaultTheme";
import dish1 from "../../assets/mainpage/dish1.png";
import dish2 from "../../assets/mainpage/dish2.png";
import dish3 from "../../assets/mainpage/dish3.png";
import dish4 from "../../assets/mainpage/dish4.png";
import dish5 from "../../assets/mainpage/dish5.png";

const PopularIntems = () => {
  return (
    <Container>
      <p>Food Items</p>
      <h2>Popular Dishes</h2>
      <ImageContainer>
        <img src={dish1} alt="dish1" />
        <img src={dish2} alt="dish2" />
        <img src={dish3} alt="dish3" />
        <img src={dish4} alt="dish4" />
        <img src={dish5} alt="dish5" />
      </ImageContainer>
    </Container>
  );
};
export default PopularIntems;

const Container = styled.div`
  margin-top: 60px;
  padding: 0 100px;
  text-align: center;
  p {
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    color: ${defaultTheme.colors.blue};
  }
  h2 {
    font-size: 35px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    color: ${defaultTheme.colors.red};
    margin-top: 5px;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 25px;
`;
