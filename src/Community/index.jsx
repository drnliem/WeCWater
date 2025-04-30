import React from "react";
import image from "./image.svg";
import "./style.css";
import vector2 from "./vector-2.svg";
import vector3 from "./vector-3.svg";
import vector4 from "./vector-4.svg";
import vector5 from "./vector-5.svg";
import vector6 from "./vector-6.svg";
import vector from "./vector.svg";
import wecwater3 from "./wecwater-3.png";

export const Community = () => {
  return (
    <div className="community" data-model-id="156:105">
      <div className="div">
        <div className="overlap">
          <header className="header">
            <div className="overlap-group">
              <div className="rectangle" />

              <img className="wecwater" alt="Wecwater" src={wecwater3} />

              <img className="vector" alt="Vector" src={vector} />

              <img className="img" alt="Vector" src={image} />
            </div>
          </header>

          <div className="text-wrapper">Community</div>
        </div>

        <div className="community-group">
          <div className="overlap-2">
            <img className="vector-2" alt="Vector" src={vector2} />

            <div className="text-wrapper-2">Community Name</div>

            <div className="rectangle-2" />
          </div>
        </div>

        <div className="overlap-wrapper">
          <div className="overlap-2">
            <img className="vector-2" alt="Vector" src={vector4} />

            <div className="text-wrapper-2">Community Name</div>

            <div className="rectangle-2" />
          </div>
        </div>

        <div className="overlap-group-wrapper">
          <div className="overlap-2">
            <img className="vector-2" alt="Vector" src={vector5} />

            <div className="text-wrapper-2">Community Name</div>

            <div className="rectangle-2" />
          </div>
        </div>

        <div className="div-wrapper">
          <div className="overlap-2">
            <img className="vector-2" alt="Vector" src={vector6} />

            <div className="text-wrapper-2">Community Name</div>

            <div className="rectangle-2" />
          </div>
        </div>

        <div className="community-group-2">
          <div className="overlap-2">
            <img className="vector-2" alt="Vector" src={vector3} />

            <div className="text-wrapper-2">Community Name</div>

            <div className="rectangle-2" />
          </div>
        </div>
      </div>
    </div>
  );
};