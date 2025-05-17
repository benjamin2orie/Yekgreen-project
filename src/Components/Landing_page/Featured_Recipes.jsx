import React from "react";
import MobileView from "./MobileView";
import sug3 from "../Images/sug3.jpeg";
import sug2 from "../Images/sug2.jpeg";
import Rice from "../Images/Rice1.png";
import akara from "../Images/akara.jpeg";
import porridge from "../Images/poridge.jpeg";
import Footer from "./Footer";
import stew from "../Images/stew.jpeg";
import { AiOutlineHeart, AiOutlineStar } from "react-icons/ai";
import "./Featured_Recipes.css";
import Main from "./Main";
import carot from "../Images/carrot.png";
import Tuber from "../Images/Carrot1.png";
import Onion2 from "../Images/Onion2.png";
import Chili from "../Images/Chili.png";

const Featured_Recipes = () => {
  return (
    <>
      <div className="lg:flex gap-[0.2em]
       pt-[3em] lg:pl-[80px] font-workSans my-[1em]">
        <h1 className="text-[rgba(2,2,2,1)] text-[45px] capitalize
         font-[700] pt-[0.5em] px-[1.5em] lg:flex hidden">feature recipes</h1>
        <img src={carot} alt="carrt icon" className="w-[30px] h-[30px] relative top-[2em] lg:flex hidden" />
        <h2 className="lg:hidden flex capitalize pt-[1em] text-[rgba(13,40,25,1)] fon-[700] leading-[35.94px] px-[30px] text-[27.65px] md:text-[40px] md:font-[700] md:pt-[5em]">featured</h2>
      </div>

      <section className="lg:grid hidden grid-cols-3 lg:px-[8.5em] md:px-[8.5em] px-[3px] gap-[1em]">
        <div className="flex_container">
          <img src={Rice} alt="rice & stew" className="w-[100%] h-[200px] rounded-t-[5px] object-cover object-center
          " />
          <div className="border-x border-b rounded-b shadow-lg py-[2em] px-[1em]">
            <div className="flex justify-between">
              <p className="capitalize">jollof rice 🥥 & chicken</p>
              <AiOutlineHeart className="text-[#058b42] cursor-pointer" />
            </div>
            <div className="flex justify-between pt-[0.5em]">
              <div className="flex gap-[0.4em]">
                <p className="text-[#058b42] pt-[0.3em]">High in Carbs </p>
                <div className="w-[10px] h-[10px] rounded-full bg-[#6e6e6e] mt-[0.7em]"></div>
                <p className="text-[#6e6e6e] pt-[0.3em]">6 Servings</p>
              </div>
              <div className="flex gap-[0.5em] items-center">
                <p>4.5</p>

                <AiOutlineStar className="text-[#058b42]" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex_container">
          <img src={akara} alt="rice & stew" className="w-[100%] h-[200px] rounded-t-[5px] object-cover object-center" />
          <div className="border-x border-b rounded-b shadow-lg py-[2em] px-[1em]">
            <div className="flex justify-between">
              <p className="capitalize">akara & pap</p>
              <AiOutlineHeart className="text-[#058b42] cursor-pointer" />
            </div>
            <div className="flex justify-between pt-[0.5em]">
              <div className="flex gap-[0.4em]">
                <p className="text-[#058b42] pt-[0.3em]">High in Protein </p>
                <div className="w-[10px] h-[10px] rounded-full bg-[#6e6e6e] mt-[0.7em]"></div>
                <p className="text-[#6e6e6e] pt-[0.3em]">4 Servings</p>
              </div>
              <div className="flex gap-[0.5em] items-center">
                <p>4.5</p>

                <AiOutlineStar className="text-[#058b42]" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex_container">
          <img src={porridge} alt="rice & stew" className="w-[100%] h-[200px] rounded-t-[5px] object-cover object-center" />
          <div className="border-x border-b rounded-b shadow-lg py-[2em] px-[1em]">
            <div className="flex justify-between">
              <p className="capitalize">yam porridge🥥</p>
              <AiOutlineHeart className="text-[#058b42] cursor-pointer" />
            </div>
            <div className="flex justify-between pt-[0.5em]">
              <div className="flex gap-[0.4em]">
                <p className="text-[#058b42] pt-[0.3em]">High in Carbs </p>
                <div className="w-[10px] h-[10px] rounded-full bg-[#6e6e6e] mt-[0.7em]"></div>
                <p className="text-[#6e6e6e] pt-[0.3em]">4 Servings</p>
              </div>
              <div className="flex gap-[0.5em] items-center">
                <p>4.5</p>

                <AiOutlineStar className="text-[#058b42]" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex_container">
          <img src={sug3} alt="rice & stew" className="w-[100%] h-[200px] rounded-t-[5px] object-cover object-center" />
          <div className="border-x border-b rounded-b shadow-lg py-[2em] px-[1em]">
            <div className="flex justify-between">
              <p className="capitalize">jollof rice 🥥 & beans</p>
              <AiOutlineHeart className="text-[#058b42] cursor-pointer" />
            </div>
            <div className="flex justify-between pt-[0.5em]">
              <div className="flex gap-[0.4em]">
                <p className="text-[#058b42] pt-[0.3em]">High in Carbs </p>
                <div className="w-[10px] h-[10px] rounded-full bg-[#6e6e6e] mt-[0.7em]"></div>
                <p className="text-[#6e6e6e] pt-[0.3em]">6 Servings</p>
              </div>
              <div className="flex gap-[0.5em] items-center">
                <p>4.5</p>

                <AiOutlineStar className="text-[#058b42]" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex_container">
          <img src={stew} alt="rice & stew" className="w-[100%] h-[200px] rounded-t-[5px] object-cover object-center" />
          <div className="border-x border-b rounded-b shadow-lg py-[2em] px-[1em]">
            <div className="flex justify-between">
              <p className="capitalize">rice 🥥 & stew</p>
              <AiOutlineHeart className="text-[#058b42] cursor-pointer" />
            </div>
            <div className="flex justify-between pt-[0.5em]">
              <div className="flex gap-[0.4em]">
                <p className="text-[#058b42] pt-[0.3em]">High in vitamins </p>
                <div className="w-[10px] h-[10px] rounded-full bg-[#6e6e6e] mt-[0.7em]"></div>
                <p className="text-[#6e6e6e] pt-[0.3em]">4 Servings</p>
              </div>
              <div className="flex gap-[0.5em] items-center">
                <p>4.5</p>

                <AiOutlineStar className="text-[#058b42]" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex_container">
          <img src={sug2} alt="rice & stew" className="w-[100%] h-[200px] rounded-t-[5px] object-cover object-center" />
          <div className="border-x border-b rounded-b shadow-lg py-[2em] px-[1em]">
            <div className="flex justify-between">
              <p className="capitalize">egusi soup</p>
              <AiOutlineHeart className="text-[#058b42] cursor-pointer" />
            </div>
            <div className="flex justify-between pt-[0.5em]">
              <div className="flex gap-[0.4em]">
                <p className="text-[#058b42] pt-[0.3em]">High in Nutrients </p>
                <div className="w-[10px] h-[10px] rounded-full bg-[#6e6e6e] mt-[0.7em]"></div>
                <p className="text-[#6e6e6e] pt-[0.3em]">6 Servings</p>
              </div>
              <div className="flex gap-[0.5em] items-center">
                <p>4.5</p>

                <AiOutlineStar className="text-[#058b42]" />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <img src={Onion2} alt="onion" className="lg:flex relative hidden w-[30px] h-[30px] bottom-[6em]" />
      <img src={Tuber} alt="tuber" className="lg:flex relative hidden w-[20px] h-[20px] left-[90em]" />
      <img src={Chili} alt="chip peper" className="lg:flex relative hidden w-[20px] h-[20px] left-[90em] bottom-[30em]" />
      <div className="lg:flex hidden border-b mb-[2em] mx-[8em]"></div>
      <MobileView />
      <Main className="disable_on_mobiles" />
      <Footer/>
    </>
  );
};

export default Featured_Recipes;
