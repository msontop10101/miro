import React from 'react'
import { AccountSettingsForm } from '../components/Form'
import '../App.css'
import Navigations from '../components/Navigations'
import Sitefooter from '../components/SiteFooter'

const AccountSettings = () => {
  return (
    <>
    <Navigations/>
      <div class='w-full overflow-hidden bg-[#1c2022] px-3 flex' style={{height: 'calc(100vh - 68px)'}}>
        <div class='flex z-40 justify-center flex-col w-full relative items-center'>
        <h1 class='text-white text-4xl header-font font-bold mb-2 leading-[4rem] z-30'>Impostazioni account</h1>
        <AccountSettingsForm/>
        {/* <div class='absolute top-5 md:hidden top-[-30%] left-[-30%]'>
          <img src={two} alt='two'/>
        </div>
        <div class='absolute bottom-0 md:hidden top-20 right-[-45%]'>
          <img src={three} alt='three'/>
        </div> */}
        </div>
        
        
      </div>
      <Sitefooter/>
    </>
  )
}

export default AccountSettings