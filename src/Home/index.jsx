import React from "react";
import { SearchBar } from "./SearchBar";
import iconBullhorn from "./icon-bullhorn.png";
import image from "./image.svg";
import "./style.css";
import vector2 from "./vector-2.svg";
import vector3 from "./vector-3.svg";
import vector5 from "./vector-5.svg";
import vector6 from "./vector-6.svg";
import vector8 from "./vector-8.svg";
import vector9 from "./vector-9.svg";
import vector10 from "./vector-10.svg";
import vector11 from "./vector-11.svg";
import vector12 from "./vector-12.svg";
import vector13 from "./vector-13.svg";
import vector14 from "./vector-14.svg";
import vector from "./vector.svg";
import wecwater3 from "./wecwater-3.png";

export const Home = () => {
  return (
    <div className="home" data-model-id="75:5">
      <div className="div">
        <div className="overlap">
          <div className="group">
            <div className="overlap-group">
              <div className="text-wrapper">Goals</div>

              <img className="img" alt="Vector" src={vector10} />
            </div>
          </div>

          <div className="group">
            <div className="overlap-group">
              <div className="text-wrapper">Goals</div>

              <img className="img" alt="Vector" src={vector} />
            </div>
          </div>
        </div>

        <div className="overlap-2">
          <div className="overlap-3">
            <div className="group-2">
              <div className="rectangle" />

              <div className="group-3" />

              <div className="group-4" />

              <div className="group-5" />

              <div className="group-6" />
            </div>

            <img className="vector-2" alt="Vector" src={vector6} />

            <img className="vector-3" alt="Vector" src={vector5} />

            <img className="vector-4" alt="Vector" src={vector2} />

            <img className="vector-5" alt="Vector" src={image} />

            <img className="vector-6" alt="Vector" src={vector14} />
          </div>

          <div className="text-wrapper-2">Forum</div>
        </div>

        <div className="location-bar">
          <div className="overlap-group">
            <div className="rectangle-2" />

            <div className="text-wrapper-3">Location</div>

            <img className="vector-7" alt="Vector" src={vector11} />
          </div>
        </div>

        <div className="report-bar">
          <div className="overlap-group">
            <div className="text-wrapper-4">Report</div>

            <img
              className="icon-bullhorn"
              alt="Icon bullhorn"
              src={iconBullhorn}
            />
          </div>
        </div>

        <div className="community-bar">
          <div className="overlap-group">
            <div className="text-wrapper-5">Community</div>

            <img className="vector-8" alt="Vector" src={vector3} />
          </div>
        </div>

        <div className="activity-bar">
          <div className="overlap-group">
            <div className="text-wrapper-6">Top Activity</div>

            <img className="vector-9" alt="Vector" src={vector12} />
          </div>
        </div>

        <div className="donate-bar">
          <div className="overlap-group">
            <div className="text-wrapper-7">Donate us</div>

            <img className="vector-10" alt="Vector" src={vector13} />
          </div>
        </div>

        <SearchBar
          className="search-bar-instance"
          property1="default"
          text="Try search something"
          vector="vector-15.svg"
        />
        <div className="text-wrapper-8">More of Our Features</div>

        <header className="header">
          <div className="overlap-4">
            <div className="rectangle-3" />

            <img className="wecwater" alt="Wecwater" src={wecwater3} />

            <img className="vector-11" alt="Vector" src={vector9} />

            <img className="vector-12" alt="Vector" src={vector8} />
          </div>
        </header>
      </div>
    </div>
  );
};