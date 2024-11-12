import { AiOutlineUser } from "react-icons/ai";
import Logo from "../Images/logo.png";
import { FiFileText } from "react-icons/fi";
import about_image from "../Recipes/Recipe_images/about_image.jpeg";
import { TbUsers } from "react-icons/tb";
import "./About.css";
import Footer from "../Landing_page/Footer";
import { Link } from "react-router-dom";
import { Button, Dropdown, Space } from "antd";

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
  return (
    <div>
      <header className="breakfast_header">
        <div className="about_container">
          <div className="logo">
            <img src={Logo} alt="logo" />
          </div>
          <nav>
            <ul>
              <li>about us</li>
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
                <Link to={"/blog"}>blog</Link>
              </li>
            </ul>
          </nav>
          <div className="users">
            <FiFileText />
            <AiOutlineUser />
          </div>
        </div>
      </header>
      <div className="burger">
        <TbUsers />
        <h3>About us</h3>
      </div>
      <div className="dev">
        <p>
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
        <p>
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
