import React from "react";
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
import Carousel3 from "../Images/Carousel3.png";
import Carousel4 from "../Images/Carousel4.png";
import Carousel5 from "../Images/Carousel5.png";
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

const Home = () => {
  return (
    <>
      <header className="bg-header">
        <div className="container_header">
          <div className="logo">
            <img src={logo} alt="logo icon" />
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
              <AiOutlineUser />
              <p>
                <Link to={"/register"}>register</Link>
              </p>
            </div>
          </div>
        </div>
      </header>
      <div className="Auto_carousel">
        <Splide
          className=".splide__pagination .splide__pagination-item"
          options={{
            rewind: true,
            arrows: false,
            type: "loop",
            autoplay: true,
            pauseOnHover: false,
            resetProgress: false,
          }}
          aria-label="..."
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
            <img src={Carousel5} alt="Carousel 5" />
          </SplideSlide>
        </Splide>

        <div className="section_bg">
          <p>Learn to cook</p>
          <p className="para">healthy</p>
          <p>Nigerian recipes</p>
          <p className="para2">Ranging from meals to desert to drinks</p>
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
