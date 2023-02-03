import React from 'react'
import Footerlinks from '../components/Footerlinks'
import { LoginForm } from '../components/Form'
import { useAuthContext } from '../context/auth/auth';

const Accedi = () => {
  const { error } = useAuthContext()
  return (
    <>
      <div class='bg-black'>
      {error && <p className='bg-[#ec6363] text-white p-2 text-center'>{error}</p>}
      <div class='bg-black flex flex-col justify-center'>
        <div class='flex flex-col justify-center pt-[50px] w-full h-[90vh] items-center'>
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