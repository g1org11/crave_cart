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

function App() {
  return (
    <div>
      <Router>
        <GlobalStyles />
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/items" element={<Items />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Login-SignUp" element={<LoginSignUp />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
