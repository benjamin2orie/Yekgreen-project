import "./App.css";
import Home from "./Components/Landing_page/Home.jsx";
import About from "./Components/Recipes/About.jsx";
import Blog from "./Components/Recipes/Blog.jsx";
import Breakfast from "./Components/Recipes/Breakfast.jsx";
import Lunch from "./Components/Recipes/Lunch.jsx";
import Dinner from "./Components/Recipes/Dinner.jsx";
import Login from "./Components/Recipes/Login.jsx";
import Register from "./Components/Recipes/Register.jsx";
import ScrollToTop from "../ScrollToTop.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const App = () => (
  <Router>
    <ScrollToTop />
    <Routes>
      <Route index element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/breakfast" element={<Breakfast />} />
      <Route path="/lunch" element={<Lunch />} />
      <Route path="/dinner" element={<Dinner />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  </Router>
);

export default App;
