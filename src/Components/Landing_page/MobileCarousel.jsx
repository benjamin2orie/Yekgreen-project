// creating an auto play carousel on mobile view

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import React, { useEffect, useRef } from "react";
import card1 from "../Images/poridge.jpeg";
import card2 from "../Recipes/Recipe_images/Salad.jpeg";
import card3 from "../Recipes/Recipe_images/spicy.jpeg";
import card4 from "../Recipes/Recipe_images/Noodles.jpeg";
import card5 from "../Recipes/Recipe_images/Oha_soup.jpeg";
import "../Landing_page/Custom-carousel.css";

const MobileCarousel = () => {
  // this function ensures that the carousel continues after hovering on the indicators
  const splideRef = useRef(null);
  useEffect(() => {
    if (splideRef.current && splideRef.current.splide) {
      const splide = splideRef.current.splide;
      splide.on("move", () => {
        splide.Components.Autoplay.play();
      });
    }
  }, []);
  return (
    <>
      <div className="mobile-carousel">
        <Splide
          ref={splideRef}
          options={{
            rewind: true,
            arrows: false,
            type: "loop",
            autoplay: true,
            pauseOnHover: false,
            resetProgress: false,
          }}
          aria-label="false"
        >
          <SplideSlide >
            <img
              src={card1}
              alt=" this picture contains a plate of porridge food"
              className="fit"
            />
          </SplideSlide>
          <SplideSlide>
            <img src={card2} alt=" this imge contains a plate of salad food"
            className="fit" />
          </SplideSlide>
          <SplideSlide>
            <img src={card3} alt="this image is a plate of spicy food"
            className="fit" />
          </SplideSlide>
          <SplideSlide>
            <img src={card4} alt="this image contains a plate of noodles" 
            className="fit"/>
          </SplideSlide>
          <SplideSlide>
            <img src={card5} alt="this picture contains a plate of Oha soup"
            className="fit" />
          </SplideSlide>
        </Splide>
      </div>
    </>
  );
};

export default MobileCarousel;
