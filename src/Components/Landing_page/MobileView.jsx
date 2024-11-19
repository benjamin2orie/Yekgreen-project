import React from "react";
import Rice from "../Images/Rice1.png";
import "./MobileView.css";
import Salad from "../Recipes/Recipe_images/Salad.jpeg";
import Mobile_image from "../Images/mobile-pap.jpeg";
import { AiOutlineHeart, AiOutlineStar } from "react-icons/ai";
const MobileView = () => {
  return (
    <>
      <div className="mobile-card">
        <div className="flex_container">
          <img src={Rice} alt="rice & stew" className="food_menu" />
          <div className="card2">
            <div className="love">
              <p>jollof rice & chicken</p>
              <AiOutlineHeart className="heart" />
            </div>
            <div className="love2">
              <div className="servings_section">
                <p className="para">High in Carbs </p>
                <div className="radius"></div>
                <p className="grey">6 Servings</p>
              </div>
              <div className="star_section">
                <p>4.5</p>

                <AiOutlineStar className="heart" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex_container">
          <img src={Salad} alt="bread & tosted tea" className="food_menu" />
          <div className="card2">
            <div className="love">
              <p>african salad</p>
              <AiOutlineHeart className="heart" />
            </div>
            <div className="love2">
              <div className="servings_section">
                <p className="para">High in Vitamins</p>
                <div className="radius"></div>
                <p className="grey">6 Servings</p>
              </div>
              <div className="star_section">
                <p>4.5</p>
                <AiOutlineStar className="heart" />
              </div>
            </div>
          </div>
          </div>

          <div className="flex_container">
            <img
              src={Mobile_image}
              alt="bread & tosted tea"
              className="food_menu"
            />
            <div className="card2">
              <div className="love">
                <p>akara & pap</p>
                <AiOutlineHeart className="heart" />
              </div>
              <div className="love2">
                <div className="servings_section">
                  <p className="para">High in Carbs</p>
                  <div className="radius"></div>
                  <p className="grey">4 Servings</p>
                </div>
                <div className="star_section">
                  <p>4.5</p>
                  <AiOutlineStar className="heart" />
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default MobileView;
