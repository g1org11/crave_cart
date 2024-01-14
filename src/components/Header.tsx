import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { defaultTheme } from "../defaultTheme";
import watch from "../assets/header/watch_icon.svg";
import phone from "../assets/header/phone_icon.svg";
import logo from "../assets/header/logo.png";
import cart from "../assets/header/cart.svg";
import moto from "../assets/header/moto.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

// interface IconProps extends FontAwesomeIconProps {
//   show?: boolean;
// }
const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
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
        <a href="/">
          <img src={logo} alt="logo" />
        </a>

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
          <Icons>
            <BurgerIcon icon={faBars} size="2x" onClick={toggleMenu} show={!showMenu} />
            {showMenu && (
              <XmarkIcon icon={faXmark} size="2x" onClick={toggleMenu} show={showMenu} />
            )}
            {showMenu && (
              <ModalDiv>
                <div>
                  <ModalUl>
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
                  </ModalUl>
                </div>
              </ModalDiv>
            )}
          </Icons>

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
  @media (max-width: 795px) {
    padding: 8px 50px;
  }
  @media (max-width: 480px) {
    flex-direction: column;
    text-align: center;
  }
  a {
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: ${defaultTheme.colors.floralwhite};
    text-decoration: none;
    @media (max-width: 480px) {
      padding-top: 20px;
    }
  }
`;
const Information = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 67px;
  @media (max-width: 795px) {
    gap: 40px;
  }
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
  position: relative;
  @media (max-width: 795px) {
    padding: 19px 50px 25px 50px;
  }
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
  @media (max-width: 1150px) {
    display: none;
  }
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
const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;
const BurgerIcon = styled(FontAwesomeIcon)`
  display: none;

  @media (max-width: 1150px) {
    display: ${(props) => (props.show ? "inline-block" : "none")};
  }
`;

const XmarkIcon = styled(FontAwesomeIcon)`
  display: none;

  @media (max-width: 1150px) {
    display: ${(props) => (props.show ? "inline-block" : "none")};
  }
`;

const ModalUl = styled.ul`
  list-style-type: none;
  margin-bottom: 10px;
`;

const ModalDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 100%;
  left: 0%;
  padding: 20px;
  background-color: ${defaultTheme.colors.lightred};
  text-align: center;
  a {
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-decoration: none;
    color: ${defaultTheme.colors.blue};
    margin-bottom: 10px;
  }
`;

// const ModalLi = styled.li`
//   font-size: 12px;
//   font-style: normal;
//   font-weight: 300;
//   line-height: normal;
//   color: ${defaultTheme.colors.black};
//   margin-bottom: 8px;

//   a {
//     text-decoration: none;
//     /* color: ${defaultTheme.colors.brown}; */
//     cursor: pointer;
//   }
// `;
