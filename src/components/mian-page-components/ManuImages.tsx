import React from "react";
import styled from "styled-components";
import { defaultTheme } from "../../defaultTheme";

const ManuImages = ({ img }) => {
  return (
    <ImageContainer>
      <Wrapper>
        <img src={img} alt="poster" />
        <a href="/">
          VIEW ALL MENU
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
          >
            <path
              d="M6.66667 20.0002C6.66667 12.6502 12.65 6.66683 20 6.66683C27.35 6.66683 33.3333 12.6502 33.3333 20.0002C33.3333 27.3502 27.35 33.3335 20 33.3335C12.65 33.3335 6.66667 27.3502 6.66667 20.0002ZM3.33334 20.0002C3.33333 29.2002 10.8 36.6668 20 36.6668C29.2 36.6668 36.6667 29.2002 36.6667 20.0002C36.6667 10.8002 29.2 3.3335 20 3.3335C10.8 3.33349 3.33334 10.8002 3.33334 20.0002ZM20 18.3335L13.3333 18.3335L13.3333 21.6668L20 21.6668L20 26.6668L26.6667 20.0002L20 13.3335L20 18.3335Z"
              fill="#FFF8EE"
            />
          </svg>
        </a>
      </Wrapper>
    </ImageContainer>
  );
};

export default ManuImages;

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 489px;
    height: 620px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  /* align-items: center; */
  flex-direction: column;
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    font-size: 35px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    background-color: ${defaultTheme.colors.red};
    color: ${defaultTheme.colors.floralwhite};
    padding: 7px 0;
    width: 100%;
    svg {
      margin-left: 30px;
    }
  }
`;
