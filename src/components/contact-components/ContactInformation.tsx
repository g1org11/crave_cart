import React from "react";
import styled from "styled-components";
import { defaultTheme } from "../../defaultTheme";
import location from "../../assets/contact/location_icon.svg";
import phone from "../../assets/contact/phone_icon (1).svg";
import email from "../../assets/contact/mail_icon.svg";
import whatch from "../../assets/contact/watch_icon (1).svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXTwitter,
  faSquareFacebook,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const ContactInformation = () => {
  return (
    <Container>
      <div>
        <div>
          <h1>ADDRESS</h1>
          <div>
            <div>
              <img src={location} alt="location" />
              <span>28 Seventh Avenue, Neew York, 10014</span>
            </div>
            <div>
              <img src={phone} alt="phone" />
              <span>+880 1630 225 015</span>
            </div>
            <div>
              <img src={email} alt="phone" />
              <span>resturents@gmail.com</span>
            </div>
          </div>
        </div>
        <div>
          <h1>WORKING HOURS</h1>
          <div>
            <img src={whatch} alt="watch" />
            <span>7:30 am to 9:30pm on Weekdays</span>
          </div>
        </div>
        <div>
          <h1>FOLLOW US</h1>
          <Icons>
            <a href="">
              {" "}
              <FontAwesomeIcon icon={faXTwitter} size="xl" />
            </a>
            <a href="">
              <FontAwesomeIcon icon={faSquareFacebook} size="xl" />
            </a>
            <a href="">
              <FontAwesomeIcon icon={faInstagram} size="xl" />
            </a>
            <a href="">
              <FontAwesomeIcon icon={faLinkedinIn} size="xl" />
            </a>
          </Icons>
        </div>
      </div>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23642.491047820058!2d42.17797255257476!3d42.207789145495724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x405c540482872587%3A0xb63670b21d6a34b1!2sAbasha!5e0!3m2!1sen!2sge!4v1706288662964!5m2!1sen!2sge"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </Container>
  );
};

export default ContactInformation;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 30px;
  margin-top: 30px;
  h1 {
    font-size: 35px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    color: ${defaultTheme.colors.red};
  }
`;
const Icons = styled.div`
  /* display: flex;
  align-items: center;
  justify-content: center; */
  gap: 33px;
  margin-top: 42px;

  svg {
    color: ${defaultTheme.colors.red};
  }
`;
