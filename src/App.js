import React from "react";
import Hero from "./components/HeroSection/Hero";
import Header from "./components/HeaderSection/Header";
import Services from "./components/ServicesSection/Services";
import Destination from "./components/DestinationSection/Destination";
import "./index.css";

function App() {
  return (
    <main className="mainContent">
      <Header />
      <Hero />
      <Services />
      <Destination />
    </main>
  );
}

export default App;
