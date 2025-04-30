import React from "react";
import image from "./image.svg";
import "./style.css";
import vector2 from "./vector-2.svg";
import vector3 from "./vector-3.svg";
import vector4 from "./vector-4.svg";
import vector5 from "./vector-5.svg";
import vector6 from "./vector-6.svg";
import vector7 from "./vector-7.svg";
import vector from "./vector.svg";
import wecwater3 from "./wecwater-3.png";

export const DonateUs = () => {
  return (
    <div className="donate-us" data-model-id="159:249">
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

          <div className="text-wrapper">Support Our Community</div>
        </div>

        <div className="description">
          <div className="thank-you-wrapper">
            <p className="thank-you">
              Thank you for supporting our community. 100% donation will go
              directly to our non-profit organization
            </p>
          </div>
        </div>

        <div className="element">
          <div className="overlap-2">
            <div className="text-wrapper-2">$ 10.00</div>

            <img className="vector-2" alt="Vector" src={vector2} />
          </div>
        </div>

        <div className="overlap-wrapper">
          <div className="overlap-2">
            <div className="text-wrapper-2">$ 20.00</div>

            <img className="vector-2" alt="Vector" src={vector3} />
          </div>
        </div>

        <div className="overlap-group-wrapper">
          <div className="overlap-2">
            <div className="text-wrapper-3">$ 50.00</div>

            <img className="vector-2" alt="Vector" src={vector4} />
          </div>
        </div>

        <div className="div-wrapper">
          <div className="overlap-2">
            <div className="text-wrapper-4">$ 100.00</div>

            <img className="vector-2" alt="Vector" src={vector5} />
          </div>
        </div>

        <div className="element-2">
          <div className="overlap-2">
            <div className="text-wrapper-5">$ 200.00</div>

            <img className="vector-2" alt="Vector" src={vector6} />
          </div>
        </div>

        <div className="element-3">
          <div className="overlap-2">
            <div className="text-wrapper-6">$ 500.00</div>

            <img className="vector-2" alt="Vector" src={vector7} />
          </div>
        </div>

        <div className="name">
          <div className="overlap-3">
            <div className="text-wrapper-7">Other</div>

            <div className="rectangle-2" />
          </div>
        </div>

        <div className="message-for-us">
          <div className="overlap-4">
            <div className="text-wrapper-8">Message For Us</div>

            <div className="rectangle-3" />
          </div>
        </div>

        <button className="submit-button">
          <div className="overlap-5">
            <div className="text-wrapper-9">Submit</div>
          </div>
        </button>
      </div>
    </div>
  );
};