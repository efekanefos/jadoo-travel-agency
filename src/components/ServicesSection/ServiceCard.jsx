import React from "react";

function ServiceCard({ card }) {
  return (
    <div className="servicesCard">
      <div className="servicesCardImgContent">
        <img src={card.image} alt={card.title} className="servicesCardImg" />
      </div>
      <h3 className="serviceTitle">{card.title}</h3>
      <p className="serviceCardDesc">{card.desc}</p>
    </div>
  );
}

export default ServiceCard;
