import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { defaultTheme } from "../defaultTheme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { AuthContext } from "../components/login-signup-components/AuthContext";

const Profile = () => {
  const [profileData, setProfileData] = useState({
    fullName: "",
    professionalTitle: "",
    age: 0,
    about: "",
    contactNumber: "",
    email: "",
    country: "",
    postcode: 0,
    city: "",
    fullAddress: "",
  });
  const [profileImage, setProfileImage] = useState(null);
  const { userData } = useContext(AuthContext);
  const userId = userData?.id;

  useEffect(() => {
    if (userId) {
      fetchProfileData(userId, userData.data);
    }
    const storedProfileImage = localStorage.getItem("profileImage");
    if (storedProfileImage) {
      setProfileImage(storedProfileImage);
    }
  }, [userId, userData]);

  const fetchProfileData = (userId, token) => {
    fetch(`http://localhost:5000/get-profile-data/${userId}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then((data) => {
        setProfileData(data);
      })
      .catch((error) => console.error("Error fetching profile data:", error));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const onImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        localStorage.setItem("profileImage", reader.result);
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("profileImage", profileImage);
    Object.entries(profileData).forEach(([key, value]) => {
      formData.append(key, value);
    });

    fetch(`http://localhost:5000/update-profile/${userId}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${userData?.data}`,
      },
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Profile updated successfully:", data);
      })
      .catch((error) => console.error("Error updating profile:", error));
  };

  return (
    <Container>
      <Wrapper>
        <UserInfo>
          <div>
            {profileImage ? (
              <label htmlFor="file-input">
                {" "}
                <ProfileImage src={profileImage} alt="Profile" />
              </label>
            ) : (
              <label htmlFor="file-input">
                <FontAwesomeIcon icon={faUser} size="2xl" />
              </label>
            )}
            <input
              type="file"
              accept="image/*"
              onChange={onImageChange}
              name="image"
              id="file-input"
              style={{ display: "none" }}
            />
          </div>

          <h3>{profileData.fullName}</h3>
          <p>{profileData.professionalTitle}</p>
        </UserInfo>
        <ProfileManu>
          <ul>
            <li>
              <a href="">Profile</a>
            </li>
            <li>
              <a href="">My Cart</a>
            </li>
            <li>
              <a href="">Wishlist</a>
            </li>
            <li>
              <a href="">Shop</a>
            </li>
            <li>
              <a href="">Logout</a>
            </li>
          </ul>
        </ProfileManu>
      </Wrapper>
      <Form onSubmit={handleSubmit}>
        <h1>BASIC INFORMATION</h1>
        <UserName>
          <Label>User Full Name*</Label>
          <input type="text" name="fullName" value={profileData.fullName} onChange={handleChange} />
        </UserName>
        <JobAge>
          <div>
            <Label>Professional title*</Label>
            <input
              type="text"
              name="professionalTitle"
              value={profileData.professionalTitle}
              onChange={handleChange}
            />
          </div>
          <div>
            <Label>Age*</Label>
            <input type="number" name="age" value={profileData.age} onChange={handleChange} />
          </div>
        </JobAge>
        <div>
          <Label>About</Label>
          <About>
            <textarea name="about" value={profileData.about} onChange={handleChange}></textarea>
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
              onChange={handleChange}
            />
          </div>
          <div>
            <Label>Email Address</Label>
            <input type="email" name="email" value={profileData.email} onChange={handleChange} />
          </div>
          <div>
            <Label>Country</Label>
            <input type="text" name="country" value={profileData.country} onChange={handleChange} />
          </div>
          <div>
            <Label>Postcode</Label>
            <input
              type="number"
              name="postcode"
              value={profileData.postcode}
              onChange={handleChange}
            />
          </div>
          <div>
            <Label>City</Label>
            <input type="text" name="city" value={profileData.city} onChange={handleChange} />
          </div>
          <div>
            <Label>Full Address</Label>
            <input
              type="text"
              name="fullAddress"
              value={profileData.fullAddress}
              onChange={handleChange}
            />
          </div>
        </MainForm>
        <SubmitButton>
          <button type="submit">Save Setting</button>
        </SubmitButton>
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
    display: flex;
    align-items: flex-start;

    padding: 10px;
    list-style-type: none;
    text-align: left;
  }
  a {
    text-align: left;
    width: 339px;
    padding: 10px;
    font-size: 25px;
    line-height: 29px;
    color: ${defaultTheme.colors.blue};

    border-top: 1px solid ${defaultTheme.colors.red};
    border-bottom: 1px solid ${defaultTheme.colors.red};

    text-decoration: none;
    &:hover {
      background-color: ${defaultTheme.colors.red};
      color: ${defaultTheme.colors.floralwhite};
    }
  }
`;
const ProfileImage = styled.img`
  width: 100px; /* Adjust as per your design */
  height: 100px; /* Adjust as per your design */
  border-radius: 50%;
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

const About = styled.div`
  max-width: 100%;
  color: ${defaultTheme.colors.blue};
  margin-top: 5px;
  padding: 10px;
  border: 2px solid ${defaultTheme.colors.red};
  border-radius: 10px;
  margin-bottom: 40px;
  textarea {
    width: 100%;
    height: 150px;
    font-size: 18px;
    font-weight: 400;
    line-height: 21px;
    padding: 10px;
    border: 0;
    /* border: 2px solid ${defaultTheme.colors.red}; */
    border-radius: 10px;
    background-color: ${defaultTheme.colors.floralwhite};
    color: ${defaultTheme.colors.blue};
    resize: vertical;
    &:focus {
      outline: none;
    }
  }
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

const SubmitButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 50px;
  button {
    cursor: pointer;
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
