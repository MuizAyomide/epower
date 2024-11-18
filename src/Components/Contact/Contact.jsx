import React from "react";
import "./Contact.css";
import { useEffect } from "react";

const Contact = () => {

  useEffect(() => {
    // Observer for write-up elements
    const writeUpObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show_text'); 
            }
        });
    });

    // Observer for image elements
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show_boxs'); 
            }
        });
    });

    const animatedElements = document.querySelectorAll('.text_animation');
    const animatedImages = document.querySelectorAll('.boxs_animation');

    animatedElements.forEach((el) => writeUpObserver.observe(el));
    animatedImages.forEach((image) => imageObserver.observe(image));

    // Cleanup
    return () => {
        animatedElements.forEach((el) => writeUpObserver.unobserve(el));
        animatedImages.forEach((image) => imageObserver.unobserve(image));
    };
}, []);

  return (
    <div className="contact section container">
      <h1 className="text_animation">Contact us</h1>
      <p className="text_animation">
        Seen enough, we’d love to leverage our expertise to help you too. Get in
        touch with us with the details below.
      </p>
      <div className="contact_boxs">
        <div className="contact_box boxs_animation">
          <img src="email-icon-fill.svg" alt="" />
          <h3 className="text_animation">Email</h3>
          <p className="text_animation">info@epower.ng</p>
        </div>
        <div className="contact_box boxs_animation">
          <img src="phone-icon.svg" alt="" />
          <h3 className="text_animation">Phone</h3>
          <p className="text_animation">08037285780</p>
        </div>
        <div className="contact_box boxs_animation">
          <img src="pin-icon.svg" alt="" />
          <h3 className="text_animation">Office</h3>
          <p className="text_animation">
            Topmost floor, Alhaja T.A Lanihun Shopping Complex, Bashorun,
            Ibadan, Oyo State, Nigeria.
          </p>

          <p className="text_animation"><u>View on Map</u></p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
