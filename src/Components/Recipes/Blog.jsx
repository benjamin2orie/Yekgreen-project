import React, { useState } from "react";
import { AiOutlinePlus, AiOutlineUser } from "react-icons/ai";
import { FiFileText } from "react-icons/fi";
import Logo from "../Images/logo.png";
import { AiOutlineClockCircle } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineLike } from "react-icons/ai";
import Main from "../Landing_page/Main";
import Footer from "../Landing_page/Footer";
import Ingredients from "../Recipes/Recipe_images/Ingredients.jpeg";
import Video from "../Recipes/Recipe_images/Video.gif";
import "../Recipes/Blog.css";
import Rice from "../Images/Rice1.png";
import mobileView from "../Recipes/Recipe_images/blog-mobile.jpeg";
import { CgMenuLeft } from "react-icons/cg";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

import { Button, Dropdown, Space, Drawer } from "antd";

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

  const location = useLocation();

  return (
    <div className="select-none">
      <header className="breakfast_headerss">
        <div className="b_containers flex capitalize text-[23.04px] justify-between lg:px-[6em] px-[20px] items-center py-[1em]">
          <div className="flex items-center gap-[1.5em]">
            <div className="toggle-menuss lg:hidden relative top-[0.3em] text-[50px]">
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
                      {/* <Link to={"/blog"} className="anchor-tags">blog</Link> */}
                    </li>
                  </ul>
                </div>
              </Drawer>
            </div>

            {/* logo */}
            <Link to={"/"} className="logo_contents">
              <img src={Logo} alt="logo" />
            </Link>
          </div>

          <nav>
            <ul className="lg:flex hidden gap-[2em] cursor-pointer items-center">
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
                    <li>recipes</li>
                  </Dropdown>
                </Space>
              </Space>
              <li
                className={`${
                  location.pathname === "/blog"
                    ? "border-b border-green-500"
                    : ""
                }`}
              >
                <Link to="/blog" className="anchor-tag">
                  blog
                </Link>
              </li>
            </ul>
          </nav>
          <div className="userss flex lg:gap-[3em] gap-[1em] cursor-pointer items-center">
            <FiFileText />
            <AiOutlineUser />
          </div>
        </div>
      </header>
      <div
        className="container_blogs bg-[#04471c] flex items-center
       text-[rgba(255,255,255,1)] justify-between lg:px-[8em] px-[20px] py-[1em]"
      >
        <div className="updates capitalize">
          <h3>jollof rice & chicken</h3>
          <p>updated 19/10/2024</p>
        </div>
        <div className="prints flex lg:gap-[3em] gap-[0.5em] items-center">
          <AiOutlineHeart className="Likes text-[25px]" />
          <button
            className="print_btns lg:w-[100px] w-[50px] h-[40px] bg-[#058b42]
            rounded-[5px] font-[400]"
          >
            print
          </button>
        </div>
      </div>

      <div className="container_contents w-[100%] flex lg:gap-[3em] lg:flex-row flex-col-reverse justify-between lg:px-[8em] px-[20px]">
        <div className="para_contents text-[rgba(58,58,60,1)] lg:font-[400] font-[700] lg:leading-[48px] leading-[32px] lg:text-[23.04px] text-[19.02px] lg:pt-[3em] pt-[1em]">
          <p>
            Jollof rice, is a rice dish from West Africa. The dish is typically
            made with long-grain rice, tomatoes, onions, spices, vegetables and
            meat in a single pot, although its ingredients and preparation
            methods vary across different regions.
          </p>
          <p className="hide-dumy-ps lg:flex hidden">
            Tellus diam felis, vel, ut pulvinar est amet aliquam. Id id nunc, id
            facilisis. Nec elementum, purus morbi consectetur iaculis gravida
            libero. Non tellus suspendisse nulla metus morbi vulputate lectus
            eu. Aenean mauris pharetra facilisi.
          </p>
          <div>
            <p className="lists bg-[#058b42] w-[200px] text-[#FFFFFF] h-[50px] border-none rounded-[8px] cursor-pointer items-center mt-[2em] lg:text-[23.04px] text-[19.02px] flex justify-center">
              Jump to recipes
            </p>
          </div>
        </div>
        <div className="">
          <img
            src={Rice}
            alt="jollof rice and chiken"
            className="hide-on-mds lg:flex hidden w-[2000px] h-[420px] rounded-[8px]"
          />
          <img
            src={mobileView}
            alt="chicken laps and ingredients used in cooking joolf rice"
            className="blog-mobile-onlys lg:hidden flex rounded-b"
          />
        </div>
      </div>
      <section className="section_container">
        <div className="imagess flex flex-col lg:px-[8em] px-[20px] lg:pt-[5em] pt-[3em]">
          <img
            src={Video}
            alt="about blog"
            className="w-[100%] lg:h-[500px] h-[232px] rounded-[8px]"
          />
          <p className="text-[rgba(58,58,60,1)] lg:text-[23.04px] text-[19.02px] lg:font-[400] font-[700] lg:leading-[48px] leading-[32px] text-left pt-[1em]">
            It is fair to say that this delicious rice dish is pretty easy to
            make anywhere in the world because the ingredients are easy to find.
          </p>
          <p className="desktop-onlys text-[rgba(58,58,60,1)] text-[23.04px] font-[400] leading-[48px] text-left lg:flex hidden">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porta nisi,
            condimentum fusce sed ut condimentum ac. Volutpat ac, maecenas
            aliquam lectus eget consectetur ut tincidunt aenean.
          </p>
        </div>
      </section>

      <main className="main_containerss lg:px-[8em] px-[20px]">
        <div
          className="recipe_factss rounded-[8px] bg-[rgba(250,250,250,1)] text-[rgba(110,110,110,1)] lg:pt-[2em] pt-[0.5em] lg:pl-[1.5em] pl-[1.5em]
         border-2 border-[rgba(110,110,110,1)] border-dashed lg:mt-[4em] mt-[3em]"
        >
          <h3 className="capitalize lg:text-[33.18px] text-[23.04px] font-[600]">
            recipes facts
          </h3>
          <div className="recipe_flexs flex lg:pl-[3em] pl-[1.7em] lg:gap-[8em] gap-[1em] leading-[2em] capitalize">
            <div>
              <AiOutlineClockCircle className="ai_clocks relative top-[3em] lg:right-[3em] right-[2em] lg:w-[30px] lg:h-[30px]" />
              <p>active: 20mins</p>
              <p>total: 60mins</p>
            </div>
            <div className="itemss lg:mt-[1.5em] mt-[2.5em] flex lg:gap-[1em] gap-[0.5em] lg:text-[23.04px] text-[17px] font-[400] lg:leading-[48px] leading-[32px]">
              <AiOutlineLike className="ai_likes mt-[0.4em]" />
              <p>4 - 6 servings</p>
            </div>
          </div>
        </div>

        <div className="ingredientss flex lg:flex-row flex-col lg:mt-[5em] mt-[3em] lg:justify-between lg:mb-[8em] gap-[3em]">
          <div className="item_listss">
            <h3 className="capitalize lg:text-[30px] text-[27.68px] pb-[0.1em] text-[rgba(58,58,60,1)] font-[700]">
              ingredients
            </h3>
            <ul className="text-[rgba(58,58,60,1)] lg:text-[23.04px] text-[19.02px] lg:font-[400] font-[700] lg:leading-[48px] leading-[32px] lg:list-disc">
              <li>4 cups of rice</li>
              <li>Tomato puree</li>
              <li>1 bulb of red onions</li>
              <li>4 pcs of scotch bonnet pepper</li>
              <li>Thyme</li>
              <li> Carrot & peas ( Optional )</li>
            </ul>
            <div
              className="add_lists bg-[rgba(5,139,66,1)] text-[rgba(255,255,255,1)] lg:w-[280px] w-[240px] h-[50px]
             border-none rounded-[5px] cursor-pointer flex items-center justify-center lg:mt-[3em] mt-[2em] lg:text-[20.04px] text-[19.0px]"
            >
              <AiOutlinePlus />
              <p>Add to shopping list</p>
            </div>
          </div>
          <div>
            <img
              src={Ingredients}
              alt="ingredients for cooking rice"
              className="w-[800px] rounded-[8px]"
            />
          </div>
        </div>
      </main>
      <div className="borderss lg:flex hidden border-b mx-[8em]"></div>

      <article className="lg:px-[5em] px-[20px] lg:text-[23.04px] text-[19.02px] lg:font-[500] font-[700] pt-[2em] lg:pt-[0]">
        <h3 className="capitalize lg:pb-[0.5em] text-[30px] font-[700] lg:leading-[96px] leading-[50px]">
          directions
        </h3>
        <div className="container_directions text-[rgba(110,110,110,1)] flex gap-[1em] flex-col">
          <h4 className="text-[#058b42] capitalize font-[400]">step 1</h4>
          <p>
            In a blender, combine tomatoes, scotch bonnet pepper and onions;
            purée. Pour out half the purée into a bowl; set aside. Add the bell
            peppers to the purée remaining in the blender and pulse until
            smooth. Add to the mixture that was set aside and stir to combine.
          </p>
          <h4 className="text-[#058b42] capitalize font-[400]">step 2</h4>
          <p>
            Heat vegetable oil in a large pot over medium heat. Add blended
            vegetables along with the salt, curry powder, ground chile pepper,
            garlic powder, onion powder, bay leaves, ginger and thyme. Bring
            mixture to a boil.
          </p>
          <h4 className="text-[#058b42] capitalize font-[400]">step 3</h4>
          <p>Stir in the rice until well mixed, then reduce the heat to low.</p>
          <h4 className="text-[#058b42] capitalize font-[400]">step 4</h4>
          <p>
            Cover pot and let cook until rice is al dente, about 45 minutes.
            Check after 30 minutes; if rice is sauce-logged, remove the lid to
            cook off the excess sauce. If rice seems dry, stir in 1 to 2 cups
            water. Allow the rice at the bottom of the pot to char a bit to
            infuse it with a smoky flavor.
          </p>
        </div>
      </article>

      <div className="nutrition_facts bg-[rgba(250,250,250,1)] text-[rgba(110,110,110,1)] border border-dashed border-[rgba(110,110,110,1)] rounded-[8px] mt-[3em] lg:mx-[4.8em] mx-[20px] lg:pt-[3em] pt-[1em] lg:pl-[1.5em] pl-[0.5em] lg:text-[23.04px] text-[19.02px]">
        <h3 className="lg:text-[33px] text-[19.02px] lg:pb-[1em] pb-[0.5em] font-[600] lg:leading-[40px] leading-[32px]">
          Nutrition Facts ( per servings )
        </h3>
        <div className="fex_itemss flex lg:gap-[8em] gap-[1em] pb-[1em]">
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
      <div className="left_overs mt-[3em] lg:text-[23.04px] text-[19.02px] text-[rgba(58,58,60,1)] lg:px-[5em] px-[20px] lg:font-[500] font-[700]">
        <h3 className="text-[rgba(2,2,2,1)] lg:text-[30px] text-[27.65px] font-[700] lg:leading-[96px] leading-[35.94px]">
          Preserving leftover ingredients
        </h3>
        <div className="flex flex-col leading-[48px] py-[2em]">
          <div className="left-over-paragraphs">
            <p>
              1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Aliquam aliquam ac tristique velit, justo, porttitor. Eget mattis
              a curabitur augue. Pellentesque urna tristique.
            </p>
          </div>
          <div className="left-over-paragraphs">
            <p>
              2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Aliquam aliquam ac tristique velit, justo, porttitor. Eget mattis
              a curabitur augue. Pellentesque urna tristique.
            </p>
          </div>
          <div className="left-over-paragraphs">
            <p>
              3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Aliquam aliquam ac tristique velit, justo, porttitor. Eget mattis
              a curabitur augue. Pellentesque urna tristique.
            </p>
          </div>
          <div className="left-over-paragraphs">
            <p>
              4. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Aliquam aliquam ac tristique velit, justo, porttitor. Eget mattis
              a curabitur augue. Pellentesque urna tristique.
            </p>
          </div>
        </div>
      </div>
      <div className="hide-mains lg:flex flex-col hidden">
        <Main />
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
