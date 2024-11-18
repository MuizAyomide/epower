import React from "react";
import "./Work.css";
import { useEffect } from "react";

const Work = () => {

  useEffect(() => {
    // Observer for write-up elements
    const writeUpObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show_texts'); 
            }
        });
    });

    // Observer for image elements
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show_bold_image'); 
            }
        });
    });

    const animatedElements = document.querySelectorAll('.texts_animation');
    const animatedImages = document.querySelectorAll('.bold_image_animation');

    animatedElements.forEach((el) => writeUpObserver.observe(el));
    animatedImages.forEach((image) => imageObserver.observe(image));

    // Cleanup
    return () => {
        animatedElements.forEach((el) => writeUpObserver.unobserve(el));
        animatedImages.forEach((image) => imageObserver.unobserve(image));
    };
}, []);
  
  return (
    <div className="work container section">
      <h1 className="texts_animation">Our works</h1>
      <p className="texts_animation">
        Explore our portfolio of projects where technology meets practical
        application, illustrating our commitment to transforming businesses and
        communities for a digital-first future.
      </p>

      <div className="work_links">

        <div className="fir fir_work">

        <div className="work_link">
          <img className="bold_image_animation" src="Content-p-1080.webp" alt="" />
          <div className="work_desc">
            <h3 className="texts_animation">Content Spark:</h3>
            <p className="texts_animation">
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
          <img className="bold_image_animation" src="Movendi-p-1080.webp" alt="" />
          <div className="work_desc">
            <h3 className="texts_animation">Movendi International:</h3>
            <p className="texts_animation">
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
                  </div>

                  <div className="sec sec_work">


        <div className="work_link">
          <img className="bold_image_animation" src="Financial health-p-1080.webp" alt="" />
          <div className="work_desc">
            <h3 className="texts_animation">Financial Health Checker:</h3>
            <p className="texts_animation">
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
          <img className="bold_image_animation" src="GM-p-1080.webp" alt="" />
          <div className="work_desc">
            <h3 className="texts_animation">Grant Master’s Website:</h3>
            <p className="texts_animation">
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
    </div>
  );
};

export default Work;
