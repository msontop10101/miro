import React from 'react'
import CreateAccountForm from '../components/Form'

const CreateAccount = () => {
  return (
    <>
      <div class='w-full bg-black py-4 px-3' style={{minHeight:'90vh'}}>
        <h1 class='text-white text-4xl font-bold mb-2'>CREA IL TUO ACCOUNT</h1>
        <CreateAccountForm/>
      </div>
    </>
  )
}

export default CreateAccount