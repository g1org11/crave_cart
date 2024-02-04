import React, { useState } from "react";
import styled from "styled-components";
import { defaultTheme } from "../../defaultTheme";
import { useAuth } from "./AuthContext";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  // State for login form
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();
  // Update state for login form
  const handleLoginEmailChange = (e: { target: { value: React.SetStateAction<string> } }) => {
    setLoginEmail(e.target.value);
  };

  const handleLoginPasswordChange = (e: { target: { value: React.SetStateAction<string> } }) => {
    setLoginPassword(e.target.value);
  };
  const handleShowPasswordToggle = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  const handlereset = () => {
    setLoginEmail("");
    setLoginPassword("");
  };
  // Handle login button click

  // Inside the handleLogin function in the Login component
  // Inside the handleLogin function in the Login component
  const handleLogin = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    // Log the password before sending the request
    console.log("Sending login request with:", loginEmail, loginPassword);

    fetch("http://localhost:5000/Login-user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email: loginEmail,
        password: loginPassword,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userregister");

        if (data.status === "ok") {
          login();
          handlereset();
          navigate("/");
        } else {
          alert(`Login failed: ${data.error}`);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("An error occurred. Please try again later.");
      });
  };

  return (
    <Cards>
      <Card>
        <h1>Login</h1>
        <p>Email address *</p>
        <Input type="email" value={loginEmail} onChange={handleLoginEmailChange} />
        <p>Password *</p>
        <Input
          type={showPassword ? "text" : "password"}
          value={loginPassword}
          onChange={handleLoginPasswordChange}
        />
        <ShowPassword>
          <input type="checkbox" onChange={handleShowPasswordToggle} />
          <p>Show Password</p>
        </ShowPassword>

        <button onClick={handleLogin}>Log in</button>

        <Link to="/forgot-password">Lost your password?</Link>
      </Card>
    </Cards>
  );
};

export default Login;

// Styled components remain unchanged

const Card = styled.div`
  display: flex;
  align-items: top;
  flex-direction: column;
`;
const Cards = styled.form`
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
const Input = styled.input`
  width: 300px;
  height: 50px;
  border-radius: 10px;
  border: 2px solid ${defaultTheme.colors.red};
  margin-bottom: 15px;
  font-size: 25px;
  line-height: 29px;
  padding-left: 15px;
  color: ${defaultTheme.colors.blue};
  /* Remove spinners for number inputs */
  -moz-appearance: textfield;
  appearance: textfield;

  /* Webkit browsers like Chrome and Safari */
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
const ErrorText = styled.p`
  color: ${defaultTheme.colors.red};
  margin-top: 10px;
  font-size: 16px;
`;

const ShowPassword = styled.div`
  display: flex;
  align-items: baseline;
  p {
    margin-left: 10px;
  }
`;
