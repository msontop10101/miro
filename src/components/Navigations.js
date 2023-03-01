import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/Gral.png'
import './Navigations.css'
import profile from '../assets/profile.png'
import logouticon from '../assets/logouticon.png'
import chat from '../assets/chat.png'
import menu from '../assets/menu.png'
import { useAuthContext } from '../context/auth/auth';


const Navigations = () => {
    const { isAuth, logout } = useAuthContext()
    const [open, setOpen] = useState(false)


    return (
        <>
            <div class='relative z-50'>
                <nav class='bg-[#1c2022] hidden md:flex items-center justify-between px-10 z-50'>
                    <div>
                        <Link to='/'>
                            <div class='flex items-center'>
                                <img src={logo} width={150} height={150} alt='logo' />
                                {/* <p class='text-xl ml-1 font-bold text-white'>miro</p> */}
                            </div>
                        </Link>
                    </div>
                    <ul class='navigations flex gap-8'>
                        <Link to='/crea-un-account' class={isAuth ? 'hidden' : 'flex items-center gap-2'}>
                            <img src={profile} width={40} height={40} alt='profile' />
                            <li>crea un account</li>
                        </Link>
                        <Link to='/accedi' class='flex items-center'>
                            <img src={chat} width={40} height={40} alt='chat' />
                            <li>{isAuth ? 'vai alla chat' : 'accedi'}</li>
                        </Link>
                        <Link to='/accedi' class={isAuth ? 'flex items-center gap-2' : 'hidden'} onClick={() => logout()}>
                            <img src={logouticon} width={40} height={40} alt='profile' />
                            <li>disconnessione</li>
                        </Link>
                    </ul>
                </nav>

                {/* <div class={isAuth ? 'hidden' : 'block relative pb-20 bg-[#1c2022]'}> */}
                <div class='relative pb-20 bg-[#1c2022]'>
                    <nav class='z-50 block md:hidden px-3 py-4 bg-[#1c2022]/30 backdrop-blur-md fixed top-0 right-0 left-0'>
                        <div class='flex justify-between items-center pr-3'>
                            <Link to='/'>
                                <div class=' flex items-center'>
                                    <img src={logo} width={150} height={150} alt='logo' />
                                    {/* <p class='text-xl ml-1 font-bold text-white'>miro</p> */}
                                </div>
                            </Link>
                            <div onClick={() => setOpen(!open)}><img src={menu} width={40} height={40} alt='menu' /></div>
                        </div>
                        <div class='flex justify-center z-50'>
                            {open && <ul class='navigations flex gap-8 py-2'>
                                <Link to='/crea-un-account' class={isAuth ? 'hidden' : 'flex items-center gap-2'} onClick={() => setOpen(false)}>
                                    <img src={profile} width={40} height={40} alt='profile' />
                                    <li>crea un account</li>
                                </Link>
                                <Link to='/accedi' class='flex items-center' onClick={() => setOpen(false)}>
                                    <img src={chat} width={40} height={40} alt='chat' />
                                    <li>{isAuth ? 'vai alla chat' : 'accedi'}</li>
                                </Link>
                                <Link to='/accedi' class={isAuth ? 'flex items-center gap-2' : 'hidden'} onClick={() => logout()}>
                                    <img src={logouticon} width={40} height={40} alt='profile' />
                                    <li>logout</li>
                                </Link>
                            </ul>}
                        </div>
                    </nav>
                </div>

                {/* <div className='relative'>
                {isAuth && <div class='z-50 flex justify-between items-center md:hidden px-8 py-4 bg-[#1c2022] backdrop-blur-md fixed top-0 right-0 left-0'>
                    <div class='flex justify-between items-center pr-3'>
                        <div onClick={() => setSidebar(!sidebar)}><img src={menu} width={30} height={30} alt='menu' /></div>
                    </div>
                    <div>
                        <Link to='/'>
                            <div class=' flex items-center'>
                                <img src={logo} width={100} height={100} alt='logo' />
                            </div>
                        </Link>
                    </div>
                    <div>
                        <img src={profile} width={30} height={40} alt='profile' />
                    </div>
                </div>}
                </div> */}
                {/* {sidebar && <div class='bg-[black] w-[70%] h-[100vh] z-50 absolute top-0 p-6 flex flex-col gap-6 justify-between'>
                    <div class='flex flex-col gap-6 pb-4' style={{ borderBottom: '1px solid gray' }}>
                        <div class='flex justify-end' onClick={() => setSidebar(!sidebar)}><img src={menu} width={40} height={40} alt='menu' /></div>
                        <div class='text-white font-bold text-lg flex items-center justify-between'><p>Nuova chat</p><img src={add} width={40} height={40} alt='add' /></div>
                        <div>
                            <p class='text-white font-bold text-lg'>Cronologia chat:</p>
                        </div>
                    </div>
                    <div class='flex flex-col gap-10 pt-4' style={{ borderTop: '1px solid gray' }}>
                        <div class='flex justify-between'>
                            <p class='font-bold text-lg text-white'>Istruzioni</p>
                            <img src={manual} width={40} height={40} alt='manual' />
                        </div>
                        <div class='flex justify-between'>
                            <Link to='/accedi'>
                            <div onClick={() => {logout(); setSidebar(false)}}><img src={logouticon} width={40} height={40} alt='logout' /></div>
                            </Link>
                            <div>
                                <Link to='/'>
                                    <div class='bg-black flex items-center'>
                                        <img src={logo} width={100} height={100} alt='logo' />
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>} */}
            </div>
        </>
    )
}

export default Navigations