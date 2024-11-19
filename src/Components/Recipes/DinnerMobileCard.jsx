
import React from 'react';
import { AiOutlineHeart, AiOutlineStar } from "react-icons/ai";
import Beans from '../Images/sug3.jpeg';
import plantain from '../Recipes/Recipe_images/Plantain.jpeg';
import stew from '../Images/stew.jpeg';
import spicy from '../Recipes/Recipe_images/spicy.jpeg';
import plantain_porridge from '../Recipes/Recipe_images/plantain_porridge.jpeg';

const DinnerMobileCard = () => {
  return (
    <>

<div className="mobile-card">
        <div className="flex_container">
          <img src={Beans} alt="pancake" className="food_menu" />
          <div className="card2">
            <div className="love">
              <p>rice🍚 & beans jollof🍾</p>
              <AiOutlineHeart className="heart" />
            </div>
            <div className="love2">
              <div className="servings_section">
                <p className="para">High in Protein</p>
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
          <img src={plantain} alt="pancake" className="food_menu" />
          <div className="card2">
            <div className="love">
              <p>beans & plantain</p>
              <AiOutlineHeart className="heart" />
            </div>
            <div className="love2">
              <div className="servings_section">
                <p className="para">High in Fibre</p>
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
          <img src={stew} alt="pancake" className="food_menu" />
          <div className="card2">
            <div className="love">
              <p>rice🥥 & stew</p>
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
          <img src={spicy} alt="okpa" className="food_menu" />
          <div className="card2">
            <div className="love">
              <p>spicy noodles</p>
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

        <div className="flex_container">
          <img src={plantain_porridge} alt="pancake" className="food_menu" />
          <div className="card2">
            <div className="love">
              <p>beans & plantain🥣</p>
              <AiOutlineHeart className="heart" />
            </div>
            <div className="love2">
              <div className="servings_section">
                <p className="para">High in Fibre</p>
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
  )
}

export default DinnerMobileCard
