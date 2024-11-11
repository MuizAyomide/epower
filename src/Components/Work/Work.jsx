import React from "react";
import "./Work.css";

const Work = () => {
  return (
    <div className="work container section">
      <h1>Our works</h1>
      <p>
        Explore our portfolio of projects where technology meets practical
        application, illustrating our commitment to transforming businesses and
        communities for a digital-first future.
      </p>

      <div className="work_links">
        <div className="work_link">
          <img src="Content-p-1080.webp" alt="" />
          <div className="work_desc">
            <h3>Content Spark:</h3>
            <p>
              Generate viral social media content effortlessly with the power of
              AI
            </p>
            <p className='link_direction'>
              Explore the tool{" "}
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#000"
                >
                  <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
                </svg>
              </span>
            </p>
          </div>
        </div>
        <div className="work_link">
          <img src="Movendi-p-1080.webp" alt="" />
          <div className="work_desc">
            <h3>Movendi International:</h3>
            <p>
              We developed an educational app for Movendi, the premier global
              network for development through alcohol prevention.
            </p>
            <p className='link_direction'>
              Visit Website{" "}
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#000"
                >
                  <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
                </svg>
              </span>
            </p>
          </div>
        </div>
        <div className="work_link">
          <img src="Financial health-p-1080.webp" alt="" />
          <div className="work_desc">
            <h3>Financial Health Checker:</h3>
            <p>
              Assess your financial health with detailed and personalized
              AI-driven feedback.
            </p>
            <p className='link_direction'>
              Explore the tool{" "}
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#000"
                >
                  <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
                </svg>
              </span>
            </p>
          </div>
        </div>
        <div className="work_link">
          <img src="GM-p-1080.webp" alt="" />
          <div className="work_desc">
            <h3>Grant Master’s Website:</h3>
            <p>
              We created a website and multiple web apps for Africa’s leading
              grant writing startup.
            </p>
            <p className='link_direction'>
              Visit Website{" "}
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#000"
                >
                  <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
                </svg>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
