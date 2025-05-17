
import React from 'react';
import { AiOutlineHeart, AiOutlineStar } from "react-icons/ai";
import Beans from '../Images/sug3.jpeg';
import plantain from '../Recipes/Recipe_images/Plantain.jpeg';
import stew from '../Images/stew.jpeg';
import spicy from '../Recipes/Recipe_images/spicy.jpeg';
import plantainPorridge from '../Recipes/Recipe_images/Plantain_porridge.jpeg';

const DinnerMobileCard = () => {
  return (
    <>

<div className="mobile-cardss grid lg:hidden px-[20px] gap-[2em]">
        <div className="flex_container font-[700]">
          <img src={Beans} alt="pancake" className="food_menuss w-[100%] h-[200px] md:h-[250px] rounded-t-[5px] object-cover object-center" />
          <div className="card2ss border-x border-b rounded-b shadow-lg py-[2em] px-[1em]">
            <div className="lovess flex justify-between">
              <p className='capitalize md:text-[30px] md:font-[700]'>rice🍚 & beans jollof🍾</p>
              <AiOutlineHeart className="heartss text-[#058b42] cursor-pointer md:w-[50px] h-[50px]" />
            </div>
            <div className="love2ss flex justify-between pt-[0.5em]">
              <div className="servings_sectionss flex gap-[0.4em] md:gap-[1em]">
                <p className="parass text-[#058b42] pt-[0.3em] md:text-[30px]">High in Protein</p>
                <div className="radiusss w-[10px] h-[10px] md:w-[20px] md:h-[20px] rounded-full bg-[#6e6e6e] mt-[0.7em] md:mt-[1.5em]"></div>
                <p className="greyss text-[#6e6e6e] pt-[0.3em] md:text-[30px]">6 Servings</p>
              </div>
              <div className="star_sectionss flex gap-[0.5em] items-center md:text-[30px]">
                <p>4.5</p>
                <AiOutlineStar className="heartss text-[#058b42] md:w-[50px] md:h-[50px]" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex_container font-[700]">
          <img src={plantain} alt="pancake" className="food_menuss w-[100%] h-[200px] md:h-[250px] rounded-t-[5px] object-cover object-center" />
          <div className="card2ss border-x border-b rounded-b shadow-lg py-[2em] px-[1em]">
            <div className="lovess flex justify-between">
              <p className='capitalize md:text-[30px] md:font-[700]'>beans & plantain</p>
              <AiOutlineHeart className="heartss text-[#058b42] cursor-pointer md:w-[50px] h-[50px]" />
            </div>
            <div className="love2ss flex justify-between pt-[0.5em]">
              <div className="servings_sectionss flex gap-[0.4em] md:gap-[1em]">
                <p className="parass text-[#058b42] pt-[0.3em] md:text-[30px]">High in Fibre</p>
                <div className="radiusss w-[10px] h-[10px] md:w-[20px] md:h-[20px] rounded-full bg-[#6e6e6e] mt-[0.7em] md:mt-[1.5em]"></div>
                <p className="greyss text-[#6e6e6e] pt-[0.3em] md:text-[30px]">4 Servings</p>
              </div>
              <div className="star_sectionss flex gap-[0.5em] items-center md:text-[30px]">
                <p>4.5</p>
                <AiOutlineStar className="heartss text-[#058b42] md:w-[50px] md:h-[50px]" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex_container font-[700]">
          <img src={stew} alt="pancake" className="food_menuss w-[100%] h-[200px] md:h-[250px] rounded-t-[5px] object-cover object-center" />
          <div className="card2ss border-x border-b rounded-b shadow-lg py-[2em] px-[1em]">
            <div className="lovess flex justify-between">
              <p className='capitalize md:text-[30px] md:font-[700]'>rice🥥 & stew</p>
              <AiOutlineHeart className="heartss text-[#058b42] cursor-pointer md:w-[50px] h-[50px]" />
            </div>
            <div className="love2ss flex justify-between pt-[0.5em]">
              <div className="servings_sectionss flex gap-[0.4em] md:gap-[1em]">
                <p className="parass text-[#058b42] pt-[0.3em] md:text-[30px]">High in Vitamins</p>
                <div className="radiusss w-[10px] h-[10px] md:w-[20px] md:h-[20px] rounded-full bg-[#6e6e6e] mt-[0.7em] md:mt-[1.5em]"></div>
                <p className="greyss text-[#6e6e6e] pt-[0.3em] md:text-[30px]">6 Servings</p>
              </div>
              <div className="star_sectionss flex gap-[0.5em] items-center md:text-[30px]">
                <p>4.5</p>
                <AiOutlineStar className="heartss text-[#058b42] md:w-[50px] md:h-[50px]" />
              </div>
            </div>
          </div>
        </div>
        

        <div className="flex_container font-[700]">
          <img src={spicy} alt="okpa" className="food_menuss w-[100%] h-[200px] md:h-[250px] rounded-t-[5px] object-cover object-center" />
          <div className="card2ss border-x border-b rounded-b shadow-lg py-[2em] px-[1em]">
            <div className="lovess flex justify-between">
              <p className='capitalize md:text-[30px] md:font-[700]'>spicy noodles</p>
              <AiOutlineHeart className="heartss text-[#058b42] cursor-pointer md:w-[50px] h-[50px]" />
            </div>
            <div className="love2ss flex justify-between pt-[0.5em]">
              <div className="servings_sectionss flex gap-[0.4em] md:gap-[1em]">
                <p className="parass text-[#058b42] pt-[0.3em] md:text-[30px]">High in Carbs</p>
                <div className="radiusss w-[10px] h-[10px] md:w-[20px] md:h-[20px] rounded-full bg-[#6e6e6e] mt-[0.7em] md:mt-[1.5em]"></div>
                <p className="greyss text-[#6e6e6e] pt-[0.3em] md:text-[30px]">4 Servings</p>
              </div>
              <div className="star_sectionss flex gap-[0.5em] items-center md:text-[30px]">
                <p>4.5</p>
                <AiOutlineStar className="heartss text-[#058b42] md:w-[50px] md:h-[50px]" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex_container font-[700]">
          <img src={plantainPorridge} alt="pancake" className="food_menuss w-[100%] h-[200px] md:h-[250px] rounded-t-[5px] object-cover object-center" />
          <div className="card2ss border-x border-b rounded-b shadow-lg py-[2em] px-[1em]">
            <div className="lovess flex justify-between">
              <p className='capitalize md:text-[30px] md:font-[700]'>platain porridge</p>
              <AiOutlineHeart className="heartss text-[#058b42] cursor-pointer md:w-[50px] h-[50px]" />
            </div>
            <div className="love2ss flex justify-between pt-[0.5em]">
              <div className="servings_sectionss flex gap-[0.4em] md:gap-[1em]">
                <p className="parass text-[#058b42] pt-[0.3em] md:text-[30px]">High in Fibre</p>
                <div className="radiusss w-[10px] h-[10px] md:w-[20px] md:h-[20px] rounded-full bg-[#6e6e6e] mt-[0.7em] md:mt-[1.5em]"></div>
                <p className="greyss text-[#6e6e6e] pt-[0.3em] md:text-[30px]">4 Servings</p>
              </div>
              <div className="star_sectionss flex gap-[0.5em] items-center md:text-[30px]">
                <p>4.5</p>
                <AiOutlineStar className="heartss text-[#058b42] md:w-[50px] md:h-[50px]" />
              </div>
            </div>
          </div>
        </div>

      </div>
      
    </>
  )
}

export default DinnerMobileCard
