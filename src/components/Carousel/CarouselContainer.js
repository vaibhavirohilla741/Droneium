import React, { useState, useEffect } from "react";
import Carousel from "react-material-ui-carousel";
import classes from "./CarouselContainer.module.css";
import axios from "axios";

function CarouselContainer() {
  const [carouselsrc, setCarouselsrc] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://droneium-74d8c-default-rtdb.asia-southeast1.firebasedatabase.app/Carousel.json"
      )
      .then((res) => {
        setCarouselsrc([res.data]);
      });
  }, []);
  console.log(carouselsrc);
  return (
    <div>
      {carouselsrc.map((item) => {
        return (
          <>
            <div>
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
                      <img alt="" src={item.carousel4} />
                    </div>
                  </div>
                  <div className="classes.content">
                    <div className={classes.Bookimg}>
                      <img alt="carousel1" src={item.Carousel1} />
                    </div>
                  </div>
                  <div className="classes.content">
                    <div className={classes.Bookimg}>
                      <img alt="Books" src={item.carousel3} />
                    </div>
                  </div>
                </Carousel>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}

export default CarouselContainer;
