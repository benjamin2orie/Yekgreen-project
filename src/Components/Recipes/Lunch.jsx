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
      <header className="breakfast_headers">
        <div className="b_containerss flex justify-between items-center lg:px-[8em] px-[20px] font-workSans py-[1.5em]">
          <div className="flex items-center gap-[1em]">
            <div className="toggle-menuss text-[50px] lg:hidden relative top-[0.2em]">
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
                      <Link to={"/about"} className="anchor-tags">
                        about us
                      </Link>
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
                      <Link to={"/blog"} className="anchor-tags">
                        blog
                      </Link>
                    </li>
                  </ul>
                </div>
              </Drawer>
            </div>

            <Link to={"/"} className="logo_contents">
              <img src={Logo} alt="logo icon" />
            </Link>
          </div>

          <nav>
            <ul className="lg:flex hidden capitalize lg:text-[25px] text-[19.02px] gap-[2em] text-[#3a3a3c] cursor-pointer">
              <li>
                <Link to={"/about"} className="anchor-tag">
                  about us
                </Link>
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
                <Link to={"/blog"} className="anchor-tag">
                  blog
                </Link>
              </li>
            </ul>
          </nav>

          <div className="userss flex gap-[3em] text-[20px] items-center cursor-pointer">
            <FiFileText />
            <AiOutlineUser />
          </div>
        </div>
      </header>

      <div className="burgerss bg-[#04471c] flex items-center text-[rgba(255,255,255,1)] text-[20px] gap-[0.3em] py-[0.5em] lg:pl-[6em] pl-[20px]">
        <img src={L_burger} alt="burger" className="h-[25px] w-[25px]"/>
        <h3>Lunch recipes</h3>
      </div>

      <section className="b_container_sectionss lg:px-[5em] px-[20px] py-[2em] text-[23.04px] lg:font-[500] font-[700] lg:leading-[48px] leading-[32px] text-[#3a3a3c]">
        <p className="hiddenss lg:flex hidden">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet in
          aliquam tristique lacinia tellus libero massa proin suspendisse. Ante
          tempus mauris nec neque ullamcorper tempor commodo. Nunc vitae velit
          non et. Nunc id tristique vestibulum enim tincidunt a tellus.
          Malesuada amet tincidunt sit id egestas libero. Praesent lectus est
          quis pretium velit, in. Mi nisi, velit egestas sapien quam mi netus.
        </p>
        <p className="visible-on-mobiless lg:hidden flex text-[19.02px]">
          Lunch, the most informal and unassuming of meals, defies easy
          definition. A relatively late entry into the cycle of dining, it is
          replete with socioeconomic forms and meanings.
        </p>
      </section>

      <main className="breakfast-hidess lg:grid hidden">
        <div className="b_main_counterss grid grid-cols-3 px-[8em] gap-[1em]">
          <div className="b_flex_container font-[700]">
            <img
              src={porridge}
              alt="bread & tosted tea"
              className="b_food_menuss w-[100%] h-[200px] rounded-t-[5px] object-cover object-center"
            />
            <div className="b_card2ss border-x border-b rounded-b shadow-lg py-[2em] px-[1em]">
              <div className="b_lovess flex justify-between">
                <p className="capitalize">yam 🍲</p>
                <AiOutlineHeart className="b_heartss text-[#058b42] cursor-pointer" />
              </div>
              <div className="b_love2ss flex justify-between pt-[0.5em]">
                <div className="b_servings_sectionss flex gap-[0.4em]">
                  <p className="parass text-[#058b42] pt-[0.3em]">High in Carbs</p>
                  <div className="b_radiusss w-[10px] h-[10px] rounded-full bg-[#6e6e6e] mt-[0.7em]"></div>
                  <p className="b_greyss text-[#6e6e6e] pt-[0.3em]">4 Servings</p>
                </div>
                <div className="b_star_sectionss flex gap-[0.5em] items-center">
                  <p>4.5</p>
                  <AiOutlineStar className="b_heartss text-[#058b42]" />
                </div>
              </div>
            </div>
          </div>

          <div className="b_flex_container font-[700]">
            <img src={Oha} alt="pancake" className="b_food_menuss w-[100%] h-[200px] rounded-t-[5px] object-cover object-center" />
            <div className="b_card2ss border-x border-b rounded-b shadow-lg py-[2em] px-[1em]">
              <div className="b_lovess flex justify-between">
                <p className="capitalize">oha soup & garri</p>
                <AiOutlineHeart className="b_heartss text-[#058b42] cursor-pointer" />
              </div>
              <div className="b_love2ss flex justify-between pt-[0.5em]">
                <div className="b_servings_sectionss flex gap-[0.4em]">
                  <p className="parass text-[#058b42] pt-[0.3em]">High in Nutrients</p>
                  <div className="b_radiusss w-[10px] h-[10px] rounded-full bg-[#6e6e6e] mt-[0.7em]"></div>
                  <p className="b_greyss text-[#6e6e6e] pt-[0.3em]">4 Servings</p>
                </div>
                <div className="b_star_sectionss flex gap-[0.5em] items-center">
                  <p>4.5</p>
                  <AiOutlineStar className="b_heartss text-[#058b42]" />
                </div>
              </div>
            </div>
          </div>

          <div className="b_flex_container font-[700]">
            <img src={Okro} alt="bread & tosted tea" className="b_food_menuss w-[100%] h-[200px] rounded-t-[5px] object-cover object-center" />
            <div className="b_card2ss border-x border-b rounded-b shadow-lg py-[2em] px-[1em]">
              <div className="b_lovess flex justify-between">
                <p className="capitalize">okro soup & semo</p>
                <AiOutlineHeart className="b_heartss text-[#058b42] cursor-pointer" />
              </div>
              <div className="b_love2ss flex justify-between pt-[0.5em]">
                <div className="b_servings_sectionss flex gap-[0.4em]">
                  <p className="parass text-[#058b42] pt-[0.3em]">High in Vitamins</p>
                  <div className="b_radiusss w-[10px] h-[10px] rounded-full bg-[#6e6e6e] mt-[0.7em]"></div>
                  <p className="b_greyss text-[#6e6e6e] pt-[0.3em]">6 Servings</p>
                </div>
                <div className="b_star_sectionss flex gap-[0.5em] items-center">
                  <p>4.5</p>
                  <AiOutlineStar className="b_heartss text-[#058b42]" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Sublunch />
      </main>
      {/* <Subbreakfast /> */}

      <LunchMobileCard />

      <div className="borderss border-b lg:flex hidden my-[3em] mx-[8em]"></div>
      <div className="hide-mainss lg:flex flex-col hidden">
        <Main />
      </div>
      <Footer />
    </div>
  );
};

export default Lunch;
