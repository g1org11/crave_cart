// import React from "react";
import hero from "../../assets/contact/image_contact_bg.png";
import styled from "styled-components";
import { defaultTheme } from "../../defaultTheme";

const ContactHero = () => {
  return (
    <Container>
      <div>
        <h1>CONTACT US</h1>
        <p>Connect with us today to discover more about our offerings.</p>
      </div>
    </Container>
  );
};

export default ContactHero;

const Container = styled.div`
  width: 100%;
  height: 280px;
  background-image: url(${hero});
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 100px;
  h1 {
    font-size: 35px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    color: ${defaultTheme.colors.floralwhite};
    margin-bottom: 10px;
  }
  p {
    max-width: 500px;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: ${defaultTheme.colors.floralwhite};
  }
  @media (max-width: 768px) {
    padding: 0 50px;
    h1 {
      font-size: 30px;
    }
    p {
      font-size: 16px;
    }
  }
`;
