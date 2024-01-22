import React from "react";
import styled from "styled-components";
import { defaultTheme } from "../../defaultTheme";
import moto from "../../assets/header/moto.png";
import delivery from "../../assets/mainpage/delivery-main.png";

const Delivery = () => {
  return (
    <Container>
      <MainTitle>Delivery</MainTitle>
      <Wrapper>
        <div>
          <h2>A Moments Of Delivered On Right Time & Place</h2>
          <p>
            Food Khan is a restaurant, bar and coffee roastery located on a busy corner site in
            Farringdon's Exmouth Market. With glazed frontage on two sides of the building,
            overlooking the market and a bustling London inteon.
          </p>
          <div>
            <CartInfos>
              <div>
                <h3>Delivery Order</h3>
                <p>+880 1630 225 015</p>
              </div>
              <img src={moto} alt="moto" />
            </CartInfos>
          </div>
        </div>
        <img src={delivery} alt="delivery" />
      </Wrapper>
    </Container>
  );
};

export default Delivery;
const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 94px;
  padding: 0 100px;
  @media (max-width: 795px) {
    padding: 8px 50px;
  }
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  h2 {
  }
`;
const MainTitle = styled.h1`
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  color: ${defaultTheme.colors.red};
`;
const CartInfos = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 44px;
  @media (max-width: 795px) {
    display: none;
  }

  h3 {
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    color: ${defaultTheme.colors.blue};
  }
  p {
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: ${defaultTheme.colors.blue};
  }
  img {
    margin-left: 10px;
  }
`;
