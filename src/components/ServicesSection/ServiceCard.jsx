import React from "react";
import cardDecore from "../../assets/servicesImages/active_image.png";

function ServiceCard({ card }) {
  return (
    <div className="servicesCardWrapper">
      <div className="servicesCard">
        <div className="servicesCardImgContent">
          <img src={card.image} alt={card.title} className="servicesCardImg" />
        </div>
        <h3 className="serviceTitle">{card.title}</h3>
        <p className="serviceCardDesc">{card.desc}</p>
      </div>
      <div className="servicesCardImgContent--decore">
        <img
          src={cardDecore}
          alt={card.title}
          className="servicesCardImg--decore"
        />
      </div>
    </div>
  );
}

export default ServiceCard;
