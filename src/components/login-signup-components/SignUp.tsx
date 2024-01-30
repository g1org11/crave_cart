import React, { useState } from "react";
import styled from "styled-components";
import { defaultTheme } from "../../defaultTheme";

const SignUp = () => {
  // State for registration form
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);

  // State for validation errors
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [phoneError, setPhoneError] = useState("");

  // Update state for registration form
  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);

    // Email validation using a regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailError(emailRegex.test(newEmail) ? "" : "Invalid email address");
  };

  const handlePhoneNumberChange = (e) => {
    const newPhone = e.target.value;

    // Remove non-numeric characters from the input
    const numericPhone = newPhone.replace(/\D/g, ""); // \D matches non-digit characters

    setPhone(numericPhone);

    // Phone number validation using a regular expression
    const phoneRegex = /^[0-9]{10}$/;

    setPhoneError(phoneRegex.test(numericPhone) ? "" : "Invalid phone number");
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);

    // Password validation
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/;
    setPasswordError(passwordRegex.test(newPassword) ? "" : "Invalid password");
  };

  const handleAdminChange = (e) => {
    setIsAdmin(e.target.checked);
  };

  const handleReset = () => {
    setEmail("");
    setIsAdmin(false);
    setPassword("");
    setPhone("");
    setEmailError("");
    setPasswordError("");
    setPhoneError("");
  };

  // Handle registration button click
  const handleRegister = (e) => {
    e.preventDefault(); // Prevent default form submission

    if (!email || !password || !phone) {
      alert("Please fill in all required fields");
      return;
    }

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

    handleReset();
  };

  return (
    <Cards onSubmit={handleRegister}>
      <Card>
        <h1>Register</h1>
        <p>Email address *</p>
        <Input
          type="email"
          value={email}
          onChange={handleEmailChange}
          className={emailError ? "error" : ""}
        />

        {emailError && <ErrorMessage> {emailError}</ErrorMessage>}
        <p>Password *</p>
        <Input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          className={passwordError ? "error" : ""}
        />
        {passwordError && <ErrorMessage>{passwordError}</ErrorMessage>}
        <p>Phone Number *</p>
        <Input
          type="tel"
          value={phone}
          onChange={handlePhoneNumberChange}
          className={phoneError ? "error" : ""}
        />
        {phoneError && <ErrorMessage>{phoneError}</ErrorMessage>}
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
  p {
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

  &.error {
    border-color: ${defaultTheme.colors.red};
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

const ErrorMessage = styled.div`
  font-size: 14px;
  color: ${defaultTheme.colors.red};
  margin-top: -10px;
  margin-bottom: 10px;
`;
