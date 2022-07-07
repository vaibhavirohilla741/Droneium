import React from "react";
import Carousel from "react-material-ui-carousel";
import classes from "./CarouselContainer.module.css";
import carousel1 from "../../assets/images/carousel1.jpg";
import Carousel4 from "../../assets/images/carousel4.png";
import Carousel3 from "../../assets/images/carousel3.png";

function CarouselContainer() {
  return (
    <div className={classes.CarouselContainer}>
      <Carousel
        autoPlay={true}
        animation="slide"
        swipe={true}
        indicators={false}
        navButtonsAlwaysVisible={true}
      >
        <div className="classes.content">
          <div className={classes.Bookimg}>
            <img alt="" src={Carousel4} />
          </div>
        </div>
        <div className="classes.content">
          <div className={classes.Bookimg}>
            <img alt="carousel1" src={carousel1} />
          </div>
        </div>

        <div className="classes.content">
          <div className={classes.Bookimg}>
            <img alt="Books" src={Carousel3} />
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default CarouselContainer;
