import React from "react";
import stepSideImg from "../../assets/stepsImages/tripImage.png";
import stepImg1 from "../../assets/stepsImages/choose_destination.png";
import stepImg2 from "../../assets/stepsImages/make_payment.png";
import stepImg3 from "../../assets/stepsImages/reach_airport.png";
import "./Step.css";
import StepRow from "./StepRow";

const stepRows = [
  {
    image: stepImg1,
    title: "Choose Destination",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
  },
  {
    image: stepImg2,
    title: "Make Payment",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
  },
  {
    image: stepImg3,
    title: "Reach Airport on Selected Date",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
  },
];

function Step() {
  return (
    <section className="stepContent">
      <div className="stepInfoSide">
        <h4 className="sectionSubTitle">Easy and Fast</h4>
        <h1 className="servicesMainTitle">Book Your Next Trip In 3 Easy Steps</h1>
        <ul className="stepFeatureList">
          {stepRows.map((row, index) => (
            <StepRow key={index} image={row.image} title={row.title} desc={row.desc} />
          ))}
        </ul>
      </div>
      <div className="stepImgSide">
        <div className="stepImgContent">
          <img src={stepSideImg} alt="Trip To Greece" className="stepImg" />
        </div>
      </div>
    </section>
  );
}

export default Step;
