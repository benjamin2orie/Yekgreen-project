import { AiOutlineUser } from "react-icons/ai";
import React, { useState } from "react";
import Logo from "../Images/logo.png";
import { FiFileText } from "react-icons/fi";
import about_image from "../Recipes/Recipe_images/about_image.jpeg";
import { TbUsers } from "react-icons/tb";
import "./About.css";
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
  return (
    <div>
      <header className="breakfast_header">
        <div className="b_container">
          <div className="logo_content">
            <img src={Logo} alt="logo" />
          </div>
          <div className="toggle-menus">
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
          <nav>
            <ul>
              <li>
                <Link to={"/about"} className="anchor-tag">
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
                <Link to={"/blog"} className="anchor-tag">
                  blog
                </Link>
              </li>
            </ul>
          </nav>
          <div className="users">
            <FiFileText />
            <div className="">
              <AiOutlineUser />
            </div>
          </div>
        </div>
      </header>
      <div className="burgers">
        <TbUsers className="burger-icon" />
        <h3>About us</h3>
      </div>
      <div className="dev">
        <p className="dev-p">
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
        <p className="dev-p">
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
        <p className="p-dummy">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
          imperdiet lobortis pulvinar vel ac, commodo dignissim ac tortor.
          Volutpat non convallis odio quis in. Lorem velit id arcu ac turpis
          laoreet nulla egestas. Sit suspendisse pellentesque posuere ligula.
          Fusce tristique risus ornare blandit pellentesque morbi. Amet, diam
          sit arcu cursus consequat. Leo tellus semper quam etiam.
        </p>
      </div>

      <div className="about_image">
        <img src={about_image} alt="picture" />
        <p>
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
