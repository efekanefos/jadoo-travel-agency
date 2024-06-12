import React from "react";
import "./Logo.css";
import axonImg from "../../assets/logoImages/axon.png";
import jetstarImg from "../../assets/logoImages/jetstar.png";
import expediaImg from "../../assets/logoImages/expedia.png";
import qantasImg from "../../assets/logoImages/qantas.png";
import alitaliaImg from "../../assets/logoImages/alitalia.png";

function Logo() {
  return (
    <section className="logoContent">
      {/* Axon */}
      <div className="logoBox">
        <div className="logoBoxImgContent">
          <img src={axonImg} alt="Axon" className="logoBoxImg" />
        </div>
      </div>
      {/* Jetstar */}
      <div className="logoBox">
        <div className="logoBoxImgContent">
          <img src={jetstarImg} alt="Axon" className="logoBoxImg" />
        </div>
      </div>
      {/* Expedia */}
      <div className="logoBox">
        <div className="logoBoxImgContent">
          <img src={expediaImg} alt="Axon" className="logoBoxImg" />
        </div>
      </div>
      {/* Qantas */}
      <div className="logoBox">
        <div className="logoBoxImgContent">
          <img src={qantasImg} alt="Axon" className="logoBoxImg" />
        </div>
      </div>
      {/* Alitalia */}
      <div className="logoBox">
        <div className="logoBoxImgContent">
          <img src={alitaliaImg} alt="Axon" className="logoBoxImg" />
        </div>
      </div>
    </section>
  );
}

export default Logo;
