import React from 'react';
import googlePlayBadge from '../assets/images/google-play-badge.svg';
import appStoreBadge from '../assets/images/app-store-badge.svg';
import trustpilot from '../assets/images/trustpilot.svg';
import instagram from '../assets/images/instagram.png';
import x from '../assets/images/x.png';
import youtube from '../assets/images/youtube.png';
import facebook from '../assets/images/facebook.png';
import si from '../assets/images/si.png'
import a from '../assets/images/a.png'
import que from '../assets/images/que.png'
import '../style/Footer.css'
const Footer = () => {
  return (
    <footer style={{backgroundColor:"black"}}>
      <div className="apps-section">
        <h2>Download our apps</h2>
        <div className="apps">
          <div className="app">
            <img src={que} alt="" style={{"height":"50px"}}/>
            <h1>app</h1>
            <a href="#"><img src={googlePlayBadge} alt="Get it on Google Play" /></a>
            <a href="#"><img src={appStoreBadge} alt="Download on the App Store" /></a>
          </div>
          <div className="app">
          <img src={que} alt="" style={{"height":"50px"}}/>
            <h1>launches</h1>
            <a href="#"><img src={googlePlayBadge} alt="Get it on Google Play" /></a>
            <a href="#"><img src={appStoreBadge} alt="Download on the App Store" /></a>
          </div>
        </div>
      </div>
      <div className="newsletter-section">
        <h2>Sign up to get 10% off*</h2>
        <form style={{backgroundColor:"black"}}>
          <input type="email" placeholder="Enter your email here" style={{backgroundColor:"black",border:"1px solid white"}}/>
          <button type="submit" style={{backgroundColor:"black",border:"1px solid white",color:"wheat"}}>&#8594;</button>
        </form>
        <p>We will use your information in accordance with our <a href="#">privacy policy</a>.</p>
      </div>
      <div className="trustpilot-section">
        <div className="trustpilot">
          <img src={trustpilot} alt="Trustpilot" />
          <p>TrustScore 3.9</p>
          <p>30,736 reviews</p>
        </div>
      </div>
      <div className="social-media-section">
        <a href="#"><img src={instagram} alt="Instagram" /></a>
        <a href="#"><img src={facebook} alt="Facebook" /></a>
        <a href="#"><img  src="https://i8.amplience.net/i/jpl/logo-white-1092570c039452d90551d328e0652bc9" alt="x" /></a>
        <a href="#"><img src={youtube} alt="YouTube" /></a>
        <a href="#"><img src={si} alt="x" /></a>
        <a href="#"><img src={a} alt="x" /></a>
      </div>
    </footer>
  );
};

export default Footer;
