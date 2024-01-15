import React from "react";
import styled from "styled-components";
import { defaultTheme } from "../../defaultTheme";
import heroimg from "../../assets/mainpage/MainHero.png";

const MainHero = () => {
  return (
    <HeroContainer>
      <HeroWrapper>
        <RightParts>
          <p>Best In Town</p>
          <h2>
            ENJOY OUR CHICKEN <span>BURGER</span> FAST FOOD
          </h2>
          <OrderPart>
            <button>Order Now</button>
            <span>Price : $10.50</span>
          </OrderPart>
        </RightParts>
        <img src={heroimg} alt="heroimage" />
      </HeroWrapper>
    </HeroContainer>
  );
};
export default MainHero;

const HeroContainer = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: center;
  margin-top: 25px;
`;
const HeroWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 1500px) {
    flex-direction: column;
    img {
      position: absolute;
      top: 40%;
    }
  }
`;

const RightParts = styled.div`
  margin-right: 150px;
  @media (max-width: 1500px) {
    margin-right: 0;
  }
  p {
    font-size: 20px;
    font-style: italic;
    font-weight: 500;
    line-height: normal;
    color: ${defaultTheme.colors.red};
    margin-bottom: 11px;
  }
  h2 {
    width: 500px;
    font-size: 50px;
    font-style: italic;
    font-weight: 500;
    line-height: normal;
    color: ${defaultTheme.colors.blue};
    span {
      color: ${defaultTheme.colors.red};
    }
  }
`;
const OrderPart = styled.div`
  margin-top: 60px;
  transform: translateX(150px);
  @media (max-width: 1500px) {
    transform: translateX(0);
  }
  button {
    border: 0;
    font-size: 35px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    padding: 10px 16px;
    color: ${defaultTheme.colors.floralwhite};
    background-color: ${defaultTheme.colors.red};
    border-radius: 10px;
    margin-right: 30px;
  }
  span {
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: ${defaultTheme.colors.blue};
  }
  @media (max-width: 1500px) {
    margin-top: 280px;
  }
`;
