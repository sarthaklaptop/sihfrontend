import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import farmerssss from '../assets/farmerssss.jpg'
import farmerssss2 from '../assets/farmersss2.jpg'
import farmerssss3 from '../assets/farmersss3.jpg'
import farmerssss4 from '../assets/farmersss4.jpg'
import farmerssss5 from '../assets/farmersss5.jpg'
import farmerssss6 from '../assets/farmersss6.jpg'
import { Tilt } from 'react-tilt';

import {fadeIn, textVariant} from '../utils/motion';

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-full h-full object-contain'

        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

export default function ImageScroll() {
  return(
    <>
      <ServiceCard key="" index="" icon={farmerssss}/>
      <ServiceCard key="" index="" icon={farmerssss2}/>
      <ServiceCard key="" index="" icon={farmerssss3}/>
    </>
  )
}
  