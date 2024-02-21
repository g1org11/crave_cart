import React, { useState } from "react";
import styled from "styled-components";
import { defaultTheme } from "../../defaultTheme";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

  const [showPassword, setShowPassword] = useState(false);
  // Update state for registration form
  const handleEmailChange = (e: { target: { value: any } }) => {
    const newEmail = e.target.value;
    setEmail(newEmail);

    // // Email validation using a regular expression
    // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // setEmailError(emailRegex.test(newEmail) ? "" : "Invalid email address");
  };

  const handlePhoneNumberChange = (e: { target: { value: any } }) => {
    const newPhone = e.target.value;

    // Remove non-numeric characters from the input
    const numericPhone = newPhone.replace(/\D/g, ""); // \D matches non-digit characters

    setPhone(numericPhone);

    // // Phone number validation using a regular expression
    // const phoneRegex = /^[0-9]{10}$/;

    // setPhoneError(phoneRegex.test(numericPhone) ? "" : "Invalid phone number");
  };

  const handlePasswordChange = (e: { target: { value: any } }) => {
    const newPassword = e.target.value;
    setPassword(newPassword);

    // // Password validation
    // const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/;
    // setPasswordError(passwordRegex.test(newPassword) ? "" : "Invalid password");
  };

  const handleAdminChange = (e: {
    target: { checked: boolean | ((prevState: boolean) => boolean) };
  }) => {
    setIsAdmin(e.target.checked);
  };
  const handleShowPasswordToggle = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
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
  const checkUserExistence = async () => {
    try {
      const response = await fetch("http://localhost:5000/checkUserExistence", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, phone }), // Send email and phone to check
      });
      const data = await response.json();
      return data.exists; // Return true if user exists, false otherwise
    } catch (error) {
      console.error("Error checking user existence:", error);
      return false; // Return false in case of an error
    }
  };
  // Validate password
  const validatePassword = (password: string) => {
    // Password should be 8-25 characters long and contain at least one uppercase letter, one lowercase letter, one digit, and one special character
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}|:<>?~=\\[\];\',./-])[A-Za-z\d!@#$%^&*()_+{}|:<>?~=\\[\];\',./-]{8,25}$/;

    return passwordRegex.test(password);
  };

  // Handle registration button click
  const handleRegister = async (e: { preventDefault: () => void }) => {
    e.preventDefault(); // Prevent default form submission

    if (!email || !password || !phone) {
      toast.error("Please fill in all required fields");
      return;
    }
    // Check if the user already exists
    const userExists = await checkUserExistence();

    if (userExists) {
      toast.error("User with this email or phone number already exists");
      return;
    }
    console.log("Password:", password);
    if (!validatePassword(password)) {
      toast.error(
        "Password must be 8-25 characters long and contain at least one uppercase letter, lowercase letter, digit, and special character"
      );
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
        toast.success("Registration successful");
      });

    handleReset();
  };

  return (
    <div>
      {" "}
      <ToastContainer />
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
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={handlePasswordChange}
            className={passwordError ? "error" : ""}
          />
          <ShowPassword>
            <input type="checkbox" onChange={handleShowPasswordToggle} />
            <p>Show Password</p>
          </ShowPassword>
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
    </div>
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

const ShowPassword = styled.div`
  display: flex;
  align-items: baseline;
  p {
    margin-left: 10px;
  }
`;
