

import Logo from "../Images/logo.png";
import login_icon from "../Images/log-in.png";
import auth from "../Recipes/Recipe_images/Login_image.jpeg";
import { MdOutlineMail } from "react-icons/md";
import { LuLock } from "react-icons/lu";
import { AiOutlineUser } from "react-icons/ai";
import apple_icon from "../Recipes/Recipe_images/apple_icon.png";
import facebook_icon from "../Recipes/Recipe_images/facebook_icon.png";
import google_icon from "../Recipes/Recipe_images/google_icon.png";
import "./Login.css";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="containerss">
      <header className="bg-headerss border-b border-[rgba(212, 212, 212, 1)]">
        <div className="container_headerss flex justify-between items-center lg:px-[8em]
         h-[80px] px-[20px]">
          <Link to={"/"} className="logos">
            <img src={Logo} alt="logo icon" />
          </Link>

          <div className="login_signupss lg:flex hidden gap-[5em] items-center">
            <div className="logins flex items-center">
              <Link to={"/login"} className="capitalize text-[25px] font-[500]">login</Link>
              <div>
                <img src={login_icon} alt="login icon" className="image_iconss" />
              </div>
            </div>
            <div className="registerss flex bg-[#058b42] capitalize text-[rgba(255,255,255,1)] h-[50px] rounded-[8px] items-center gap-[0.1em] w-[140px] text-[20px] justify-center">
              <AiOutlineUser />
              <p>
                <Link to={"/register"}>register</Link>
              </p>
            </div>
          </div>

          <div className="mobileView-onlyss flex lg:hidden bg-[#058b42] w-[130px] h-[40px] text-white capitalize rounded-[5px] font-[400] items-center justify-center">
            <p>
              <Link to={"/login"}>
                login /
              </Link>
            </p>
            <p>
              <Link to={"/register"}>
                register
              </Link>
            </p>
          </div>
        </div>
      </header>

      <div className="login_container_formss flex lg:px-[8em] px-[20px] gap-[4em]">
        <img
          src={auth}
          alt="authentication image"
          className="login_imagess lg:flex hidden w-[673px] h-[864px] "
        />
        <div className="login_container_borderss w-[100%]">
          <form>
            <div className="text-[40px] font-[700] leading-[96px] pt-[2em] text-[#020202]">
              <h3 className="lg:flex hidden justify-center">
                Register to do more
              </h3>
              <h4 className="lg:hidden flex justify-center text-[20px] leading-[32px] font-[400] pb-2">
                Register to do more
              </h4>
            </div>

            <div className="flex flex-col gap-[2em]">
              <div className="login_container_inputsss flex items-center">
                <div className=" border-[1px] bg-gray-400d text-[#6e6e6e] border-[#6e6e6e] h-[40px] w-[40px] rounded-l-[8px] flex items-center justify-center">
                  <MdOutlineMail className="mailIconss" />
                </div>
                <input
                  type="text"
                  placeholder="email"
                  className="login_inputss rounded-r-[8px] outline-none w-[100%] h-[40px] border-[1px] border-[#6e6e6e] text-[20px] pl-[0.1em]"
                />
              </div>
              <div className="flex items-center">
                <div className="border-[1px] bg-gray-400d text-[#6e6e6e] border-[#6e6e6e] h-[40px] w-[40px] rounded-l-[8px] flex items-center justify-center">
                  <LuLock />
                </div>
                <input
                  type="password"
                  placeholder="password"
                  className="login_passwordss rounded-r-[8px] outline-none w-[100%] h-[40px] border-[1px] border-[#6e6e6e] text-[20px] pl-[0.1em]"
                />
              </div>
              <div>
                <input
                  type="button"
                  value={"Register with Email"}
                  className="moress text-center lg:mt-[3em] bg-[#058b42] cursor-pointer text-[rgba(255,255,255,1)] w-[100%] h-[40px] outline-none rounded-[8px] text-[20.04px] font-[400] leading-[32px]"
                />
              </div>
            </div>
          </form>

          <div className="login_borderss flex justify-center pt-[2em] items-center gap-[0.5em]">
            <div className="grey_borderss border-b border-[#3a3a3a] w-[100px]"></div>
            <p>or with</p>
            <div className="grey_borderss border-b border-[#3a3a3a] w-[100px]"></div>
          </div>

          <div className="mediass flex justify-center gap-[2em] my-[3em]">
            <div className="container_mediass w-[50px] h-[40px] border border-[#d4d4d4] rounded-[5px] cursor-pointer flex items-center justify-center">
              <img src={apple_icon} alt="apple icon" />
            </div>
            <div className="container_mediass w-[50px] h-[40px] border border-[#d4d4d4] rounded-[5px] cursor-pointer flex items-center justify-center">
              <img src={facebook_icon} alt="facebook icon" />
            </div>
            <div className="container_mediass w-[50px] h-[40px] border border-[#d4d4d4] rounded-[5px] cursor-pointer flex items-center justify-center">
              <img src={google_icon} alt="google icon" />
            </div>
          </div>

          <div className="border_bottom_colorss border-b border-[rgba(110,110,110,1)]"></div>
          <div className="login_redirectss text-[rgba(58,58,60,1)] lg:text-[20px] font-[400] leading-[32px] flex justify-center items-center pt-[2em]">
            Already have an account?
            <Link
              to={"/login"}
              className="green-colorss pl-[0.3em] text-[#058b42]"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

