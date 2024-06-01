import React from "react";
import destinationImg1 from "../../assets/destinationImages/destinationImg1.png";
import destinationImg2 from "../../assets/destinationImages/destinationImg2.jpg";
import destinationImg3 from "../../assets/destinationImages/destinationImg3.png";
import "./Destination.css";
import DestinationCard from "./DestinationCard";

const destinationCards = [
  {
    image: destinationImg1,
    location: "Rome, Italy",
    price: "$5,42k",
    tripDay: 10,
  },
  {
    image: destinationImg2,
    location: "London, UK",
    price: "$4,2k",
    tripDay: 12,
  },
  {
    image: destinationImg3,
    location: "Full Europe",
    price: "$15k",
    tripDay: 28,
  },
];

function Destination() {
  return (
    <section className="destinationContent">
      <h4 className="sectionSubTitle">Top Selling</h4>
      <h1 className="sectionMainTitle"> Top Destinations</h1>
      <div className="destinationCards">
        {destinationCards.map((card, index) => (
          <DestinationCard
            key={index}
            image={card.image}
            location={card.location}
            price={card.price}
            tripDay={card.tripDay}
          />
        ))}
      </div>
    </section>
  );
}

export default Destination;
