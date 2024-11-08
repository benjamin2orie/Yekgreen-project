import React from "react";
import main from "../Images/main.jpeg";
import { AiOutlineSend } from "react-icons/ai";
import Footer from "./Footer";
import "./Main.css";

const Main = () => {
  return (
    <>
      <main>
        <div className="blur-container">
          <div className="position">
            <h1>Don't miss out!</h1>
            <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
            <h2>
              Aenean at tristique pellentesque arcu morbi rhoncus viverra nisi
              integer.
            </h2>
            <h2> Dui est, scelerisque amet, cursus. Dui convallis.</h2>
            <div className="container_input">
              <input
                type="email"
                placeholder="Email address"
                className="place"
              />
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
