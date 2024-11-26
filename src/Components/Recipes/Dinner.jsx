import React, { useState } from "react";
// import "../Recipes/Breakfast.css";
import Main from "../Landing_page/Main";
import Footer from "../Landing_page/Footer";
import Sublunch from "../Recipes/Sublunch";
import Logo from "../Images/logo.png";
import { AiOutlineUser, AiOutlineHeart, AiOutlineStar } from "react-icons/ai";
import { FiFileText } from "react-icons/fi";
import D_burger from "../Recipes/Recipe_images/D_burger.png";
import porridge from "../Images/poridge.jpeg";
import stews from "../Images/stew.jpeg";
import Salad from "../Recipes/Recipe_images/Salad.jpeg";
import { CgMenuLeft } from "react-icons/cg";
import { Link } from "react-router-dom";
import { Dropdown, Space, Drawer } from "antd";
import DinnerMobileCard from "./DinnerMobileCard";

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

const Dinner = () => {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState("right");
  const showDrawer = () => {
    setOpen(true);
  };
  const onChange = (e) => {
    setPlacement(e.target.value);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <header className="breakfast_header">
        <div className="b_container">
          <div className="logo_content">
            <img src={Logo} alt="logo" />
          </div>
          <div className="toggle-menus">
            <Space>
              <CgMenuLeft onClick={showDrawer} />
            </Space>

            <Drawer
              title=<img src={Logo} alt="logo icon" />
              placement={placement}
              width={500}
              onClose={onClose}
              open={open}
            >
              <div className="contact">
                <ul>
                  <li>
                    <Link to={"/about"} className="anchor-tags">about us</Link>
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

                  <li>
                    <Link to={"/blog"} className="anchor-tags">blog</Link>
                  </li>
                </ul>
              </div>
            </Drawer>
          </div>
          <nav>
            <ul>
              <li>
                <Link to={"/about"} className="anchor-tag">about us</Link>
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
              <li>
                <Link to={"/blog"} className="anchor-tag">blog</Link>
              </li>
            </ul>
          </nav>
          <div className="users">
            <FiFileText />
            <AiOutlineUser />
          </div>
        </div>
      </header>
      <div className="burger">
        <img src={D_burger} alt="burger" />
        <h3>Dinner recipes</h3>
      </div>
      <section className="b_container_section">
        <p className="hidden">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet in
          aliquam tristique lacinia tellus libero massa proin suspendisse. Ante
          tempus mauris nec neque ullamcorper tempor commodo. Nunc vitae velit
          non et. Nunc id tristique vestibulum enim tincidunt a tellus.
          Malesuada amet tincidunt sit id egestas libero. Praesent lectus est
          quis pretium velit, in. Mi nisi, velit egestas sapien quam mi netus.
        </p>
        <p className="visible-on-mobile">
          Dinner usually refers to what is in many Western cultures the largest
          and most formal meal of the day, which is eaten in the evening.
          Historically, the largest meal used to be eaten around midday, and
          called dinner.
        </p>
      </section>
      <main className="breakfast-hide">
        <div className="b_main_counter">
          <div className="b_flex_container">
            <img
              src={porridge}
              alt="bread & tosted tea"
              className="b_food_menu"
            />
            <div className="b_card2">
              <div className="b_love">
                <p>yam 🍲 porridge</p>
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
            <img src={stews} alt="pancake" className="b_food_menu" />
            <div className="b_card2">
              <div className="b_love">
                <p>oha soup & garri</p>
                <AiOutlineHeart className="b_heart" />
              </div>
              <div className="b_love2">
                <div className="b_servings_section">
                  <p className="para">High in Nutrients</p>
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
            <img src={Salad} alt="bread & tosted tea" className="b_food_menu" />
            <div className="b_card2">
              <div className="b_love">
                <p>african salad (abacha)</p>
                <AiOutlineHeart className="b_heart" />
              </div>
              <div className="b_love2">
                <div className="b_servings_section">
                  <p className="para">High in Vitamins</p>
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
        <Sublunch />
      </main>
      <DinnerMobileCard />
      <div className="border"></div>
      <div className="hide-main">
        <Main />
      </div>
      <Footer/>
    </div>
  );
};

export default Dinner;
