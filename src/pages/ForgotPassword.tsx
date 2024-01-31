import React from "react";
import styled from "styled-components";
import { defaultTheme } from "../defaultTheme";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <Container>
      <div>
        <h1>Change Password</h1>
        <p>New password</p>
        <input type="password" />
        <p>Repeat password</p>
        <input type="password" />
        <button>Change</button>
        <Link to="/Login_SignUp"> Go Back</Link>
      </div>
    </Container>
  );
};
export default ForgotPassword;
const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 100px 0;
  div {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
  }
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
  input {
    width: 300px;
    height: 50px;
    border-radius: 10px;
    border: 2px solid ${defaultTheme.colors.red};
    margin-bottom: 15px;

    /* Remove spinners for number inputs */
    -moz-appearance: textfield;
    appearance: textfield;

    /* Webkit browsers like Chrome and Safari */
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
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
