import React from "react";
import Okpa from "../Recipes/Recipe_images/Okpa.jpeg";
import akara from "../Images/akara.jpeg";
import toastedBread from '../Recipes/Recipe_images/breakfast-card5.jpeg';
import noodles from '../Recipes/Recipe_images/breakfast-card3.jpeg';
import Pancake from '../Recipes/Recipe_images/breakfast-card1.jpeg';
import { AiOutlineHeart, AiOutlineStar } from "react-icons/ai";

const BreakfastMobileCard = () => {
  return (
    <>
      <div className="mobile-card">
        <div className="flex_container">
          <img src={Pancake} alt="pancake" className="food_menu" />
          <div className="card2">
            <div className="love">
              <p>pancakes</p>
              <AiOutlineHeart className="heart" />
            </div>
            <div className="love2">
              <div className="servings_section">
                <p className="para">High in Carbs</p>
                <div className="radius"></div>
                <p className="grey">3 Servings</p>
              </div>
              <div className="star_section">
                <p>4.5</p>
                <AiOutlineStar className="heart" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex_container">
          <img src={akara} alt="pancake" className="food_menu" />
          <div className="card2">
            <div className="love">
              <p>akara & pap</p>
              <AiOutlineHeart className="heart" />
            </div>
            <div className="love2">
              <div className="servings_section">
                <p className="para">High in Proteins</p>
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

        <div className="flex_container">
          <img src={noodles} alt="pancake" className="food_menu" />
          <div className="card2">
            <div className="love">
              <p>noodles & eggs</p>
              <AiOutlineHeart className="heart" />
            </div>
            <div className="love2">
              <div className="servings_section">
                <p className="para">High in Proteins</p>
                <div className="radius"></div>
                <p className="grey">2 Servings</p>
              </div>
              <div className="star_section">
                <p>4.5</p>
                <AiOutlineStar className="heart" />
              </div>
            </div>
          </div>
        </div>
        

        <div className="flex_container">
          <img src={Okpa} alt="okpa" className="food_menu" />
          <div className="card2">
            <div className="love">
              <p>okpa & pap</p>
              <AiOutlineHeart className="heart" />
            </div>
            <div className="love2">
              <div className="servings_section">
                <p className="para">High in proteins</p>
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
          <img src={toastedBread} alt="pancake" className="food_menu" />
          <div className="card2">
            <div className="love">
              <p>toasted bread</p>
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

export default BreakfastMobileCard;
