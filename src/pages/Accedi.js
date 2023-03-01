import React from 'react'
import { LoginForm } from '../components/Form'
import { useAuthContext } from '../context/auth/auth';
import '../App.css'
import Navigations from '../components/Navigations';
import Sitefooter from '../components/SiteFooter';

const Accedi = () => {
  const { error } = useAuthContext()
  return (
    <>
    <Navigations/>
    {error && <p className='bg-[#ec6363] z-30 text-white p-2 text-center'>email e password non valide</p>}
      <div class='bg-black relative overflow-hidden z-30'>
        
        <div class='bg-[#1c2022] flex flex-col justify-center'>
          <div class='flex flex-col justify-center pt-[50px] w-full items-center accedi-height'>
            <h1 class='font-bold text-4xl text-white py-4 text-center'>Accedi</h1>
            <LoginForm />
          </div>
          {/* <div class='mb-4'>
            <Footerlinks />
          </div> */}
        </div>
        {/* <div className='z-10 md:hidden'>
          <img class='absolute block md:hidden top-[-20%] left-[-30%]' src={one} alt="bg" />
          <img class='absolute top-[-35%] right-[-30%]' src={two} alt="bg" />
          <img class='absolute block md:hidden bottom-[-10%] right-[-10%]' src={three} alt="bg" />
        </div> */}
      </div>
      <Sitefooter/>
    </>
  )
}

export default Accedi