import React, { useState } from 'react'
import { FaPlus } from 'react-icons/fa'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { BsMoon } from 'react-icons/bs'
import { FiExternalLink } from 'react-icons/fi'
import { MdOutlineLogout, MdSend } from 'react-icons/md'
import send from '../assets/sendimg.png'
import '../App.css'

const Chat = () => {
    const [val, setVal] = useState('')
    return (
        <>
            <div class='flex h-[90vh]'>
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
                <div class='w-full md:w-[80%] bg-black flex flex-col justify-between items-center py-4 relative'>
                    <div class='chat-box text-white'>
                        <div class='chat-log flex justify-center h-[100vh] items-center'>
                            <div class='chat-message w-[80%] py-5 flex flex-col gap-5'>
                                <div class='flex justify-end'>
                                    <div class='avater bg-[#9869e9] w-[80%] p-4 rounded-3xl'>
                                        <p>Scrivimi 10 articoli sulla guerra in
                                            Ucraina</p>
                                    </div>
                                </div>
                                <div class='flex justify-start'>
                                    <div class='message bg-white w-[80%] p-4 rounded-3xl text-black'>
                                        <p>1."La Guerra in Ucraina: Una Storia di
                                            Conflitto e Speranza" In questo
                                            articolo esploreremo la storia della
                                            guerra in Ucraina, dalle sue origini
                                            nel 2014 fino ai suoi sviluppi attuali</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class='w-[80%] absolute bottom-14'>

                        <div class='w-[100%] flex items-center justify-center bg-transparent rounded-[10px] px-4 bottom-0' style={{ border: '2px solid white' }}>
                            <input
                                id="chat"
                                name="chat"
                                type='text'
                                value={val}
                                onChange={(e) => setVal(e.target.value)}
                                placeholder='Inserisci qui il testo'
                                style={{ height: '50px', borderRadius: '10px', width: '100%', outline: 'none', backgroundColor: 'transparent', color: 'white' }}
                            />
                            <div class='cursor-pointer'><img src={send} width={30} height={30} alt='send' /></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Chat