// import React from "react";
// import styles from "./Login.module.css";
// import gogo from "../Landing_Image/gogo.png";
// import login from "../Landing_Image/log-inadd.png";
// import auth from "../Landing_Image/auth.jpg";
// import { MdOutlineMail } from "react-icons/md";
// import { LuLock } from "react-icons/lu";
// import { AiOutlineUser } from "react-icons/ai";
// import Apple from "../Landing_Image/apple.png";
// import Path from "../Landing_Image/Pathf.png";
// import Search from "../Landing_Image/search.png";
// import { Link } from "react-router-dom";

import Logo from "../Images/logo.png";
import login_icon from "../Images/log-in.png";
import auth from "../Recipes/Recipe_images/Login_image.jpeg";
import { MdOutlineMail } from "react-icons/md";
import { LuLock } from "react-icons/lu";
import { AiOutlineUser } from "react-icons/ai";
import apple_icon from "../Recipes/Recipe_images/apple_icon.png";
import facebook_icon from "../Recipes/Recipe_images/facebook_icon.png";
import google_icon from "../Recipes/Recipe_images/google_icon.png";
import { Link } from "react-router-dom";
import "./Login.css";

const Register = () => {
  return (
    <div className="containerss">
      <header className="bg-header">
        <div className="container_header">
          <div className="logos">
            <img src={Logo} alt="logo icon" />
          </div>
          <div className="contact">
            <ul>
              <li>about us</li>
              <li>recipes</li>
              <li>blog</li>
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
              <p>register</p>
            </div>
          </div>
          <div className="mobileView-only">
            <p>
              <Link to={"/login"}>login /</Link>
            </p>
            <p>
              <Link to={"/register"}>register</Link>
            </p>
          </div>
        </div>
      </header>
      <div className="login_container_form">
        <img src={auth} alt="authentication image" className="login_image" />
        <div className="login_container_border">
          <form>
            <h3>Register to do more</h3>
            <h4>Register to do more</h4>
            <div className="login_container_input">
              <MdOutlineMail className="mailIcon" />
              <input type="emial" placeholder="email" className="login_input" />
            </div>
            <LuLock className="lock" />
            <input
              type="password"
              placeholder="password"
              className="login_password"
            />
            <input type="submit" value={"Login with Email"} className="more" />
          </form>
          <div className="login_border">
            <div className="grey_border"></div>
            <p>or with</p>
            <div className="grey_border"></div>
          </div>

          <div className="media">
            <div className="container_media">
              <img src={apple_icon} alt="apple icon" />
            </div>
            <div className="container_media">
              <img src={facebook_icon} alt="facebook icon" />
            </div>
            <div className="container_media">
              <img src={google_icon} alt="google icon" />
            </div>
          </div>
          <div className="border_bottom_color"></div>
          <div className="login_redirect">
            Already have an account?
            <Link className="green-color" to={"/login"}>
              Login here
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
