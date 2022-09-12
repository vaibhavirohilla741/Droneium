import React from "react";
import NumberAnimation from "../NumberAnimation/NumberAnimation";
import "./Reach.css";

function Reach() {
  return (
    <div className="reachContainer">
      <div className="reachContent">
        <div className="contentheading">
          <div>
            <h2> Fly safely and responsibly, folks. </h2>
            <p>
              Whether you’re an aspiring aerial videographer, a land surveyor,
              construction site mapper, wildlife tracker, or simply an Unmanned
              Aerial Vehicle (UAV) / drone hobbyist, let’s be honest there are
              few greater things in life than owning your own drone. Right?
            </p>
          </div>
        </div>
        <div>
          <h3>
            The first thing you should know about buying a drone is that you
            don’t have to buy one.
          </h3>
          <p>
            The best way to learn more about the UAV industry is to pilot your
            own drone.{" "}
          </p>
        </div>
      </div>
      <div className="flexbox">
        <div className="flexbox1">
        <NumberAnimation value={100} color='#f1c50e' textColor='#111111'/>
        <NumberAnimation value={200} color='#333333' textColor="#ffffff" />
        </div>
        <div className="flexbox1">
          <NumberAnimation value={300} color='#333333' textColor="#ffffff"/>
          <NumberAnimation value={400} color='#f1c50e' textColor='#111111'/>
        </div>
      </div>
    </div>
  );
}

export default Reach;
