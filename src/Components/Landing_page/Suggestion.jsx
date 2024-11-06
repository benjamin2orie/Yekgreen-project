import React from "react";
import Breakfast from "../Images/sug1.jpeg";
import Lunch from "../Images/sug2.jpeg";
import Dinner from "../Images/sug3.jpeg";
import Featured_Recipes from "./Featured_Recipes";
import "../Landing_page/Suggestion.css";
import Onion from "../Images/Onion.png";
import Peper from "../Images/Peper.png";

const Suggestion = () => {
  return (
    <>
      <div className="container">
        <div className="sug_icons">
          <h2>suggestions</h2>
          <img src={Peper} alt="Hot peper" />
        </div>
        <main className="main_section">
          <img src={Onion} alt="Onion icon" className="Onion" />
          <div className="container_images">
            <div>
              <img
                src={Breakfast}
                alt="Breakfast food plate"
                className="food"
              />
              <h4>breakfast</h4>
            </div>
            <div className="kp">
              <img src={Lunch} alt="lunch fod plate" className="food" />

              <div className="blur_bg">
                <h4>lunch</h4>
              </div>
            </div>
            <div className="kp">
              <img src={Dinner} alt="dinner food plate" className="food" />

              <div className="blur_bg">
                <h4>dinner</h4>
              </div>
            </div>
          </div>
          <div className="bottom_border"></div>
        </main>
      </div>
      <Featured_Recipes />
    </>
  );
};

export default Suggestion;
