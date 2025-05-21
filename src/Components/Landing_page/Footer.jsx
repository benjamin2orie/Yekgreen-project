import React from "react";
import footer_logo from "../Images/footer_logo.png";
import facebook from "../Images/facebook.png";
import twitter from "../Images/twitter.png";
import instagram from "../Images/instagram.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="lg:bg-[#020202] bg-[rgba(13,40,25,1)] text-[#ffffff] w-[100%] font-workSans">
        <div className="flex lg:flex-row flex-col items-center justify-between w-[100%] lg:px-[8.5em] px-[20px] pt-[2em]">
          <div>
            <Link to={"/"}>
              <img
                src={footer_logo}
                alt="logo"
                className="ml-[6em] lg:ml-[0]"
              />
            </Link>
            <div className="leading-[30px] pt-[2em] w-auto text-center lg:text-left">

              <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <p>
                Aenean at tristique pellentesque arcu morbi rhoncus viverra nisi
                integer.
              </p>
              <p> Dui est, scelerisque amet, cursus. Dui convallis.</p>
            </div>
          </div>
          <div>
            <ul className="uppercase text-[20px] lg:leading-[2em] leading-[50px] py-[2em] lg:py-[0]">
              <li>
                <Link to="/about">about us</Link>
                </li>
              <li>privacy policy</li>
              <li>disclaimer</li>
            </ul>
          </div>
          <div className="lg:flex hidden flex-col">
            <h3 className="pb-[1em] uppercase">social</h3>
            <div className=" flex gap-[1em] cursor-pointer">
              <img src={facebook} alt="icon" className="Book" />
              <img src={instagram} alt="icon" />
              <img src={twitter} alt="icon" />
            </div>
          </div>
        </div>
        <div className="border-b my-[2em] lg:mx-[8.5em] mx-[20px]"></div>
        <p className="lg:ml-[8em] pb-[1em] text-center">
          copyright 2024. All right reserved
        </p>
      </footer>
    </>
  );
};

export default Footer;
