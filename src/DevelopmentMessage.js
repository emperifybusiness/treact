import React from 'react'
import logo from "./images/LOGO REAL.png"

const DevelopmentMessage = () => {
  return (
    <div className='h-screen w-full flex flex-col justify-center items-center'>
      <img className='logo' src={logo} alt="logo" /> 
      <p className='mt-5'>Website in <span className='text-blue-500'>Development!</span></p>
    </div>
  )
}

export default DevelopmentMessage