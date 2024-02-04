import React from "react";
import profileimg from "../assets/profile/profile_image.png";
import styled from "styled-components";
import { defaultTheme } from "../defaultTheme";

const Profile = () => {
  return (
    <Container>
      <Wrapper>
        <UserInfo>
          <img src={profileimg} alt="" />
          <h3>username</h3>
          <p>job</p>
        </UserInfo>
        <ProfileManu>
          <ul>
            <li>Profile</li>
            <li>My Cart</li>
            <li>Wishlist</li>
            <li>Shop</li>
            <li>Logout</li>
          </ul>
        </ProfileManu>
      </Wrapper>
      <Form>
        <h1>BASIC INFORMATION</h1>
        <UserName>
          <Label>User Full Name*</Label>
          <input type="text" />
        </UserName>

        <JobAge>
          <div>
            <Label>Professional title*</Label>
            <input type="text" />
          </div>
          <div>
            <Label>Age*</Label>
            <input type="number" />
          </div>
        </JobAge>

        <div>
          <Label>About</Label>
          <About>
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print,
            graphic or web designs. The passage is attributed to an unknown typesetter in the 15th
            century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum
            for use in a type specimen book. It usually begins with: “Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua.”
          </About>
        </div>
        <h1>CONTACT INFORMATION</h1>
        <MainForm>
          <div>
            <Label>Contact Number</Label>
            <input type="tel" />
          </div>
          <div>
            <Label>Email Address</Label>
            <input type="email" />
          </div>
          <div>
            <Label>Country</Label>
            <input type="text" />
          </div>
          <div>
            <Label>Postcode</Label>
            <input type="number" />
          </div>
          <div>
            <Label>City</Label>
            <input type="text" />
          </div>
          <div>
            <Label>Full Address</Label>
            <input type="text" />
          </div>
        </MainForm>
        <SubmmitButoon>
          <button>Save Setting</button>
        </SubmmitButoon>
      </Form>
    </Container>
  );
};

export default Profile;
const Container = styled.div`
  display: flex;
  align-items: top;
  justify-content: space-around;
  gap: 50px;
  padding: 0 100px;
  margin-top: 25px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
  h3 {
    font-size: 25px;
    line-height: 29px;
    font-weight: 400;
    color: ${defaultTheme.colors.blue};
    margin: 5px 0;
  }
  p {
    font-size: 18px;
    font-weight: 400;
    line-height: 21px;
    color: ${defaultTheme.colors.red};
    margin-bottom: 5px;
  }
`;

const ProfileManu = styled.div`
  ul {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: 10px;
  }
  li {
    width: 339px;
    font-size: 25px;
    line-height: 29px;
    color: ${defaultTheme.colors.blue};
    text-align: left;
    border-top: 1px solid ${defaultTheme.colors.red};
    border-bottom: 1px solid ${defaultTheme.colors.red};
    padding: 10px;
    list-style-type: none;
    &:hover {
      background-color: ${defaultTheme.colors.red};
      color: ${defaultTheme.colors.floralwhite};
    }
  }
`;
const Form = styled.form`
  h1 {
    font-size: 35px;
    font-weight: 700;
    line-height: 41px;
    color: ${defaultTheme.colors.red};
    padding-bottom: 10px;
    border-bottom: 2px solid ${defaultTheme.colors.red};
  }
  /* p {
    font-size: 18px;
    font-weight: 400;
    line-height: 21px;
    color: ${defaultTheme.colors.red};
    margin-bottom: 5px;
  } */
`;
const Label = styled.p`
  font-size: 18px;
  line-height: 21px;
  color: ${defaultTheme.colors.red};
  margin-bottom: 8px;
`;
const UserName = styled.div`
  margin-top: 30px;
  margin-bottom: 15px;
  input {
    width: 100%;
    height: 50px;
    font-size: 25px;
    font-weight: 400;
    line-height: 29px;
    padding-left: 15px;
    border: 2px solid ${defaultTheme.colors.red};
    border-radius: 10px;
    background-color: ${defaultTheme.colors.floralwhite};
    color: ${defaultTheme.colors.blue};
    &:focus {
      outline: none;
    }
  }
`;
const JobAge = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  input {
    width: 375px;
    height: 50px;
    font-size: 25px;
    font-weight: 400;
    line-height: 29px;
    padding-left: 15px;
    border: 2px solid ${defaultTheme.colors.red};
    border-radius: 10px;
    background-color: ${defaultTheme.colors.floralwhite};
    color: ${defaultTheme.colors.blue};
    &:focus {
      outline: none;
    }
  }
`;

const About = styled.p`
  max-width: fit-content;
  color: ${defaultTheme.colors.blue};
  margin-top: 5px;
  padding: 10px;
  border: 2px solid ${defaultTheme.colors.red};
  border-radius: 10px;
  margin-bottom: 40px;
`;

const MainForm = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 50px;
  input {
    width: 375px;
    height: 50px;
    font-size: 25px;
    font-weight: 400;
    line-height: 29px;
    padding-left: 15px;
    border: 2px solid ${defaultTheme.colors.red};
    border-radius: 10px;
    background-color: ${defaultTheme.colors.floralwhite};
    color: ${defaultTheme.colors.blue};
    &:focus {
      outline: none;
    }
  }
`;
const SubmmitButoon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 50px;
  button {
    font-size: 25px;
    font-weight: 400;
    line-height: 29px;

    background-color: ${defaultTheme.colors.red};
    color: ${defaultTheme.colors.floralwhite};
    border: 0;
    border-radius: 10px;
    padding: 10px 15px;
  }
`;
