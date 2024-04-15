// import React from "react";
import ContactHero from "../components/contact-components/ContactHero";
import ContactInformation from "../components/contact-components/ContactInformation";
import Spinner from "../components/spinner/Spinner";
import { useState, useEffect } from "react";
import styled from "styled-components";
const Contact = () => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Simulate loading for demonstration purposes
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 500);

    // Clear timeout when unmounting to avoid memory leaks
    return () => clearTimeout(timeout);
  }, []); // Empty dependency array ensures that this effect runs only once, equivalent to componentDidMount
  return (
    <div>
      <Spinner loading={loading} />
      <MainContent loading={loading}>
        <ContactHero />
        <ContactInformation />
      </MainContent>
    </div>
  );
};
export default Contact;

const MainContent = styled.div<{ loading: boolean }>`
  display: ${(props) => (props.loading ? "none" : "block")};
`;
