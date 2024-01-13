import React from "react";
import styled from "styled-components";
import { defaultTheme } from "../defaultTheme";
import watch from "../assets/header/watch_icon.svg";
import phone from "../assets/header/phone_icon.svg";
import logo from "../assets/header/logo.png";
import cart from "../assets/header/cart.svg";
import moto from "../assets/header/moto.png";

const Header = () => {
  return (
    <div>
      <TopHader>
        <Information>
          <Parts>
            <img src={watch} alt="watch" />
            <p>7.30 AM - 9.30 PM</p>
          </Parts>
          <Parts>
            <img src={phone} alt="phone" />
            <p>+880 1630 225 015</p>
          </Parts>
        </Information>
        <a href="">REGISTER</a>
      </TopHader>
      <MainHeader>
        <img src={logo} alt="logo" />
        <NavAndInfo>
          <Ul>
            <li>
              <a href="">HOME</a>
            </li>
            <li>
              <a href="">ABOUT</a>
            </li>
            <li>
              <a href="">ITEMS</a>
            </li>
            <li>
              <a href="">PAGES</a>
            </li>
            <li>
              <a href="">CONTACT</a>
            </li>
          </Ul>
          <CartPart>
            <Cart>
              <p>2</p>
              <img src={cart} alt="cart" />
            </Cart>
            <CartInfos>
              <div>
                <h3>Delivery Order</h3>
                <p>+880 1630 225 015</p>
              </div>
              <img src={moto} alt="moto" />
            </CartInfos>
          </CartPart>
          <Login href="">LOGIN</Login>
        </NavAndInfo>
      </MainHeader>
    </div>
  );
};
export default Header;

const TopHader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${defaultTheme.colors.red};
  padding: 8px 100px;
  a {
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: ${defaultTheme.colors.floralwhite};
    text-decoration: none;
  }
`;
const Information = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 67px;
`;
const Parts = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: ${defaultTheme.colors.floralwhite};
    margin-left: 10px;
  }
`;

const MainHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 19px 100px 25px 100px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;
const NavAndInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Ul = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  li {
    list-style-type: none;
  }
  a {
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-decoration: none;
    color: ${defaultTheme.colors.blue};
  }
`;
const CartPart = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const CartInfos = styled(CartPart)`
  margin-right: 44px;
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

const Cart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3px 13px;
  background-color: ${defaultTheme.colors.blue};
  cursor: pointer;
  border-radius: 50%;
  margin-left: 40px;
  margin-right: 22px;
  p {
    font-size: 20px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
    color: ${defaultTheme.colors.floralwhite};
  }
`;
const Login = styled.a`
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  padding: 9px 19px;
  background-color: ${defaultTheme.colors.red};
  color: ${defaultTheme.colors.floralwhite};
  border-radius: 10px;
  box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.25);
  text-decoration: none;
`;
