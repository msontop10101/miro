import React from 'react'
import CreateAccountForm from '../components/Form'

const CreateAccount = () => {
  return (
    <>
      <div class='w-full bg-black px-3 h-[100vh]'>
        <div class='flex justify-center flex-col w-full'>
        <h1 class='text-white text-4xl font-bold mb-2 leading-[3rem]'>CREA IL TUO ACCOUNT</h1>
        <CreateAccountForm/>
        </div>
      </div>
    </>
  )
}

export default CreateAccount