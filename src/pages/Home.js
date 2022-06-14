import React from "react";
import Benefits from "../components/Benefits";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Roadmap from "../components/Roadmap";
import SlideCard from "../components/SlideCard";
import Team from "../components/Team";

const Home = () => {
  return (
    <>
      <Header />
      <Benefits />
      <SlideCard />
      <Roadmap />
      <Team />
      <Faq />
      <Footer />
    </>
  );
};

export default Home;
