
import React from 'react';
import { AiOutlineHeart, AiOutlineStar } from "react-icons/ai";
import rice from '../Images/Rice1.png';
import noodles from '../Recipes/Recipe_images/breakfast-card3.jpeg';
import porridge from '../Images/poridge.jpeg';
import yam from '../Recipes/Recipe_images/yam&egg.jpeg';
import Okoro from '../Recipes/Recipe_images/Okro_soup.jpeg';

const LunchMobileCard = () => {
  return (
    <>
          <div className="mobile-card">
        <div className="flex_container">
          <img src={rice} alt="pancake" className="food_menu" />
          <div className="card2">
            <div className="love">
              <p>jollof rice🍚 & chicken🍾</p>
              <AiOutlineHeart className="heart" />
            </div>
            <div className="love2">
              <div className="servings_section">
                <p className="para">High in Carbs</p>
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
          <img src={yam} alt="pancake" className="food_menu" />
          <div className="card2">
            <div className="love">
              <p>fried yam & egg</p>
              <AiOutlineHeart className="heart" />
            </div>
            <div className="love2">
              <div className="servings_section">
                <p className="para">High in Protein</p>
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
              <p>veggie soup & semo</p>
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
          <img src={porridge} alt="okpa" className="food_menu" />
          <div className="card2">
            <div className="love">
              <p>yam porridge🥣</p>
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
          <img src={Okoro} alt="pancake" className="food_menu" />
          <div className="card2">
            <div className="love">
              <p>Okro soup & semo</p>
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
  )
}

export default LunchMobileCard
