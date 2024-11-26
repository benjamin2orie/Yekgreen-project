import React, { useState } from "react";
// import "../Recipes/Breakfast.css";
import Main from "../Landing_page/Main";
import Footer from "../Landing_page/Footer";
import Sublunch from "../Recipes/Sublunch";
import Logo from "../Images/logo.png";
import { AiOutlineUser, AiOutlineHeart, AiOutlineStar } from "react-icons/ai";
import { FiFileText } from "react-icons/fi";
import L_burger from "../Recipes/Recipe_images/L_burger.png";
import Oha from "../Recipes/Recipe_images/Oha_soup.jpeg";
import Okro from "../Recipes/Recipe_images/Okro_soup.jpeg";
import porridge from "../Images/poridge.jpeg";
import { CgMenuLeft } from "react-icons/cg";
import LunchMobileCard from "./LunchMobileCard";
import { Link } from "react-router-dom";
import { Dropdown, Space, Drawer } from "antd";

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

const Lunch = () => {
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
                    {/* <Button>bottom</Button> */}
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
        <img src={L_burger} alt="burger" />
        <h3>Lunch recipes</h3>
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
          Lunch, the most informal and unassuming of meals, defies easy
          definition. A relatively late entry into the cycle of dining, it is
          replete with socioeconomic forms and meanings.
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
                <p>yam 🍲</p>
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
            <img src={Oha} alt="pancake" className="b_food_menu" />
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
            <img src={Okro} alt="bread & tosted tea" className="b_food_menu" />
            <div className="b_card2">
              <div className="b_love">
                <p>okro soup & semo</p>
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
      {/* <Subbreakfast /> */}

      <LunchMobileCard/>

      <div className="border"></div>
      <div className="hide-main">
        <Main />
      </div>
      <Footer/>
    </div>
  );
};

export default Lunch;
