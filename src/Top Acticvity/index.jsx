import React from "react";
import image from "./image.svg";
import location2 from "./location-2.svg";
import location3 from "./location-3.svg";
import location4 from "./location-4.svg";
import location5 from "./location-5.svg";
import location from "./location.svg";
import "./style.css";
import vector2 from "./vector-2.svg";
import vector3 from "./vector-3.svg";
import vector4 from "./vector-4.svg";
import vector5 from "./vector-5.svg";
import vector6 from "./vector-6.svg";
import vector from "./vector.svg";
import wecwater3 from "./wecwater-3.png";

export const TopActivity = () => {
  return (
    <div className="top-activity" data-model-id="114:10">
      <div className="div">
        <div className="overlap">
          <div className="group">
            <div className="overlap-group">
              <div className="rectangle" />

              <img className="wecwater" alt="Wecwater" src={wecwater3} />

              <img className="vector" alt="Vector" src={vector} />
            </div>
          </div>

          <div className="text-wrapper">Top Activity</div>

          <img className="img" alt="Vector" src={image} />
        </div>

        <div className="group-2">
          <img className="vector-2" alt="Vector" src={vector2} />

          <div className="rectangle-2" />

          <img className="location" alt="Location" src={location} />
        </div>

        <div className="group-3">
          <img className="vector-2" alt="Vector" src={vector3} />

          <div className="rectangle-2" />

          <img className="location" alt="Location" src={location2} />
        </div>

        <div className="group-4">
          <img className="vector-2" alt="Vector" src={vector4} />

          <div className="rectangle-2" />

          <img className="location" alt="Location" src={location3} />
        </div>

        <div className="group-5">
          <img className="vector-2" alt="Vector" src={vector5} />

          <div className="rectangle-2" />

          <img className="location" alt="Location" src={location4} />
        </div>

        <div className="group-6">
          <img className="vector-2" alt="Vector" src={vector6} />

          <div className="rectangle-2" />

          <img className="location" alt="Location" src={location5} />
        </div>
      </div>
    </div>
  );
};