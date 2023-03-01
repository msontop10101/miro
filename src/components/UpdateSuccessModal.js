import React from 'react'
import verify from '../assets/verify.png'

const UpdateSuccessModal = () => {
    return (
        <>
            <div class="bg-slate-800 z-50 bg-opacity-50 flex justify-center items-center absolute top-0 right-0 bottom-0 left-0">
                <div class="bg-white px-4 py-4 rounded-3xl text-center">
                    <div className='flex justify-center py-4'><img src={verify} width={90} height={90} alt='succcess'/></div>
                    <h1 class="text-xl mb-4 font-bold text-black capitalize">Account aggiornato con successo!</h1>
                </div>
            </div>
        </>
    )
}

export default UpdateSuccessModal