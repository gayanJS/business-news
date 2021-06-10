import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join with us and get letest business informations
        </p>
        
        <div className='input-areas'>
          

        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>
            
          </div>
        </div>
        <div className='footer-link-wrapper'>
          
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
<<<<<<< Updated upstream
            <Link to='/' className='social-logo'>
=======
            <Link to className='social-logo'>
>>>>>>> Stashed changes
              BIZZNEWS
              
        </Link>
          </div>
<<<<<<< Updated upstream
          <small class='website-rights'>BIZZNEWS © 2020</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
=======
          <small class='website-rights'>BIZZNEWS © 2021</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to={{ pathname: "https://www.facebook.com/BizzNews-111584264352879/" }}
>>>>>>> Stashed changes
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
<<<<<<< Updated upstream
              to='/'
=======
              to={{ pathname: "https://www.instagram.com/bizznews1/" }}
>>>>>>> Stashed changes
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
<<<<<<< Updated upstream
              to='/'
              target='_blank'
=======
              to={{ pathname: "https://youtube.com/channel/UCOhd3g0lMjqFS6f4grc605A" }}
             target="_blank" 
>>>>>>> Stashed changes
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
<<<<<<< Updated upstream
              to='/'
=======
              to={{ pathname: "https://twitter.com/BizzNews4?s=09" }}
>>>>>>> Stashed changes
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
<<<<<<< Updated upstream
              class='social-icon-link twitter'
              to='/'
=======
              class='social-icon-link linkedin'
              to={{ pathname: "https://www.linkedin.com" }}
>>>>>>> Stashed changes
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

<<<<<<< Updated upstream
export default Footer;
=======
export default Footer;

>>>>>>> Stashed changes
