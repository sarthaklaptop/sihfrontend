import React from 'react'
import supportImg from '../assets/SIH_Service_BgRemoved.png';
import { useState } from 'react';
// import HiOutlineMail from 'react-icons/hi';
import { HiMail } from "react-icons/hi";

const Contact = ({isLoggedIn}) => {

  const [formData, setFormData] = useState({firstName:"", email:"", text:""})

  function changeHandler(event) {

    const {name, value, checked, type} = event.target

    setFormData( previousFormData => {
      return {
        ...previousFormData, 
        [name] : type === "checkbox" ? checked : value
      }
    })
    console.log(formData)
  }

  function submitHandler(event){
    event.preventDefault();
    // Print in console
    console.log("Finally Printing the Data")
    console.log(formData)
    setFormData({
      firstName:"",
      email:"",
      text:""
    })
  }

    return (
      // flex flex-row items-center mx-auto justify-center max-w-[1160px] text-white py-4 h-full w-11/12
      <div className='flex flex-col justify-center items-center mx-auto text-white text-3xl max-w-[1160px] h-full'>
        <div className='flex flex-col w-4/5 gap-5 my-4'>
          <h1>CONTACT US</h1>
          <p className='text-sm'>LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU! WHETHER YOU HAVE A QUESTION, 
            COMMENT, OR JUST WANT TO CHAT , YOU CAN REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR 
            BY PHONE, EMAIL, OR SOCIAL MEDIA.
          </p>
        </div>
        <div className='flex flex-row w-4/5 mt-5'>
          <div className='flex flex-col items-center justify-center gap-2 w-1/2 mx-10'>
            <button className='text-sm border-2 p-2 font-bold rounded-md border-white flex flex-row gap-10
                items-center justify-center w-4/5'>
              <HiMail className='' size={25}/> VIA EMAIL FORM
            </button>

            {/* Form */}

            <form onSubmit={submitHandler} className='w-3/4'>
              <label  className='text-sm font-bold'>Name :</label><br/>
              <input
               className='text-sm w-3/4 rounded-sm text-black placeholder:text-slate-400 p-2'
                type='text'
                placeholder='Name'
                name='firstName'
                onChange={changeHandler}
                value={formData.firstName}
              />
              <br/>
              <label  className='text-sm font-bold'>Email Address :</label><br/>
              <input
               className='text-sm w-3/4 text-black rounded-sm placeholder:text-slate-400 p-2'
                type='email'
                placeholder='E-mail'
                name='email'
                onChange={changeHandler}
                value={formData.email}
              />
              <br/>
              <label  className='text-sm font-bold'>Text :</label><br/>
              <textarea
                className='text-sm w-3/4 text-black rounded-sm placeholder:text-slate-400 p-2'
                type='text'
                placeholder='Comments'
                name='text'
                onChange={changeHandler}
                value={formData.text}
              />
              <br/>
              <button  className='text-lg bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6'>Submit</button>
            </form>
          </div>

          {/* Image */}

          <div>
            <img width={400} src={supportImg}/>
          </div>
        </div>
      </div>
    )
  }


export default Contact;