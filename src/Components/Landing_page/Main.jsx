import React from "react";
import main from "../Images/main.jpeg";
import { AiOutlineSend } from "react-icons/ai";
import Footer from "./Footer";

const Main = () => {
  return (
    <>
      <main>
        <div className="blur-container">
          <img src={main} alt="main section images" className="main-image" />
          <div className="blur-background" />
          <div className="position">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p>
              Aenean at tristique pellentesque arcu morbi rhoncus viverra nisi
              integer.
            </p>
            <p> Dui est, scelerisque amet, cursus. Dui convallis.</p>
            <div className="container_input">
              <input type="email" placeholder="Email address" />
              <br />
              <button className="btn_btn">
                <AiOutlineSend />
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Main;
