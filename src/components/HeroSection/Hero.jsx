//? Packages
import React from "react";
//* Images
import demoButton from "../../assets/heroImages/play_button.png";
import heroImage from "../../assets/heroImages/hero_image.png";
//! Files
import "./Hero.css";

function Hero() {
  return (
    <section className="heroContent">
      <div className="heroInfoBlankContent"></div>
      <div className="heroInfoContent">
        <h3 className="heroInfoSubTitle">BEST DESTINATIONS AROUND THE WORLD</h3>
        <h1 className="heroInfoMainTitle">
          Travel,<span className="heroInfoTextDecore">enjoy</span> and live a
          new and full life
        </h1>
        <p className="heroInfoDesc">
          Built Wicket longer admire do barton vanity itself do in it. Preferred
          to sportsmen it engrossed listening. Park gate sell they west hard for
          the.
        </p>
        <div className="heroButtonContent">
          <button className="heroButton">Find out more</button>

          <div className="heroDemoContent">
            <div className="heroDemoImgContent">
              <img src={demoButton} alt="Play Demo" className="heroDemoImg" />
            </div>
            <p className="heroDemoDesc">Play Demo</p>
          </div>
        </div>
      </div>
      <div className="heroImageContent">
        <img src={heroImage} alt="Travel Girl" className="heroImage" />
      </div>
    </section>
  );
}

export default Hero;
