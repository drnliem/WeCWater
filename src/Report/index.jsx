import React from "react";
import { Link } from "react-router-dom";
import image from "./image.svg";
import "./style.css";
import vector from "./vector.svg";
import wecwater3 from "./wecwater-3.png";

export const Report = () => {
  return (
    <div className="report" data-model-id="157:189">
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

          <div className="text-wrapper">Report</div>
        </div>

        <div className="name">
          <div className="overlap-2">
            <div className="text-wrapper-2">Name</div>

            <div className="rectangle-2" />
          </div>
        </div>

        <div className="location">
          <div className="overlap-2">
            <div className="text-wrapper-3">Location</div>

            <div className="rectangle-2" />
          </div>
        </div>

        <div className="description">
          <div className="overlap-3">
            <div className="text-wrapper-4">Description</div>

            <div className="rectangle-3" />
          </div>
        </div>

        <div className="upload-photo">
          <div className="overlap-4">
            <div className="upload-photo-video">Upload Photo/Video</div>

            <div className="rectangle-4" />
          </div>
        </div>

        <Link to="/report">
          <button className="submit-button">
            <div className="div-wrapper">
              <div className="text-wrapper-5">Submit</div>
            </div>
          </button>
        </Link>
      </div>
    </div>
  );
};