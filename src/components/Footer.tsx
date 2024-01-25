import React from "react";
import watch from "../assets/footer/watch.svg";
import phone from "../assets/footer/phone.svg";

const Footer = () => {
  return (
    <div>
      <h1>Our Branch</h1>
      <div>
        <div>
          <h2>Robert Food</h2>
          <p>1986 Hilltop DriveBorger, TX 79007</p>
          <div>
            <div>
              <img src={watch} alt="watch" />
              <span>7.30 AM - 9.30 PM</span>
            </div>
            <div>
              <img src={phone} alt="phone" />
              <span>+880 1630-225015</span>
            </div>
          </div>
          <a href="#">Click to View Google Map</a>
        </div>
        <div>
          <h2>Mark A. Reed Food</h2>
          <p>4877 Rose AvenueNew Orleans, LA 70112</p>
          <div>
            <div>
              <img src={watch} alt="watch" />
              <span>7.30 AM - 9.30 PM</span>
            </div>
            <div>
              <img src={phone} alt="phone" />
              <span>+880 1630-225015</span>
            </div>
          </div>
          <a href="#">Click to View Google Map</a>
        </div>
        <div>
          <h2>Mark A. Reed Food</h2>
          <p>1509 Peaceful LaneCleveland, OH 44115</p>
          <div>
            <div>
              <img src={watch} alt="watch" />
              <span>7.30 AM - 9.30 PM</span>
            </div>
            <div>
              <img src={phone} alt="phone" />
              <span>+880 1630-225015</span>
            </div>
          </div>
          <a href="#">Click to View Google Map</a>
        </div>
      </div>
      <p>Copyright © 2022 | Khoshtaria Giorgi</p>
    </div>
  );
};
export default Footer;
