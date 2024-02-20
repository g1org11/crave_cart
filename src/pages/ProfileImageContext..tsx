// ProfileImageContext.js

import React, { createContext, useState, useContext, useEffect } from "react";

const ProfileImageContext = createContext();

export const useProfileImage = () => useContext(ProfileImageContext);

export const ProfileImageProvider = ({ children }) => {
  const [profileImages, setProfileImages] = useState({});

  useEffect(() => {
    // Load profile images from local storage when component mounts
    const storedProfileImages = localStorage.getItem("profileImages");
    if (storedProfileImages) {
      setProfileImages(JSON.parse(storedProfileImages));
    }
  }, []);

  const updateProfileImage = (userId, image) => {
    // Update profile image in state
    setProfileImages((prevImages) => ({
      ...prevImages,
      [userId]: image,
    }));

    // Store updated profile images in local storage
    localStorage.setItem("profileImages", JSON.stringify({ ...profileImages, [userId]: image }));
  };

  const getProfileImage = (userId) => {
    return profileImages[userId] || null;
  };

  return (
    <ProfileImageContext.Provider value={{ updateProfileImage, getProfileImage }}>
      {children}
    </ProfileImageContext.Provider>
  );
};
