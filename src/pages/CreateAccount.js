import React from 'react'
import CreateAccountForm from '../components/Form'
import two from '../assets/2.png'
import three from '../assets/3.png'

const CreateAccount = () => {
  return (
    <>
      <div class='w-full bg-black px-3'>
        <div class='flex justify-center flex-col w-full relative'>
        <h1 class='text-white text-4xl font-bold mb-2 leading-[4rem] z-30'>CREA IL TUO ACCOUNT</h1>
        <CreateAccountForm/>
        <div class='absolute top-[-20%] left-[-30%]'>
          <img src={two} alt='two'/>
        </div>
        <div class='absolute top-30 right-[-45%]'>
          <img src={three} alt='three'/>
        </div>
        </div>
      </div>
    </>
  )
}

export default CreateAccount