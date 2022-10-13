import React from "react";
import About from "../../components/About";
import Campaigns from "../../components/Campaigns";
import Carousel from "../../components/Carousel";
import MenuWrapper from "../../components/products/MenuWrapper";
import Reservation from "../../components/Reservation";

const Index = () => {
  return (
    <div>
      <Carousel />
      <Campaigns />
      <MenuWrapper />
      <About />
      <Reservation />
    </div>
  );
};

export default Index;
