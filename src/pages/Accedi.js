import React from 'react'
import Footerlinks from '../components/Footerlinks'
import { LoginForm } from '../components/Form'

const Accedi = () => {
  return (
    <>
      <div class='bg-black flex flex-col justify-center  w-[100vw] h-[90vh]'>
        <div class='flex flex-col justify-center items-center pt-[50px] '>
        <h1 class='font-bold text-4xl text-white py-4 text-center'>Accedi</h1>
        <LoginForm/>
        </div>
        <Footerlinks/>
      </div>
    </>
  )
}

export default Accedi