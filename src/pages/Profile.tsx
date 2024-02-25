import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { defaultTheme } from "../defaultTheme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useProfileImage } from "./ProfileImageContext.";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

import { AuthContext } from "../components/login-signup-components/AuthContext";
import { useAuth } from "../components/login-signup-components/AuthContext";

const Profile = () => {
  const [profileData, setProfileData] = useState({
    fullName: "",
    professionalTitle: "",
    age: "",
    about: "",
    phone: "",
    email: "",
    country: "",
    postcode: "",
    city: "",
    fullAddress: "",
  });
  const [profileImage, setProfileImage] = useState(null);
  const { isAuthenticated } = useAuth();
  const { userData } = useContext(AuthContext);
  const userId = userData?.id;
  const { updateProfileImage, getProfileImage } = useProfileImage();
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    const newShowMenu = !showMenu;
    setShowMenu(newShowMenu);
    localStorage.setItem("showMenu", JSON.stringify(newShowMenu));
  };
  useEffect(() => {
    if (userId) {
      fetchProfileData(userId, userData.data);
    }
    // Retrieve profile image from local storage
    const storedProfileImage = getProfileImage(userId);
    if (storedProfileImage) {
      setProfileImage(storedProfileImage);
    }
  }, [userId, userData, getProfileImage]);

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
        // console.log(data, "qq");
      })
      .catch((error) => console.error("Error fetching profile data:", error));
  };

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setProfileData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const onImageChange = (e: { target: { files: any[] } }) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const image = reader.result;
        setProfileImage(image);
        updateProfileImage(userData.id, image); // Update profile image
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("profileImage", profileImage);
    Object.entries(profileData).forEach(([key, value]) => {
      formData.append(key, value);
    });
    console.log(formData);
    await fetch(`http://localhost:5000/update-profile/${userId}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${userData?.data}`,
        // "Content-Type": "multipart/form-data",
      },
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Profile updated successfully:", data);
        toast.success("Profile Saved successfuly");
      })
      .catch((error) => {
        toast.error("An error occurred. Please try again later.");
        console.error("Error updating profile:", error);
      });
  };

  return (
    <div>
      <ToastContainer />
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

            <h3>{profileData.fullName ? profileData.fullName : "FullName"}</h3>
            <p>
              {profileData.professionalTitle ? profileData.professionalTitle : "Professional Title"}
            </p>
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
              {isAuthenticated && userData && userData.isAdmin && (
                <li>
                  <Link to="/Admin-Panel">Admin Panel</Link>
                </li>
              )}
              <li>
                <a href="">Logout</a>
              </li>
            </ul>
          </ProfileManu>
        </Wrapper>

        <Form onSubmit={handleSubmit}>
          <MainTitleDiv>
            <h1>BASIC INFORMATION</h1>
            <Icons>
              <BurgerIcon icon={faBars} size="2x" onClick={toggleMenu} show={!showMenu} />
              {showMenu && (
                <XmarkIcon icon={faXmark} size="2x" onClick={toggleMenu} show={showMenu} />
              )}
            </Icons>
            {showMenu && (
              <WrapperModal>
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
                      name="profileImage"
                      id="file-input"
                      style={{ display: "none" }}
                    />
                  </div>

                  <h3>{profileData.fullName ? profileData.fullName : "FullName"}</h3>
                  <p>
                    {profileData.professionalTitle
                      ? profileData.professionalTitle
                      : "Professional Title"}
                  </p>
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
                    {isAuthenticated && userData && userData.isAdmin && (
                      <li>
                        <Link to="/Admin-Panel">Admin Panel</Link>
                      </li>
                    )}
                    <li>
                      <a href="">Logout</a>
                    </li>
                  </ul>
                </ProfileManu>
              </WrapperModal>
            )}
          </MainTitleDiv>

          <UserName>
            <Label>User Full Name*</Label>
            <input
              type="text"
              name="fullName"
              value={profileData.fullName}
              onChange={handleChange}
            />
          </UserName>
          <JobAge>
            <WidthDiv>
              <Label>Professional title*</Label>
              <input
                type="text"
                name="professionalTitle"
                value={profileData.professionalTitle}
                onChange={handleChange}
              />
            </WidthDiv>
            <WidthDiv>
              <Label>Age*</Label>
              <input type="number" name="age" value={profileData.age} onChange={handleChange} />
            </WidthDiv>
          </JobAge>
          <div>
            <Label>About</Label>
            <About>
              <textarea name="about" value={profileData.about} onChange={handleChange}></textarea>
            </About>
          </div>
          <h1>CONTACT INFORMATION</h1>
          <MainForm>
            <WidthDiv>
              <Label>Contact Number</Label>
              <input type="tel" name="phone" value={profileData.phone} onChange={handleChange} />
            </WidthDiv>
            <WidthDiv>
              <Label>Email Address</Label>
              <input type="email" name="email" value={profileData.email} onChange={handleChange} />
            </WidthDiv>
            <WidthDiv>
              <Label>Country</Label>
              <input
                type="text"
                name="country"
                value={profileData.country}
                onChange={handleChange}
              />
            </WidthDiv>
            <WidthDiv>
              <Label>Postcode</Label>
              <input
                type="number"
                name="postcode"
                value={profileData.postcode}
                onChange={handleChange}
              />
            </WidthDiv>
            <WidthDiv>
              <Label>City</Label>
              <input type="text" name="city" value={profileData.city} onChange={handleChange} />
            </WidthDiv>
            <WidthDiv>
              <Label>Full Address</Label>
              <input
                type="text"
                name="fullAddress"
                value={profileData.fullAddress}
                onChange={handleChange}
              />
            </WidthDiv>
          </MainForm>
          <SubmitButton>
            <button type="submit">Save Setting</button>
          </SubmitButton>
        </Form>
      </Container>
    </div>
  );
};

