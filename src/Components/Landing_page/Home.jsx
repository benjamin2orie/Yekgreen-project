import React, { useState, useRef, useEffect } from "react";
import logo from "../Images/logo.png";
import login_icon from "../Images/log-in.png";
import { CiSearch } from "react-icons/ci";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Suggestion from "./Suggestion";
import "@splidejs/react-splide/css";
import { AiOutlineUser } from "react-icons/ai";
import Carousel1 from "../Images/Carousel1.png";
import Carousel2 from "../Images/Carousel22.png";
// import Porridge from "../Images/poridge.jpeg";
// import Stew from "../Images/stew.jpeg";
import { useLocation } from "react-router-dom";
import Carousel3 from "../Images/Carousel3.png";
import Carousel4 from "../Images/Carousel4.png";
import Carousel5 from "../Images/Carousel5.png";
import { CgMenuLeft } from "react-icons/cg";
import { Link } from "react-router-dom";
import { Button, Radio, Drawer, Dropdown, Space } from "antd";
import MobileCarousel from "./MobileCarousel";

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
// toggle code

const Home = () => {
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

  // making the carousel continue even after clicking

  const splideRef = useRef(null);
  useEffect(() => {
    if (splideRef.current && splideRef.current.splide) {
      const splide = splideRef.current.splide;
      splide.on("move", () => {
        splide.Components.Autoplay.play();
      });
    }
  }, []);
  return (
    <>
      <header className="bg-header">
        <div
          className="container_headers flex
          bg-[#fffff] justify-between items-center lg:px-[6em] pl-[70px]
          lg:h-[130px] h-[90px] lg:pb-[2px] mb-0 font-workSans text-[23.04px] leading-[2px] font-500"
        >
          <div>
            <div className="logo lg:pt-[0]">
              <Link to={"/"}>
                <img src={logo} alt="logo icon" />
              </Link>
            </div>
            <div className="lg:hidden w-[0] h-[0] relative
             bottom-[0.9em] right-[1em] text-[50px] cursor-pointer">
              <Space>
                <CgMenuLeft onClick={showDrawer} />
              </Space>
              <Drawer
                title=<img src={logo} alt="logo icon" />
                placement={placement}
                width={500}
                onClose={onClose}
                open={open}
              >
                <div className="contact">
                  <ul>
                    <li>
                      <Link to={"/about"} className="text-[#3a3a3c]">
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
                      <Link to={"/blog"} className="text-[#3a3a3c]">
                        blog
                      </Link>
                    </li>
                  </ul>
                </div>
              </Drawer>
            </div>
          </div>
          <div className="contact">
            <ul
              className="lg:flex hidden text-[#3A3A3C] text-[23.04px]
              capitalize cursor-pointer gap-[3em]"
            >
              <li>
                <Link to="/about" className="text-[#3a3a3c]">
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
                <Link to={"/blog"} className="text-[#3a3a3c]">
                  blog
                </Link>
              </li>
            </ul>
          </div>
          <div className="lg:flex hidden items-center gap-[3em]">
            <div
              className="flex text-[#020202] capitalize
              cursor-pointer gap-[0.3em] items-center"
            >
              <p>
                <Link to={"/login"} className="anchor-tags">
                  login
                </Link>
              </p>
              <div>
                <img
                  src={login_icon}
                  alt="login icon"
                  className="lg:flex hidden "
                />
              </div>
            </div>
            <div
              className="flex cursor-pointer text-gray-300
              w-[140px] h-[60px] bg-[#058b42] capitalize rounded-[7px] justify-center
              items-center gap-[0.2em] text-[23.04px] "
            >
              <AiOutlineUser className="user" />
              <p>
                <Link to={"/register"}>
                  register
                </Link>
              </p>
            </div>
          </div>
          <div
            className="lg:hidden flex bg-green-900 gap-[0.4em]
           w-[130px] md:w-[200px] h-[50px] text-[16px] md:text-[20px] text-white mt-[1.5em]
            capitalize rounded-[4px] mr-[20px]
            font-400 leading-[24px] items-center justify-center "
          >
            <p>
              <Link to={"/login"}>login/</Link>
            </p>
            <p>
              <Link to={"/register"}>register</Link>
            </p>
          </div>
        </div>
      </header>
      <div className="Auto_carousel">
        <div className="lg:static relative top-[20em] lg:top-[0] lg:mb-[0] mb-[20em]">
          <Splide
            className="lg:flex flex-col hidden"
            ref={splideRef}
            options={{
              rewind: true,
              arrows: false,
              type: "loop",
              autoplay: true,
              pauseOnHover: false,
              resetProgress: false,
            }}
            aria-label="false"
          >
            <SplideSlide>
              <img src={Carousel1} alt="Carousel1 1" />
            </SplideSlide>

            <SplideSlide>
              <img src={Carousel2} alt="Carousel 2" />
            </SplideSlide>
            <SplideSlide>
              <img src={Carousel3} alt="Carousel 3" />
            </SplideSlide>
            <SplideSlide>
              <img src={Carousel4} alt="Carousel 4" />
            </SplideSlide>
            <SplideSlide>
              <img src={Carousel5} alt="Carousel 5" className="me" />
            </SplideSlide>
          </Splide>
          <div className="flex lg:hidden flex-col">
            <MobileCarousel />
          </div>
        </div>

        <div className="section_bg lg:px-[4em] font-workSans">
          <div className="lg:hidden flex flex-col text-[30px] text-green-900 font-workSans font-[800]
           leading-[40px]">
            <p>Home for</p>
            <p>healthy Nigerian</p>
            <p>recipes</p>
            <p className="text-gray-700 text-[19.02px] md:text-[30px] font-400
            leading-[25px] my-[1em]">Ranging from meals to desert to drinks</p>
          </div>
          <div className="lg:flex flex-col text-[80px] font-800 hidden leading-[80px]">
            <p className="text-[80px] text-white">Learn to cook</p>
            <p className="text-[#16dc65]">healthy</p>
            <p className="text-white">Nigerian recipes</p>
            <p className="text-[#16dc65] text-[20px]">
              Ranging from meals to desert to drinks
            </p>
          </div>

          <div className="search_recipes flex justify-left py-[1em]">
            <input
              type="text"
              placeholder="Search recipe"
              className="placeholder-gray-200"

            />
            <button className ="lg:bg-white bg-green-900 h-[50px] lg:w-[10%] w-[15%] border-l-0 rounded-r-md
              flex items-center justify-center text-gray-300 lg:text-gray-900">
              <CiSearch />
            </button>
          </div>
        </div>
      </div>

      <Suggestion />
    </>
  );
};

export default Home;
