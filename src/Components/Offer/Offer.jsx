import React from "react";
import "./Offer.css";

const Offer = () => {
  return (
    <div className="offer container section">
      <h1>What we offer</h1>
      <p>
        Our strategic solutions are crafted to empower businesses,
        organizations, and individuals, enabling them to thrive in a
        digital-first world.
      </p>

      <div className="offers">
        <div className="fir">

        <div className="offer-box box_1">
          <img src="Frame 567.webp" alt="" />
          <h3>Tailored AI Applications:</h3>
          <p>
            Unlock the full potential of your business with our personalized AI
            solutions and custom GPT models. We address your specific
            challenges, enhancing operations and elevating customer engagement
            to new heights.
          </p>
        </div>
        <div className="offer-box box_2">
          <img src="Frame 568.webp" alt="" />

          <h3> Bespoke No-Code Platforms:</h3>
          <p>
            Transform your business processes with our scalable, no-code
            solutions designed for rapid deployment and maximum efficiency. From
            websites to mobile apps, we build products that deliver value.
          </p>
        </div>
        </div>
        <div className="sec">

        <div className="offer-box box_3">
          <img src="Frame 569.webp" alt="" />

          <h3> Comprehensive Digital and AI Literacy Training:</h3>
          <p>
            In partnership with leading technology companies, we offer extensive
            digital skills training and interventions that enhance both digital
            and AI literacy. Our interventions focus on the safe and proficient
            use of technology.
          </p>
        </div>
        <div className="offer-box box_4">
          <img src="Frame 570.webp" alt="" />

          <h3>Cyber Hygiene Project:</h3>
          <p>
            In collaboration with Google and Impact Amplifier, our innovative
            app and targeted intervention equip thousands of teens, teachers,
            and parents with the tools to combat cyberbullying.
          </p>
        </div>
      </div>
        </div>
    </div>
  );
};

export default Offer;
