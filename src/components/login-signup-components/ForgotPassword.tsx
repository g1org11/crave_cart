import React, { useState, useContext } from "react";
import styled from "styled-components";
import { defaultTheme } from "../../defaultTheme";
import { Link, useNavigate } from "react-router-dom";
// import withAuthData from "./Forgot";
import { AuthContext } from "./AuthContext";

const ForgotPassword = () => {
  const { userData } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  // console.log(userData, "forgotPassword");
  const navigate = useNavigate();
  const handleShowPasswordToggle = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  const reset = () => {
    setEmail("");
    setNewPassword("");
    setRepeatPassword("");
    setShowPassword(false);
  };
  const handlePasswordChange = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    try {
      // Validate email
      if (!email) {
        alert("Please enter your email.");
        return;
      }

      // Validate new password
      if (!newPassword || newPassword.length < 8) {
        alert("Please enter a new password with at least 8 characters.");
        return;
      }

      // Validate repeat password
      if (newPassword !== repeatPassword) {
        alert("Passwords do not match.");
        return;
      }

      // Fetch reset password request
      const response = await fetch("http://localhost:5000/reset-password-request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
        },
        body: JSON.stringify({ email, newPassword }),
      }).then((data) => console.log(data));

      reset();
      navigate("/Login_SignUp");
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <Container onSubmit={handlePasswordChange}>
      <div>
        <h1>Change Password</h1>

        <p>Email Password</p>
        <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <p>New password</p>
        <Input
          type={showPassword ? "text" : "password"}
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />

        <p>Repeat password</p>
        <Input
          type={showPassword ? "text" : "password"}
          value={repeatPassword}
          onChange={(e) => setRepeatPassword(e.target.value)}
        />
        <ShowPassword>
          <input type="checkbox" onChange={handleShowPasswordToggle} />
          <p>Show Password</p>
        </ShowPassword>
        <button>Change</button>
        <Link to="/Login_SignUp">Go Back</Link>
      </div>
    </Container>
  );
};

export default ForgotPassword;
const Container = styled.form`
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
const ShowPassword = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: flex-start;
  p {
    margin-left: 10px;
  }
`;
