import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';




function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Subscribe to our newsletter.
        </p>

        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='fullname'
              type='text'
              placeholder='Full Name'
            />

            <input
              className='footer-input'
              name='collegename'
              type='text'
              placeholder='College Name'
            />
            
            <input
              className='footer-input'
              name=''
              type='email'
              placeholder='Mobile No.'
            />
          
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />

            <p className='footer-subscription-text'>
            <input
              className='footer-input'
              name='checkbox'
              type='checkbox'
              placeholder=''
            />
            Join TEN's Discord Community
            </p>

            <Button buttonStyle='btn--outline'>Subscribe</Button>

            

          </form>
        </div>
      </section>

      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>

            <h2>
            <Link to='/sign-up'>About Us</Link>
            </h2>

            <h2>
            <Link to='/'>FAQs</Link>
            </h2>

            <h2>
            <Link to='/'>Contact Us</Link>
            </h2>

          </div>
        </div>

      

      </div>

      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              TRVL
              <i class='fab fa-typo3' />
            </Link>
          </div>
          <small class='website-rights'>© 2020 Limitless Technologies - The Entrepreneurship Network</small>

          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
