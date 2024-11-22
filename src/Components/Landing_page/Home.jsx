import React, { useState, useRef, useEffect } from "react";
import logo from "../Images/logo.png";
import login_icon from "../Images/log-in.png";
import { CiSearch } from "react-icons/ci";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "../Landing_page/Custom-carousel.css";
import Suggestion from "./Suggestion";
import "@splidejs/react-splide/css";
import { AiOutlineUser } from "react-icons/ai";
import Carousel1 from "../Images/Carousel1.png";
import Carousel2 from "../Images/Carousel22.png";
import Porridge from "../Images/poridge.jpeg";
import Stew from "../Images/stew.jpeg";
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
        <div className="container_header">
          <div>
            <div className="logo">
              <img src={logo} alt="logo icon" />
            </div>
            <div className="toggle-menu">
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

                    <li>
                      <Link to={"/blog"}>blog</Link>
                    </li>
                  </ul>
                </div>
              </Drawer>
            </div>
          </div>
          <div className="contact">
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

              <li>
                <Link to={"/blog"}>blog</Link>
              </li>
            </ul>
          </div>
          <div className="login_signup">
            <div className="login">
              <p>
                <Link to={"/login"}>login</Link>
              </p>
              <div>
                <img src={login_icon} alt="login icon" className="image_icon" />
              </div>
            </div>
            <div className="register">
              <AiOutlineUser className="user" />
              <p>
                <Link to={"/register"} className="anchor-tag">register</Link>
              </p>
            </div>
          </div>
          <div className="mobileView-only">
            <p>
              <Link to={"/login"} className="anchor-tag">
                login /
              </Link>
            </p>
            <p>
              <Link to={"/register"} className="anchor-tag">register</Link>
            </p>
          </div>
        </div>
      </header>
      <div className="Auto_carousel">
        <div className="hide">
          <Splide
            className="hide-on-mobile"
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
          <div className="auto-paly">
            <MobileCarousel />
          </div>
        </div>

        <div className="section_bg">
          <div className="mobile_views">
            <p>Home for</p>
            <p>healthy Nigerian</p>
            <p>recipes</p>
            <p className="para2">Ranging from meals to desert to drinks</p>
          </div>
          <div className="desktop_views">
            <p>Learn to cook</p>
            <p className="para">healthy</p>
            <p>Nigerian recipes</p>
            <p className="para2">Ranging from meals to desert to drinks</p>
          </div>
          <div className="search_recipes">
            <input type="text" placeholder="Search recipe" />
            <br />
            <button className="btn">
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
