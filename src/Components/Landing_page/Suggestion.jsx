import React from "react";
import Featured_Recipes from "./Featured_Recipes";
import "../Landing_page/Suggestion.css";
import Onion from "../Images/Onion.png";
import Peper from "../Images/Peper.png";

const Suggestion = () => {
  return (
    <>
      <div className="container-bg-mobile">
        <div className="sug_icons">
          <h2>suggestions</h2>
          <img src={Peper} alt="Hot peper" className="peper-icon" />
        </div>
        <main className="main_section">
          <img src={Onion} alt="Onion icon" className="Onion" />
          <div className="container_images">
            <div className="kp1">
              {/* <h4>breakfast</h4> */}
            </div>
            <div className="kp2">
              {/* <h4>lunch</h4> */}
            </div>
            <div className="kp3">
              {/* <h4>dinner</h4> */}
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
