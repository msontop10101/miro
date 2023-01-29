import React from 'react'
import Footerlinks from '../components/Footerlinks'
import { LoginForm } from '../components/Form'

const Accedi = () => {
  return (
    <>
      <div class='bg-black'>
      <div class='bg-black flex flex-col justify-center'>
        <div class='flex flex-col justify-center pt-[50px] w-full'>
        <h1 class='font-bold text-4xl text-white py-4 text-center'>Accedi</h1>
        <LoginForm/>
        </div>
        <div class='mb-4'>
        <Footerlinks/>
        </div>
      </div>
      </div>
    </>
  )
}

export default Accedi