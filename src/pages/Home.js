import React from 'react'
import farmerssss from '../assets/farmersss2.jpg'
import ButtonComponent from '../components/GetStartedButton'

const Home = ({isLoggedIn}) => {
  return (
    <div className='bg-richblack-900'>
      {/* Hero Section */}
      <div className='flex justify-center items-center text-white flex-col gap-4 py-10 bg-richblack-900'>
        <h1 className='text-white text-4xl font-bold'>Empowering Farmers Through Expertise</h1><br></br>
        <p className='text-richblack-100 font-bold'>Connect with Agricultural Experts to Enhance Your Crop Health</p>

        <botton className="bg-richblack-800 my-2 text-richblack-100 py-[8px] px-[12px] rounded-[8px]
        border border-richblack-700 cursor-pointer hover:border-orange-400 hover:text-orange-400 
        hover:delay-75"><ButtonComponent/></botton>

        <img src={farmerssss} width={500} className=""></img>
      </div>

      {/* How It Works Section */}
      <div className='bg-richblack-900 text-white flex items-center justify-center flex-col gap-4 pb-10'>
        <h2 className='font-bold text-lg'>Step 1: Capture and Upload</h2>
        <p className='text-richblack-100 font-bold'>Snap a photo of your crops using your smartphone or camera. Upload the image securely to our platform.</p>
        <br/>

        <h2 className='font-bold text-lg'>Step 2: Connect with Experts</h2>
        <p className='text-richblack-100 font-bold'>Our network of experienced agricultural experts will analyze your photos and provide personalized recommendations.</p>
        <br/>

        <h2 className='font-bold text-lg'>Step 3: Receive Recommendations</h2>
        <p className='text-richblack-100 font-bold'>You'll receive expert advice on crop care, disease control, and pest management to ensure your harvest thrives.</p>
      </div>
    </div>
  )
}

// bg-richblack-800 text-richblack-100 py-[8px] 
// px-[12px] rounded-[8px] border border-richblack-700

// cursor-pointer hover:bg-orange-300 p-3 rounded-lg

export default Home;