export default Profile;

const Container = styled.div`
  display: flex;
  align-items: top;
  justify-content: space-between;
  gap: 50px;
  padding: 0 100px;
  margin-top: 25px;
  overflow: hidden;
  @media (max-width: 1150px) {
    padding: 0 50px;
  }
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  @media (max-width: 950px) {
    display: none;
  }
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
    cursor: pointer;
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
  @media (max-width: 1430px) {
    a {
      width: 200px;
    }
  }
`;
const ProfileImage = styled.img`
  width: 100px; /* Adjust as per your design */
  height: 100px; /* Adjust as per your design */
  border-radius: 50%;
`;
const WrapperModal = styled.div`
  width: 100%;

  position: absolute;
  right: 0;
  top: 50px;
  background-color: ${defaultTheme.colors.lightred};
  padding: 30px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const Icons = styled.div`
  width: 100%;
  position: absolute;
  top: 5px;
  right: -100%;
  /* display: flex;
  align-items: center;
  justify-content: center; */
  margin-right: 20px;
`;
const BurgerIcon = styled(FontAwesomeIcon)<IconProps>`
  display: none;

  @media (max-width: 950px) {
    display: ${(props) => (props.show ? "inline-block" : "none")};
  }
`;

const XmarkIcon = styled(FontAwesomeIcon)<IconProps>`
  display: none;

  @media (max-width: 950px) {
    display: ${(props) => (props.show ? "inline-block" : "none")};
  }
`;
const Form = styled.form`
  width: 100%;
  h1 {
    font-size: 35px;
    font-weight: 700;
    line-height: 41px;
    color: ${defaultTheme.colors.red};
    padding-bottom: 10px;
    border-bottom: 2px solid ${defaultTheme.colors.red};
  }
`;

const MainTitleDiv = styled.div`
  position: relative;
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
  display: grid;
  grid-template-columns: 1fr 1fr;
  /* flex-shrink: 0; */
  /* flex-wrap: wrap; */
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
  @media (max-width: 1430px) {
    gap: 30px;
    input {
      width: 300px;
    }
  }
  @media (max-width: 1150px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    input {
      width: 100%;
    }
  }
`;

const WidthDiv = styled.div`
  width: 100%;
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
  display: grid;
  grid-template-columns: 1fr 1fr;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 50px;
  width: 100%;
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
  @media (max-width: 1430px) {
    gap: 30px;
    input {
      width: 300px;
    }
  }
  @media (max-width: 1150px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    input {
      width: 100%;
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
