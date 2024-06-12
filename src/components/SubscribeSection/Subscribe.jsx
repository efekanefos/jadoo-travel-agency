import React from "react";
import sendingArrow from "../../assets/subscribeImages/sending_arrow.png";
import leftEllips from "../../assets/subscribeImages/left_ellips.png";
import rightEllips from "../../assets/subscribeImages/right_ellips.png";
import "./Subscribe.css";

function Subscribe() {
  return (
    <section className="subscribeWrapper">
      <div className="subscribeImgContent">
        <img src={sendingArrow} alt="Purple Arrow" className="subscribeImg" />
      </div>
      <div className="subscribeContent">
        <h2 className="subscribeTitle">
          Subscribe to get information, latest news and other interesting offers
          about Jadoo
        </h2>

        <div className="subscribeInputContent">
          <input
            type="text"
            name="subscribe"
            id="subscribe"
            className="subscribeInput"
            placeholder="Your email"
          />
        </div>
      </div>
    </section>
  );
}

export default Subscribe;
