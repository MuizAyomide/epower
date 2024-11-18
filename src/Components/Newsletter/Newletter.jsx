import React, { useEffect } from "react";
import "./Newsletter.css";
// import './Observer.js'; // Ensure this file is correctly set up

const Newsletter = () => {
    
    useEffect(() => {
        // Observer for write-up elements
        const writeUpObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show_letter'); 
                }
            });
        });
    
        const animatedElements = document.querySelectorAll('.letter_animation');
    
        animatedElements.forEach((el) => writeUpObserver.observe(el));
    
        // Cleanup
        return () => {
            animatedElements.forEach((el) => writeUpObserver.unobserve(el));
        };
    }, []);

    return (
        <div className="newsletter container section ">
            <div className="letter letter_animation">
                <h1>Transform your business</h1>
                <p>
                    Connect with Epower to leverage the potential of tailored AI and no-code
                    solutions that not only protect but propel your business into the
                    future.
                </p>
                <button className="btn btn3">Get Started today</button>
            </div>
        </div>
    );
};

export default Newsletter;