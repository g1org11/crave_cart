// import { useState } from "react";

import "./App.css";
import GlobalStyles from "./GlobalStyling";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./pages/Main";

function App() {
  return (
    <div>
      <GlobalStyles />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
