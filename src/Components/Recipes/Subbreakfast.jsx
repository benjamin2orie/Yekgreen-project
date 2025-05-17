import "../Recipes/Subreakfast.css";
import Okpa from "../Recipes/Recipe_images/Okpa.jpeg";
import Fries from "../Recipes/Recipe_images/Fries.jpeg";
import Beans from "../Images/sug3.jpeg";
import Plantain from "../Recipes/Recipe_images/Plantain.jpeg";
import Veggies from "../Recipes/Recipe_images/Veggies.jpeg";
import Fruits from "../Recipes/Recipe_images/Fruit.jpeg";
import { AiOutlineHeart, AiOutlineStar } from "react-icons/ai";

const Subbreakfast = () => {
  return (
    <div>
      <section className="sub_container">
        <div className="sub_main_containerss lg:grid hidden grid-cols-3 gap-[1em] px-[8em] py-[3em]">
          <div className="sub_flex_container font-[700]">
            <img src={Fries} alt="egg sauce" className="sub_food_menuss w-[100%] h-[200px] rounded-t-[5px] object-cover object-center" />
            <div className="sub_card2ss border-x border-b rounded-b shadow-lg py-[2em] px-[1em]">
              <div className="sub_lovess flex justify-between">
                <p className="capitalize">fries 🍞 & egg sauce</p>
                <AiOutlineHeart className="sub_heartss text-[#058b42] cursor-pointer" />
              </div>
              <div className="sub_love2ss flex justify-between pt-[0.5em]">
                <div className="sub_servings_sectionss flex gap-[0.4em]">
                  <p className="parass text-[#058b42] pt-[0.3em]">High in proteins</p>
                  <div className="sub_radiusss w-[10px] h-[10px] rounded-full bg-[#6e6e6e] mt-[0.7em]"></div>
                  <p className="sub_greyss text-[#6e6e6e] pt-[0.3em]">3 Servings</p>
                </div>
                <div className="sub_star_sectionss flex gap-[0.5em] items-center">
                  <p>4.5</p>
                  <AiOutlineStar className="sub_heartss text-[#058b42]" />
                </div>
              </div>
            </div>
          </div>

          <div className="sub_flex_container font-[700]">
            <img src={Okpa} alt="okpa" className="sub_food_menuss w-[100%] h-[200px] rounded-t-[5px] object-cover object-center" />
            <div className="sub_card2ss border-x border-b rounded-b shadow-lg py-[2em] px-[1em]">
              <div className="sub_lovess flex justify-between">
                <p className="capitalize">okpa & pap</p>
                <AiOutlineHeart className="sub_heartss text-[#058b42] cursor-pointer" />
              </div>
              <div className="sub_love2ss flex justify-between pt-[0.5em]">
                <div className="sub_servings_sectionss flex gap-[0.4em]">
                  <p className="parass text-[#058b42] pt-[0.3em]">High in proteins</p>
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
              src={Beans}
              alt="jollof rice & beans"
              className="sub_food_menuss w-[100%] h-[200px] rounded-t-[5px] object-cover object-center"
            />
            <div className="sub_card2ss border-x border-b rounded-b shadow-lg py-[2em] px-[1em]">
              <div className="sub_lovess flex justify-between">
                <p className="capitalize">jollof rice & beans</p>
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

        <div className="sub_container2ss grid grid-cols-3 gap-[1em] px-[8em]">
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
              src={Veggies}
              alt="bread & veggies"
              className="sub_food_menuss w-[100%] h-[200px] rounded-t-[5px] object-cover object-center"
            />
            <div className="sub_card2ss border-x border-b rounded-b shadow-lg py-[2em] px-[1em]">
              <div className="sub_lovess flex justify-between">
                <p className="capitalize">bread 🥪 & veggies</p>
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
              src={Fruits}
              alt="fruits & veggies"
              className="sub_food_menuss w-[100%] h-[200px] rounded-t-[5px] object-cover object-center"
            />
            <div className="sub_card2ss border-x border-b rounded-b shadow-lg py-[2em] px-[1em]">
              <div className="sub_lovess flex justify-between">
                <p className="capitalize">fruits & veggies</p>
                <AiOutlineHeart className="sub_heartss text-[#058b42] cursor-pointer" />
              </div>
              <div className="sub_love2ss flex justify-between pt-[0.5em]">
                <div className="sub_servings_sectionss flex gap-[0.4em]">
                  <p className="parass text-[#058b42] pt-[0.3em]">High in vitamins</p>
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

export default Subbreakfast;
