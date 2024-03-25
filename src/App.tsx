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
import AdminPanel from "./pages/AdminPanel";
import ItemsCard from "./components/items-component/ItemsDetails";
import Cart from "./pages/CartPage";
import { CartProvider } from "./components/cart-components/CartContext";

function App() {
  return (
    <div>
      <CartProvider>
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
                <Route path="/Admin-Panel" element={<AdminPanel />} />
                <Route path="/items" element={<Items />} />
                {/* <Route path="`/items/ItemsCard/${item.name}" element={<ItemsCard />} /> */}
                <Route path={`/items/:itemName/:id`} element={<ItemsCard />} />
                <Route path={`/cart`} element={<Cart />} />
              </Routes>
              <Footer />
            </Router>
          </AuthProvider>
        </ProfileImageProvider>
      </CartProvider>
    </div>
  );
}

export default App;
