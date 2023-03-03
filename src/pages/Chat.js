import React, { useState, useRef, useEffect } from 'react'
import { FaPlus } from 'react-icons/fa'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { FiExternalLink } from 'react-icons/fi'
import { ThreeDots } from 'react-loader-spinner'
import send from '../assets/sendimg.png'
import { useAuthContext } from '../context/auth/auth'
import { Navigate } from 'react-router-dom'
import logouticon from '../assets/logouticon.png'
import menu from '../assets/menu.png'
import { Link } from 'react-router-dom'
import logo from '../assets/Gral.png'
import profile from '../assets/profile.png'
import design from '../assets/design-thinking.png'
import question from '../assets/question.png'
import warning from '../assets/warning.png'

import '../App.css'
import Sitefooter from '../components/SiteFooter'

const Chat = ({ currentPath }) => {
    const bottomRef = useRef(null);
    const [input, setInput] = useState('')
    const { isAuth, logout } = useAuthContext()
    const [open, setOpen] = useState(false)
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

            const response = await fetch('https://miro-app.herokuapp.com/api/chat', {
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

    useEffect(() => {
        console.log(chatLog.length)
        if(chatLog.length === 0){
            console.log('empty')
        }else {
            console.log(chatLog.length)
        }
    },[chatLog])



    return (
        <div className='h-[100vh] overflow-y-hidden'>
            
            {!isAuth ? <Navigate to={'/accedi'} /> : null}
            <div class='relative pb-20 bg-[#1c2022] overflow-y-hidden'>
                    <nav class='z-50 block md:hidden px-3 py-4 bg-[#1c2022] fixed top-0 right-0 left-0'>
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
                            {open && <ul class='navigations flex gap-8 py-2 bg-[#1c2022]'>
                                <Link to='/account-settings' class='flex items-center gap-2' onClick={() => setOpen(false)}>
                                    <img src={profile} width={40} height={40} alt='profile' />
                                    <li>impostazioni account</li>
                                </Link>
                                <Link to='/accedi' class='flex items-center gap-1' onClick={() => {setOpen(false); logout()}}>
                                    <img src={logouticon} width={40} height={40} alt='chat' />
                                    <li>logout</li>
                                </Link>
                            </ul>}
                        </div>
                    </nav>
                </div>
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
                <div class='w-full z-30 md:w-[80%] bg-[#1c2022] relative flex overflow-hidden flex-col justify-between py-4' style={{ height: 'calc(100vh - 83px)' }}>
                    <div className='flex flex-col gap-5 items-center absolute bottom-10 w-full'>
                        <div class='chat-box text-white w-[90%]'>



                            <div class='chat-log justify-center relative max-h-[80vh] md:max-h-[70vh]'>
                                <div className='h-full overflow-y-auto'>


                                    <div className={chatLog.length === 0 ? 'mt-[25%] flex flex-col gap-8' : 'hidden'}>
                                        <div className='flex justify-center items-center text-center'>
                                            <div>
                                                <div className='flex justify-center'>
                                                    <img src={design} width={150} height={150} alt='design' />
                                                </div>
                                                <div>
                                                    <p className='text-[30px] py-4 font-bold'>Cosa posso fare</p>
                                                    <p>Gral può rispondere a domande, fornire informazioni, consigliare su argomenti
                                                        specifici, aiutare con problemi tecnici, offrire supporto emotivo e intrattenere.
                                                        Gral è in grado di utilizzare la sua vasta conoscenza del mondo per fare previsioni e
                                                        fornire suggerimenti in base alle richieste dell'utente.
                                                        Gral può fornire informazioni su qualsiasi argomento, dai fatti storici ai consigli di
                                                        viaggio, dal miglioramento della salute e del benessere alla gestione del tempo, dalla
                                                        programmazione informatica alla grammatica.
                                                        In sostanza, Gral è un assistente virtuale altamente avanzato in grado di soddisfare le
                                                        esigenze degli utenti in una vasta gamma di ambiti</p>
                                                </div>
                                            </div>

                                        </div>
                                        <div className='flex justify-center items-center text-center'>
                                            <div>
                                                <div className='flex justify-center'>
                                                    <img src={question} width={150} height={150} alt='question' />
                                                </div>
                                                <div>
                                                    <p className='text-[30px] py-4 font-bold'>Esempi di cosa chiedermi</p>
                                                        <div className='flex w-full gap-2'>
                                                            <div className='text-left text-sm'>
                                                                <div className='flex gap-2'><div className='bg-white h-2 w-2 flex items-start mt-[5px] rounded-full'></div><p>Scrivimi un testo sull'Antica Roma</p></div>
                                                                <div className='flex  gap-2'><div className='bg-white h-2 w-2 flex items-start mt-[5px] rounded-full'></div><p>Spiegami che cosa sono le cryptovalute</p></div>
                                                                <div className='flex  gap-2'><div className='bg-white h-2 w-2 flex items-start mt-[5px] rounded-full'></div><p>Dimmi 10 idee regalo creative per unabambina di 6 anni</p></div>
                                                                <div className='flex  gap-2'><div className='bg-white h-2 w-2 flex items-start mt-[5px] rounded-full'></div><p>Scrivi un riassunto sul Paradiso della Divina Commedia</p></div>
                                                            </div>

                                                            <div className='text-left text-sm'>
                                                                <div className='flex gap-2'><div className='bg-white h-2 w-2 flex items-start mt-[5px] rounded-full'></div><p>Consigliami dei libri sulla finanza personale</p></div>
                                                                <div className='flex gap-2'><div className='bg-white h-2 w-2 flex items-start mt-[5px] rounded-full'></div><p>Come si chiamava la prima moglie di Napoleone?</p></div>
                                                                <div className='flex gap-2'><div className='bg-white h-2 w-2 flex items-start mt-[5px] rounded-full'></div><p>Qual è il paese con più pelati al mondo?</p></div>
                                                                <div className='flex gap-2'><div className='bg-white h-2 w-2 flex items-start mt-[5px] rounded-full'></div><p>Che cos'è la teoria della relatività?</p></div>
                                                            </div>
                                                        </div>
                                                </div>
                                            </div>

                                        </div>
                                        <div className='flex justify-center items-center text-center'>
                                            <div>
                                                <div className='flex justify-center'>
                                                    <img src={warning} width={150} height={150} alt='warning' />
                                                </div>
                                                <div>
                                                    <p className='text-[30px] py-4 font-bold'>Le mie limitazioni</p>
                                                    <p>La principale limitazione di Gral è che il suo ragionamento è limitato alla conoscenza
                                                        che gli è stata fornita durante il processo di addestramento. Ciò significa che se gli
                                                        utenti gli fanno domande o richieste su argomenti per i quali non ha esperienza o
                                                        conoscenze sufficienti, Gral potrebbe non essere in grado di fornire risposte accurate.
                                                        Inoltre, Gral può avere difficoltà a comprendere il contesto o l'umorismo in alcune
                                                        situazioni, il che potrebbe portare a risposte inappropriate o fuori tema. Nonostante
                                                        queste limitazioni, Gral rappresenta comunque un notevole passo avanti nella
                                                        tecnologia dell'intelligenza artificiale e continua a migliorare e svilupparsi
                                                        costantemente</p>
                                                </div>
                                            </div>

                                        </div>
                                    </div>


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
            <Sitefooter currentPath={currentPath}/>
        </div>
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