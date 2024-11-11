import React from "react";
import "./Displaybox.css";

const DisplayBox = () => {
  return (
    <div className="displaybox container section">
      <div className="box_container">
        <h2>As seen on</h2>
        <div className="boxs">
          <img src="Disrupt-Africa-p-500.webp" alt="" className="box" />
          <img src="Google-Africa-Blog-p-500.webp" alt="" className="box" />
          <img src="Impact-Amplifier-p-500.webp" alt="" className="box" />
          <img src="Teck-Expert.webp" alt="" className="box" />
          <img src="The-Guardian-p-500.webp" alt="" className="box" />
          <img src="PM-News-p-500.webp" alt="" className="box" />
          <img src="PressReader-p-500.webp" alt="" className="box" />
        </div>
      </div>
    </div>
  );
};

export default DisplayBox;
