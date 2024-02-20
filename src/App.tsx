// import { useState } from "react";

import "./App.css";
import GlobalStyles from "./GlobalStyling";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./pages/Main";
import About from "./pages/About";
import Items from "./pages/Items";
import Contact from "./pages/Contact";
import LoginSignUp from "./pages/LoginSignup";
import { AuthProvider } from "./components/login-signup-components/AuthContext";
import ForgotPassword from "./components/login-signup-components/ForgotPassword";
import Profile from "./pages/Profile";
import { ProfileImageProvider } from "./pages/ProfileImageContext.";

function App() {
  return (
    <div>
      <ProfileImageProvider>
        <AuthProvider>
          <Router>
            <GlobalStyles />
            <Header />
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/about" element={<About />} />
              <Route path="/items" element={<Items />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/Login-SignUp" element={<LoginSignUp />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/Login_SignUp" element={<LoginSignUp />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
            <Footer />
          </Router>
        </AuthProvider>
      </ProfileImageProvider>
    </div>
  );
}

export default App;
