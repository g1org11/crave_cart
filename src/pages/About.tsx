// import React from "react";
import { useState, useEffect } from "react";
import AboutHero from "../components/about-us-component/AboutHero";
import AboutBlog from "../components/about-us-component/AboutBlog";
import OurStory from "../components/about-us-component/OurStory";
import Chef from "../components/about-us-component/Chef";
import OurTeam from "../components/about-us-component/OurTeam";
import Spinner from "../components/spinner/Spinner";
import styled from "styled-components";
const About = () => {
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
        <AboutHero />
        <AboutBlog />
        <OurStory />
        <Chef />
        <OurTeam />
      </MainContent>
    </div>
  );
};
export default About;
const MainContent = styled.div<{ loading: boolean }>`
  display: ${(props) => (props.loading ? "none" : "block")};
`;
