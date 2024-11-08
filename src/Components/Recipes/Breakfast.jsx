import React from "react";
import "../Recipes/Breakfast.css";
import Subbreakfast from "../Recipes/Subbreakfast";
import Logo from "../Images/logo.png";
import { AiOutlineUser, AiOutlineHeart, AiOutlineStar } from "react-icons/ai";
import { FiFileText } from "react-icons/fi";
import Burger from "../Recipes/Recipe_images/Burger.png";
import Bread from "../Recipes/Recipe_images/Bread.jpeg";
import Pancake from "../Recipes/Recipe_images/Tea.jpeg";
import jollof from "../Images/Rice1.png";

const Breakfast = () => {
  return (
    <div>
      <header className="breakfast_header">
        <div className="b_container">
          <div className="logo_content">
            <img src={Logo} alt="logo" />
          </div>
          <nav>
            <ul>
              <li>about us</li>
              <li>recipes</li>
              <li>blog</li>
            </ul>
          </nav>
          <div className="users">
            <FiFileText />
            <AiOutlineUser />
          </div>
        </div>
      </header>
      <div className="burger">
        <img src={Burger} alt="burger" />
        <h3>Breakfast recipes</h3>
      </div>
      <section className="b_container_section">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet in
          aliquam tristique lacinia tellus libero massa proin suspendisse. Ante
          tempus mauris nec neque ullamcorper tempor commodo. Nunc vitae velit
          non et. Nunc id tristique vestibulum enim tincidunt a tellus.
          Malesuada amet tincidunt sit id egestas libero. Praesent lectus est
          quis pretium velit, in. Mi nisi, velit egestas sapien quam mi netus.
        </p>
      </section>
      <main>
        <div className="b_main_counter">
          <div className="b_flex_container">
            <img src={Bread} alt="bread & tosted tea" className="b_food_menu" />
            <div className="b_card2">
              <div className="b_love">
                <p>bread 🍞 toast & tea ☕</p>
                <AiOutlineHeart className="b_heart" />
              </div>
              <div className="b_love2">
                <div className="b_servings_section">
                  <p className="para">High in Carbs</p>
                  <div className="b_radius"></div>
                  <p className="b_grey">4 Servings</p>
                </div>
                <div className="b_star_section">
                  <p>4.5</p>
                  <AiOutlineStar className="b_heart" />
                </div>
              </div>
            </div>
          </div>

          <div className="b_flex_container">
            <img src={Pancake} alt="pancake" className="b_food_menu" />
            <div className="b_card2">
              <div className="b_love">
                <p>pancakes 🎂 & tea☕</p>
                <AiOutlineHeart className="b_heart" />
              </div>
              <div className="b_love2">
                <div className="b_servings_section">
                  <p className="para">High in Carbs</p>
                  <div className="b_radius"></div>
                  <p className="b_grey">4 Servings</p>
                </div>
                <div className="b_star_section">
                  <p>4.5</p>
                  <AiOutlineStar className="b_heart" />
                </div>
              </div>
            </div>
          </div>

          <div className="b_flex_container">
            <img
              src={jollof}
              alt="bread & tosted tea"
              className="b_food_menu"
            />
            <div className="b_card2">
              <div className="b_love">
                <p>jollof rice & chicken</p>
                <AiOutlineHeart className="b_heart" />
              </div>
              <div className="b_love2">
                <div className="b_servings_section">
                  <p className="para">High in Carbs</p>
                  <div className="b_radius"></div>
                  <p className="b_grey">6 Servings</p>
                </div>
                <div className="b_star_section">
                  <p>4.5</p>
                  <AiOutlineStar className="b_heart" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <Subbreakfast /> */}
      </main>
      <Subbreakfast />
      <div className="border"></div>
    </div>
  );
};

export default Breakfast;
