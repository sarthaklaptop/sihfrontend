import React from 'react';
import farmerssss from '../assets/farmerssss.jpg';
import ImageScroll from '../components/ImageScroll';

const About = ({isLoggedIn}) => {
    return (
    <div className='flex flex-col items-center mx-auto justify-center max-w-[1160px] text-white py-4 h-full w-11/12'>
        <div className='flex flex-row'>
          <div className='flex flex-col w-1/2 gap-0 ml-10'>
            <h1 className='text-stone-100 text-2xl font-bold'>Empowering Farmers Through Expertise</h1><br></br>
            <p className='font-bold text-stone-400 text-sm w-4/5'> Here, we are on a mission to revolutionize agriculture by 
              connecting farmers like you with seasoned agricultural experts. Our platform 
              allows you to upload photos of your crops and receive expert guidance to ensure 
              your farm's success.
            </p>
          </div>

          <div className='w-1/2 '>
            <img width={500} height={500} src={farmerssss}/>
          </div>
        </div>

        <div className='w-11/12 flex flex-row'>
          <ImageScroll className="w-full"/>
        </div>


      </div>
    )
  }


export default About;