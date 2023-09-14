import React from 'react'
import { useState } from 'react';
import FileUpload from '../components/FileUpload';

const Dashboard = () => {

  const [formData, setFormData] = useState({Name:"", Description:"", file:{}})

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
      Name:"",
      Description :"",
      text:""
    })
  }

  
  

  return (
    <div className='flex flex-col justify-center items-center text-white mx-auto h-full max-w-[1160px] w-full gap-4'>

      {/* Heading */}
      <div className='flex gap-4 flex-col'>
        <h2 className='text-3xl'>Please verify your identity</h2>
        <p className='text-lg text-richblack-100'>Select relevant documents to complete your kyc</p>
      </div>

      {/* File Upload */}
      <div className=''>
        <form onSubmit={submitHandler} className='flex items-center justify-center flex-col p-4 
         border-2  
         border-sky-500 hover:border-solid hover:shadow-lg hover:shadow-sky-500'>
            <label  className='text-sm font-bold'>Name :</label><br/>
            <input
            className='text-sm w-[200px] rounded-sm text-black placeholder:text-slate-400 p-2'
              type='text'
              placeholder='Name'
              name='Name'
              onChange={changeHandler}
              value={formData.firstName}
            />
            <br/>
            <label  className='text-sm font-bold'>Description :</label><br/>
            <textarea
            className='text-sm w-[200px] text-black rounded-sm placeholder:text-slate-400 p-2'
              type='text'
              placeholder='Describe the situation'
              name='Description'
              onChange={changeHandler}
              value={formData.Description}
            />
            <br/>
            <label className='text-sm font-bold'>Upload File: </label><br/>
            <input
              className=' block w-full text-sm font-bold text-slate-500
              file:mr-4 file:py-2 file:px-4
              file:rounded-full file:border-0
              file:text-sm file:font-semibold
              file:bg-violet-50 file:text-violet-700
              hover:file:bg-violet-100'
              type="file"
              name='file'
              accept=".jpg, .jpeg, .png, .gif"
            />
            {/* <FileUpload /> */}
            <br/>
            <button className='text-lg bg-yellow-50 rounded-[8px] font-medium text-richblack-900 
            px-[12px] py-[8px] mt-6'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Dashboard;
