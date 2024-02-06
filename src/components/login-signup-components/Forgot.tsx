import React from "react";
import { useAuth } from "./AuthContext";

const withAuthData = (Component) => {
  return (props) => {
    const { userData } = useAuth();
    return <Component {...props} userData={userData} />;
  };
};

export default withAuthData;
