import { Footer } from "antd/lib/layout/layout";
import React from "react";
import imgcontact from "../../img/contact.png";
import FooterWeb from "../footer/FooterWeb";
import { S_contact } from "./CSS_Header";
import Navigation from "./Navigation";
const Contact = () => {
  return (
    <>
      <Navigation />
      <S_contact>
        <div className="formContact">
          <h1>CONTACT US</h1>
          <p>Our friendly team would love to hear from you!</p>
          <div className="wrapInput">
            <label htmlFor="">Full name</label>
            <input type="text" />
          </div>
          <div className="wrapInput">
            <label htmlFor="">Email</label>
            <input type="text" />
          </div>
          <div className="wrapInput">
            <label htmlFor="">Phone number</label>
            <input type="text" />
          </div>
          <div className="wrapInput">
            <label htmlFor="">Message</label>
            <input type="text" style={{ minHeight: `120px` }} />
          </div>
          <button>Gửi thông tin đến chúng tôi </button>
        </div>
        <img src={imgcontact} alt="" />
      </S_contact>
      <FooterWeb />
    </>
  );
};
export default Contact;
