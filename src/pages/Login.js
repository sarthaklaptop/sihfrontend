import React from 'react'
import Template from '../components/Template'
import farmerssss from '../assets/farmerssss.jpg';

const Login = ({setIsLoggedIn}) => {

  return (
    <Template
      title="Welcome Back"
      desc1="Build skills for today, tomorrow, and beyond."
      desc2="Education to future-proof your career."
      image={farmerssss}
      formtype="login"
      setIsLoggedIn={setIsLoggedIn}
    />
  )
}

export default Login
