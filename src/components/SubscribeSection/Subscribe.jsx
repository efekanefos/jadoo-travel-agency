import React from "react";
import sendingArrow from "../../assets/subscribeImages/sending_arrow.png";
import "./Subscribe.css";

function Subscribe() {
  return (
    <section className="subscribeWrapper">
      <div className="subscribeImgContent">
        <img src={sendingArrow} alt="Purple Arrow" className="subscribeImg" />
      </div>
      <div className="subscribeContent">
        <div className="subscribeLeftEllips"></div>
        <div className="subscribeRightEllips"></div>
        <h2 className="subscribeTitle">Subscribe to get information, latest news and other interesting offers about Jadoo</h2>
        <div className="subscribeSearchContent">
          <div className="subscribeInputContent">
            <input type="text" name="subscribe" id="subscribe" className="subscribeInput" placeholder="Your email" />
          </div>
          <input className="subscribeButton" type="submit" value="Subscribe" />
        </div>
      </div>
    </section>
  );
}

export default Subscribe;
