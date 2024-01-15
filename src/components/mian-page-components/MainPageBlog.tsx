import React from "react";
import styled from "styled-components";
import { defaultTheme } from "../../defaultTheme";
import blogimg1 from "../../assets/mainpage/mainpage blog1.png";
import blogimg2 from "../../assets/mainpage/mainpageblog2.png";
import star from "../../assets/mainpage/mainpage star.svg";
const MainPageBlog = () => {
  return (
    <BlogContainer>
      <Title>RICH & HEALTHY</Title>
      <BlogInfo>
        <img src={blogimg1} alt="blogimg1" />
        <Infos>
          <h2>Highest quality artisangrains, proteins & seasonal ingredients</h2>
          <p>
            Righteous indignation and dislike men who are so beguiled and demoralized by the charms
            of pleasure of the moment, so blinded by desires, that they cannot foresee.
          </p>
          <div>
            <ul>
              <li>
                <img src={star} alt="star" />
                Simple and easy to distinguish
              </li>
              <li>
                <img src={star} alt="star" />
                Pleasure of the momentblinded desire
              </li>
              <li>
                <img src={star} alt="star" />
                Able to do what we like best
              </li>
            </ul>
          </div>
        </Infos>
        <BlogImgTwo src={blogimg2} alt="blog img 2" />
      </BlogInfo>
    </BlogContainer>
  );
};
export default MainPageBlog;

const BlogContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0 100px;
  margin-bottom: 50px;
`;

const BlogInfo = styled.div`
  display: flex;
  align-items: top;
`;

const Title = styled.h2`
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  color: ${defaultTheme.colors.blue};
  margin-bottom: 15px;
`;
const Infos = styled.div`
  margin-left: 30px;
  h2 {
    max-width: 502px;
    font-size: 35px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    color: ${defaultTheme.colors.red};
    margin-bottom: 30px;
  }
  p {
    max-width: 801px;
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 40px;
  }
  li {
    display: flex;
    align-items: center;
    justify-content: left;
    gap: 8px;
    margin-bottom: 30px;
    list-style-type: none;
  }
  ul {
  }
`;
const BlogImgTwo = styled.img`
  width: 359px;
  height: 377px;
  transform: translateY(222.5px);
`;
