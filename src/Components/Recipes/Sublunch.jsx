import "../Recipes/Subreakfast.css";

import Veggies from "../Recipes/Recipe_images/Veggies.jpeg";
import Fruits from "../Recipes/Recipe_images/Fruit.jpeg";
import { AiOutlineHeart, AiOutlineStar } from "react-icons/ai";
import sug2 from "../Images/sug2.jpeg";
import Spark from "../Recipes/Recipe_images/Spark.jpeg";
import Jollof from "../Images/sug3.jpeg";
import Plantain from "../Recipes/Recipe_images/Plantain.jpeg";
import Noodles from "../Recipes/Recipe_images/Noodles.jpeg";
import Plantain_porridge from "../Recipes/Recipe_images/Plantain_porridge.jpeg";

const Sublunch = () => {
  return (
    <div>
      <section className="sub_container">
        <div className="sub_main_containerss lg:grid hidden grid-cols-3 gap-[1em] px-[8em] py-[3em]">
          <div className="sub_flex_container font-[700]">
            <img src={sug2} alt="egg sauce" className="sub_food_menuss w-[100%] h-[200px] rounded-t-[5px] object-cover object-center" />
            <div className="sub_card2ss border-x border-b rounded-b shadow-lg py-[2em] px-[1em]">
              <div className="sub_lovess flex justify-between">
                <p className="capitalize">egusi soup & semo</p>
                <AiOutlineHeart className="sub_heartss text-[#058b42] cursor-pointer" />
              </div>
              <div className="sub_love2ss sub_love2ss flex justify-between pt-[0.5em]">
                <div className="sub_servings_sectionss flex gap-[0.4em]">
                  <p className="parass text-[#058b42] pt-[0.3em]">High in Nutriemts</p>
                  <div className="sub_radiusss w-[10px] h-[10px] rounded-full bg-[#6e6e6e] mt-[0.7em]"></div>
                  <p className="sub_greyss text-[#6e6e6e] pt-[0.3em]">4 Servings</p>
                </div>
                <div className="sub_star_sectionss flex gap-[0.5em] items-center">
                  <p>4.5</p>
                  <AiOutlineStar className="sub_heartss text-[#058b42]" />
                </div>
              </div>
            </div>
          </div>

          <div className="sub_flex_container font-[700]">
            <img src={Spark} alt="okpa" className="sub_food_menuss w-[100%] h-[200px] rounded-t-[5px] object-cover object-center" />
            <div className="sub_card2ss border-x border-b rounded-b shadow-lg py-[2em] px-[1em]">
              <div className="sub_lovess flex justify-between">
                <p className="capitalize">spaghetti🍛</p>
                <AiOutlineHeart className="sub_heartss text-[#058b42] cursor-pointer" />
              </div>
              <div className="sub_love2ss flex justify-between pt-[0.5em]">
                <div className="sub_servings_sectionss flex gap-[0.4em]">
                  <p className="parass text-[#058b42] pt-[0.3em]">High in Carbs</p>
                  <div className="sub_radiusss w-[10px] h-[10px] rounded-full bg-[#6e6e6e] mt-[0.7em]"></div>
                  <p className="sub_greyss text-[#6e6e6e] pt-[0.3em]">4 Servings</p>
                </div>
                <div className="sub_star_sectionss flex gap-[0.5em] items-center">
                  <p>4.5</p>
                  <AiOutlineStar className="sub_heartss text-[#058b42]" />
                </div>
              </div>
            </div>
          </div>

          <div className="sub_flex_container font-[700]">
            <img
              src={Jollof}
              alt="jollof rice & beans"
              className="sub_food_menuss w-[100%] h-[200px] rounded-t-[5px] object-cover object-center"
            />
            <div className="sub_card2ss border-x border-b rounded-b shadow-lg py-[2em] px-[1em]">
              <div className="sub_lovess flex justify-between">
                <p className="capitalize">jollof rice 🍚& beans</p>
                <AiOutlineHeart className="sub_heartss text-[#058b42] cursor-pointer" />
              </div>
              <div className="sub_love2ss flex justify-between pt-[0.5em]">
                <div className="sub_servings_sectionss flex gap-[0.4em]">
                  <p className="parass text-[#058b42] pt-[0.3em]">High in Carbs</p>
                  <div className="sub_radiusss w-[10px] h-[10px] rounded-full bg-[#6e6e6e] mt-[0.7em]"></div>
                  <p className="sub_greyss text-[#6e6e6e] pt-[0.3em]">6 Servings</p>
                </div>
                <div className="sub_star_sectionss flex gap-[0.5em] items-center">
                  <p>4.5</p>
                  <AiOutlineStar className="sub_heartss text-[#058b42]" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="sub_container2s grid grid-cols-3 px-[8em] gap-[1em]">
          <div className="sub_flex_container font-[700]">
            <img
              src={Plantain}
              alt="beans & plantains"
              className="sub_food_menuss w-[100%] h-[200px] rounded-t-[5px] object-cover object-center"
            />
            <div className="sub_card2ss border-x border-b rounded-b shadow-lg py-[2em] px-[1em]">
              <div className="sub_lovess flex justify-between">
                <p className="capitalize">beans & plantains</p>
                <AiOutlineHeart className="sub_heartss text-[#058b42] cursor-pointer" />
              </div>
              <div className="sub_love2ss flex justify-between pt-[0.5em]">
                <div className="sub_servings_sectionss flex gap-[0.4em]">
                  <p className="parass text-[#058b42] pt-[0.3em]">High in carbs</p>
                  <div className="sub_radiusss w-[10px] h-[10px] rounded-full bg-[#6e6e6e] mt-[0.7em]"></div>
                  <p className="sub_greyss text-[#6e6e6e] pt-[0.3em]">6 Servings</p>
                </div>
                <div className="sub_star_sectionss flex gap-[0.5em] items-center">
                  <p>4.5</p>
                  <AiOutlineStar className="sub_heartss text-[#058b42]" />
                </div>
              </div>
            </div>
          </div>

          <div className="sub_flex_container font-[700]">
            <img
              src={Noodles}
              alt="bread & veggies"
              className="sub_food_menuss w-[100%] h-[200px] rounded-t-[5px] object-cover object-center"
            />
            <div className="sub_card2ss border-x border-b rounded-b shadow-lg py-[2em] px-[1em]">
              <div className="sub_lovess flex justify-between">
                <p>noodles & veggies</p>
                <AiOutlineHeart className="sub_heartss text-[#058b42] cursor-pointer" />
              </div>
              <div className="sub_love2ss flex justify-between pt-[0.5em]">
                <div className="sub_servings_sectionss flex gap-[0.4em]">
                  <p className="parass text-[#058b42] pt-[0.3em]">High in vitamins</p>
                  <div className="sub_radiusss w-[10px] h-[10px] rounded-full bg-[#6e6e6e] mt-[0.7em]"></div>
                  <p className="sub_greyss text-[#6e6e6e] pt-[0.3em]">4 Servings</p>
                </div>
                <div className="sub_star_sectionss flex gap-[0.5em] items-center">
                  <p>4.5</p>
                  <AiOutlineStar className="sub_heartss text-[#058b42]" />
                </div>
              </div>
            </div>
          </div>

          <div className="sub_flex_container font-[700]">
            <img
              src={Plantain_porridge}
              alt="fruits & veggies"
              className="sub_food_menuss w-[100%] h-[200px] rounded-t-[5px] object-cover object-center"
            />
            <div className="sub_card2ss border-x border-b rounded-b shadow-lg py-[2em] px-[1em]">
              <div className="sub_lovess flex justify-between">
                <p className="capitalize">plantain porridge 🥯</p>
                <AiOutlineHeart className="sub_heartss text-[#058b42] cursor-pointer" />
              </div>
              <div className="sub_love2ss flex justify-between pt-[0.5em]">
                <div className="sub_servings_sectionss flex gap-[0.4em]">
                  <p className="parass text-[#058b42] pt-[0.3em]">High in Fibre</p>
                  <div className="sub_radiusss w-[10px] h-[10px] rounded-full bg-[#6e6e6e] mt-[0.7em]"> </div>
                  <p className="sub_greyss text-[#6e6e6e] pt-[0.3em]">6 Servings</p>
                </div>

                <div className="sub_star_sectionss flex gap-[0.5em] items-center">
                  <p>4.5</p>
                  <AiOutlineStar className="sub_heartss text-[#058b42]" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className={styles.border}></div> */}
      </section>
    </div>
  );
};

export default Sublunch;
