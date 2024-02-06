import React, { useState, useEffect } from "react";
import profileimg from "../assets/profile/profile_image.png";
import styled from "styled-components";
import { defaultTheme } from "../defaultTheme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Profile = () => {
  const [profileData, setProfileData] = useState({
    email: "",
    phone: "",
    fullName: "",
    professionalTitle: "",
    age: 0,
    about: "",
    contactNumber: "",
    country: "",
    postcode: 0,
    city: "",
    fullAddress: "",
  });
  useEffect(() => {
    // Fetch user profile data from server and update state
    // You may need to implement a backend endpoint to fetch profile data
    // Example: /get-profile-data
    // Update the URL and headers as needed
    fetch("/get-profile-data", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // Set the received profile data in the state
        setProfileData(data);

        // If email and phone are present in the data, set them in the state
        if (data.email && data.phone) {
          setProfileData((prevData) => ({
            ...prevData,
            email: data.email,
            phone: data.phone,
          }));
          // Store email and phone in localStorage
          localStorage.setItem("email", data.email);
          localStorage.setItem("phone", data.phone);
        }
      })

      .catch((error) => console.error("Error fetching profile data:", error));
  }, []); // Run once on component mount

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit the updated profile data to the server
    // Example: /update-profile
    // Update the URL and headers as needed
    fetch("http://localhost:5000/update-profile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(profileData),
    }).catch((error) => console.error("Error updating profile:", error));
  };
  return (
    <Container>
      <Wrapper>
        <UserInfo>
          <FontAwesomeIcon icon={faUser} size="2xl" />
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
      <Form onSubmit={handleSubmit}>
        <h1>BASIC INFORMATION</h1>
        <UserName>
          <Label>User Full Name*</Label>
          <input
            type="text"
            name="fullName"
            value={profileData.fullName}
            onChange={handleInputChange}
          />
        </UserName>
        <JobAge>
          <div>
            <Label>Professional title*</Label>
            <input
              type="text"
              name="professionalTitle"
              value={profileData.professionalTitle}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <Label>Age*</Label>
            <input type="number" name="age" value={profileData.age} onChange={handleInputChange} />
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
            <input
              type="tel"
              name="contactNumber"
              value={profileData.contactNumber}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <Label>Email Address</Label>
            <input
              type="email"
              name="email" // Assuming your email field is present in the profileData
              value={profileData.email}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <Label>Country</Label>
            <input
              type="text"
              name="country"
              value={profileData.country}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <Label>Postcode</Label>
            <input
              type="number"
              name="postcode"
              value={profileData.postcode}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <Label>City</Label>
            <input type="text" name="city" value={profileData.city} onChange={handleInputChange} />
          </div>
          <div>
            <Label>Full Address</Label>
            <input
              type="text"
              name="fullAddress"
              value={profileData.fullAddress}
              onChange={handleInputChange}
            />
          </div>
        </MainForm>
        <SubmmitButoon>
          <button type="submit">Save Setting</button>
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
