import React from "react";
import styled from "styled-components";
import { defaultTheme } from "../defaultTheme";
import watch from "../assets/header/watch_icon.svg";
import phone from "../assets/header/phone_icon.svg";

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
