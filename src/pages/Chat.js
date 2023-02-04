import React, { useState } from 'react'
import { FaPlus } from 'react-icons/fa'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { BsMoon } from 'react-icons/bs'
import { FiExternalLink } from 'react-icons/fi'
import { MdOutlineLogout } from 'react-icons/md'
import send from '../assets/sendimg.png'
import { useAuthContext } from '../context/auth/auth'
import { Navigate, redirect, useNavigate } from 'react-router-dom'
import '../App.css'

const Chat = () => {
    const [input, setInput] = useState('')
    const [chatLog, setChatLog] = useState([
        
    ])
    const { isAuth } = useAuthContext()
    async function handleSubmit(e) {
        e.preventDefault();
        let chatLogNew = [...chatLog, { user: 'me', message: `${input}` }]
        setInput("")
        setChatLog(chatLogNew)
        const messages = chatLogNew.map((message) => message.message).join('')
        const response = await fetch('https://0bd6-197-210-53-85.eu.ngrok.io/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                message: messages
            })
        });
        const data = await response.json();
        setChatLog([...chatLogNew, { user: 'gpt', message: `${data.message}` }])
        // console.log(data.message)
    }
    return (
        <>
            {!isAuth ? <Navigate to={'/accedi'} /> : null}
            <div class='flex'>
                <div class='w-[20%] hidden md:flex bg-[#B1A1ED] flex-col justify-between'>
                    <div class='p-2'>
                        <div class='p-3 border-2 rounded-md border-[#919191] flex items-center gap-5 cursor-pointer'><FaPlus /><p>New chat</p></div>
                    </div>
                    <div class='px-2 py-6' style={{ borderTop: '2px solid #919191' }}>
                        <ul class='flex flex-col gap-2 chat'>
                            <li class='flex items-center gap-2'><RiDeleteBin6Line size='1.5em' /><p>Clear conversation</p></li>
                            <li class='flex items-center gap-2'><BsMoon size='1.5em' /><p>Dark Mode</p></li>
                            <li class='flex items-center gap-2'><FiExternalLink size='1.5em' /><p>FAQ</p></li>
                            <li class='flex items-center gap-2'><MdOutlineLogout size='1.5em' /><p>Logout</p></li>
                        </ul>
                    </div>
                </div>
                <div class='w-full z-30 md:w-[80%] bg-[#1c2022] flex flex-col justify-between py-4' style={{minHeight:"100vh"}}>
                    <div className='flex z-30 justify-center'>
                    <div class='chat-box h-[100%] text-white w-[80%] pt-[20%] md:pt-[0%]' style={{overflow:'scroll'}}>
                        <div class='chat-log z-20 flex flex-col justify-center'>
                            {chatLog.map((message, index) => (
                                <ChatMessage key={index} message={message} />
                            ))}
                        </div>
                    </div>
                    </div>
                    
                    <div class='w-[100%] flex justify-center mb-5 my-10'>
                    <form onSubmit={handleSubmit} className='flex justify-center w-full items-center'>
                        <div className='w-[80%] flex items-center justify-center bg-transparent rounded-[10px] px-4 bottom-0' style={{ border: '2px solid white' }}>
                            <input
                                type='text'
                                rows='1'
                                value={input}
                                placeholder='Inserisci qui il testo'
                                onChange={(e) => setInput(e.target.value)}
                                style={{ height: '50px', borderRadius: '10px', width: '100%', outline: 'none', backgroundColor: 'transparent', color: 'white' }}
                            />
                            <div class='cursor-pointer'><button type='submit'><img src={send} width={30} height={30} alt='send' /></button></div>
                        </div>
                    </form>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

const ChatMessage = ({ message }) => {


    return (
        <div className='odd:flex bg-[#9869e9] text-white even:bg-[white] even:text-[black] my-1 rounded-md p-4'>
            <div className={`chat-message ${message.user === 'gpt' && 'chatgpt'}`}>
                <div className='chat-message-center'>
                    <div className={`avater ${message.user === 'gpt' && 'chatgpt'}`}>

                    </div>
                    <div className='message'>
                        {message.message}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chat