import styled from "styled-components";
import LoginHero from "../components/login-signup-components/Loginhero";
import Login from "../components/login-signup-components/Login";
import SignUp from "../components/login-signup-components/SignUp";
import { useState, useEffect } from "react";
import Spinner from "../components/spinner/Spinner";
// import Login from "../components/login-signup-components/Login";

const LoginSignUp = () => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Simulate loading for demonstration purposes
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 500);

    // Clear timeout when unmounting to avoid memory leaks
    return () => clearTimeout(timeout);
  }, []);
  return (
    <div>
      <Spinner loading={loading} />
      <MainContent loading={loading}>
        <LoginHero />
        <Container>
          <Login />
          <SignUp />
        </Container>
      </MainContent>
    </div>
  );
};
export default LoginSignUp;
const MainContent = styled.div<{ loading: boolean }>`
  display: ${(props) => (props.loading ? "none" : "block")};
`;

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
