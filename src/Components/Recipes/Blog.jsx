import { AiOutlinePlus, AiOutlineUser } from "react-icons/ai";
import { FiFileText } from "react-icons/fi";
import Logo from "../Images/logo.png";
import { AiOutlineClockCircle } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineLike } from "react-icons/ai";
import Main from "../Landing_page/Main";
import Ingredients from "../Recipes/Recipe_images/Ingredients.jpeg";
import Video from "../Recipes/Recipe_images/Video.gif";
import "../Recipes/Blog.css";
import Rice from "../Images/Rice1.png";
import { Link } from "react-router-dom";

import { Button, Dropdown, Space } from "antd";

const items = [
  {
    key: "1",
    label: <Link to="/breakfast">Breakfast</Link>,
  },
  {
    key: "2",
    label: <Link to="/lunch">Lunch</Link>,
  },
  {
    key: "3",
    label: <Link to="/dinner">Dinner</Link>,
  },
];

const Blog = () => {
  return (
    <div>
      <header className="breakfast_header">
        <div className="b_container">
          <div className="logo_content">
            <img src={Logo} alt="logo" />
          </div>
          <nav>
            <ul>
              <li>
                <Link to={"/about"}>about us</Link>
              </li>
              <Space direction="vertical">
                <Space wrap>
                  <Dropdown
                    menu={{
                      items,
                    }}
                    placement="bottom"
                  >
                    <li>recipes</li>
                  </Dropdown>
                </Space>
              </Space>
              <li>blog</li>
            </ul>
          </nav>
          <div className="users">
            <FiFileText />
            <AiOutlineUser />
          </div>
        </div>
      </header>
      <div className="container_blog">
        <div className="update">
          <h3>jollof rice & chicken</h3>
          <p>updated 19/10/2024</p>
        </div>
        <div className="print">
          <AiOutlineHeart className="Like" />
          <button className="print_btn">print</button>
        </div>
      </div>

      <div className="container_content">
        <div className="para_content">
          <p>
            Jollof rice, is a rice dish from West Africa. The dish is typically
            made with long-grain rice, tomatoes, onions, spices, vegetables and
            meat in a single pot, although its ingredients and preparation
            methods vary across different regions.
          </p>
          <p>
            Tellus diam felis, vel, ut pulvinar est amet aliquam. Id id nunc, id
            facilisis. Nec elementum, purus morbi consectetur iaculis gravida
            libero. Non tellus suspendisse nulla metus morbi vulputate lectus
            eu. Aenean mauris pharetra facilisi.
          </p>
          <div>
            <p className="list">Jump to recipes</p>
          </div>
        </div>
        <div className="container_image">
          <img src={Rice} alt="jollof rice and chiken" />
        </div>
      </div>
      <section className="section_container">
        <div className="images">
          <img src={Video} alt="about blog" />
          <p>
            It is fair to say that this delicious rice dish is pretty easy to
            make anywhere in the world because the ingredients are easy to find.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porta nisi,
            condimentum fusce sed ut condimentum ac. Volutpat ac, maecenas
            aliquam lectus eget consectetur ut tincidunt aenean.
          </p>
        </div>
      </section>

      <main className="main_container">
        <div className="recipe_facts">
          <h3>recipes facts</h3>
          <div className="recipe_flex">
            <div>
              <AiOutlineClockCircle className="ai_clock" />
              <p>active: 20mins</p>
              <p>total: 60mins</p>
            </div>
            <div className="items">
              <AiOutlineLike className="ai_like" />
              <p>4 - 6 servings</p>
            </div>
          </div>
        </div>
        <div className="ingredients">
          <div className="item_list">
            <h3>ingredients</h3>
            <ul>
              <li>4 cups of rice</li>
              <li>Tomato puree</li>
              <li>1 bulb of red onions</li>
              <li>4 pcs of scotch bonnet pepper</li>
              <li>Thyme</li>
              <li> Carrot & peas ( Optional )</li>
            </ul>
            <div className="add_list">
              <AiOutlinePlus />
              <p>Add to shopping list</p>
            </div>
          </div>
          <img src={Ingredients} alt="ingredients for cooking rice" />
        </div>
      </main>
      <div className="borders"></div>

      <article>
        <h3>directions</h3>
        <div className="container_direction">
          <h4>step 1</h4>
          <p>
            In a blender, combine tomatoes, scotch bonnet pepper and onions;
            purée. Pour out half the purée into a bowl; set aside. Add the bell
            peppers to the purée remaining in the blender and pulse until
            smooth. Add to the mixture that was set aside and stir to combine.
          </p>
          <h4>step 2</h4>
          <p>
            Heat vegetable oil in a large pot over medium heat. Add blended
            vegetables along with the salt, curry powder, ground chile pepper,
            garlic powder, onion powder, bay leaves, ginger and thyme. Bring
            mixture to a boil.
          </p>
          <h4>step 3</h4>
          <p>Stir in the rice until well mixed, then reduce the heat to low.</p>
          <h4>step 4</h4>
          <p>
            Cover pot and let cook until rice is al dente, about 45 minutes.
            Check after 30 minutes; if rice is sauce-logged, remove the lid to
            cook off the excess sauce. If rice seems dry, stir in 1 to 2 cups
            water. Allow the rice at the bottom of the pot to char a bit to
            infuse it with a smoky flavor.
          </p>
        </div>
      </article>
      <div className="nutrition_fact">
        <h3>Nutrition Facts ( per servings )</h3>
        <div className="fex_items">
          <div>
            <h4>445</h4>
            <p>Calories</p>
          </div>
          <div>
            <h4>10g</h4>
            <p>Fats</p>
          </div>
          <div>
            <h4>89g</h4>
            <p>Carbs</p>
          </div>
          <div>
            <h4>7g</h4>
            <p>Proteins</p>
          </div>
        </div>
      </div>
      <div className="left_over">
        <h3>Preserving leftover ingredients</h3>
        <div>
          <div className="left-over-paragraph">
            <p>
              1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Aliquam aliquam ac tristique velit, justo, porttitor. Eget mattis
              a curabitur augue. Pellentesque urna tristique.
            </p>
          </div>
          <div className="left-over-paragraph">
            <p>
              2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Aliquam aliquam ac tristique velit, justo, porttitor. Eget mattis
              a curabitur augue. Pellentesque urna tristique.
            </p>
          </div>
          <div className="left-over-paragraph">
            <p>
              3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Aliquam aliquam ac tristique velit, justo, porttitor. Eget mattis
              a curabitur augue. Pellentesque urna tristique.
            </p>
          </div>
          <div className="left-over-paragraph">
            <p>
              4. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Aliquam aliquam ac tristique velit, justo, porttitor. Eget mattis
              a curabitur augue. Pellentesque urna tristique.
            </p>
          </div>
        </div>
      </div>
      <Main />
    </div>
  );
};

export default Blog;
