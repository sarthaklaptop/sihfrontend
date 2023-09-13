import React from 'react'
import farmerssss from '../assets/farmerssss.jpg'
import ImageScroll from '../components/ImageScroll';

const Home = ({isLoggedIn}) => {
  return (
    <div className='flex justify-center items-center text-white flex-col gap-4 h-full'>
      <h1 className='text-white text-4xl font-bold'>Empowering Farmers Through Expertise</h1><br></br>
      <p className='text-richblack-100 font-bold'>Connect with Agricultural Experts to Enhance Your Crop Health</p>
      <botton className="bg-richblack-800 my-2 text-richblack-100 py-[8px] px-[12px] rounded-[8px]
       border border-richblack-700 cursor-pointer hover:border-orange-400 hover:text-orange-400 hover:delay-75">Get Started</botton>
      {/* <img src={farmerssss} width={500} className=""></img> */}
      <ImageScroll/>

      

    </div>
  )
}

// bg-richblack-800 text-richblack-100 py-[8px] 
// px-[12px] rounded-[8px] border border-richblack-700

// cursor-pointer hover:bg-orange-300 p-3 rounded-lg

export default Home;
