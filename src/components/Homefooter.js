import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import one from '../assets/1.png'
import { useAuthContext } from '../context/auth/auth'


const Homefooter = ({ currentPath }) => {
    const { isAuth } = useAuthContext()
    return (
        <>
            <div class='text- overflow-hidden text-lg bg-[#1c2022] text-white'>
                <div className={currentPath === '/chat' ? 'hidden' : 'text-start'}>
                    <div className='overflow-hidden relative z-10' style={{ border: '1px solid #1c2022' }}>
                        <div className='absolute z-10 bottom-[-20] left-30'><img src={one} alt='bg' /></div>
                        <div className='relative z-20'>
                            <ul class='footerlinks text-white px-3 '>
                                <Link to='/crea-un-account'><li>crea un account</li></Link>
                                <Link to='/accedi'><li>accedi</li></Link>
                                <Link to={isAuth ? '/account-settings' : '/accedi'}><li>impostazioni account</li></Link>
                                <Link to='/privacy-policy'><li>privacy policy</li></Link>
                            </ul>
                        </div>

                    </div>
                </div>
                <p className='text-center' style={{ borderTop: "1px solid white" }}>Gral v. 0.8 &copy; 2023</p>
            </div>
        </>
    )
}

export default Homefooter;