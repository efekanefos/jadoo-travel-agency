import React from "react";
import destinationArrow from "../../assets/destinationImages/destination_arrow.png";

function DestinationCard({ image, location, price, tripDay }) {
  return (
    <div className="destinationCard">
      <div className="destinationCardImgContent">
        <img src={image} alt="Rome" className="destinationCardImg" />
      </div>
      <div className="destinationCardBody">
        <p className="destinationCardLocation">{location}</p>
        <p className="destinationCardPrice">{price}</p>
      </div>
      <div className="destinationCardBottom">
        <div className="destinationCardBottomImgContent">
          <img
            src={destinationArrow}
            alt="Arrow"
            className="destinationCardBottomImg"
          />
        </div>
        <p className="destinationCardBottomDesc">{tripDay}</p>
      </div>
    </div>
  );
}

export default DestinationCard;
