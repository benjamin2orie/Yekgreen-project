import "../Recipes/Subreakfast.css";

import Veggies from "../Recipes/Recipe_images/Veggies.jpeg";
import Fruits from "../Recipes/Recipe_images/Fruit.jpeg";
import { AiOutlineHeart, AiOutlineStar } from "react-icons/ai";
import sug2 from "../Images/sug2.jpeg";
import Spark from "../Recipes/Recipe_images/Spark.jpeg";
import Jollof from "../Images/sug3.jpeg";
import Plantain from "../Recipes/Recipe_images/Plantain.jpeg";
import Noodles from "../Recipes/Recipe_images/Noodles.jpeg";
import Plantain_porridge from "../Recipes/Recipe_images/Plantain_porridge.jpeg";

const Sublunch = () => {
  return (
    <div>
      <section className="sub_container">
        <div className="sub_main_container">
          <div className="sub_flex_container">
            <img src={sug2} alt="egg sauce" className="sub_food_menu" />
            <div className="sub_card2">
              <div className="sub_love">
                <p>egusi soup & semo</p>
                <AiOutlineHeart className="sub_heart" />
              </div>
              <div className="sub_love2">
                <div className="sub_servings_section">
                  <p className="para">High in Nutriemts</p>
                  <div className="sub_radius"></div>
                  <p className="sub_grey">4 Servings</p>
                </div>
                <div className="sub_star_section">
                  <p>4.5</p>
                  <AiOutlineStar className="sub_heart" />
                </div>
              </div>
            </div>
          </div>

          <div className="sub_flex_container">
            <img src={Spark} alt="okpa" className="sub_food_menu" />
            <div className="sub_card2">
              <div className="sub_love">
                <p>spaghetti🍛</p>
                <AiOutlineHeart className="sub_heart" />
              </div>
              <div className="sub_love2">
                <div className="sub_servings_section">
                  <p className="para">High in Carbs</p>
                  <div className="sub_radius"></div>
                  <p className="sub_grey">4 Servings</p>
                </div>
                <div className="sub_star_section">
                  <p>4.5</p>
                  <AiOutlineStar className="sub_heart" />
                </div>
              </div>
            </div>
          </div>

          <div className="sub_flex_container">
            <img
              src={Jollof}
              alt="jollof rice & beans"
              className="sub_food_menu"
            />
            <div className="sub_card2">
              <div className="sub_love">
                <p>jollof rice 🍚& beans</p>
                <AiOutlineHeart className="sub_heart" />
              </div>
              <div className="sub_love2">
                <div className="sub_servings_section">
                  <p className="para">High in Carbs</p>
                  <div className="sub_radius"></div>
                  <p className="sub_grey">6 Servings</p>
                </div>
                <div className="sub_star_section">
                  <p>4.5</p>
                  <AiOutlineStar className="sub_heart" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="sub_container2">
          <div className="sub_flex_container">
            <img
              src={Plantain}
              alt="beans & plantains"
              className="sub_food_menu"
            />
            <div className="sub_card2">
              <div className="sub_love">
                <p>beans & plantains</p>
                <AiOutlineHeart className="sub_heart" />
              </div>
              <div className="sub_love2">
                <div className="sub_servings_section">
                  <p className="para">High in carbs</p>
                  <div className="sub_radius"></div>
                  <p className="sub_grey">6 Servings</p>
                </div>
                <div className="sub_star_section">
                  <p>4.5</p>
                  <AiOutlineStar className="sub_heart" />
                </div>
              </div>
            </div>
          </div>

          <div className="sub_flex_container">
            <img
              src={Noodles}
              alt="bread & veggies"
              className="sub_food_menu"
            />
            <div className="sub_card2">
              <div className="sub_love">
                <p>noodles & veggies</p>
                <AiOutlineHeart className="sub_heart" />
              </div>
              <div className="sub_love2">
                <div className="sub_servings_section">
                  <p className="para">High in vitamins</p>
                  <div className="sub_radius"></div>
                  <p className="sub_grey">4 Servings</p>
                </div>
                <div className="sub_star_section">
                  <p>4.5</p>
                  <AiOutlineStar className="sub_heart" />
                </div>
              </div>
            </div>
          </div>

          <div className="sub_flex_container">
            <img
              src={Plantain_porridge}
              alt="fruits & veggies"
              className="sub_food_menu"
            />
            <div className="sub_card2">
              <div className="sub_love">
                <p>plantain porridge 🥯</p>
                <AiOutlineHeart className="sub_heart" />
              </div>
              <div className="sub_love2">
                <div className="sub_servings_section">
                  <p className="para">High in Fibre</p>
                  <div className="sub_radius"> </div>
                  <p className="sub_grey">6 Servings</p>
                </div>

                <div className="sub_star_section">
                  <p>4.5</p>
                  <AiOutlineStar className="sub_heart" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className={styles.border}></div> */}
      </section>
    </div>
  );
};

export default Sublunch;
