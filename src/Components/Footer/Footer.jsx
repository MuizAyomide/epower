import React from 'react'
import './Footer.css'
import { useEffect } from 'react';

const Footer = () => {

    useEffect(() => {
        
        // Observer for write-up elements
        const writeUpObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show_footer'); 
                }
            });
        });
    
        const animatedElements = document.querySelectorAll('.footer_animation');
    
        animatedElements.forEach((el) => writeUpObserver.observe(el));
    
        // Cleanup
        return () => {
            animatedElements.forEach((el) => writeUpObserver.unobserve(el));
        };
    }, []);

  return (
    <div className='footer'>
        <div className='l_r'>

        <div className="left">
            <h1 className="footer_animation">
            Harnessing the  power of AI and no-code/low-code technologies
            </h1>
        </div>
        <div className="right">
            <div className="first">
                <ul>
                    <li className="footer_animation">Home</li>
                    <li className="footer_animation">What we do</li>
                    <li className="footer_animation">Our works</li>
                    <li className="footer_animation">Contact</li>
                </ul>
            </div>
            <div className="first">
                <ul>
                    <li className="footer_animation">Behance</li>
                    <li className="footer_animation">Dribble</li>
                    <li className="footer_animation">LinkedIn</li>
                    <li className="footer_animation">Instagram</li>
                </ul>
            </div>
        </div>

        </div>
        <p className="footer_animation">© 2024 EpowerNG. All rights reserved.</p>
      
    </div>
  )
}

export default Footer
