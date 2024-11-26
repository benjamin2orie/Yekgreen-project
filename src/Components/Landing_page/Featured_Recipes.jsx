import React from "react";
import MobileView from "./MobileView";
import sug3 from "../Images/sug3.jpeg";
import sug2 from "../Images/sug2.jpeg";
import Rice from "../Images/Rice1.png";
import akara from "../Images/akara.jpeg";
import porridge from "../Images/poridge.jpeg";
import Footer from "./Footer";
import stew from "../Images/stew.jpeg";
import { AiOutlineHeart, AiOutlineStar } from "react-icons/ai";
import "./Featured_Recipes.css";
import Main from "./Main";
import carot from "../Images/carrot.png";
import Tuber from "../Images/Carrot1.png";
import Onion2 from "../Images/Onion2.png";
import Chili from "../Images/Chili.png";

const Featured_Recipes = () => {
  return (
    <>
      <div className="feature_recipes">
        <h1>feature recipes</h1>
        <img src={carot} alt="carrt icon" />
        <h2>featured</h2>
      </div>

      <section className="grid_cards">
        <div className="flex_container">
          <img src={Rice} alt="rice & stew" className="food_menu" />
          <div className="card2">
            <div className="love">
              <p>jollof rice 🥥 & chicken</p>
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
          <img src={akara} alt="rice & stew" className="food_menu" />
          <div className="card2">
            <div className="love">
              <p>akara & pap</p>
              <AiOutlineHeart className="heart" />
            </div>
            <div className="love2">
              <div className="servings_section">
                <p className="para">High in Protein </p>
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
          <img src={porridge} alt="rice & stew" className="food_menu" />
          <div className="card2">
            <div className="love">
              <p>yam porridge🥥</p>
              <AiOutlineHeart className="heart" />
            </div>
            <div className="love2">
              <div className="servings_section">
                <p className="para">High in Carbs </p>
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
          <img src={sug3} alt="rice & stew" className="food_menu" />
          <div className="card2">
            <div className="love">
              <p>jollof rice 🥥 & beans</p>
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
          <img src={stew} alt="rice & stew" className="food_menu" />
          <div className="card2">
            <div className="love">
              <p>rice 🥥 & stew</p>
              <AiOutlineHeart className="heart" />
            </div>
            <div className="love2">
              <div className="servings_section">
                <p className="para">High in vitamins </p>
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
          <img src={sug2} alt="rice & stew" className="food_menu" />
          <div className="card2">
            <div className="love">
              <p>egusi soup</p>
              <AiOutlineHeart className="heart" />
            </div>
            <div className="love2">
              <div className="servings_section">
                <p className="para">High in Nutrients </p>
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
      </section>
      <img src={Onion2} alt="onion" className="onion" />
      <img src={Tuber} alt="tuber" className="tuber" />
      <img src={Chili} alt="chip peper" className="peper" />
      <div className="borderss"></div>
      <MobileView />
      <Main className="disable_on_mobile" />
      <Footer/>
    </>
  );
};

export default Featured_Recipes;
