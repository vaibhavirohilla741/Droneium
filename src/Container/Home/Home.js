import React, { useState } from "react";
import CarouselContainer from "../../components/Carousel/CarouselContainer";
import OurServices from "../../components/OurServices/OurServices";
import Reach from "../../components/Reach/Reach";
import Features from "../../components/Features/Features";
import 'firebase/compat/storage';

const Home = () => {
  return (
    <>
    <CarouselContainer />
      <Reach />
      <Features />
      <OurServices />
    </>
  );
};

export default Home;
