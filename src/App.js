import React from "react";
import Hero from "./components/HeroSection/Hero";
import Header from "./components/HeaderSection/Header";
import Services from "./components/ServicesSection/Services";
import Destination from "./components/DestinationSection/Destination";
import Step from "./components/StepSection/Step";
import "./index.css";

function App() {
  return (
    <main className="mainContent">
      <Header />
      <Hero />
      <Services />
      <Destination />
      <Step />
    </main>
  );
}

export default App;
