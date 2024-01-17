// import React from "react";
import Header from "../components/Header";
import MainHero from "../components/mian-page-components/MainHero";
import MainPageBlog from "../components/mian-page-components/MainPageBlog";
import Offers from "../components/mian-page-components/Offers";
import PopularIntems from "../components/mian-page-components/PopularItems";
// import styled from "styled-components";

const Main = () => {
  return (
    <div>
      <Header />
      <MainHero />
      <PopularIntems />
      <MainPageBlog />
      <Offers />
    </div>
  );
};
export default Main;

// const MainContainer=styled.div`
// padding: 0 100px;
// `
