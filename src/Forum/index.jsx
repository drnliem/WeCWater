import React from "react";
import rectangle2 from "./rectangle-2.svg";
import rectangle3 from "./rectangle-3.svg";
import rectangle7 from "./rectangle-7.svg";
import "./style.css";
import wecwater1 from "./wecwater-1.png";

export const Forum = () => {
  return (
    <div className="forum" data-model-id="73:3">
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="rectangle" />

          <div className="text-wrapper">Forgot Password?</div>

          <div className="div">Sign Up</div>

          <img className="img" alt="Rectangle" src={rectangle3} />

          <div className="text-wrapper-2">Login</div>

          <img className="rectangle-2" alt="Rectangle" src={rectangle2} />

          <div className="text-wrapper-3">Enter Your Email</div>

          <div className="text-wrapper-4">Enter Your Password</div>

          <img className="wecwater" alt="Wecwater" src={wecwater1} />

          <div className="group">
            <div className="overlap-group">
              <img className="rectangle-3" alt="Rectangle" src={rectangle7} />

              <div className="text-wrapper-5">Login</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};