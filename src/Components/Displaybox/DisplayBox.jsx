import React from "react";
import "./Displaybox.css";
import { useEffect } from "react";

const DisplayBox = () => {

  useEffect(() => {
    // Observer for write-up elements
    const writeUpObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show_header'); 
            }
        });
    });

    // Observer for image elements
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show_box'); 
            }
        });
    });

    const animatedElements = document.querySelectorAll('.header_animation');
    const animatedImages = document.querySelectorAll('.box_animation');

    animatedElements.forEach((el) => writeUpObserver.observe(el));
    animatedImages.forEach((image) => imageObserver.observe(image));

    // Cleanup
    return () => {
        animatedElements.forEach((el) => writeUpObserver.unobserve(el));
        animatedImages.forEach((image) => imageObserver.unobserve(image));
    };
}, []);

  return (
    <div className="displaybox container section">
      <div className="box_container">
        <h2 className="header_animation">As seen on</h2>
        <div className="boxs">
          <img src="Disrupt-Africa-p-500.webp" alt="" className="box box_animation" />
          <img src="Google-Africa-Blog-p-500.webp" alt="" className="box box_animation" />
          <img src="Impact-Amplifier-p-500.webp" alt="" className="box box_animation" />
          <img src="Teck-Expert.webp" alt="" className="box box_animation" />
          <img src="The-Guardian-p-500.webp" alt="" className="box box_animation" />
          <img src="PM-News-p-500.webp" alt="" className="box box_animation" />
          <img src="PressReader-p-500.webp" alt="" className="box box_animation" />
        </div>
      </div>
    </div>
  );
};

export default DisplayBox;
