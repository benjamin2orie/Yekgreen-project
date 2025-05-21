import React from "react";
import Rice from "../Images/Rice1.png";
import Salad from "../Recipes/Recipe_images/Salad.jpeg";
import Mobile_image from "../Images/mobile-pap.jpeg";
import { AiOutlineHeart, AiOutlineStar } from "react-icons/ai";
const MobileView = () => {
  return (
    <>
      <div className="px-[20px] md:pt-[5em] lg:hidden flex flex-col gap-[4em]">
        <div className="flex_container">
          <img src={Rice} alt="rice & stew" className="w-[100%] h-[200px] md:h-[250px] rounded-t-[5px] object-cover object-center" />
          <div className="border-x border-b rounded-b shadow-lg py-[2em] px-[1em]">
            <div className="flex justify-between">
              <p className="capitalize md:text-[30px] md:font-[700]">jollof rice & chicken</p>
              <AiOutlineHeart className="text-[#058b42] cursor-pointer md:w-[50px] md:h-[50px]" />
            </div>
            <div className="flex justify-between pt-[0.5em]">
              <div className="flex gap-[0.4em] md:gap-[1em]">
                <p className="text-[#058b42] pt-[0.3em] md:text-[30px]">High in Carbs </p>
                <div className="w-[10px] md:w-[20px] h-[10px] md:h-[20px] rounded-full bg-[#6e6e6e] mt-[0.7em] md:mt-[1.5em]"></div>
                <p className="text-[#6e6e6e] pt-[0.3em] md:text-[30px]">6 Servings</p>
              </div>
              <div className="flex gap-[0.5em] items-center md:text-[30px]">
                <p>4.5</p>

                <AiOutlineStar className="text-[#058b42] md:w-[50px] md:h-[50px]" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex_container">
          <img src={Salad} alt="bread & tosted tea" className="w-[100%] h-[200px] md:h-[250px] rounded-t-[5px] object-cover object-center" />
          <div className="border-x border-b rounded-b shadow-lg py-[2em] px-[1em]">
            <div className="flex justify-between">
              <p className="capitalize md:text-[30px] md:font-[700]">african salad</p>
              <AiOutlineHeart className="text-[#058b42] cursor-pointer md:w-[50px] md:h-[50px]" />
            </div>
            <div className="flex justify-between pt-[0.5ems]">
              <div className="flex gap-[0.4em] md:gap-[1em]">
                <p className="text-[#058b42] pt-[0.3em] md:text-[30px]">High in Vitamins</p>
                <div className="w-[10px] h-[10px] md:w-[20px] md:h-[20px] rounded-full bg-[#6e6e6e] mt-[0.7em] md:mt-[1.5em]"></div>
                <p className="text-[#6e6e6e] pt-[0.3em] md:text-[30px]">6 Servings</p>
              </div>
              <div className="flex gap-[0.5em] items-center md:text-[30px]">
                <p>4.5</p>
                <AiOutlineStar className="text-[#058b42] md:w-[50px] md:h-[50px]" />
              </div>
            </div>
          </div>
          </div>

          <div className="flex_container font-[500]">
            <img
              src={Mobile_image}
              alt="bread & tosted tea"
              className="w-[100%] h-[200px] md:h-[250px] rounded-t-[5px] object-cover object-center"
            />
            <div className="border-x border-b rounded-b shadow-lg py-[2em] px-[1em]">
              <div className="flex justify-between">
                <p className="capitalize md:text-[30px] md:font-[700]">akara & pap</p>
                <AiOutlineHeart className="text-[#058b42] cursor-pointer md:w-[50px] h-[50px]" />
              </div>
              <div className="flex justify-between pt-[0.5em]">
                <div className="flex gap-[0.4em] md:gap-[1em]">
                  <p className="text-[#058b42] pt-[0.3em] md:text-[30px]">High in Carbs</p>
                  <div className="w-[10px] h-[10px] md:w-[20px] md:h-[20px] rounded-full bg-[#6e6e6e] mt-[0.7em] md:mt-[1.5em]"></div>
                  <p className="text-[#6e6e6e] pt-[0.3em] md:text-[30px]">4 Servings</p>
                </div>
                <div className="flex gap-[0.5em] items-center md:text-[30px]">
                  <p>4.5</p>
                  <AiOutlineStar className="text-[#058b42] md:w-[50px] md:h-[50px]" />
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default MobileView;
