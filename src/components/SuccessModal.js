import React from 'react'
import { Link } from 'react-router-dom'
import { BsFillCheckCircleFill } from 'react-icons/bs'

const SuccessModal = () => {
    return (
        <>
            <div class="bg-slate-800 z-50 bg-opacity-50 flex justify-center items-center absolute top-0 right-0 bottom-0 left-0">
                <div class="bg-white px-16 py-14 rounded-md text-center">
                    <div className='flex justify-center py-4'><BsFillCheckCircleFill size='3rem' color='green'/></div>
                    <h1 class="text-xl mb-4 font-bold text-slate-500 capitalize">iscriviti con successo!</h1>
                    <h1 class="text-xl mb-4 font-semibold text-slate-500 capitalize">procedi al login</h1>
                    <Link to='/accedi'><button class="bg-[#B1A1ED] px-7 py-2 ml-2 rounded-md text-md text-white font-semibold">Accedi</button></Link>
                </div>
            </div>
        </>
    )
}

export default SuccessModal