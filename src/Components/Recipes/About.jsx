import { AiOutlineUser } from "react-icons/ai";
import React, { useState } from "react";
import Logo from "../Images/logo.png";
import { FiFileText } from "react-icons/fi";
import about_image from "../Recipes/Recipe_images/about_image.jpeg";
import { TbUsers } from "react-icons/tb";
import { useLocation } from "react-router-dom";
import Footer from "../Landing_page/Footer";
import { CgMenuLeft } from "react-icons/cg";
import { Link } from "react-router-dom";
import { Button, Dropdown, Space, Drawer } from "antd";

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

const About = () => {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState("right");
  const showDrawer = () => {
    setOpen(true);
  };
  const onChange = (e) => {
    setPlacement(e.target.value);
  };
  const onClose = () => {
    setOpen(false);
  };

  const location = useLocation();
  return (
    <div>
      <header className="breakfast_headerss lg:border-none border border-b">
        <div className="b_containers flex justify-between lg:px-[8em] px-[20px] items-center py-[1em]">
          <div className="flex items-center gap-[1.5em]">
            <div
              className="toggle-menuss lg:hidden top-[0.3em] relative
             right-[3.5emd] text-[50px] cursor-pointer"
            >
              <Space>
                <CgMenuLeft onClick={showDrawer} />
              </Space>

              <Drawer
                title=<img src={Logo} alt="logo icon" />
                placement={placement}
                width={500}
                onClose={onClose}
                open={open}
              >
                <div className="contact">
                  <ul>
                    <li>
                      {/* <Link to={"/about"} className="anchor-tags">
                      about us
                    </Link> */}
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
                      <Link to={"/blog"} className="anchor-tags">
                        blog
                      </Link>
                    </li>
                  </ul>
                </div>
              </Drawer>
            </div>

            {/* put the logo here  */}
            <Link to={"/"} className="logo_contents lg:pl-[0] pl-[3ems]">
              <img src={Logo} alt="logo" />
            </Link>
          </div>

          <nav>
            <ul className="lg:flex hidden capitalize text-[23.04px] gap-[2em] text-[#3a3a3c] cursor-pointer items-center">
              <li
                className={`${
                  location.pathname === "/about"
                    ? "border-b border-green-500"
                    : ""
                }`}
              >
                <Link to="/about" className="anchor-tag">
                  about us
                </Link>
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
                <Link to="/blog" className="anchor-tag">
                  blog
                </Link>
              </li>
            </ul>
          </nav>
          <div className="userss flex lg:gap-[3em] gap-[1.5em] text-[#020202] text-[20px] cursor-pointer items-center">
            <FiFileText />
            <div className="">
              <AiOutlineUser />
            </div>
          </div>
        </div>
      </header>

      <div
        className="burgersss bg-[#04471c] flex items-center h-[80px] lg:pl-[5em] pl-[1em] pt-[0.3em]
         gap-[0.3em] text-[rgba(255,255,255,1)] text-[25px] font-[300] lg:my-[0] my-[1em]
          leading-[62.11px] text-left"
      >
        <TbUsers className="burger-icons w-[25px] h-[25px] relative] top-[15px]" />
        <h3>About us</h3>
      </div>
      <div
        className="devs w-[100%] lg:px-[6em] px-[20px] lg:py-[3em] text-[rgba(58,58,60,1)]
        text-[23.04px] font-[400] leading-[48px] text-left"
      >
        <p className="dev-ps lg:flex hidden">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim eget
          aliquet feugiat scelerisque senectus aliquet. Risus ante in elit
          suscipit nisi. Interdum et et iaculis nibh etiam commodo mattis
          fermentum. Libero, ipsum egestas non tincidunt gravida blandit vel
          semper mi. Amet, ac tristique purus interdum dictumst mollis dignissim
          lacus. Etiam a, nisl ut eleifend ultricies. Scelerisque lacus sit
          pharetra, et semper est curabitur aliquet cursus. Malesuada etiam
          egestas eu pharetra enim nisi malesuada duis. Malesuada duis nullam
          mattis nunc. Magna sit consectetur vitae id elementum aliquam mattis
          augue enim. Faucibus orci tellus est, maecenas consectetur enim
          habitant id. Duis quam tellus laoreet libero, scelerisque donec a.
        </p>
        <p className="dev-ps lg:flex hidden">
          Eget integer tellus pretium vestibulum egestas tellus varius id. Netus
          sed penatibus at sed augue amet arcu, blandit euismod. Tempus praesent
          quam enim risus lorem lorem id interdum. Tellus mi vitae eget enim
          eget et. Aliquet sed donec odio sodales consectetur elementum. Sed
          eleifend cursus ac convallis volutpat. Diam lacus, sed ut sit. Vitae
          felis posuere maecenas fringilla sed nunc tortor. Suspendisse tempus,
          vitae cursus amet amet sed. Purus, vel aliquet condimentum id justo,
          egestas dui nibh odio. Aliquet in nisl morbi tellus. Quis ut
          parturient dolor dictum. Pellentesque lectus tortor vitae tempor et
          phasellus donec.
        </p>
        <p
          className="p-dummys lg:hidden font-[600] leading-[30px] text-[16px]
          text-left pb-[2em]"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
          imperdiet lobortis pulvinar vel ac, commodo dignissim ac tortor.
          Volutpat non convallis odio quis in. Lorem velit id arcu ac turpis
          laoreet nulla egestas. Sit suspendisse pellentesque posuere ligula.
          Fusce tristique risus ornare blandit pellentesque morbi. Amet, diam
          sit arcu cursus consequat. Leo tellus semper quam etiam.
        </p>
      </div>

      <div className="about_images flex lg:flex-row flex-col w-[100%] lg:px-[8.5em] px-[20px] pb-[3em] gap-[3em]">
        <img
          src={about_image}
          alt="picture"
          className="lg:w-[400px] w-[100%] h-[232px] rounded-[4px] object-cover object-center"
        />
        <p className="lg:text-[23.04px] text-[16px] lg:font-[400] font-[600] lg:leading-[48px] leading-[30px] text-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus sed sit
          leo a nulla et lacinia quam. Habitant imperdiet eros, quisque amet.
          Posuere in fermentum tellus pretium neque, sollicitudin nibh nullam.
          Leo volutpat pellentesque tortor, massa diam amet, sit. Volutpat
          aenean id magna egestas tristique. Rhoncus eget congue et ridiculus
          nisi.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default About;
