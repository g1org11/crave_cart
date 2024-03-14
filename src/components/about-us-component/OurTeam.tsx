import styled from "styled-components";
import { defaultTheme } from "../../defaultTheme";
import team1 from "../../assets/about-us/image_ourTeam_1.svg";
import team2 from "../../assets/about-us/image_ourTeam_2.svg";
import team3 from "../../assets/about-us/image_ourTeam_3.svg";
import TeamCards from "./TeamCards";
const OurTeam = () => {
  return (
    <Container>
      <h1>OUR TEAM</h1>
      <p>The Hardworking Team behind the restaurant</p>
      <CardsWrapper>
        <TeamCards img={team1} title={"Brain Adams"} />
        <TeamCards img={team2} title={"Jhon Khan"} />
        <TeamCards img={team3} title={"Jessica biel"} />
      </CardsWrapper>
    </Container>
  );
};
export default OurTeam;

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 60px;
  margin-bottom: 100px;
  padding: 0 100px;
  h1 {
    font-size: 35px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    color: ${defaultTheme.colors.blue};
  }
  p {
    text-align: center;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: ${defaultTheme.colors.blue};
  }
  @media (max-width: 768px) {
    padding: 0 50px;
  }
`;

const CardsWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 1150px) {
    column-gap: 50px;
    justify-content: center;
    flex-wrap: wrap;
  }
`;
