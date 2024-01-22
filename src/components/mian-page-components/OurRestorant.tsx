import React from "react";

import restorantimg1 from "../../assets/mainpage/Ourrestorant1.png";
import restorantimg2 from "../../assets/mainpage/Ourrestorant2.png";
import restorantimg3 from "../../assets/mainpage/Ourrestorant3.png";
// import arrow from "../../assets/mainpage/arrow.svg";
import restorantIcon1 from "../../assets/mainpage/OurrestorantIcon1.png";
import restorantIcon2 from "../../assets/mainpage/OurrestorantIcon-2.png";
import styled from "styled-components";
import { defaultTheme } from "../../defaultTheme";

const OurRestorant = () => {
  return (
    <Container>
      <MainTitle>OUR RESTAURANT</MainTitle>
      <RestorantWrapper>
        <div>
          <div>
            <img src={restorantimg1} alt="resimg 1" />
            <img src={restorantimg2} alt="restorant 2" />
          </div>
          <img src={restorantimg3} alt=" restorant 3" />
        </div>
        <RestorantInfo>
          <h2>For every specialoccasion there’s heritaste</h2>
          <p>
            Indignation and dislike men who are so beguiled demoralized by the charms of pleasure of
            the moment. Success Story.
          </p>
          <Information>
            <RestorantContent>
              <div>
                <InfoImg src={restorantIcon1} alt="icon" />
              </div>

              <div>
                <h3>Success Story</h3>
                <p>
                  Certain circumstances and owing to the claims of duty obligations of business it
                  will frequently.
                </p>
                <Button>Read More</Button>
              </div>
            </RestorantContent>

            <RestorantContent>
              <div>
                <InfoImg src={restorantIcon2} alt="icon" />
              </div>

              <div>
                <h3>Passionate Chefs</h3>
                <p>
                  Duty or the obligations of business it frequently occur pleasures have to be
                  repudiated.
                </p>
                <Button>Read More</Button>
              </div>
            </RestorantContent>
          </Information>
        </RestorantInfo>
      </RestorantWrapper>
    </Container>
  );
};

export default OurRestorant;

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 98px;
  padding: 0 100px;
  @media (max-width: 795px) {
    padding: 8px 50px;
  }
`;

const MainTitle = styled.div`
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  color: ${defaultTheme.colors.red};
  margin-bottom: 15px;
`;
const RestorantWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const RestorantInfo = styled.div`
  h2 {
    width: 409px;
    font-size: 35px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    color: ${defaultTheme.colors.blue};
    margin-bottom: 16px;
  }
  p {
    width: 679px;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: ${defaultTheme.colors.blue};
    /* margin-bottom: 49px; */
  }
`;
const Information = styled.div`
  display: flex;
  /* align-items: center; */
  flex-direction: column;
  gap: 25px;
  margin-top: 49px;
`;

const RestorantContent = styled.div`
  display: flex;
  align-items: top;
  justify-content: left;
  h3 {
    font-size: 35px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    color: ${defaultTheme.colors.red};
    margin-bottom: 10px;
  }
  p {
    width: 563px;
    margin-bottom: 15px;
  }

  button {
    /* text-align: center; */
    padding: 6px 12px;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    color: ${defaultTheme.colors.red};
  }
`;
const InfoImg = styled.img`
  padding: 25px;
  /* width: 50px;
  height: 50px; */
  border: 2px solid ${defaultTheme.colors.red};
  border-radius: 50%;
  margin-right: 20px;
`;
const Button = styled.button`
  all: unset;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  padding: 6px 12px;
  border-radius: 25px;
  color: ${defaultTheme.colors.red};
  text-align: center;
  margin-left: 50px;
  &:hover {
    background-color: ${defaultTheme.colors.red};
    color: ${defaultTheme.colors.floralwhite};
  }
`;
