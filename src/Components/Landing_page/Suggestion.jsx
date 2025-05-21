import React from "react";
import Featured_Recipes from "./Featured_Recipes";
import Onion from "../Images/Onion.png";
import Peper from "../Images/Peper.png";

const Suggestion = () => {
  return (
    <>
      <div className="lg:static relative
       w-[100%] lg:h-[100%] h-[750px] top-[3em] lg:bg-white bg-[rgba(250,250,250,1)] font-workSans lg:px-[4em] px-[2em]">
        <div className="flex justify-between
          lg:pt-[5em] pt-[1em] lg:pr-[5em] lg:pl-[5em]">
          <h2 className="text-[rgba(2,2,2,1)] lg:text-[50px]
           font-[700] leading-[96px] text-[27.06px] md:text-[40px] md:font-[700]">suggestions</h2>
          <img src={Peper} alt="Hot peper" className="lg:flex hidden w-[50px] h-[50px]" />
        </div>
        <main className="mr-[0]">
          <img src={Onion} alt="Onion icon" className="relative lg:flex hidden
           top-[13.5em] w-[20px] h-[20px]" />
          <div className="flex lg:flex-row flex-col
            w-[100%] justify-center lg:px-[80px] gap-[1em]">
            <div className="bg-image1 w-[100%] rounded-[8px]
              lg:h-[250px] md:h-[250px] h-[180px] bg-cover bg-center">
              <h4 className="capitalize lg:text-[30px] md:text-[30px] text-[23.04px] lg:pt-[6.5em] md:pt-[6.5em] pt-[6em] pl-[0.5em] text-white">breakfast</h4>
            </div>
            <div className="bg-image2 w-[100%] rounded-[8px] lg:h-[250px] md:h-[250px] h-[180px]
             bg-cover bg-center">
              <h4 className="capitalize lg:text-[30px] md:text-[30px] text-[23.04px] lg:pt-[6.5em] md:pt-[6.5em] pt-[6em] pl-[0.5em] text-white">lunch</h4>
            </div>
            <div className="bg-image3 w-[100%] rounded-[8px] lg:h-[250px] md:h-[250px] h-[180px]
             bg-cover bg-center">
              <h4 className="capitalize lg:text-[30px] md:text-[30px] text-[23.04px] lg:pt-[6.5em] md:pt-[6.5em] pt-[6em] pl-[0.5em] text-white">dinner</h4>
            </div>
          </div>
          <div className="bottom_borders lg:border-b
           mt-[50px] mx-[80px]"></div>
        </main>
      </div>
      <Featured_Recipes />
    </>
  );
};

export default Suggestion;
