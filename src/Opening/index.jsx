import React from "react";
import rectangle6 from "./rectangle-6.svg";
import rectangle7 from "./rectangle-7.svg";
import "./style.css";
import wecwater1 from "./wecwater-1.png";

export const Opening = () => {
  return (
    <div className="opening" data-model-id="60:12">
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="group">
            <div className="overlap-group">
              <img className="rectangle" alt="Rectangle" src={rectangle6} />

              <img className="wecwater" alt="Wecwater" src={wecwater1} />
            </div>
          </div>

          <div className="overlap-group-wrapper">
            <div className="div">
              <img className="img" alt="Rectangle" src={rectangle7} />

              <div className="text-wrapper">Login</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};