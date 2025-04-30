import React from "react";
import image from "./image.svg";
import "./style.css";
import vector from "./vector.svg";
import wecwater3 from "./wecwater-3.png";

export const Goals = () => {
  return (
    <div className="goals" data-model-id="133:73">
      <div className="div">
        <div className="overlap">
          <div className="group">
            <div className="overlap-group">
              <div className="rectangle" />

              <img className="wecwater" alt="Wecwater" src={wecwater3} />

              <img className="vector" alt="Vector" src={vector} />
            </div>
          </div>

          <div className="text-wrapper">Our Goals</div>

          <img className="img" alt="Vector" src={image} />
        </div>

        <div className="our-goals">Lorem ipsum</div>
      </div>
    </div>
  );
};