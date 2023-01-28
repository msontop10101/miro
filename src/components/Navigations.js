import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logonbg.png'
import './Navigations.css'
import profile from '../assets/profile.png'
import chat from '../assets/chat.png'
import menu from '../assets/menu.png'

const Navigations = () => {
    const [open, setOpen] = useState(false)
    return (
        <>
            <nav class='bg-black hidden md:flex items-center justify-between px-3'>
                <div>
                    <Link to='/'>
                        <div class='bg-black flex items-center'>
                            <img src={logo} width={50} height={50} alt='logo' />
                            <p class='text-xl ml-1 font-bold text-white'>miro</p>
                        </div>
                    </Link>
                </div>
                <ul class='navigations flex gap-8'>
                    <Link to='/crea-un-account' class='flex items-center gap-2'>
                        <img src={profile} width={40} height={40} alt='profile' />
                        <li>crea un account</li>
                    </Link>
                    <Link to='/accedi' class='flex items-center'>
                        <img src={chat} width={40} height={40} alt='chat' />
                        <li>accedi</li>
                    </Link>
                </ul>
            </nav>

            <nav class='bg-[black] z-40 block md:hidden px-3'>
                <div class='flex justify-between items-center pr-3'>
                    <Link to='/'>
                        <div class='bg-black flex items-center'>
                            <img src={logo} width={50} height={50} alt='logo' />
                            <p class='text-xl ml-1 font-bold text-white'>miro</p>
                        </div>
                    </Link>
                    <div onClick={() => setOpen(!open)}><img src={menu} width={40} height={40} alt='menu' /></div>
                </div>
                <div class='flex justify-center'>
                    {open && <ul class='navigations flex gap-8 py-2'>
                        <Link to='/crea-un-account' class='flex items-center gap-2' onClick={() => setOpen(false)}>
                            <img src={profile} width={40} height={40} alt='profile' />
                            <li>crea un account</li>
                        </Link>
                        <Link to='/accedi' class='flex items-center' onClick={() => setOpen(false)}>
                            <img src={chat} width={40} height={40} alt='chat' />
                            <li>accedi</li>
                        </Link>
                    </ul>}
                </div>

            </nav>
        </>
    )
}

export default Navigations