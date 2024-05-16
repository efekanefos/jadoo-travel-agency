import React from "react";
import "./Services.css";
import ServiceCard from "./ServiceCard";
import cardImg1 from "../../assets/servicesImages/card_image_1.png";
import cardImg2 from "../../assets/servicesImages/card_image_2.png";
import cardImg3 from "../../assets/servicesImages/card_image_3.png";
import cardImg4 from "../../assets/servicesImages/card_image_4.png";

const serviceCards = [
  {
    image: cardImg1,
    title: "Calculated Weather",
    desc: "Built Wicket longer admire do barton vanity itself do in it.",
  },
  {
    image: cardImg2,
    title: "Best Flights",
    desc: "Engrossed listening. Park gate sell they west hard for the.",
  },
  {
    image: cardImg3,
    title: "Local Events",
    desc: "Barton vanity itself do in it. Preferd to men it engrossed listening.",
  },
  {
    image: cardImg4,
    title: "Customization",
    desc: "We deliver outsourced aviation services for military customers",
  },
];

function Services() {
  return (
    <section className="servicesContent">
      <h4 className="sectionSubTitle">CATEGORY</h4>
      <h1 className="servicesMainTitle">We Offer Best Services</h1>
      <div className="servicesCards">
        {serviceCards.map((card, index) => (
          <ServiceCard key={index} card={card} />
        ))}
      </div>
    </section>
  );
}

export default Services;
