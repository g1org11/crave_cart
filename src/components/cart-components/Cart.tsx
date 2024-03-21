import React from "react";
import styled from "styled-components";
import { defaultTheme } from "../../defaultTheme";
import img from "../../../uploads/caprese-salad-3-1710610699202.jpg";

const Cart = () => {
  return (
    <Container>
      <div>
        <UL>
          <li>Product</li>
          <li>Product Name</li>
          <li>Unit Price</li>
          <li>Quantity</li>
          <li>Total</li>
          <li>Action</li>
        </UL>
      </div>
      <Conetent>
        <Image src={img} alt="" />
        <Title>Belgium waffles with strawberries</Title>
        <Price>$150</Price>
        <FlexDiv>
          <button>+</button>
          <p>1</p>
          <button>-</button>
        </FlexDiv>
        <Total>$150</Total>
        <Action>X</Action>
      </Conetent>
    </Container>
  );
};

export default Cart;

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const UL = styled.ul`
  display: flex;
  align-items: center;
  gap: 70px;
  background-color: ${defaultTheme.colors.red};

  li {
    font-size: 25px;
    font-weight: 400;
    line-height: 29.3px;
    padding: 20px 30px;
    color: ${defaultTheme.colors.floralwhite};
    list-style-type: none;
    /* &:nth-child(1) {
      margin-right: 50px;
    }
    &:nth-child(2) {
      margin-left: 50px;
    }
    &:nth-child(3) {
      margin-left: 50px;
    }
    &:nth-child(4) {
      margin-left: 50px;
    }
    &:nth-child(5) {
      margin-left: 50px;
    }
    &:nth-child(6) {
      margin-left: 0px;
    } */
  }
`;

const Conetent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 120px;
  padding: 10px 30px;
  /* margin-left: -50px; */

  padding-bottom: 5px;
  border-bottom: 2px solid ${defaultTheme.colors.red};
`;
const Image = styled.img`
  width: 150px;
  height: 80px;
  transform: translateX(-30px);
  /* margin-left: 0px; */
`;
const Title = styled.p`
  width: 189px;
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  line-height: 23.44px;
  color: ${defaultTheme.colors.blue};
  transform: translateX(-70px);

  /* margin-left: -15px; */
`;
const Price = styled.p`
  font-size: 20px;
  font-weight: 700;
  line-height: 23.44px;
  text-align: center;
  color: ${defaultTheme.colors.blue};
  text-align: center;
  transform: translateX(-40px);
  /* margin-left: 20px; */
`;

const FlexDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  transform: translateX(-40px);
  /* margin-left: -10px; */
  button {
    border: 0;
    border: 1px solid ${defaultTheme.colors.red};
    margin: 0 30px;

    padding: 5px;
  }
  p {
    font-size: 20px;
    font-weight: 700;
    line-height: 23.44px;
    text-align: center;
    color: ${defaultTheme.colors.blue};
  }
`;
const Total = styled.p`
  font-size: 20px;
  font-weight: 700;
  line-height: 23.44px;
  text-align: center;
  color: ${defaultTheme.colors.blue};
  text-align: center;
  transform: translateX(-60px);
  /* margin-left: -90px; */
`;
const Action = styled.button`
  border: 0;
  background-color: ${defaultTheme.colors.white};
  font-size: 20px;
  font-weight: 700;
  line-height: 23.44px;
  text-align: center;
  color: ${defaultTheme.colors.red};
  text-align: center;
  transform: translateX(-20px);
`;
