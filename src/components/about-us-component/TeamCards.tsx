import React from "react";
import styled from "styled-components";
import { defaultTheme } from "../../defaultTheme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXTwitter,
  faSquareFacebook,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

interface TeamCardsProps {
  img: string;
  title: string;
}
const TeamCards: React.FC<TeamCardsProps> = ({ img, title }) => {
  return (
    <div>
      <Information>
        <div>
          <h2>{title}</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna. Lorem ipsum dolor sit amet
          </p>
          <img src={img} alt="" />
        </div>
      </Information>
      <Icons>
        <a href="">
          {" "}
          <FontAwesomeIcon icon={faXTwitter} size="xl" />
        </a>
        <a href="">
          <FontAwesomeIcon icon={faSquareFacebook} size="xl" />
        </a>
        <a href="">
          <FontAwesomeIcon icon={faInstagram} size="xl" />
        </a>
        <a href="">
          <FontAwesomeIcon icon={faLinkedinIn} size="xl" />
        </a>
      </Icons>
    </div>
  );
};

export default TeamCards;
const Information = styled.div`
  position: relative;
  margin-top: 113px;
  padding: 163px 48px 25px 48px;
  border-radius: 50%;
  border: 3px solid ${defaultTheme.colors.red};
  h2 {
    text-align: center;
    font-size: 25px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    color: ${defaultTheme.colors.blue};
  }
  p {
    width: 261px;
    text-align: center;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: ${defaultTheme.colors.blue};
  }
  img {
    position: absolute;
    top: -70px;
    right: 10px;
  }
  &:hover {
    h2 {
      color: ${defaultTheme.colors.red};
    }
    p {
      color: ${defaultTheme.colors.red};
    }
  }
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
  margin-top: 42px;

  svg {
    color: ${defaultTheme.colors.red}; // Set the color for all icons
  }
`;
