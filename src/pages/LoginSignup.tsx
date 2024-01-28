import React from "react";
import styled from "styled-components";
import LoginHero from "../components/login-signup-components/Loginhero";

import Login from "../components/login-signup-components/Login";
import SignUp from "../components/login-signup-components/SignUp";
// import Login from "../components/login-signup-components/Login";

const LoginSignUp = () => {
  return (
    <div>
      <LoginHero />
      <Container>
        <Login />
        <SignUp />
      </Container>
    </div>
  );
};
export default LoginSignUp;
const Container = styled.div`
  display: flex;
  align-items: top;
  justify-content: space-around;
  gap: 30px;
  margin-top: 35px;
  margin-bottom: 75px;
  padding: 0 100px;
  @media (max-width: 768px) {
    flex-direction: column-reverse;
    align-items: center;
    padding: 0 50px;
  }
`;
