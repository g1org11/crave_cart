import React from "react";
import styled from "styled-components";
import { defaultTheme } from "../../defaultTheme";

const Login = () => {
  return (
    <Container>
      <Cards>
        <Card>
          <h1>Login</h1>
          <p>Username or email address *</p>
          <input type="text" />
          <p>Password *</p>
          <input type="password" />

          <button>Log in</button>

          <a href="">Lost your password?</a>
        </Card>
      </Cards>
      <Cards>
        <Card>
          <h1>Register</h1>
          <p>Email address *</p>
          <input type="email" />
          <p>Password *</p>
          <input type="password" />
          <button>Register</button>
        </Card>
      </Cards>
    </Container>
  );
};

export default Login;

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
const Card = styled.div`
  display: flex;
  align-items: top;
  flex-direction: column;
`;
const Cards = styled.div`
  display: flex;
  align-items: top;
  justify-content: left;

  h1 {
    font-size: 35px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    color: ${defaultTheme.colors.red};
    margin-bottom: 15px;
  }
  P {
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: ${defaultTheme.colors.red};
    margin-bottom: 10px;
  }
  input {
    width: 300px;
    height: 50px;
    border-radius: 10px;
    border: 2px solid ${defaultTheme.colors.red};
    margin-bottom: 15px;
  }
  button {
    width: 150px;
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    padding: 14px 20px;
    color: ${defaultTheme.colors.floralwhite};
    background-color: ${defaultTheme.colors.red};
    border: 0;
    border-radius: 10px;
  }
  a {
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: ${defaultTheme.colors.green};
    text-decoration: none;
    margin-top: 15px;
  }
`;
