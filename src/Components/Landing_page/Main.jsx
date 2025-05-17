import React from "react";
import main from "../Images/main.jpeg";
import { AiOutlineSend } from "react-icons/ai";
// import Footer from "./Footer";
import "./Main.css";

const Main = () => {
  return (
    <>
      <main>
        <div className="blur-containers lg:bg-image4 bg-image5 bg-cover text-center bg-center lg:mx-[8.5em] mx-[20px] px-[20px] mt-[4em] lg:mt-[0] rounded-[10px] mb-[3em] pt-[3em]">
          <div className="flex flex-col lg:items-center">
            <h1 className="text-[rgba(255,255,255,1)] lg:text-[39.81px] text-[19.03px] font-[700] leading-[40px] pb-[0.5em]">Don't miss out!</h1>
            <h2 className="text-[rgba(255,255,255,1)] lg:text-[23.04px] text-[19.03px] font-[400] lg:leading-[40px] leading-[30px] text-left lg:w-[60%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
            <h2 className="text-[rgba(255,255,255,1)] lg:text-[23.04px] text-[19.03px] font-[400] lg:leading-[40px] leading-[30px] text-left lg:w-[60%]">
              Aenean at tristique pellentesque arcu morbi rhoncus viverra nisi
              integer.
            </h2>
            <h2 className="text-[rgba(255,255,255,1)] lg:text-[23.04px] text-[19.03px] font-[400] lg:leading-[40px] leading-[30px] text-left lg:w-[60%]"> Dui est, scelerisque amet, cursus. Dui convallis.</h2>
            <div className="container_inputs flex mt-[2em] pb-[3em] lg:w-[60%]">
              <input
                type="email"
                placeholder="Email address"
                className="lg:placeholder-[rgba(237,237,237,1)] placeholder-[rgba(110,110,110,1)] lg:w-[100%] w-[100%] lg:bg-[rgba(0,0,0,0.68)] bg-[rgba(255,255,255,1)] border-l border-y rounded-l-[5px] lg:text-[#fafafa] text-[#020202] md:text-[20px] pl-[1em] outline-none h-[60px]"
              />
              <br />
              <button className="btn_btns h-[60px] lg:border-r rounded-r-[5px] w-[70px] lg:bg-[#ffffff] bg-[rgba(4,71,28,1)] lg:text-black text-[rgba(255,255,255,1)] flex items-center justify-center">
                <AiOutlineSend />
              </button>
            </div>
          </div>
        </div>
      </main>
      {/* <Footer /> */}
    </>
  );
};

export default Main;
