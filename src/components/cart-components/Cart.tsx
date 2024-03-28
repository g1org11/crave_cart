import React from "react";
import styled from "styled-components";
import { defaultTheme } from "../../defaultTheme";
import { useCart } from "./CartContext";

const Cart: React.FC = () => {
  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity } = useCart();
  const total = cartItems.reduce((accumulator, currentItem) => {
    return accumulator + currentItem.price * currentItem.quantity;
  }, 0);
  return (
    <Container>
      <div>
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
        <CartWrapper>
          {cartItems.map((item) => (
            <Content key={item.id}>
              <Image src={`../../../uploads/${item.mainImage}`} alt="" />
              <Title>{item.name}</Title>
              <Price>${item.price}</Price>
              <FlexDiv>
                <button onClick={() => increaseQuantity(item.id)}>+</button> {/* Pass item ID */}
                <p>{item.quantity}</p>
                <button onClick={() => decreaseQuantity(item.id)}>-</button> {/* Pass item ID */}
              </FlexDiv>
              <Total>${(item.price * item.quantity).toFixed(2)}</Total>
              <Action onClick={() => removeFromCart(item.id)}>X</Action>
            </Content>
          ))}
        </CartWrapper>
      </div>
      <PaymentConatiner>
        <Wrapper>
          <Parts>
            <h1>Card Details</h1>
            <div>
              <p>Email</p>
              <input type="email" />
            </div>
            <div>
              <p> Card Number</p>
              <input type="number" name="" id="" />
            </div>
          </Parts>
          <Parts>
            <h1>Address</h1>
            <div>
              <p>District</p>
              <input type="text" />
            </div>
            <div>
              <p>Street</p>
              <input type="text" />
            </div>
            <TotalContent>
              <p>Total:</p>
              <h2>{total.toFixed(2)}</h2>
            </TotalContent>
            <div></div>
          </Parts>
        </Wrapper>
        <Submit>Submit</Submit>
      </PaymentConatiner>
    </Container>
  );
};

export default Cart;

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  @media (max-width: 600px) {
    padding: 0 10px;
    flex-direction: row;
  }
`;

const UL = styled.ul`
  display: flex;
  align-items: center;
  gap: 70px;
  background-color: ${defaultTheme.colors.red};
  @media (max-width: 1350px) {
    gap: 30px;
  }
  @media (max-width: 1120px) {
    gap: 10px;
  }
  @media (max-width: 900px) {
    gap: 0px;
  }
  @media (max-width: 600px) {
    flex-direction: column;
  }

  li {
    font-size: 25px;
    font-weight: 400;
    line-height: 29.3px;
    padding: 20px 30px;
    color: ${defaultTheme.colors.floralwhite};
    list-style-type: none;
    @media (max-width: 1100px) {
      font-size: 20px;
    }
    @media (max-width: 900px) {
      padding: 20px 20px;
    }
    @media (max-width: 720px) {
      padding: 20px 10px;
    }

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
const CartWrapper = styled.div`
  /* overflow-x: scroll; */
  @media (max-width: 600px) {
    overflow-x: scroll;
    display: flex;
    padding: 10px;
    row-gap: 35px;
  }
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 120px;

  padding: 10px 30px;
  @media (max-width: 1350px) {
    gap: 80px;
  }
  @media (max-width: 1120px) {
    gap: 60px;
  }
  @media (max-width: 900px) {
    gap: 30px;
  }
  @media (max-width: 720px) {
    /* transform: translateX(-25px); */
    gap: 10px;
  }
  @media (max-width: 600px) {
    flex-direction: column;
    text-align: center;
    padding: 10px;
    row-gap: 35px;
  }
  /* margin-left: -50px; */

  padding-bottom: 5px;
  border-bottom: 2px solid ${defaultTheme.colors.red};
`;
const Image = styled.img`
  width: 150px;
  height: 80px;
  transform: translateX(-30px);
  object-fit: cover;
  @media (max-width: 1010px) {
    width: 100px;
    height: 50px;
  }
  @media (max-width: 600px) {
    transform: translateX(0px);
  }

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
  @media (max-width: 1100px) {
    width: 100px;
    font-size: 16px;
    transform: translateX(-40px);
  }
  @media (max-width: 600px) {
    transform: translateX(0px);
    transform: translateY(-20px);
  }

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
  @media (max-width: 1100px) {
    font-size: 16px;
    transform: translateX(10px);
  }
  @media (max-width: 600px) {
    transform: translateX(0px);
    transform: translateY(-38px);
  }
`;

const FlexDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  transform: translateX(-40px);
  @media (max-width: 1100px) {
    font-size: 16px;
    transform: translateX(5px);
  }
  @media (max-width: 600px) {
    transform: translateX(0px);
    transform: translateY(-30px);
  }
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
    @media (max-width: 1100px) {
      font-size: 16px;
    }
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
  @media (max-width: 1100px) {
    font-size: 16px;
    transform: translateX(-20px);
  }
  @media (max-width: 900px) {
    transform: translateX(-25px);
  }
  @media (max-width: 600px) {
    transform: translateX(0px);
    transform: translateY(-20px);
  }
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
  cursor: pointer;
  @media (max-width: 1100px) {
    font-size: 16px;
    transform: translateX(0px);
  }
  @media (max-width: 600px) {
    /* transform: translateX(0px); */
    transform: translateY(-10px);
  }
`;
const PaymentConatiner = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 50px;
  padding: 0 50px;
`;
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: top;
  justify-content: space-around;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;
const Parts = styled.div`
  h1 {
    font-size: 35px;
    font-weight: 300px;
    color: ${defaultTheme.colors.red};
    margin-bottom: 7px;
  }
  p {
    font-size: 20px;
    font-weight: 700;
    line-height: 23.44px;
    color: ${defaultTheme.colors.blue};
    margin-bottom: 5px;
  }
  h2 {
    font-size: 20px;
    font-weight: 300px;
    color: ${defaultTheme.colors.red};
    margin-bottom: 7px;
  }

  input {
    width: 100%;
    height: 50px;
    font-size: 25px;
    font-weight: 400;
    line-height: 29px;
    padding-left: 15px;
    border: 2px solid ${defaultTheme.colors.red};
    border-radius: 10px;
    background-color: ${defaultTheme.colors.floralwhite};
    color: ${defaultTheme.colors.blue};
    margin-bottom: 5px;
    /* Remove spinners for number inputs */
    -moz-appearance: textfield;
    appearance: textfield;

    /* Webkit browsers like Chrome and Safari */
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    &:focus {
      outline: none;
    }
  }
`;
const Submit = styled.button`
  font-size: 25px;
  color: ${defaultTheme.colors.floralwhite};
  padding: 10px 50px;
  border: 0;
  border-radius: 20px;
  background-color: ${defaultTheme.colors.red};
  margin-top: 20px;
`;
const TotalContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
`;
