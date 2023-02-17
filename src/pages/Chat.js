import React, { useState, useRef, useEffect } from 'react'
import { FaPlus } from 'react-icons/fa'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { FiExternalLink } from 'react-icons/fi'
import { ThreeDots } from 'react-loader-spinner'
import send from '../assets/sendimg.png'
import { useAuthContext } from '../context/auth/auth'
import { Navigate } from 'react-router-dom'
import add from '../assets/add.png'
import logouticon from '../assets/logouticon.png'
import manual from '../assets/manual.png'
import menu from '../assets/menu.png'
import { Link } from 'react-router-dom'
import logo from '../assets/mirologo.png'

import '../App.css'
import axios from 'axios'

const Chat = ({ sidebarState, setCloseSidebarState }) => {
    const navbarHeight = '30px'
    const footerHeight = '2px'
    const bottomRef = useRef(null);
    const [input, setInput] = useState('')
    const { isAuth, logout } = useAuthContext()
    const [chatLog, setChatLog] = useState([
        // {
        //     user: 'me',
        //     message: 'I want to use chatgpt today111111'
        // },
        // {
        //     user: 'gpt',
        //     message: 'How can i help you?1111111'
        // }
    ])
    const [loading, setLoading] = useState(false)
    async function handleSubmit(e) {
        e.preventDefault();
        if (input.trim()) {
            let chatLogNew = [...chatLog, { user: 'me', message: `${input}` }]
            const message = input;
            console.log(input)

            setInput("")
            setChatLog(chatLogNew)
            setLoading(true)

            const response = await fetch('https://c193-102-88-35-65.eu.ngrok.io/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    message, //: messages
                })
            }).catch(error => { setLoading(false); console.log('Error!') });
            const data = await response.json();
            setChatLog([...chatLogNew, { user: 'gpt', message: `${data.data.message}` }])
            setLoading(false)
            console.log(data.data.message)
            // try {
            //     const res = await axios.post('https://7ea4-102-88-35-174.eu.ngrok.io/api/chat', {
            //         method: 'POST',
            //         headers: {
            //             'Content-Type': 'application/json'
            //         },
            //         data: JSON.stringify({
            //             message
            //         })
            //     })
            //     console.log(res)
            //     const data = await res.json()
            //     setChatLog([...chatLogNew, { user: 'gpt', message: `${data.data.data.message}` }])
            // } catch (err) {
            //     const { response } = err;
            //     setLoading(false);
            // }
        }

        // try {
        //     res = await axios("https://miro-app.herokuapp.com/api/chat", {
        //         headers: {
        //             "Content-Type": "application/json"
        //         },
        //         data: { message }
        //     })
        //     console.log(res);
        //     setChatLog([...chatLogNew, { user: 'gpt', message: `${data.data.message}` }])
        // }
        // catch (err) {
        //     const { response } = err;
        //     setLoading(false);
        // }
    }

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [chatLog]);



    return (
        <>
            {!isAuth ? <Navigate to={'/accedi'} /> : null}
            {sidebarState && <div class='bg-[black] w-[70%] h-[100vh] z-50 absolute top-0 p-6 flex flex-col gap-6 justify-between'>
                <div class='flex flex-col gap-6 pb-4' style={{ borderBottom: '1px solid gray' }}>
                    <div class='flex justify-end' onClick={() => setCloseSidebarState(true)}><img src={menu} width={40} height={40} alt='menu' /></div>
                    <div class='text-white font-bold text-lg flex items-center justify-between'><p>Nuova chat</p><img onClick={() => { setLoading(false); setChatLog([]) }} src={add} width={40} height={40} alt='add' /></div>
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
                            <div onClick={() => { logout(); setCloseSidebarState(true) }}><img src={logouticon} width={40} height={40} alt='logout' /></div>
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
            </div>}
            <div class='flex'>
                <div class='w-[20%] hidden md:flex bg-[#B1A1ED] flex-col justify-between'>
                    <div class='p-2'>
                        <div class='p-3 border-2 rounded-md border-[#919191] flex items-center gap-5 cursor-pointer'><FaPlus onClick={() => setChatLog([])} /><p>New chat</p></div>
                    </div>
                    <div class='px-2 py-6' style={{ borderTop: '2px solid #919191' }}>
                        <ul class='flex flex-col gap-2 chat'>
                            <li class='flex items-center gap-2'><RiDeleteBin6Line size='1.5em' onClick={() => setChatLog([])} /><p>Clear conversation</p></li>
                            {/* <li class='flex items-center gap-2'><BsMoon size='1.5em' /><p>Dark Mode</p></li> */}
                            <li class='flex items-center gap-2'><FiExternalLink size='1.5em' /><p>FAQ</p></li>
                        </ul>
                    </div>
                </div>
                <div class='w-full z-30 md:w-[80%] bg-[#1c2022] relative flex flex-col justify-between py-4' style={{ height: `calc(100vh - ${navbarHeight} - ${footerHeight})` }}>
                    <div className='flex flex-col gap-5 items-center absolute bottom-10 w-full'>
                        <div class='chat-box h-[100%] text-white w-[90%]'>
                            <div class='chat-log justify-center relative' style={{ maxHeight: "70vh" }}>
                                <div className='h-full overflow-y-auto'>
                                    {chatLog.map((message, index) => (
                                        <ChatMessage key={index} message={message} />
                                    ))}
                                    {loading && <div><ThreeDots
                                        height="20"
                                        width="80"
                                        radius="9"
                                        color="#B1A1ED"
                                        ariaLabel="three-dots-loading"
                                        wrapperStyle={{}}
                                        wrapperClassName=""
                                        visible={true}
                                    /></div>}
                                    <div ref={bottomRef} />
                                </div>
                            </div>
                        </div>

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
        <div className={`${message.user === 'gpt' ? 'flex justify-start gap-2 my-1 rounded-xl' : 'flex justify-end gap-2 my-1 rounded-xl'}`}>
            <div className={`chat-message ${message.user === 'gpt' && 'chatgpt'}`}>
                <div className='chat-message-center'>
                    <div className='message'>
                        {message.message}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chat