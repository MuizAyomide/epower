import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact section container">
      <h1>Contact us</h1>
      <p>
        Seen enough, we’d love to leverage our expertise to help you too. Get in
        touch with us with the details below.
      </p>
      <div className="contact_boxs">
        <div className="contact_box">
          <img src="email-icon-fill.svg" alt="" />
          <h3>Email</h3>
          <p>info@epower.ng</p>
        </div>
        <div className="contact_box">
          <img src="phone-icon.svg" alt="" />
          <h3>Phone</h3>
          <p>08037285780</p>
        </div>
        <div className="contact_box">
          <img src="pin-icon.svg" alt="" />
          <h3>Office</h3>
          <p>
            Topmost floor, Alhaja T.A Lanihun Shopping Complex, Bashorun,
            Ibadan, Oyo State, Nigeria.
          </p>

          <p><u>View on Map</u></p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
