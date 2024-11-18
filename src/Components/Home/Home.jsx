import React, { useEffect } from "react";
import "./Home.css";

const Home = () => {
    useEffect(() => {
        // Observer for write-up elements
        const writeUpObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show_writeup'); 
                }
            });
        });

        // Observer for image elements
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show_image'); 
                }
            });
        });

        const animatedElements = document.querySelectorAll('.writeup_animation');
        const animatedImages = document.querySelectorAll('.image_animation');

        animatedElements.forEach((el) => writeUpObserver.observe(el));
        animatedImages.forEach((image) => imageObserver.observe(image));

        // Cleanup
        return () => {
            animatedElements.forEach((el) => writeUpObserver.unobserve(el));
            animatedImages.forEach((image) => imageObserver.unobserve(image));
        };
    }, []);

    return (
        <div className="home section container">
            <div className="write-up writeup_animation">
                <h1>Unleash AI Power for Business Growth and Online Safety</h1>
                <p>
                    At Epower, we harness the transformative power of AI and
                    no-code/low-code technologies to drive business performance and
                    enhance digital safety.
                </p>

                <div className="buttons">
                    <div className="btn f-btn">Get started</div>
                    <div className="btn s-btn">Learn more</div>
                </div>
            </div>

            <div className="landing-image image_animation">
                <img className="hero_image" src="Hero_image-p-1080.webp" alt="" />
                <img className="hero_pattern" src="hero-pattern 2-p-500.png" alt="" />
            </div>
        </div>
    );
};

export default Home;