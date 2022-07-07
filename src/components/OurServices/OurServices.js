import React from "react";
import "./OurServices.css";
import camDrone from "../../assets/images/camDrone.png";
import staticModel from "../../assets/images/Static.png";
import drone from "../../assets/images/drone.png";

const OurServices = () => {
  return (
    <div className="OurServices">
      <div className="ServicesContainers">
      <div className="container">
      <h2>OUR SERVICES</h2>
        <p>
          
          Droneium is a drone startup in India that is
          associated with the designing and production of unmanned drones and
          operating systems.
        </p>
      </div>
        
      </div>
      <div className="media">
        <div className="icon">
          <div className="icons">
            <img alt=""src={drone} />
          </div>
          <div className="icons">
            <img alt="" src={camDrone} />
          </div>
          <div className="icons">
            <img alt="" src={staticModel} />
          </div>
        </div>
      </div>
      <div className="content">
        <div>
          <h4>Drone Manufacturing</h4>
          <p>
          Photograph the world from above with your personal drone
          </p>
        </div>
        <div>
          <h4>Drone Shooting</h4>
          <p>
          Compact and portable. Shoot professionally-level aerial photography in minutes.
          </p>
        </div>
        <div>
          <h4>Static Models</h4>
          <p>
            {" "}
            Even the all-powerful Pointing has no control about the blind texts
            it is an almost unorthographic.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
