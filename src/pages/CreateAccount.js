import React from 'react'
import CreateAccountForm from '../components/Form'

const CreateAccount = () => {
  return (
    <>
      <div class='w-full bg-black py-4 px-3 md:flex justify-center items-center h-[100vh]'>
        <div>
        <h1 class='text-white text-4xl font-bold mb-2'>CREA IL TUO ACCOUNT</h1>
        <CreateAccountForm/>
        </div>
      </div>
    </>
  )
}

export default CreateAccount