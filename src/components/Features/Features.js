import React, { useState } from "react";
import Box from "../Box/Box";
import "./Features.css";
import camDrone from "../../assets/images/camDrones.png";

function Features(props) {
  return (
    <div className="featureContainer">
      <div className="featureContent">
        <h3>WHY WE PUT THIS GUIDE TOGETHER</h3>
        <p style={{ fontSize: "1rem", fontWeight: "400", maxWidth: "80%" }}>
          Like many of the entrants to the UAV community, we learned about
          drones on YouTube. Watching UAV footage from extreme sports movies, we
          became fascinated with the space. Be sure to also check out the
          official UAV Coach YouTube Channel to learn more about the drone
          industry!
        </p>
      </div>
      <div className="boxes">
        <Box
          icon={camDrone}
          bgcolor={"#b23c8a"}
          heading={"Over 300 Drone Products"}
          para={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices."
          }
        />
        <Box
          icon={camDrone}
          bgcolor={"#6bc75d"}
          heading={"Over Handmade Products"}
          para={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices."
          }
        />
        <Box
          icon={camDrone}
          bgcolor={"#5abcbf"}
          heading={"Built With Love"}
          para={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices."
          }
        />
      </div>
    </div>
  );
}

export default Features;
