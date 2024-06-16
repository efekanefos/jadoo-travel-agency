import React from "react";
import "./Footer.css";
import facebookCircle from "../../assets/footerImages/facebook_circle.png";
import instagramCircle from "../../assets/footerImages/instagram_circle.png";
import twitterCircle from "../../assets/footerImages/twitter_circle.png";
import googlePlayButton from "../../assets/footerImages/googleplay_button.png";
import appleStoreButton from "../../assets/footerImages/applestore_button.png";

function Footer() {
  return (
    <footer className="footerContent">
      {/* Logo */}
      <div className="footerLogoContent">
        <h2 className="footerLogoTitle">Jadoo.</h2>
        <p className="footerLogoDesc">Book your trip in minute, get full Control for much longer.</p>
      </div>
      {/* Footer Link Col 1 */}
      <div className="footerLinkCol">
        <h3 className="footerLinkColTitle">Company</h3>
        <ul className="footerLinkList">
          <li className="footerLinkListItem">
            <a href="/" className="footerLinkListItemLink">
              About
            </a>
          </li>
          <li className="footerLinkListItem">
            <a href="/" className="footerLinkListItemLink">
              Careers
            </a>
          </li>
          <li className="footerLinkListItem">
            <a href="/" className="footerLinkListItemLink">
              Mobile
            </a>
          </li>
        </ul>
      </div>
      {/* Footer Link Col 2 */}
      <div className="footerLinkCol">
        <h3 className="footerLinkColTitle">Contact</h3>
        <ul className="footerLinkList">
          <li className="footerLinkListItem">
            <a href="/" className="footerLinkListItemLink">
              Help/FAQ
            </a>
          </li>
          <li className="footerLinkListItem">
            <a href="/" className="footerLinkListItemLink">
              Press
            </a>
          </li>
          <li className="footerLinkListItem">
            <a href="/" className="footerLinkListItemLink">
              Affilates
            </a>
          </li>
        </ul>
      </div>
      {/* Footer Link Col 3 */}
      <div className="footerLinkCol">
        <h3 className="footerLinkColTitle">More</h3>
        <ul className="footerLinkList">
          <li className="footerLinkListItem">
            <a href="/" className="footerLinkListItemLink">
              Airlinefees
            </a>
          </li>
          <li className="footerLinkListItem">
            <a href="/" className="footerLinkListItemLink">
              Airline
            </a>
          </li>
          <li className="footerLinkListItem">
            <a href="/" className="footerLinkListItemLink">
              Low fare tips
            </a>
          </li>
        </ul>
      </div>
      {/* Footer Social Media Col */}
      <div className="footerSocialMediaCol">
        <div className="footerSocialMediaRow">
          <div className="footerSocialMediaImgContent">
            <a href="/" className="footerSocialMediaLink">
              <img src={facebookCircle} alt="Facebook" className="footerSocialMediaImg" />
            </a>
          </div>

          <div className="footerSocialMediaImgContent">
            <a href="/" className="footerSocialMediaLink">
              <img src={instagramCircle} alt="Facebook" className="footerSocialMediaImg" />
            </a>
          </div>

          <div className="footerSocialMediaImgContent">
            <a href="/" className="footerSocialMediaLink">
              <img src={twitterCircle} alt="Facebook" className="footerSocialMediaImg" />
            </a>
          </div>
        </div>
        <p className="footerSocialMediaDesc">Discover our app</p>

        <div className="footerSocialMediaButtons">
          <div className="footerSocialMediaButtonContent">
            <a href="/" className="footerSocialMediaButtonLink">
              <img src={googlePlayButton} alt="Google Play Store" className="footerSocialMediaButtonImg" />
            </a>
          </div>
          <div className="footerSocialMediaButtonContent">
            <a href="/" className="footerSocialMediaButtonLink">
              <img src={appleStoreButton} alt="Apple App Store" className="footerSocialMediaButtonImg" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
