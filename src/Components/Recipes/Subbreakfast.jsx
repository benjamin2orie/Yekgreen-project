import "../Recipes/Subreakfast.css";
import Okpa from "../Recipes/Recipe_images/Okpa.jpeg";
import Fries from "../Recipes/Recipe_images/Fries.jpeg";
import Beans from "../Images/sug3.jpeg";
import Plantain from "../Recipes/Recipe_images/Plantain.jpeg";
import Veggies from "../Recipes/Recipe_images/Veggies.jpeg";
import Fruits from "../Recipes/Recipe_images/Fruit.jpeg";
import { AiOutlineHeart, AiOutlineStar } from "react-icons/ai";

const Subbreakfast = () => {
  return (
    <div>
      <section className="sub_container">
        <div className="sub_main_container">
          <div className="sub_flex_container">
            <img src={Fries} alt="egg sauce" className="sub_food_menu" />
            <div className="sub_card2">
              <div className="sub_love">
                <p>fries 🍞 & egg sauce</p>
                <AiOutlineHeart className="sub_heart" />
              </div>
              <div className="sub_love2">
                <div className="sub_servings_section">
                  <p className="para">High in proteins</p>
                  <div className="sub_radius"></div>
                  <p className="sub_grey">3 Servings</p>
                </div>
                <div className="sub_star_section">
                  <p>4.5</p>
                  <AiOutlineStar className="sub_heart" />
                </div>
              </div>
            </div>
          </div>

          <div className="sub_flex_container">
            <img src={Okpa} alt="okpa" className="sub_food_menu" />
            <div className="sub_card2">
              <div className="sub_love">
                <p>okpa & pap</p>
                <AiOutlineHeart className="sub_heart" />
              </div>
              <div className="sub_love2">
                <div className="sub_servings_section">
                  <p className="para">High in proteins</p>
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
              src={Beans}
              alt="jollof rice & beans"
              className="sub_food_menu"
            />
            <div className="sub_card2">
              <div className="sub_love">
                <p>jollof rice & beans</p>
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
              src={Veggies}
              alt="bread & veggies"
              className="sub_food_menu"
            />
            <div className="sub_card2">
              <div className="sub_love">
                <p>bread 🥪 & veggies</p>
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
              src={Fruits}
              alt="fruits & veggies"
              className="sub_food_menu"
            />
            <div className="sub_card2">
              <div className="sub_love">
                <p>fruits & veggies</p>
                <AiOutlineHeart className="sub_heart" />
              </div>
              <div className="sub_love2">
                <div className="sub_servings_section">
                  <p className="para">High in vitamins</p>
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

export default Subbreakfast;
