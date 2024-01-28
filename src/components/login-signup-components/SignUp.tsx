import React, { useState } from "react";
import styled from "styled-components";
import { defaultTheme } from "../../defaultTheme";

const SignUp = () => {
  // State for registration form
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  // Update state for registration form
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  function handlePhoneNumberChange(e) {
    setPhone(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleAdminChange = (e) => {
    setIsAdmin(e.target.checked);
  };

  // Handle registration button click
  const handleRegister = (e) => {
    e.preventDefault(); // Prevent default form submission
    // Implement logic to send registration request to the server
    console.log("Registering with:", email, password, phone, isAdmin);
    // Call your registration API
    // const origin = "http://localhost:5173";
    fetch("http://localhost:5000/SignUp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email,
        password,
        phone,
        isAdmin,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
      });
  };
  return (
    <Cards onSubmit={handleRegister}>
      <Card>
        <h1>Register</h1>
        <p>Email address *</p>
        <Input type="email" value={email} onChange={handleEmailChange} />
        <p>Password *</p>
        <Input type="password" value={password} onChange={handlePasswordChange} />
        <p>Phone Number *</p>
        <Input type="number" value={phone} onChange={handlePhoneNumberChange} />
        <CheckBox>
          <input type="checkbox" checked={isAdmin} onChange={handleAdminChange} /> <p>Admin</p>
        </CheckBox>
        <button type="submit">Register</button>
      </Card>
    </Cards>
  );
};

export default SignUp;
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

const CheckBox = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: left;
  margin-bottom: 15px;

  input {
    width: 50px;
  }
  p {
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: ${defaultTheme.colors.red};
    margin-bottom: 10px;
  }
`;
